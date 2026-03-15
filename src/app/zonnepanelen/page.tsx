import { supabase } from "@/lib/supabase";
import { fallbackProviders } from "@/lib/fallback-data";
import type { EnergyProvider } from "@/lib/database.types";

export const revalidate = 60;

async function getProviders(): Promise<EnergyProvider[]> {
  try {
    const { data, error } = await supabase
      .from("energy_providers")
      .select("*")
      .order("feed_in_cost_kwh", { ascending: true });
    if (error || !data) return fallbackProviders;
    return data;
  } catch {
    return fallbackProviders;
  }
}

export const metadata = {
  title: "Zonnepanelen: Terugleverkosten & Vergoedingen 2026 | Energievergelijker",
  description: "Vergelijk terugleverkosten en -vergoedingen per leverancier. Salderingsregeling stopt in 2027.",
};

export default async function ZonnepanelenPage() {
  const providers = await getProviders();
  const withFeedInCost = providers.filter((p) => p.feed_in_cost_kwh !== null);
  const withFeedInComp = providers.filter((p) => p.feed_in_compensation !== null);

  return (
    <>
      <section className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Laatste jaar volledige saldering
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold">Zonnepanelen & teruglevering</h1>
          <p className="mt-4 text-lg text-yellow-100 max-w-2xl">
            2026 is het laatste jaar waarin de salderingsregeling volledig van kracht is. Vanaf 2027 wordt deze definitief afgeschaft.
          </p>
        </div>
      </section>

      {/* Terugleverkosten */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold text-text-main mb-2">Terugleverkosten per leverancier</h2>
        <p className="text-text-muted mb-6">Kosten die in rekening worden gebracht over teruggeleverde stroom (bij 2.400 kWh/jaar)</p>

        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Leverancier</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Per kWh</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Jaarlijks (2.400 kWh)</th>
              </tr>
            </thead>
            <tbody>
              {withFeedInCost
                .sort((a, b) => (a.feed_in_cost_kwh ?? 0) - (b.feed_in_cost_kwh ?? 0))
                .map((p) => (
                  <tr key={p.id} className="border-t border-border hover:bg-yellow-50 transition-colors">
                    <td className="px-4 py-4 font-semibold">{p.name}</td>
                    <td className="text-right px-4 py-4 font-mono">€ {p.feed_in_cost_kwh?.toFixed(3)}</td>
                    <td className="text-right px-4 py-4 font-mono font-semibold">
                      € {((p.feed_in_cost_kwh ?? 0) * 2400).toFixed(2)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Terugleververgoeding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-2">Terugleververgoeding per leverancier</h2>
        <p className="text-text-muted mb-6">Vergoeding die je ontvangt voor overtollig teruggeleverde stroom</p>

        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Leverancier</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Vergoeding per kWh</th>
              </tr>
            </thead>
            <tbody>
              {withFeedInComp
                .sort((a, b) => (b.feed_in_compensation ?? 0) - (a.feed_in_compensation ?? 0))
                .map((p) => (
                  <tr key={p.id} className="border-t border-border hover:bg-yellow-50 transition-colors">
                    <td className="px-4 py-4 font-semibold">{p.name}</td>
                    <td className="text-right px-4 py-4">
                      <span className={`font-mono font-semibold ${(p.feed_in_compensation ?? 0) > 0.10 ? "text-green-600" : "text-red-500"}`}>
                        € {p.feed_in_compensation?.toFixed(3)}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Salderingsregeling info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-8">
          <h2 className="text-xl font-bold text-text-main mb-4">Einde salderingsregeling in 2027</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-yellow-900">
            <div>
              <h3 className="font-semibold mb-2">Wat verandert er?</h3>
              <p>Vanaf 2027 mag opgewekte stroom niet meer 1-op-1 worden verrekend met verbruik op jaarbasis. De focus verschuift naar maximaal direct eigen verbruik.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Wat kun je doen?</h3>
              <p>Overweeg een thuisbatterij, verschuif groot verbruik (wasmachine, vaatwasser) naar zonnige uren, en vergelijk terugleververgoedingen voor het beste rendement.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
