import { supabase } from "@/lib/supabase";
import { fallbackProviders, fallbackTtfPrices } from "@/lib/fallback-data";
import { ComparisonTable } from "@/components/ComparisonTable";
import { TtfChart } from "@/components/TtfChart";
import { StatsBar } from "@/components/StatsBar";
import { FAQSchema } from "@/components/StructuredData";

// Herlaad data elke 60 seconden (ISR)
export const revalidate = 60;
import type { EnergyProvider, TtfPrice } from "@/lib/database.types";
import Link from "next/link";

const faqItems = [
  {
    question: "Hoe kan ik energie vergelijken in 2026?",
    answer: "Op Energiekenner.nl vergelijk je alle energieleveranciers in Nederland op actuele tarieven. Vul je jaarlijks verbruik in (gemiddeld 2.400 kWh stroom en 1.000 m³ gas) en je ziet direct welke leverancier het goedkoopst is. We tonen zowel vaste contracten als dynamische tarieven, inclusief welkomstbonussen.",
  },
  {
    question: "Wat kost energie gemiddeld in 2026?",
    answer: "In maart 2026 betaal je gemiddeld €0,25 tot €0,32 per kWh voor stroom en €1,30 tot €1,55 per m³ voor gas (inclusief belastingen). De energiebelasting op stroom is €0,1108/kWh en op gas €0,7268/m³. Een gemiddeld huishouden betaalt tussen €150 en €220 per maand.",
  },
  {
    question: "Is overstappen van energieleverancier gratis?",
    answer: "Ja, overstappen is altijd gratis. Sinds de Energiewet 2026 is de opzegtermijn verkort naar slechts 5 werkdagen. Bij variabele contracten betaal je nooit een opzegvergoeding. Bij vaste contracten kan er een opzegvergoeding gelden als je voortijdig stopt, maar overstappen zelf kost niets.",
  },
  {
    question: "Wat is het verschil tussen vast en dynamisch energie?",
    answer: "Bij een vast contract betaal je een vaste prijs per kWh en m³ voor de hele looptijd (meestal 1 of 3 jaar). Bij een dynamisch contract betaal je de echte marktprijs per uur (stroom) of per dag (gas). Dynamisch kan goedkoper zijn als je flexibel bent met verbruik, maar brengt meer risico met zich mee bij prijspieken.",
  },
  {
    question: "Welke energieleverancier is het goedkoopst in 2026?",
    answer: "De goedkoopste leverancier verschilt per situatie. Op basis van gemiddeld verbruik (2.400 kWh + 1.000 m³) zijn Eneco, Vandebron en Greenchoice vaak het voordeligst bij vaste contracten. Bij dynamische contracten scoren Frank Energie en Tibber goed door lage opslagen. Vergelijk altijd op je eigen verbruik.",
  },
  {
    question: "Waar moet ik op letten bij energie vergelijken?",
    answer: "Let op 5 dingen: (1) de totale jaarkosten, niet alleen de kWh-prijs, (2) het vastrecht (vaste leveringskosten per maand), (3) de contractduur en opzegvergoeding, (4) terugleverkosten als je zonnepanelen hebt, en (5) de welkomstbonus - die klinkt aantrekkelijk maar compenseert niet altijd een duurder tarief.",
  },
  {
    question: "Hoe lang duurt overstappen naar een andere leverancier?",
    answer: "Sinds de Energiewet 2026 duurt overstappen maximaal 5 werkdagen. Je nieuwe leverancier regelt alles, inclusief het opzeggen bij je oude leverancier. Je zit nooit zonder stroom of gas tijdens de overstap.",
  },
  {
    question: "Is energie vergelijken op Energiekenner.nl onafhankelijk?",
    answer: "Ja. Energiekenner.nl is een onafhankelijk vergelijkingsplatform. We ontvangen geen provisie van leveranciers en tonen alle tarieven transparant inclusief belastingen. Onze data wordt dagelijks bijgewerkt op basis van de actuele marktprijzen en leveranciersinformatie.",
  },
];

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
      value: `€ ${cheapest?.estimated_monthly?.toFixed(0).replace(".", ",") ?? "—"}/mnd`,
      subtext: `${cheapest?.name} (bij gem. verbruik)`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "Gemiddeld",
      value: `€ ${avgMonthly.toFixed(0).replace(".", ",")}/mnd`,
      subtext: "Bij 2.400 kWh + 1.000 m\u00B3",
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
      <section className="relative overflow-hidden bg-stone-900 text-white">
        {/* Abstracte gradient blobs - meer organisch dan typische AI */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-sky-600/30 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[400px] bg-emerald-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-amber-500/15 rounded-full blur-[80px]" />
        </div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          {/* Hero illustration - hidden on mobile */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-20">
            <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* House */}
              <rect x="100" y="160" width="140" height="120" rx="8" fill="white" fillOpacity="0.15" />
              <path d="M80 170L170 100L260 170" stroke="white" strokeWidth="3" strokeLinecap="round" />
              {/* Solar panels on roof */}
              <rect x="120" y="120" width="30" height="20" rx="2" fill="#38bdf8" fillOpacity="0.6" />
              <rect x="155" y="112" width="30" height="20" rx="2" fill="#38bdf8" fillOpacity="0.6" />
              <rect x="190" y="120" width="30" height="20" rx="2" fill="#38bdf8" fillOpacity="0.6" />
              {/* Window */}
              <rect x="130" y="200" width="35" height="35" rx="4" fill="#fbbf24" fillOpacity="0.3" />
              <rect x="180" y="200" width="35" height="35" rx="4" fill="#fbbf24" fillOpacity="0.3" />
              {/* Door */}
              <rect x="155" y="245" width="30" height="35" rx="4" fill="white" fillOpacity="0.1" />
              {/* Lightning bolt - energy */}
              <path d="M290 60L275 110H295L270 160" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              {/* Wind turbine */}
              <line x1="50" y1="280" x2="50" y2="140" stroke="white" strokeWidth="2" />
              <path d="M50 140L30 180M50 140L70 180M50 140L50 100" stroke="white" strokeWidth="2" strokeLinecap="round" />
              {/* Circular arrows - energy flow */}
              <circle cx="170" cy="170" r="130" stroke="white" strokeWidth="0.5" strokeDasharray="8 6" />
              <circle cx="170" cy="170" r="155" stroke="#34d399" strokeWidth="0.5" strokeDasharray="4 8" />
            </svg>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium mb-8 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Tarieven bijgewerkt - maart 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Energie vergelijken
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">& bespaar tot €450</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed">
              Vergelijk {providers.length} energieleveranciers op actuele tarieven van maart 2026.
              Stroom en gas, vast of dynamisch - onafhankelijk en gratis.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#vergelijk"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-stone-900 font-bold text-lg hover:bg-stone-100 transition-all shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5"
              >
                Vergelijk nu
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link
                href="/dynamisch"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-sm text-white font-semibold text-lg border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all"
              >
                Dynamische tarieven
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-stone-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Onafhankelijk
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Geen provisie
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Inclusief belastingen
              </div>
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
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-text-main">TTF Gasprijs Maart 2026</h2>
          <p className="text-text-muted mt-1">Dagelijkse notering in &euro;/MWh - Extreme volatiliteit door geopolitieke onrust</p>
        </div>
        <TtfChart prices={ttfPrices} />
        <div className="mt-4 rounded-xl bg-stone-50 border border-border p-5">
          <p className="text-sm text-text-muted leading-relaxed">
            De TTF-gasprijs (Title Transfer Facility) is de Europese referentieprijs voor aardgas.
            In maart 2026 schommelde de prijs tussen &euro;32 en &euro;68 per MWh door aanhoudende geopolitieke spanningen
            in het Midden-Oosten en onzekerheid over LNG-leveringen. Deze volatiliteit heeft directe gevolgen
            voor je energierekening: leveranciers met vaste contracten beschermen je tegen deze pieken,
            terwijl dynamische contracten de marktprijs per dag doorberekenen. Heb je een variabel contract?
            Dan worden tarieven doorgaans per kwartaal aangepast op basis van deze noteringen.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="vergelijk" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main">
            Energie vergelijken: alle leveranciers op een rij
          </h2>
          <p className="text-text-muted mt-2">
            Alle tarieven inclusief energiebelasting en btw. Pas hieronder je verbruik aan voor een persoonlijke schatting.
          </p>
        </div>
        <ComparisonTable providers={providers} />
      </section>

      {/* Info sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link
            href="/dynamisch"
            className="group relative rounded-2xl border border-border bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100/50 rounded-full -translate-x-4 -translate-y-8 group-hover:bg-purple-200/50 transition-colors" />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main group-hover:text-purple-700 transition-colors">
                Dynamische tarieven
              </h3>
              <p className="text-sm text-text-muted mt-1.5 leading-relaxed">
                Frank Energie, Tibber, Zonneplan - betaal de echte uurprijs.
              </p>
            </div>
          </Link>

          <Link
            href="/zonnepanelen"
            className="group relative rounded-2xl border border-border bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/50 rounded-full -translate-x-4 -translate-y-8 group-hover:bg-amber-200/50 transition-colors" />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main group-hover:text-amber-700 transition-colors">
                Zonnepanelen
              </h3>
              <p className="text-sm text-text-muted mt-1.5 leading-relaxed">
                Terugleverkosten vergeleken. Saldering stopt in 2027.
              </p>
            </div>
          </Link>

          <Link
            href="/warmtepompen"
            className="group relative rounded-2xl border border-border bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-100/50 rounded-full -translate-x-4 -translate-y-8 group-hover:bg-rose-200/50 transition-colors" />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-rose-100 flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors">
                <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main group-hover:text-rose-700 transition-colors">
                Warmtepompen
              </h3>
              <p className="text-sm text-text-muted mt-1.5 leading-relaxed">
                Types, ISDE-subsidie, kosten en terugverdientijd.
              </p>
            </div>
          </Link>

          <Link
            href="/netbeheer"
            className="group relative rounded-2xl border border-border bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100/50 rounded-full -translate-x-4 -translate-y-8 group-hover:bg-emerald-200/50 transition-colors" />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main group-hover:text-emerald-700 transition-colors">
                Netbeheerkosten
              </h3>
              <p className="text-sm text-text-muted mt-1.5 leading-relaxed">
                ~€750/jaar. Vergelijk Liander, Enexis, Stedin.
              </p>
            </div>
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

      {/* SEO content: Energie vergelijken uitleg */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6">
            Energie vergelijken: zo vind je het beste contract
          </h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              <strong className="text-text-main">Energie vergelijken</strong> is in 2026 belangrijker dan ooit.
              Door de hoge volatiliteit op de gasmarkt en de nieuwe Energiewet zijn de verschillen tussen leveranciers groter geworden.
              Een gemiddeld huishouden kan tot <strong className="text-text-main">€450 per jaar besparen</strong> door bewust te kiezen.
            </p>
            <p>
              Op Energiekenner.nl vergelijk je alle grote energieleveranciers in Nederland: van Eneco en Vattenfall tot Greenchoice, Vandebron, Frank Energie en Tibber.
              We tonen actuele tarieven inclusief energiebelasting, btw en netbeheerkosten - zodat je de echte maandkosten ziet.
            </p>

            <h3 className="text-lg font-semibold text-text-main mt-8">Vast of dynamisch contract?</h3>
            <p>
              Bij het energie vergelijken maak je eerst de keuze tussen een <Link href="/dynamisch" className="text-primary underline hover:text-primary-dark">dynamisch contract</Link> en een vast contract.
              Met een vast contract leg je de prijs voor 1 of 3 jaar vast - ideaal als je zekerheid wilt.
              Met dynamisch betaal je de uurprijs op de EPEX-beurs, wat voordeliger kan zijn als je flexibel bent met verbruik (bijvoorbeeld met een <Link href="/thuisbatterij" className="text-primary underline hover:text-primary-dark">thuisbatterij</Link> of <Link href="/warmtepompen" className="text-primary underline hover:text-primary-dark">warmtepomp</Link>).
            </p>

            <h3 className="text-lg font-semibold text-text-main mt-8">Zonnepanelen? Let op terugleverkosten</h3>
            <p>
              Heb je zonnepanelen? Dan is energie vergelijken net iets anders. Naast de leveringsprijs zijn <Link href="/zonnepanelen" className="text-primary underline hover:text-primary-dark">terugleverkosten</Link> doorslaggevend.
              Sommige leveranciers rekenen tot €0,11/kWh voor teruglevering. Dit kan honderden euro&apos;s per jaar schelen.
              De <Link href="/energiewet" className="text-primary underline hover:text-primary-dark">Energiewet 2026</Link> verplicht leveranciers om terugleverkosten transparant per kWh te tonen.
            </p>

            <h3 className="text-lg font-semibold text-text-main mt-8">5 stappen om energie te vergelijken</h3>
            <p>
              1. Zoek je jaarverbruik op (staat op je jaarafrekening of in je leveranciersapp).
              2. Vul je verbruik in op onze vergelijker hierboven.
              3. Kies vast of dynamisch op basis van je situatie.
              4. Let op het totaalplaatje: welkomstbonus + jaarkosten + terugleverkosten.
              5. Stap over - dit duurt sinds 2026 nog maar 5 werkdagen.
            </p>
          </div>
        </div>
      </section>

      {/* Kennisbank links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-6">Verder lezen op Energiekenner.nl</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/energiewet" className="group rounded-xl border border-border p-5 hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-text-main group-hover:text-indigo-600 transition-colors">Energiewet 2026</h3>
            <p className="text-xs text-text-muted mt-1">Je nieuwe rechten als consument, flitsoverstap en modelcontracten.</p>
          </Link>
          <Link href="/slimme-technologie" className="group rounded-xl border border-border p-5 hover:border-cyan-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-text-main group-hover:text-cyan-600 transition-colors">Slim Energie Sturen</h3>
            <p className="text-xs text-text-muted mt-1">P1-meter, HEMS, Home Assistant en dynamische tarieven optimaliseren.</p>
          </Link>
          <Link href="/duurzaamheid" className="group rounded-xl border border-border p-5 hover:border-green-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-text-main group-hover:text-green-600 transition-colors">Groene Stroom</h3>
            <p className="text-xs text-text-muted mt-1">GvO-check, sjoemelstroom en EU anti-greenwashing regels.</p>
          </Link>
          <Link href="/tips" className="group rounded-xl border border-border p-5 hover:border-amber-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-text-main group-hover:text-amber-600 transition-colors">Bespaartips</h3>
            <p className="text-xs text-text-muted mt-1">Quick wins, subsidies en concrete besparingen met bedragen.</p>
          </Link>
          <Link href="/energievergelijkers" className="group rounded-xl border border-border p-5 hover:border-emerald-300 hover:shadow-md transition-all sm:col-span-2 lg:col-span-4">
            <h3 className="font-semibold text-text-main group-hover:text-emerald-600 transition-colors">Hoe werken energievergelijkers?</h3>
            <p className="text-xs text-text-muted mt-1">Commissies, contractvormen, terugleverkosten en ACM-toezicht: een eerlijke uitleg over de markt van energievergelijkers.</p>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-8">
        <FAQSchema items={faqItems} />
        <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-8">
          Veelgestelde vragen over energie vergelijken
        </h2>
        <div className="space-y-4 max-w-4xl">
          {faqItems.map((item) => (
            <details key={item.question} className="group rounded-xl border border-border overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-surface-alt transition-colors">
                <h3 className="font-semibold text-text-main text-sm md:text-base pr-4">{item.question}</h3>
                <svg className="w-5 h-5 text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-sm text-text-muted leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
