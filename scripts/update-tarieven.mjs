#!/usr/bin/env node

/**
 * ENERGIEKENNER.NL - Tarieven Update Script
 *
 * Gebruik:
 *   node scripts/update-tarieven.mjs
 *
 * Dit script:
 * 1. Toont de huidige tarieven in Supabase
 * 2. Laat je per leverancier tarieven aanpassen
 * 3. Slaat de wijzigingen op in Supabase
 *
 * Vereist environment variables:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */

import { createClient } from "@supabase/supabase-js";
import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

// Config
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("\n❌ Environment variables ontbreken!");
  console.error("   Stel in:");
  console.error("   export NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co");
  console.error("   export SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxx\n");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

async function main() {
  console.log("\n╔══════════════════════════════════════════╗");
  console.log("║   ENERGIEKENNER - Tarieven Updater       ║");
  console.log("╚══════════════════════════════════════════╝\n");

  // Haal huidige data op
  const { data: providers, error } = await supabase
    .from("energy_providers")
    .select("*")
    .order("estimated_monthly", { ascending: true });

  if (error) {
    console.error("❌ Fout bij ophalen:", error.message);
    process.exit(1);
  }

  console.log(`📊 ${providers.length} leveranciers gevonden:\n`);

  // Toon overzicht
  console.log("Nr  Leverancier          Stroom/kWh  Gas/m³    Bonus   Geschat/mnd  Bijgewerkt");
  console.log("─".repeat(95));
  providers.forEach((p, i) => {
    const updated = new Date(p.updated_at).toLocaleDateString("nl-NL");
    console.log(
      `${String(i + 1).padStart(2)}  ${p.name.padEnd(20)} € ${Number(p.kwh_rate).toFixed(4).padEnd(8)}  € ${Number(p.gas_rate).toFixed(4).padEnd(8)}  € ${String(p.welcome_bonus).padEnd(5)}  € ${Number(p.estimated_monthly).toFixed(2).padStart(7)}    ${updated}`
    );
  });

  console.log("\n─".repeat(95));
  console.log("\nOpties:");
  console.log("  [nummer]  - Bewerk leverancier (bijv: 1)");
  console.log("  [a]       - Alles bijwerken (alle leveranciers doorlopen)");
  console.log("  [q]       - Afsluiten\n");

  while (true) {
    const choice = await ask("Keuze: ");

    if (choice.toLowerCase() === "q") {
      console.log("\n👋 Tot ziens!\n");
      break;
    }

    if (choice.toLowerCase() === "a") {
      for (let i = 0; i < providers.length; i++) {
        await editProvider(providers[i], i);
      }
      continue;
    }

    const idx = parseInt(choice) - 1;
    if (idx >= 0 && idx < providers.length) {
      await editProvider(providers[idx], idx);
    } else {
      console.log("⚠️  Ongeldig nummer");
    }
  }

  rl.close();
}

async function editProvider(provider, idx) {
  console.log(`\n📝 Bewerken: ${provider.name}`);
  console.log(`   Huidig: stroom € ${provider.kwh_rate}/kWh | gas € ${provider.gas_rate}/m³ | bonus € ${provider.welcome_bonus} | mnd € ${provider.estimated_monthly}`);

  const updates = {};

  const kwh = await ask(`   Stroom/kWh [${provider.kwh_rate}]: `);
  if (kwh.trim()) updates.kwh_rate = parseFloat(kwh);

  const gas = await ask(`   Gas/m³ [${provider.gas_rate}]: `);
  if (gas.trim()) updates.gas_rate = parseFloat(gas);

  const bonus = await ask(`   Welkomstbonus [${provider.welcome_bonus}]: `);
  if (bonus.trim()) updates.welcome_bonus = parseInt(bonus);

  const bonus3 = await ask(`   Bonus 3jr [${provider.welcome_bonus_3yr}]: `);
  if (bonus3.trim()) updates.welcome_bonus_3yr = parseInt(bonus3);

  const monthly = await ask(`   Geschat/mnd [${provider.estimated_monthly}]: `);
  if (monthly.trim()) updates.estimated_monthly = parseFloat(monthly);

  if (Object.keys(updates).length === 0) {
    console.log("   ⏭️  Geen wijzigingen");
    return;
  }

  updates.updated_at = new Date().toISOString();

  const { error } = await supabase
    .from("energy_providers")
    .update(updates)
    .eq("id", provider.id);

  if (error) {
    console.log(`   ❌ Fout: ${error.message}`);
  } else {
    console.log(`   ✅ ${provider.name} bijgewerkt!`);
    // Update lokale data
    Object.assign(provider, updates);
  }
}

main().catch(console.error);
