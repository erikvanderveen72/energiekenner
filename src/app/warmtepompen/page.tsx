import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Warmtepompen 2026: Types, Kosten, ISDE Subsidie & Installatie | Energiekenner",
  description: "Alles over warmtepompen in Nederland 2026: lucht-water, grond-water, hybride. Vergelijk kosten (€7.000-€25.000), ISDE subsidie, SCOP, isolatie-eisen en terugverdientijd.",
  keywords: ["warmtepomp", "lucht-water warmtepomp", "grond-water warmtepomp", "hybride warmtepomp", "ISDE subsidie 2026", "SCOP", "COP", "warmtepomp kosten", "warmtepomp installatie", "vloerverwarming"],
  openGraph: {
    title: "Warmtepompen 2026: Alles wat je moet weten",
    description: "Types, kosten, ISDE subsidie, SCOP/COP waarden en installatiedeisen voor warmtepompen in Nederland.",
  },
};

const heatPumpTypes = [
  {
    name: "Lucht-Water",
    icon: "🌬️",
    costs: "€7.000 - €14.000",
    scop: "3.0 - 4.5",
    maintenance: "Laag - filter schoonmaken",
    pros: ["Meest voorkomend", "Flexibele plaatsing", "Relatief betaalbaar", "Geschikt voor meeste huizen"],
    cons: ["Afhankelijk van buitentemperatuur", "Moet verwarmingssysteem aanpassen", "Geluid buiten (~40dB)"],
    ideal: "Vrijstaande huizen met radiators of vloerverwarming"
  },
  {
    name: "Grond-Water (Bodemwarmte)",
    icon: "🏗️",
    costs: "€15.000 - €25.000",
    scop: "4.0 - 5.5",
    maintenance: "Zeer laag - ondergronds",
    pros: ["Hoogste efficiëntie (SCOP)", "Stabiele grondtemperatuur", "Geen geluidshinder", "Werkt in alle seizoenen"],
    cons: ["Duurste optie", "Grondwerk nodig", "Bouvergunning benodigd", "Niet geschikt voor kleine tuinen"],
    ideal: "Woningen met ruime tuin (minimaal 200m² vrij terrein)"
  },
  {
    name: "Lucht-Lucht (Airco)",
    icon: "❄️",
    costs: "€2.000 - €5.000",
    scop: "3.0 - 4.0",
    maintenance: "Laag - filters schoonmaken",
    pros: ["Laagste aanschafkosten", "Ook verkoeling mogelijk", "Geen werken nodig", "Goed voor enkele ruimtes"],
    cons: ["Minder geschikt voor hele huis", "Visueel zichtbaar", "Lager rendement", "Geluid binnen/buiten"],
    ideal: "Aanvullende verwarming/koeling voor kamers"
  },
  {
    name: "Hybride Warmtepomp",
    icon: "🔄",
    costs: "€4.000 - €8.000",
    scop: "3.5 - 4.5",
    maintenance: "Gemiddeld - beide systemen",
    pros: ["Gemakkelijke overgang van gas", "Gas als backup in piektoppen", "Minder isolatie-eisen", "Goedkoper dan zuiver"],
    cons: ["Blijft deels afhankelijk van gas", "Duaal onderhoud", "Niet volledig gasvrij", "Hogere gasrekening mogelijk"],
    ideal: "Bestaande huizen met CV-ketel als tussenstap"
  },
  {
    name: "Water-Water",
    icon: "💧",
    costs: "€15.000 - €25.000",
    scop: "4.0 - 5.0",
    maintenance: "Gemiddeld - waterfilters",
    pros: ["Zeer efficiënt", "Stabiele temperatuur", "Geen buiten-unit", "Compact systeem"],
    cons: ["Zeer zeldzaam residentieel", "Grondwater-vergunning vereist", "Duurste variant", "Uitsluitend voor specifieke locaties"],
    ideal: "Woningen met grondwater-onttrekking toegestaan"
  }
];

