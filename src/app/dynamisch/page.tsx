import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { fallbackDynamicProviders } from "@/lib/fallback-data";
import type { DynamicProvider } from "@/lib/database.types";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema } from "@/components/StructuredData";

const faqItems = [
  {
    question: "Wat is een dynamisch energiecontract?",
    answer: "Bij een dynamisch energiecontract betaal je de echte groothandelsprijs per uur (stroom via EPEX) of per dag (gas via TTF). De leverancier rekent daar een kleine opslag bovenop. Je prijs verandert dus continu, in tegenstelling tot een vast contract.",
  },
  {
    question: "Is dynamische energie goedkoper dan een vast contract in 2026?",
    answer: "Dat hangt af van je verbruikspatroon. In 2025 was dynamisch gemiddeld 10-15% goedkoper. Maar bij prijspieken (zoals in maart 2026 toen gas naar €68/MWh steeg) kan het tijdelijk duurder zijn. Flexibele verbruikers met zonnepanelen, thuisbatterij of EV-lader profiteren het meest.",
  },
  {
    question: "Welke dynamische energieleverancier is het goedkoopst?",
    answer: "Frank Energie en Tibber hebben momenteel de laagste opslagen per kWh. Zonneplan biedt extra voordeel als je zonnepanelen hebt. Vergelijk altijd de vaste kosten plus de opslagen — het goedkoopst hangt af van je verbruik en of je stroom en gas afneemt.",
  },
  {
    question: "Heb ik een slimme meter nodig voor dynamische energie?",
    answer: "Ja, een slimme meter is verplicht voor een dynamisch contract. De meter registreert je verbruik per uur, zodat de leverancier de juiste marktprijs kan doorberekenen. In Nederland heeft meer dan 85% van de huishoudens al een slimme meter.",
  },
  {
    question: "Kan ik zelf kiezen wanneer ik stroom gebruik bij dynamisch?",
    answer: "Ja, dat is het grote voordeel. Met een energie-app (Tibber, Frank Energie, Zonneplan) zie je de prijzen per uur vooruit. Je kunt je wasmachine, vaatwasser, EV-lader of thuisbatterij inplannen op de goedkoopste uren — vaak 's nachts of op zonnige middagen.",
  },
  {
    question: "Wat is de opzegvergoeding bij een dynamisch contract?",
    answer: "Dynamische contracten hebben geen vaste looptijd en geen opzegvergoeding. Je kunt op elk moment overstappen zonder kosten. Sinds de Energiewet 2026 is de opzegtermijn bovendien slechts 5 werkdagen.",
  },
];

export const revalidate = 60;

async function getDynamicProviders(): Promise<DynamicProvider[]> {
  try {
    const { data, error } = await supabase
      .from("dynamic_providers")
      .select("*")
      .order("fixed_cost_electricity", { ascending: true });
    if (error || !data) return fallbackDynamicProviders;
    return data;
  } catch {
    return fallbackDynamicProviders;
  }
}

export const metadata: Metadata = {
  title: "Dynamische Energietarieven Vergelijken 2026 | Frank Energie, Tibber, Zonneplan",
  description: "Vergelijk alle dynamische energieleveranciers in Nederland op opslagen en vaste kosten. Frank Energie, Tibber, Zonneplan, ANWB Energie en meer. Actuele tarieven maart 2026.",
  alternates: {
    canonical: "https://energiekenner.nl/dynamisch",
  },
  openGraph: {
    title: "Dynamische Energietarieven Vergelijken 2026",
    description: "Betaal de echte marktprijs per uur. Vergelijk opslagen van Frank Energie, Tibber, Zonneplan en meer.",
    url: "https://energiekenner.nl/dynamisch",
  },
};

