import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_PASSWORD,
  SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL,
} from "@/lib/server-config";

// Anon key voor lezen (werkt altijd via RLS public read policies)
const ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_M_AC9_j3IYl5YGT88zHgPw_lu3U5yAC";

function getReadClient() {
  return createClient(SUPABASE_URL, ANON_KEY);
}

function getWriteClient() {
  if (!SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      "Service role key niet geconfigureerd. Voeg NEXT_PUBLIC_SRK toe in Vercel Environment Variables."
    );
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

function checkAuth(request: NextRequest): boolean {
  const auth = request.headers.get("x-admin-password");
  return auth === ADMIN_PASSWORD;
}

const validTables = [
  "energy_providers",
  "dynamic_providers",
  "grid_operators",
  "energy_tax",
  "ttf_prices",
];

// GET: Haal alle providers op (gebruikt anon key - altijd beschikbaar)
export async function GET(request: NextRequest) {
  // Auth-only check: verifieert wachtwoord zonder data op te halen
  if (request.nextUrl.searchParams.get("check") === "auth") {
    if (!checkAuth(request)) {
      return NextResponse.json({ error: "Ongeautoriseerd" }, { status: 401 });
    }
    return NextResponse.json({ ok: true });
  }

  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Ongeautoriseerd" }, { status: 401 });
  }

  try {
    const supabase = getReadClient();
    const table =
      request.nextUrl.searchParams.get("table") || "energy_providers";

    if (!validTables.includes(table)) {
      return NextResponse.json({ error: "Ongeldige tabel" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from(table)
      .select("*")
      .order(
        table === "energy_providers" ? "estimated_monthly" : "name",
        { ascending: true }
      );

    if (error) throw error;
    return NextResponse.json({ data });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Onbekende fout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// PUT: Update een provider (vereist service role key)
export async function PUT(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Ongeautoriseerd" }, { status: 401 });
  }

  try {
    const supabase = getWriteClient();
    const body = await request.json();
    const { table, id, updates } = body;

    if (!validTables.includes(table)) {
      return NextResponse.json({ error: "Ongeldige tabel" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from(table)
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select();

    if (error) throw error;
    return NextResponse.json({ data });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Onbekende fout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// POST: Voeg een nieuwe provider toe (vereist service role key)
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Ongeautoriseerd" }, { status: 401 });
  }

  try {
    const supabase = getWriteClient();
    const body = await request.json();
    const { table, record } = body;

    if (!validTables.includes(table)) {
      return NextResponse.json({ error: "Ongeldige tabel" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from(table)
      .insert(record)
      .select();

    if (error) throw error;
    return NextResponse.json({ data });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Onbekende fout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE: Verwijder een provider (vereist service role key)
export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Ongeautoriseerd" }, { status: 401 });
  }

  try {
    const supabase = getWriteClient();
    const body = await request.json();
    const { table, id } = body;

    if (!validTables.includes(table)) {
      return NextResponse.json({ error: "Ongeldige tabel" }, { status: 400 });
    }

    const { error } = await supabase.from(table).delete().eq("id", id);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Onbekende fout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
