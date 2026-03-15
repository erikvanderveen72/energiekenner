import type { Metadata } from "next";
import { Calculator } from "@/components/Calculator";
import { supabase } from "@/lib/supabase";
import { fallbackProviders } from "@/lib/fallback-data";
import type { EnergyProvider } from "@/lib/database.types";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Energiecalculator 2026 | Bereken je maandbedrag per leverancier",
  description:
    "Schuif met je verbruik en zie direct welke energieleverancier het goedkoopst is. Interactieve grafiek met actuele tarieven maart 2026.",
  keywords: [
    "energiecalculator",
    "energie berekenen",
    "maandbedrag energie",
    "goedkoopste leverancier",
    "energieverbruik berekenen",
  ],
};

async function getProviders(): Promise<EnergyProvider[]> {
  try {
    const { data, error } = await supabase
      .from("energy_providers")
      .select("*")
      .order("estimated_monthly", { ascending: true });
    if (error || !data) return fallbackProviders;
    return data;
  } catch {
    return fallbackProviders;
  }
}

export default async function CalculatorPage() {
  const providers = await getProviders();

  return (
    <>
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium mb-4">
            Interactief - actuele tarieven maart 2026
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">Energiecalculator</h1>
          <p className="mt-4 text-lg text-purple-100 max-w-2xl">
            Schuif met je stroom- en gasverbruik en zie direct welke leverancier het goedkoopst is voor jouw situatie.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Calculator providers={providers} />
      </section>
    </>
  );
}
