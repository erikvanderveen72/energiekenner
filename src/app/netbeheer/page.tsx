import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { fallbackGridOperators } from "@/lib/fallback-data";
import type { GridOperator } from "@/lib/database.types";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema } from "@/components/StructuredData";

export const revalidate = 60;

async function getGridOperators(): Promise<GridOperator[]> {
  try {
    const { data, error } = await supabase
      .from("grid_operators")
      .select("*")
      .order("total_yearly", { ascending: true });
    if (error || !data) return fallbackGridOperators;
    return data;
  } catch {
    return fallbackGridOperators;
  }
}

export const metadata: Metadata = {
  title: "Netbeheerkosten 2026: Componenten & Berekening | Energiekenner.nl",
  description: "Vergelijk netbeheerkosten per regio in 2026: Liander, Stedin, Enexis en meer. Bekijk tarieven, componenten en waarom je netbeheerder niet zelf kiest. Overzicht per netbeheerder.",
  alternates: {
    canonical: "https://energiekenner.nl/netbeheer",
  },
};

export default async function NetbeheerPage() {
  const operators = await getGridOperators();
  const avg = operators.reduce((sum, o) => sum + o.total_yearly, 0) / operators.length;

  const faqItems = [
    {
      question: "Wat zijn netbeheerkosten?",
      answer: "Netbeheerkosten zijn de transporttarieven die je betaalt voor het gebruik van het elektriciteits- en gasnetwerk. Dit zijn vaste bedragen per jaar die je energieleverancier doorberekent. In 2026 betaal je gemiddeld €150–250 per jaar, afhankelijk van jouw netbeheerder en verbruik."
    },
    {
      question: "Kan je zelf je netbeheerder kiezen?",
      answer: "Nee, je netbeheerder wordt bepaald door je adres. Er zijn acht netbeheerders in Nederland: Liander, Stedin, Enexis, TenneT, Westland Infra, Rendo, Brakel en Delta. Je hebt geen keuze, maar je leverancier (bijvoorbeeld Essent of energiedirect.nl) factureren de kosten door."
    },
    {
      question: "Waarom zijn netbeheerkosten in 2026 gestegen?",
      answer: "Het elektriciteitsnet moet overal in Nederland worden verzwaard vanwege zonnepanelen, warmtepompen en elektrische auto's. De netbeheerders investeren miljarden euro's in de netinfrastructuur. Deze kosten zijn goed nieuws op lange termijn, maar werden voor 2026 doorgerekend: een stijging van 15–25% voor veel huishoudens."
    },
    {
      question: "Wat is het verschil tussen de netbeheerders?",
      answer: "De netbeheerders hebben verschillende tariefstructuren. Liander (Noord, Midden) is meestal goedkoper dan Stedin (Rotterdam, Amsterdam) of Enexis (Brabant, Limburg). TenneT beheert het hoogspanningsnet landelijk. Binnen jouw regio zijn de kosten hetzelfde voor iedereen met dezelfde aansluiting."
    },
    {
      question: "Zijn netbeheerkosten al inbegrepen in de energieprijs?",
      answer: "Ja, je leverancier voegt de netbeheertarieven toe aan je totale energiefactuur. Je ziet ze apart op je factuur als 'transporttarieven' of 'netbeheerkosten'. Deze kosten kunnen niet bespaard worden, maar je kunt wel besparen op de leveranciersprijs door leveranciers te vergelijken (tot €400 per jaar verschil)."
    }
  ];

  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Netbeheerkosten", href: "/netbeheer" },
      ]} />
      <PageHero badge="Tarieven 2026" title="Netbeheerkosten 2026" highlight="Transporttarieven vergeleken" description={`De kosten voor het transport van energie zijn in 2026 fors gestegen door miljardeninvesteringen in netverzwaring. Gemiddeld betaal je €${avg.toFixed(0).replace(".", ",")} per jaar.`} accentColor="cyan" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {operators.map((op, idx) => (
            <div key={op.id} className={`rounded-xl border p-4 ${idx === 0 ? "border-green-300 bg-green-50/50" : "border-border bg-white"}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-xs font-bold text-green-600 border border-green-200">
                  {op.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-text-main">{op.name}</span>
                  {idx === 0 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">
                      Goedkoopst
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-2xl font-bold text-text-main">€ {op.total_yearly.toFixed(0).replace(".", ",")}</span>
                <span className="text-sm text-text-muted">/jaar</span>
                <span className="text-sm text-text-muted ml-2">(€ {(op.total_yearly / 12).toFixed(0).replace(".", ",")}/mnd)</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-text-muted">Elektriciteit/jaar</p>
                  <p className="text-sm font-mono font-medium">€ {op.electricity_cost_yearly.toFixed(2).replace(".", ",")}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">Gas/jaar</p>
                  <p className="text-sm font-mono font-medium">€ {op.gas_cost_yearly.toFixed(2).replace(".", ",")}</p>
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
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Netbeheerder</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Elektriciteit/jaar</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Gas/jaar</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Totaal/jaar</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Per maand</th>
              </tr>
            </thead>
            <tbody>
              {operators.map((op, idx) => (
                <tr key={op.id} className={`border-t border-border hover:bg-green-50 transition-colors ${idx === 0 ? "bg-green-50/50" : ""} ${idx % 2 === 1 && idx !== 0 ? "bg-stone-50/60" : ""}`}>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-xs font-bold text-green-600 border border-green-200">
                        {op.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <span className="font-semibold text-text-main">{op.name}</span>
                        {idx === 0 && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">
                            Goedkoopst
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="text-right px-4 py-4 font-mono">€ {op.electricity_cost_yearly.toFixed(2).replace(".", ",")}</td>
                  <td className="text-right px-4 py-4 font-mono">€ {op.gas_cost_yearly.toFixed(2).replace(".", ",")}</td>
                  <td className="text-right px-4 py-4 font-mono font-semibold text-text-main">€ {op.total_yearly.toFixed(2).replace(".", ",")}</td>
                  <td className="text-right px-4 py-4 font-mono text-text-muted">€ {(op.total_yearly / 12).toFixed(2).replace(".", ",")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-text-muted mt-4">
          * Op basis van een standaard huishoudelijke aansluiting (3x25A stroom, G4/G6 gasmeter). Tarieven vastgesteld door de ACM.
        </p>
      </section>

      {/* Eenmalige kosten */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-6">Eenmalige kosten (voorbeeld Enexis)</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Meterijking", price: "€ 100,00", desc: "Bij vermoeden defect" },
            { title: "Slimme meter plaatsen", price: "€ 81,89", desc: "Elektra + gas" },
            { title: "Hoofdzekering vervangen", price: "€ 445,46", desc: "Door automaat" },
            { title: "Voorrijkosten", price: "€ 81,89", desc: "Bij niet thuis" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border p-5">
              <p className="text-sm text-text-muted">{item.title}</p>
              <p className="text-xl font-bold text-text-main mt-1">{item.price}</p>
              <p className="text-xs text-text-muted mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mt-3">* Prijzen inclusief 21% BTW, bron: Enexis 2026</p>
      </section>

      {/* Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl bg-green-50 border border-green-200 p-8">
          <h2 className="text-xl font-bold text-text-main mb-3">Waarom stijgen de netbeheerkosten?</h2>
          <p className="text-sm text-green-900">
            Het elektriciteitsnet heeft op veel plaatsen in Nederland zijn maximale capaciteit bereikt. Door de groei van zonnepanelen, warmtepompen en elektrische auto&apos;s zijn miljardeninvesteringen nodig om het net te verzwagen. Deze kosten worden via de netbeheertarieven doorberekend aan consumenten.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <FAQSchema items={faqItems} />
        <h2 className="text-2xl font-bold text-text-main mb-8">Veelgestelde vragen over netbeheerkosten</h2>
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

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Benieuwd naar je totale energiekosten?</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">Netbeheerkosten staan vast, maar je leverancierstarief niet. Vergelijk alle leveranciers en bespaar op het deel waar je wél invloed op hebt.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#vergelijk" className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
              Vergelijk leveranciers
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/calculator" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              Bereken je energiekosten
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