const heatPumpComparison = [
  {
    type: "Lucht-Water",
    installation: "2-3 dagen",
    requirements: "Ruimte buiten, verwarmingssysteem aanpassing",
    noise: "40dB grens",
    grid: "Standaard 1-fase mogelijk"
  },
  {
    type: "Grond-Water",
    installation: "5-7 dagen",
    requirements: "Grondwerk, grote tuin, vergunning",
    noise: "Geen",
    grid: "3-fase aanbevolen"
  },
  {
    type: "Lucht-Lucht",
    installation: "1-2 dagen",
    requirements: "Minimaal - alleen ophanging",
    noise: "35-45dB",
    grid: "Standaard 1-fase"
  },
  {
    type: "Hybride",
    installation: "2-3 dagen",
    requirements: "Bestaande CV-ketel compatibel",
    noise: "40dB grens",
    grid: "Standaard 1-fase of 3-fase"
  }
];

const isdeExamples = [
  {
    type: "Lucht-Water",
    power: "4 kW",
    calculation: "€1.025 (start) + 4×€225 (per kW) + €200 (label) = €2.125",
    note: "Eerste lucht-waterwarmtepomp met A+++ label"
  },
  {
    type: "Lucht-Water",
    power: "8 kW",
    calculation: "€1.025 (start) + 8×€225 (per kW) + €200 (label) = €3.225",
    note: "Grotere lucht-waterwarmtepomp"
  },
  {
    type: "Lucht-Water",
    power: "4 kW (2e)",
    calculation: "4×€225 (per kW) = €900",
    note: "Tweede warmtepomp: geen startbedrag, geen label-bonus"
  },
  {
    type: "Grond-Water",
    power: "5 kW",
    calculation: "€1.025 (start) + 5×€225 (per kW) + €200 (label) = €2.350",
    note: "Grond-water warmtepomp (bodemwarmte) - zelfde structuur"
  }
];