export default async function DynamischPage() {
  const providers = await getDynamicProviders();

  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Dynamische tarieven", href: "/dynamisch" },
      ]} />

      {/* Hero */}
      <PageHero
        badge="Real-time marktprijzen"
        title="Dynamische energietarieven"
        highlight="Betaal de echte marktprijs"
        description="Betaal de echte marktprijs per uur voor stroom en per dag voor gas. Ideaal als je flexibel bent met verbruik."
        accentColor="purple"
      />

      {/* Warning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 flex gap-4">
          <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <h3 className="font-semibold text-amber-800">Let op: marktrisico</h3>
            <p className="text-sm text-amber-700 mt-1">
              Op 9 maart 2026 steeg de gasprijs naar €1,50/m³ voor dynamische klanten - hoger dan veel vaste contracten. Dynamisch is niet altijd goedkoper.
            </p>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {providers.map((p) => (
            <div key={p.id} className="rounded-xl border border-border bg-white p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600 border border-purple-200">
                  {p.name.substring(0, 2).toUpperCase()}
                </div>
                <span className="font-semibold text-text-main">{p.name}</span>
                {p.green_energy && (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-text-muted">Vast stroom/mnd</p>
                  <p className="text-sm font-mono font-medium">€ {p.fixed_cost_electricity.toFixed(2).replace(".", ",")}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">Vast gas/mnd</p>
                  <p className="text-sm font-mono font-medium">€ {p.fixed_cost_gas.toFixed(2).replace(".", ",")}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">Opslag stroom/kWh</p>
                  <p className="text-sm font-mono font-medium">€ {p.purchase_fee_electricity.toFixed(4).replace(".", ",")}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">Opslag gas/m³</p>
                  <p className="text-sm font-mono font-medium">€ {p.purchase_fee_gas.toFixed(4).replace(".", ",")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Aanbieder</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Vaste kosten stroom/mnd</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Vaste kosten gas/mnd</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Opslag stroom/kWh</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Opslag gas/m³</th>
                <th className="text-center px-4 py-3 font-semibold text-text-muted">Groen</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((p, idx) => (
                <tr key={p.id} className={`border-t border-border hover:bg-primary-light/30 transition-colors ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600 border border-purple-200">
                        {p.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-semibold text-text-main">{p.name}</span>
                    </div>
                  </td>
                  <td className="text-right px-4 py-4 font-mono">€ {p.fixed_cost_electricity.toFixed(2).replace(".", ",")}</td>
                  <td className="text-right px-4 py-4 font-mono">€ {p.fixed_cost_gas.toFixed(2).replace(".", ",")}</td>
                  <td className="text-right px-4 py-4 font-mono">€ {p.purchase_fee_electricity.toFixed(4).replace(".", ",")}</td>
                  <td className="text-right px-4 py-4 font-mono">€ {p.purchase_fee_gas.toFixed(4).replace(".", ",")}</td>
                  <td className="text-center px-4 py-4">
                    {p.green_energy ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100">
                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-sm text-text-muted">
          <p>* De werkelijke energieprijs varieert per uur (stroom) en per dag (gas) op basis van de marktprijs.</p>
          <p className="mt-1">* Bovenstaande opslagen komen bovenop de marktprijs.</p>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-6">Hoe werkt dynamische energie?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Marktprijs", desc: "Je betaalt de echte groothandelsprijs op de EPEX/TTF-markt, die elk uur (stroom) of elke dag (gas) verandert." },
            { step: "2", title: "Opslag", desc: "De leverancier rekent een kleine inkoopvergoeding per kWh/m³ bovenop de marktprijs." },
            { step: "3", title: "Slim verbruiken", desc: "Met een slimme meter, thuisbatterij of laadpaal kun je je verbruik verschuiven naar goedkope uren." },
          ].map((item) => (
            <div key={item.step} className="rounded-xl border border-border p-6">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-text-main">{item.title}</h3>
              <p className="text-sm text-text-muted mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <FAQSchema items={faqItems} />
        <h2 className="text-2xl font-bold text-text-main mb-8">Veelgestelde vragen over dynamische energie</h2>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <details key={i} className="group rounded-xl border border-border bg-white overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-text-main hover:bg-surface-alt transition-colors">
                {item.question}
                <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Klaar om dynamisch te vergelijken?
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Vergelijk alle dynamische leveranciers op opslagen en vaste kosten. Vind de beste match voor jouw verbruikspatroon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#vergelijk"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Vergelijk alle leveranciers
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Bereken je besparing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
