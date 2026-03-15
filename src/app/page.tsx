import { supabase } from "@/lib/supabase";
import { fallbackProviders, fallbackTtfPrices } from "@/lib/fallback-data";
import { ComparisonTable } from "@/components/ComparisonTable";
import { TtfChart } from "@/components/TtfChart";
import { StatsBar } from "@/components/StatsBar";

// Herlaad data elke 60 seconden (ISR)
export const revalidate = 60;
import type { EnergyProvider, TtfPrice } from "@/lib/database.types";
import Link from "next/link";

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

async function getTtfPrices(): Promise<TtfPrice[]> {
  try {
    const { data, error } = await supabase
      .from("ttf_prices")
      .select("*")
      .order("date", { ascending: true });
    if (error || !data) return fallbackTtfPrices;
    return data;
  } catch {
    return fallbackTtfPrices;
  }
}

export default async function Home() {
  const [providers, ttfPrices] = await Promise.all([
    getProviders(),
    getTtfPrices(),
  ]);

  const cheapest = providers[0];
  const avgMonthly =
    providers.reduce((sum, p) => sum + (p.estimated_monthly ?? 0), 0) /
    providers.length;
  const maxBonus = Math.max(...providers.map((p) => p.welcome_bonus));

  const stats = [
    {
      label: "Goedkoopst vanaf",
      value: `€ ${cheapest?.estimated_monthly?.toFixed(0) ?? "—"}/mnd`,
      subtext: cheapest?.name,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "Gemiddeld",
      value: `€ ${avgMonthly.toFixed(0)}/mnd`,
      subtext: "Alle leveranciers",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      label: "Hoogste bonus",
      value: `€ ${maxBonus}`,
      subtext: "Bij 1-jarig contract",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
    },
    {
      label: "Leveranciers",
      value: `${providers.length}`,
      subtext: "Vergeleken in maart 2026",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Tarieven bijgewerkt — maart 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Bespaar tot{" "}
              <span className="text-cyan-300">€450,-</span>
              <br />
              op je jaarrekening
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Vergelijk {providers.length} energieleveranciers op actuele tarieven.
              Vaste contracten, dynamische tarieven en groene stroom — allemaal in één overzicht.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#vergelijk"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
              >
                Vergelijk nu
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link
                href="/dynamisch"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Dynamische tarieven
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <StatsBar stats={stats} />
      </section>

      {/* Market alert */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-xl bg-red-50 border border-red-200 p-5 flex gap-4">
          <div className="flex-shrink-0 mt-0.5">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-red-800">Marktupdate: Hoge volatiliteit</h3>
            <p className="text-sm text-red-700 mt-1">
              Door het conflict in het Midden-Oosten schommelde de TTF-gasprijs in maart tussen €32 en €68 per MWh.
              Vaste contracten bieden nu extra zekerheid tegenover deze marktschommelingen.
            </p>
          </div>
        </div>
      </section>

      {/* TTF Chart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <TtfChart prices={ttfPrices} />
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main">
            Vergelijk vaste contracten
          </h2>
          <p className="text-text-muted mt-2">
            Alle tarieven inclusief belastingen. Pas hieronder je verbruik aan voor een persoonlijke schatting.
          </p>
        </div>
        <ComparisonTable providers={providers} />
      </section>

      {/* Info sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/dynamisch"
            className="group rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-text-main group-hover:text-primary transition-colors">
              Dynamische tarieven
            </h3>
            <p className="text-sm text-text-muted mt-2">
              Vergelijk Frank Energie, Tibber, Zonneplan en meer. Betaal de echte marktprijs per uur.
            </p>
          </Link>

          <Link
            href="/zonnepanelen"
            className="group rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
              <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-text-main group-hover:text-primary transition-colors">
              Zonnepanelen
            </h3>
            <p className="text-sm text-text-muted mt-2">
              Terugleverkosten en -vergoedingen per leverancier. Salderingsregeling eindigt in 2027.
            </p>
          </Link>

          <Link
            href="/netbeheer"
            className="group rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-text-main group-hover:text-primary transition-colors">
              Netbeheerkosten
            </h3>
            <p className="text-sm text-text-muted mt-2">
              Gemiddeld €750/jaar. Vergelijk Liander, Enexis, Stedin en andere netbeheerders.
            </p>
          </Link>
        </div>
      </section>

      {/* Tax info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-xl bg-surface p-8 border border-border">
          <h2 className="text-xl font-bold text-text-main mb-4">
            Energiebelasting 2026
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-text-muted">Aardgas per m³</p>
              <p className="text-2xl font-bold text-text-main mt-1">€ 0,7268</p>
              <p className="text-xs text-red-500 mt-1">+€ 0,0272 t.o.v. 2025</p>
            </div>
            <div>
              <p className="text-sm text-text-muted">Elektriciteit per kWh</p>
              <p className="text-2xl font-bold text-text-main mt-1">€ 0,1108</p>
              <p className="text-xs text-green-600 mt-1">-€ 0,0120 t.o.v. 2025</p>
            </div>
            <div>
              <p className="text-sm text-text-muted">Vermindering energiebelasting</p>
              <p className="text-2xl font-bold text-text-main mt-1">€ 628,96</p>
              <p className="text-xs text-red-500 mt-1">-€ 6,23 t.o.v. 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
