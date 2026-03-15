import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_PASSWORD,
  SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL,
} from "@/lib/server-config";

// Admin API - gebruikt de service_role key voor schrijftoegang
// BELANGRIJK: service_role key NOOIT in de browser exposen

function getServiceClient() {
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

function checkAuth(request: NextRequest): boolean {
  const auth = request.headers.get("x-admin-password");
  return auth === ADMIN_PASSWORD;
}

// GET: Haal alle providers op
export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Ongeautoriseerd" }, { status: 401 });
  }

  try {
    const supabase = getServiceClient();
    const table = request.nextUrl.searchParams.get("table") || "energy_providers";

    const validTables = ["energy_providers", "dynamic_providers", "grid_operators", "energy_tax", "ttf_prices"];
    if (!validTables.includes(table)) {
      return NextResponse.json({ error: "Ongeldige tabel" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from(table)
      .select("*")
      .order(table === "energy_providers" ? "estimated_monthly" : "name", { ascending: true });

    if (error) throw error;
    return NextResponse.json({ data });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Onbekende fout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// PUT: Update een provider
export async function PUT(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Ongeautoriseerd" }, { status: 401 });
  }

  try {
    const supabase = getServiceClient();
    const body = await request.json();
    const { table, id, updates } = body;

    const validTables = ["energy_providers", "dynamic_providers", "grid_operators", "energy_tax", "ttf_prices"];
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

// POST: Voeg een nieuwe provider toe
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Ongeautoriseerd" }, { status: 401 });
  }

  try {
    const supabase = getServiceClient();
    const body = await request.json();
    const { table, record } = body;

    const validTables = ["energy_providers", "dynamic_providers", "grid_operators", "energy_tax", "ttf_prices"];
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

// DELETE: Verwijder een provider
export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Ongeautoriseerd" }, { status: 401 });
  }

  try {
    const supabase = getServiceClient();
    const body = await request.json();
    const { table, id } = body;

    const validTables = ["energy_providers", "dynamic_providers", "grid_operators", "energy_tax", "ttf_prices"];
    if (!validTables.includes(table)) {
      return NextResponse.json({ error: "Ongeldige tabel" }, { status: 400 });
    }

    const { error } = await supabase
      .from(table)
      .delete()
      .eq("id", id);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Onbekende fout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