export default function WarmtepompenPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="ISDE Subsidie beschikbaar"
        title="Warmtepompen in 2026"
        highlight="Types, kosten &amp; subsidie"
        description="Alles over warmtepompen: lucht-water, grond-water, hybride. Vergelijk kosten, ISDE subsidie, SCOP-waarden en installatie-eisen."
        accentColor="rose"
      />

      {/* Types Vergelijking - Cards + Desktop Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-2">5 soorten warmtepompen in Nederland</h2>
        <p className="text-text-muted mb-8">Elke warmtepomp heeft voor- en nadelen. Kies op basis van je huis, budget en doel.</p>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {heatPumpTypes.map((pump) => (
            <div key={pump.name} className="rounded-xl border border-border bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-rose-50 to-red-50 px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{pump.icon}</span>
                  <h3 className="font-bold text-text-main">{pump.name}</h3>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-text-muted text-xs">Kosten</p>
                    <p className="font-semibold text-text-main">{pump.costs}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-xs">SCOP</p>
                    <p className="font-semibold text-text-main">{pump.scop}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-2">Voor:</p>
                  <ul className="space-y-1">
                    {pump.pros.slice(0, 2).map((pro, i) => (
                      <li key={i} className="text-xs text-green-700 flex items-start gap-1.5">
                        <span className="mt-0.5">✓</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-2">Tegen:</p>
                  <ul className="space-y-1">
                    {pump.cons.slice(0, 2).map((con, i) => (
                      <li key={i} className="text-xs text-red-700 flex items-start gap-1.5">
                        <span className="mt-0.5">✗</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-primary font-semibold">{pump.ideal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">Kosten</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">SCOP</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">Voordelen</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">Nadelen</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">Ideaal voor</th>
                </tr>
              </thead>
              <tbody>
                {heatPumpTypes.map((pump) => (
                  <tr key={pump.name} className="border-t border-border hover:bg-rose-50 transition-colors">
                    <td className="px-4 py-4 font-semibold text-text-main whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{pump.icon}</span>
                        {pump.name}
                      </div>
                    </td>
                    <td className="px-4 py-4 font-mono text-text-main">{pump.costs}</td>
                    <td className="px-4 py-4 text-text-main">{pump.scop}</td>
                    <td className="px-4 py-4 text-text-main max-w-xs">
                      <ul className="space-y-1 text-xs">
                        {pump.pros.slice(0, 2).map((pro, i) => (
                          <li key={i} className="text-green-700">✓ {pro}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-4 text-text-main max-w-xs">
                      <ul className="space-y-1 text-xs">
                        {pump.cons.slice(0, 2).map((con, i) => (
                          <li key={i} className="text-red-700">✗ {con}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-4 text-text-main text-xs max-w-xs">{pump.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Installatie-eisen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-2">Installatie-eisen per type</h2>
        <p className="text-text-muted mb-8">Niet elke warmtepomp past in elke woning. Controleer deze vereisten.</p>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {heatPumpComparison.map((item) => (
            <div key={item.type} className="rounded-xl border border-border bg-white p-4">
              <h3 className="font-semibold text-text-main mb-3">{item.type}</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-text-muted text-xs">Installatieduur</p>
                  <p className="text-text-main font-medium">{item.installation}</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs">Vereisten</p>
                  <p className="text-text-main">{item.requirements}</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs">Geluid</p>
                  <p className="text-text-main">{item.noise}</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs">Elektriciteit</p>
                  <p className="text-text-main">{item.grid}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block rounded-xl border border-border overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Type</th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Installatieduur</th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Vereisten</th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Geluid</th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Elektriciteit</th>
              </tr>
            </thead>
            <tbody>
              {heatPumpComparison.map((item) => (
                <tr key={item.type} className="border-t border-border hover:bg-rose-50 transition-colors">
                  <td className="px-4 py-4 font-semibold text-text-main">{item.type}</td>
                  <td className="px-4 py-4 text-text-main">{item.installation}</td>
                  <td className="px-4 py-4 text-text-main max-w-xs text-sm">{item.requirements}</td>
                  <td className="px-4 py-4 text-text-main">{item.noise}</td>
                  <td className="px-4 py-4 text-text-main text-sm">{item.grid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ISDE Subsidie 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-rose-200 p-8">
          <h2 className="text-2xl font-bold text-text-main mb-2">ISDE Subsidie 2026</h2>
          <p className="text-text-muted mb-6">De ISDE-regeling geeft subsidie voor warmtepompen. Veel huiseigenaren krijgen €1.000-€3.000 terug.</p>

          {/* Key Points */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-text-main mb-2">Nieuwe ISDE-bedragen 2026</h3>
              <ul className="space-y-2 text-sm text-text-main">
                <li>
                  <span className="font-semibold">Startbedrag:</span> €1.025 (was €1.250)
                </li>
                <li>
                  <span className="font-semibold">Per kW:</span> €225 (nu vanaf 1e kW, niet vanaf 2e)
                </li>
                <li>
                  <span className="font-semibold">Energielabel bonus:</span> €200 (A+++ labels)
                </li>
                <li className="text-red-700">
                  <span className="font-semibold">Tweede warmtepomp:</span> Geen startbedrag/bonus, alleen €225/kW
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Wie kan aanvragen?</h3>
              <ul className="space-y-1 text-sm text-text-main list-disc pl-5">
                <li>Eigenaar van een woning</li>
                <li>Eerste warmtepomp met A+/A++/A+++ label</li>
                <li>Minimaal €5.000 (aanschaf + installatie)</li>
                <li>Via RVO.nl (Rijksdienst voor Ondernemend Nederland)</li>
                <li>Kan gecombineerd met andere subsidies</li>
              </ul>
            </div>
          </div>

          {/* Calculation Examples */}
          <h3 className="font-semibold text-text-main mb-4">Voorbeeldberekeningen ISDE 2026</h3>
          <div className="space-y-3">
            {isdeExamples.map((example, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-rose-100">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-text-main">{example.type} ({example.power})</p>
                    <p className="text-xs text-text-muted mt-1">{example.note}</p>
                  </div>
                </div>
                <div className="bg-rose-50 rounded p-3 font-mono text-sm text-text-main mt-2">
                  {example.calculation}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-900">
              <strong>Belangrijk:</strong> ISDE-budget is beperkt en kan uitgeput raken. Vraag snel aan via{" "}
              <a href="https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/warmtepomp" target="_blank" rel="noopener noreferrer" className="text-yellow-900 underline hover:text-yellow-800 font-semibold">
                RVO.nl/ISDE
              </a>
              {". Split lucht-water pompen onder 3kg refrigerant krijgen geen subsidie meer (GWP >750)."}
            </p>
          </div>
        </div>
      </section>

      {/* Kosten & Terugverdientijd */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <article className="bg-white rounded-xl border border-border p-8">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Financiering</span>
          </div>
          <h3 className="text-2xl font-bold text-text-main mb-4">Kosten & Terugverdientijd</h3>

          <div className="prose prose-sm max-w-none text-text-main space-y-4 mb-6">
            <h4 className="font-semibold text-text-main">Totale kostencalculator</h4>
            <p>
              De prijs van een warmtepomp bestaat uit meerdere posten. Hier een realistische schatting voor een vrijstaande woning:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-4 bg-surface-alt p-4 rounded-lg">
              <div>
                <p className="font-semibold text-text-main mb-2">Typische kosten</p>
                <ul className="space-y-1 text-sm">
                  <li><span className="text-text-muted">Lucht-water:</span> <span className="font-mono">€10.500</span></li>
                  <li><span className="text-text-muted">Installatie (incl):</span> <span className="font-mono">inbegrepen</span></li>
                  <li><span className="text-text-muted">Radiators aanpassen:</span> <span className="font-mono">€1.000-€3.000</span></li>
                  <li><span className="text-text-muted">Isolatie verbetering:</span> <span className="font-mono">€2.000-€5.000</span></li>
                  <li><span className="font-semibold text-text-main">Totaal:</span> <span className="font-mono font-semibold">€13.500-€18.500</span></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-text-main mb-2">Na ISDE-subsidie (€2.125)</p>
                <ul className="space-y-1 text-sm">
                  <li><span className="text-text-muted">Eigenaar betaalt:</span> <span className="font-mono">€11.375-€16.375</span></li>
                  <li><span className="text-text-muted">Voorkeursfinanciering:</span> <span className="font-mono">mogelijk</span></li>
                  <li><span className="text-text-muted">Mogelijk:</span> <span className="font-mono">NWB-lening</span></li>
                  <li className="pt-2 border-t border-border">
                    <strong className="text-text-main">Terugverdiening:</strong> <strong className="text-red-600">7-12 jaar</strong>
                  </li>
                </ul>
              </div>
            </div>

            <h4 className="font-semibold text-text-main">Energiebesparing per jaar</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Gaseductie:</strong> 1.000-1.500 m³/jaar (afhankelijk van isolatie, temperatuur)
              </li>
              <li>
                <strong>Gaskosten bespaard:</strong> €300-€450/jaar bij €0,30-0,35/m³
              </li>
              <li>
                <strong>Elektriciteittoename:</strong> 2.000-4.000 kWh/jaar extra
              </li>
              <li>
                <strong>Extra elektra-kosten:</strong> €600-€1.200/jaar bij €0,30-0,35/kWh
              </li>
              <li>
                <strong>Netto-besparing:</strong> -€300 tot +€150/jaar (afhankelijk van contract!)
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
              <p className="text-sm font-semibold text-amber-900 mb-2">Dynamisch elektriciteitscontract is essentieel!</p>
              <p className="text-sm text-amber-900">
                Warmtepompen uren werken optimal met een dynamisch contract dat elektriciteit goedkoper maakt wanneer vraag laag is. Dit kan jaarlijks €200-€400 besparen en je terugverdientijd aanzienlijk reduceren.
              </p>
            </div>

            <h4 className="font-semibold text-text-main">Terugverdientijd hangt af van:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Isolatie huiswaarde:</strong> Beter geïsoleerde huizen hebben 10-15% hoger rendement</li>
              <li><strong>Huistype:</strong> Vrijstaande huizen hebben meer voordeel dan appartementen</li>
              <li><strong>Elektriciteitcontract:</strong> Dynamische contract vs. vast tarief = €200-500/jaar verschil</li>
              <li><strong>Verwarmingssysteem:</strong> Vloerverwarming is efficiënter dan radiators</li>
              <li><strong>Huishoudgrootte:</strong> Meer bewoners = meer verbruik en meer besparing</li>
            </ul>
          </div>

          {/* Kennertip */}
          <div className="mt-6 bg-gradient-to-br from-rose-50 to-red-50 border border-red-200 rounded-lg p-5">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <div>
                <p className="font-semibold text-red-900">Kennertip</p>
                <p className="text-sm text-red-800 mt-1">Begin met isolatie: een beter geïsoleerd huis betekent 30% hoger warmtepomp-rendement. Investeer eerst in dak, muren en ramen vóór je een warmtepomp koopt.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-text-muted border-t border-border pt-4">
            <p>Bron: RVO.nl ISDE-regeling, Nederlandse gasmarktdata (2025-2026)</p>
          </div>
        </article>
      </section>

      {/* Installatie-Eisen Diepgang */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="bg-white rounded-xl border border-border p-8">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Voorbereiding</span>
          </div>
          <h3 className="text-2xl font-bold text-text-main mb-4">Installatie-eisen: Wat moet je op orde hebben?</h3>

          <div className="prose prose-sm max-w-none text-text-main space-y-4 mb-6">
            <h4 className="font-semibold text-text-main">1. Isolatie: De sleutel tot rendement</h4>
            <p>
              Warmtepompen werken beter in beter geïsoleerde huizen. Nederlands bouwbesluit vereist minimaal:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Dakisolatie:</strong> Rd-waarde minimaal 6,0 (m²·K/W)</li>
              <li><strong>Muuren:</strong> Rc-waarde minimaal 4,5 (m²·K/W) aanbevolen</li>
              <li><strong>Ramen/deuren:</strong> Drievoudig glas aanbevolen (Uw ≤1,0)</li>
              <li><strong>Energielabel:</strong> Label C of beter sterk aanbevolen (label E of slechter maakt warmtepomp minder rendabel)</li>
            </ul>

            <h4 className="font-semibold text-text-main">2. Verwarmingssysteem: Laagtemperatuur nodig</h4>
            <p>
              Warmtepompen werken op lagere temperaturen dan CV-ketels. Je hebt keuze uit:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Vloerverwarming:</strong> Ideaal (optimale temperatuur 35-45°C). Best rendement.
              </li>
              <li>
                <strong>Lage-temperatuur radiators (LT-radiators):</strong> Groter oppervlak, werken op 55-65°C
              </li>
              <li>
                <strong>Bestaande radiators upgraden:</strong> Groter oppervlak nodig (duur), of warmtepomp kleiner dimensioneren
              </li>
              <li>
                <strong>Niet geschikt:</strong> Kleine oude radiators (veel warmteverlies, slecht rendement)
              </li>
            </ul>

            <h4 className="font-semibold text-text-main">3. Geluid & plaatsing</h4>
            <p>
              Bouwbesluit bepaalt: maximum 40dB op eigendomsgrens (buurwoning).
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Lucht-water:</strong> Buiten-unit produceert geluid (~45dB). Zet minimaal 3m van buren af. Isolatiescherm (€500-2.000) kan helpen.
              </li>
              <li>
                <strong>Lucht-lucht:</strong> Minder geluid, maar nog steeds hoorbaar. Zorg voor goede ventilatie.
              </li>
              <li>
                <strong>Grond-water:</strong> Geen geluidshinder buiten (ondergronds).
              </li>
              <li>
                <strong>Hybride:</strong> CV-ketel backup, warmtepomp kan klein zijn (minder geluid).
              </li>
            </ul>

            <h4 className="font-semibold text-text-main">4. Elektriciteit: Mogelijk zwaardere aansluiting</h4>
            <p>
              Grote warmtepompen kunnen meer elektriciteit trekken. Controleer:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Huidiige aansluiting:</strong> 1-fase (totaal ~10 kW) of 3-fase (30+ kW)
              </li>
              <li>
                <strong>Lucht-water (4-8 kW):</strong> Meestal 1-fase, zelden upgrade nodig (€300-1.500)
              </li>
              <li>
                <strong>Grond-water/grote systemen:</strong> 3-fase aanbevolen (duurder upgrade, €2.000-5.000)
              </li>
              <li>
                <strong>Toekomstige EV-oplader?:</strong> Plan samen in (3-fase voordelig)
              </li>
            </ul>

            <h4 className="font-semibold text-text-main">5. Ruimte & ventilatie</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Lucht-water buiten-unit:</strong> Minimaal 50cm x 60cm, vrij van blokkering
              </li>
              <li>
                <strong>Innen-unit (buffertank/warmtewisselaar):</strong> Meestal in kelder/technische ruimte (~2m²)
              </li>
              <li>
                <strong>Ventilatie:</strong> Zorg voor goede luchttoevoer rond buiten-unit
              </li>
            </ul>

            <h4 className="font-semibold text-text-main">6. Gemeentelijke toestemming</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Lucht-water:</strong> Meestal aanmelden bij gemeente (vergunningvrij als &lt;40dB), maar communiceer met buren
              </li>
              <li>
                <strong>Grond-water:</strong> Vergunning vereist (milieu, grondwater)
              </li>
              <li>
                <strong>Warmtepompdeclaratie:</strong> Veel gemeenten willen registratie via Mijn Gemeente
              </li>
            </ul>
          </div>

          {/* Kennertip */}
          <div className="mt-6 bg-gradient-to-br from-rose-50 to-red-50 border border-red-200 rounded-lg p-5">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <div>
                <p className="font-semibold text-red-900">Kennertip</p>
                <p className="text-sm text-red-800 mt-1">Vraag minimaal 3 offertes aan. Installateurs hebben veel vrijheid in dimensionering. Zorg dat je dezelfde specificaties (SCOP, vermogen, systeem-type) vergelijkt.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-text-muted border-t border-border pt-4">
            <p>Bron: Bouwbesluit 2012, RVO.nl installatierichtlijnen, Nederlandse Norm NTA 8800</p>
          </div>
        </article>
      </section>

      {/* Wetgeving & Regelgeving */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="bg-white rounded-xl border border-border p-8">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Regelgeving</span>
          </div>
          <h3 className="text-2xl font-bold text-text-main mb-4">Wetgeving & Regelgeving 2026</h3>

          <div className="prose prose-sm max-w-none text-text-main space-y-4 mb-6">
            <h4 className="font-semibold text-text-main">Geen verplichting (nog steeds), maar toekomstgericht</h4>
            <p>
              In mei 2024 schrapte het kabinet de eerder geplande verplichting voor warmtepompen bij CV-ketelvervanging. Dit geldt ook voor 2026: warmtepomp is <strong>niet verplicht</strong>, maar wel sterk aanbevolen.
            </p>

            <h4 className="font-semibold text-text-main">Waarom toch overwegen?</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Toekomstige normeringen:</strong> Veel gemeentes maken "Transitievisie Warmte" waarin gasvrij worden toegezegd
              </li>
              <li>
                <strong>Energielabel-effect:</strong> Warmtepomp verhoogt energielabel met 1-2 niveaus (verkoopwaarde huizen)
              </li>
              <li>
                <strong>Operationele kosten:</strong> Huishoudbudget profiteert van lagere energierekening op lange termijn
              </li>
            </ul>

            <h4 className="font-semibold text-text-main">ISDE 2026 & aansluitende regelgeving</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Startbedrag verlaagd:</strong> ISDE-budget onder druk, dus aanvragen loont sneller
              </li>
              <li>
                <strong>Hybride voorkeur:</strong> RVO geeft advies richting hybride als stepping stone voor bestaande huizen
              </li>
              <li>
                <strong>Bouwbesluit-eisen:</strong> Geluid (40dB), energielabel, isolatie zijn niet onderhandelbare normen
              </li>
            </ul>

            <h4 className="font-semibold text-text-main">Gemeentelijke warmteplannen</h4>
            <p>
              Veel gemeentes zijn verplicht "Transitievisie Warmte" op te stellen (richting gas-vrij tegen 2050, veel eerder voor wijken). Dit is geen direct verbod, maar biedt speelruimte voor belastingvoordelen, gemeentelijke warmtenet-aanbiedingen, of toekomstige regelgeving. Controleer wat je gemeente plant op www.warmteplocaal.nl.
            </p>

            <h4 className="font-semibold text-text-main">EU-regelgeving: Greentech Vereenvoudiging</h4>
            <p>
              EU-richtlijnen voor hernieuwbare energietechnologieën beïnvloeden subsidies. In 2026 zijn warmtepompen sterk geprioriteerd. Mogelijke toekomstige strengingen:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>SCOP-minimumvereisten (bv. SCOP 3.0+ voor subsidie)</li>
              <li>Koelvloeistoffen met lagere GWP (milieu)</li>
              <li>Montage-certificaten (kwaliteitsborging)</li>
            </ul>
          </div>

          {/* Kennertip */}
          <div className="mt-6 bg-gradient-to-br from-rose-50 to-red-50 border border-red-200 rounded-lg p-5">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <div>
                <p className="font-semibold text-red-900">Kennertip</p>
                <p className="text-sm text-red-800 mt-1">Check je gemeente op warmteplocaal.nl: je gemeente kan een warmtenet of koeling-prioriteit hebben. Dit beïnvloedt je keuze (collectief vs. individueel).</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-text-muted border-t border-border pt-4">
            <p>Bron: Rijksbesluit Energietransitie, RVO.nl, Bouwbesluit 2012, Transitievisie Warmte richtlijnen</p>
          </div>
        </article>
      </section>

      {/* Kennertips samenvattend */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-6">Kennertips voor de juiste keuze</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-red-200 p-6">
            <h3 className="font-bold text-text-main mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              Stap 1: Begin met isolatie
            </h3>
            <p className="text-sm text-red-900">
              Upgraden dak, muren en ramen VOOR warmtepomp-installatie. Dit helpt rendement 30% verhogen. Energielabel C of beter is een must.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-red-200 p-6">
            <h3 className="font-bold text-text-main mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              Stap 2: Hybride als opstap
            </h3>
            <p className="text-sm text-red-900">
              Hybride warmtepomp combineert bestaande CV-ketel met warmtepomp. Makkelijker installatie, lager risico. Perfecte stap naar volledig gasvrij.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-red-200 p-6">
            <h3 className="font-bold text-text-main mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              Stap 3: Vergelijk dynamische elektra
            </h3>
            <p className="text-sm text-red-900">
              Warmtepompen werken optimaal op dynamische contracten. Dit kan €200-400/jaar schelen. Checl vergelijker voor best contract.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-red-200 p-6">
            <h3 className="font-bold text-text-main mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              Stap 4: Vraag 3 offertes
            </h3>
            <p className="text-sm text-red-900">
              Installateurs kiezen zeer verschillend (SCOP, dimensionering, merken). Vergelijk exact dezelfde specs. Verschil kan €3.000+ zijn.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-red-200 p-6">
            <h3 className="font-bold text-text-main mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              Stap 5: Check gemeente + buren
            </h3>
            <p className="text-sm text-red-900">
              Informeer buren, controleer warmteplan gemeente (www.warmteplocaal.nl), en vraag vergunning. Dit voorkomt gedoe later.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-red-200 p-6">
            <h3 className="font-bold text-text-main mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              Stap 6: ISDE-subsidie snel aanvragen
            </h3>
            <p className="text-sm text-red-900">
              ISDE-budget is beperkt en kan op raken. Na goedkeuring installateur, snel aanvragen via RVO.nl voor €1.000-€3.000.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <div className="rounded-xl bg-gradient-to-br from-rose-600 to-red-700 p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Klaar voor gasvrij verwarmen?</h2>
          <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
            Begin met isolatie, kies het juiste type warmtepomp en optimaliseer je elektriciteitscontract. Het is niet alleen besparing, het is toekomstvast investeren.
          </p>
          <a href="/#vergelijk" className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-rose-50 transition-colors">
            Naar vergelijker (dynamische elektra)
          </a>
        </div>
      </section>
    </>
  );
}
