import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Energie Besparen in 2026: 10 Slimme Tips + Checklist | Energiekenner",
  description: "Bespaar tot €500 per jaar met deze bewezen bespaartips. Van cv-ketel optimalisatie tot sluipverbruik elimineren. Inclusief checklist maart 2026.",
  keywords: ["energie besparen", "bespaartips energie", "energierekening verlagen", "cv ketel instellen", "sluipverbruik", "energiebesparing 2026"],
  openGraph: {
    title: "10 Slimme Bespaartips voor 2026",
    description: "Bespaar tot €500 per jaar op je energierekening. Inclusief checklist voor maart 2026.",
  },
};

const tips = [
  {
    title: "De 50-graden check",
    saving: "tot € 100/jaar",
    description: "Zet de aanvoertemperatuur van je cv-ketel op 50°C in plaats van de standaard 80°C. Dit bespaart tot 130 m³ gas per jaar zonder comfortverlies.",
    difficulty: "Makkelijk",
    category: "Gas",
  },
  {
    title: "Sluipverbruik elimineren",
    saving: "tot € 250/jaar",
    description: "Een oude vrieskist in de schuur kan €250 per jaar kosten. Schakel onnodige apparaten uit of vervang ze door energiezuinige modellen.",
    difficulty: "Makkelijk",
    category: "Stroom",
  },
  {
    title: "Sturen op eigen opwek",
    saving: "tot € 150/jaar",
    description: "Zet vaatwasser en wasmachine na elkaar aan wanneer de zon schijnt. Zo maximaliseer je direct eigen verbruik en vermijd je terugleverkosten.",
    difficulty: "Makkelijk",
    category: "Zon",
  },
  {
    title: "Waterbesparende douchekop",
    saving: "tot € 170/jaar",
    description: "Korter douchen plus een waterbesparende douchekop besparen gemiddeld €170 per jaar aan gas en water.",
    difficulty: "Makkelijk",
    category: "Gas",
  },
  {
    title: "Jaarlijks overstappen",
    saving: "tot € 450/jaar",
    description: "Met de nieuwe flitsoverstap (5 werkdagen) kun je jaarlijks switchen naar de beste deal. Welkomstbonussen lopen op tot €688.",
    difficulty: "Makkelijk",
    category: "Contract",
  },
  {
    title: "P1-dongle voor live inzicht",
    saving: "bewustwording",
    description: "Koop een dongle (ca. €30) voor de P1-poort van je slimme meter. Live inzicht in je verbruik via je smartphone leidt gemiddeld tot 10% minder verbruik.",
    difficulty: "Makkelijk",
    category: "Tech",
  },
  {
    title: "Dynamisch contract + batterij",
    saving: "€ 300 - € 900/jaar",
    description: "Laad je batterij op wanneer stroom goedkoop is (of gratis bij negatieve prijzen) en verbruik het tijdens dure piekuren.",
    difficulty: "Gevorderd",
    category: "Tech",
  },
  {
    title: "Energie delen met buren",
    saving: "variabel",
    description: "Verkoop overtollige zonnestroom aan buren voor €0,15/kWh in plaats van de magere terugleververgoeding van sommige leveranciers.",
    difficulty: "Gevorderd",
    category: "Zon",
  },
];

const checklist = [
  { item: "Slimme meter check - is je analoge meter al vervangen? Vanaf 2026 is een digitale meter verplicht.", done: false },
  { item: "Contractvrijheid - controleer je einddatum. Met de 5-daagse opzegtermijn kun je direct overstappen.", done: false },
  { item: "P1-dongle kopen - ca. €30 voor live inzicht in je verbruik via je smartphone.", done: false },
  { item: "CV-ketel op 50°C zetten - direct €100 per jaar besparen.", done: false },
  { item: "Sluipverbruik meten - check oude apparaten in schuur, garage en bijkeuken.", done: false },
  { item: "Groningen subsidie checken - woon je in de regio? Check SNN.nl voor deadlines.", done: false },
  { item: "Leverancier vergelijken - is je huidige contract nog de beste deal?", done: false },
];

const categoryColors: Record<string, string> = {
  Gas: "bg-orange-100 text-orange-700",
  Stroom: "bg-blue-100 text-blue-700",
  Zon: "bg-yellow-100 text-yellow-700",
  Contract: "bg-green-100 text-green-700",
  Tech: "bg-purple-100 text-purple-700",
};

export default function TipsPage() {
  return (
    <>
      <PageHero badge="Direct toepasbaar" title="Bespaartips energie" highlight="Bespaar honderden euro's per jaar" description="Praktische tips om je energierekening te verlagen. Van quick wins tot slimme investeringen." accentColor="emerald" />

      {/* Tips grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-6">8 bewezen bespaartips</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, idx) => (
            <div key={tip.title} className="rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm font-bold">{idx + 1}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[tip.category]}`}>{tip.category}</span>
                </div>
                <span className="text-sm font-semibold text-green-600">{tip.saving}</span>
              </div>
              <h3 className="font-semibold text-lg text-text-main">{tip.title}</h3>
              <p className="text-sm text-text-muted mt-2">{tip.description}</p>
              <div className="mt-3">
                <span className={`text-xs px-2 py-0.5 rounded-full ${tip.difficulty === "Makkelijk" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                  {tip.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-6">Checklist maart 2026</h2>
        <div className="rounded-xl border border-border divide-y divide-border">
          {checklist.map((item) => (
            <div key={item.item} className="flex items-start gap-3 p-4 hover:bg-teal-50/50 transition-colors">
              <div className="w-5 h-5 mt-0.5 rounded border-2 border-teal-300 flex-shrink-0" />
              <p className="text-sm text-text-main">{item.item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Groningen subsidies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl bg-teal-50 border border-teal-200 p-8">
          <h2 className="text-xl font-bold text-text-main mb-3">Regionale goudmijn: Groningen subsidies</h2>
          <p className="text-sm text-teal-900 mb-4">
            Woon je in de provincie Groningen? Dan heb je in 2026 toegang tot unieke subsidies:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-teal-200">
              <p className="text-2xl font-bold text-teal-600">€ 17.000</p>
              <p className="text-xs text-text-muted mt-1">Subsidie verduurzaming (versterkingsprogramma)</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-teal-200">
              <p className="text-2xl font-bold text-teal-600">€ 4.000</p>
              <p className="text-xs text-text-muted mt-1">Subsidie waardevermeerdering (bevingsschade)</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-teal-200">
              <p className="text-2xl font-bold text-teal-600">0% rente</p>
              <p className="text-xs text-text-muted mt-1">Lening via Nationaal Warmtefonds (inkomen tot €60k)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article 1: Groningen subsidies in detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-xl border border-teal-300 bg-white p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">Groningen subsidies: Alles wat je wilt weten</h2>

          <div className="space-y-6">
            {/* SNN Subsidie Verduurzaming */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-lg font-semibold text-text-main mb-2">SNN Subsidie Verduurzaming Groningen (NCG)</h3>
              <div className="bg-emerald-50 rounded-lg p-4 mb-3">
                <p className="text-3xl font-bold text-emerald-600">€ 7.000</p>
                <p className="text-sm text-emerald-900 mt-1">Voor woningeigenaren in het NCG versterkingsprogramma met oude energielabel</p>
              </div>
              <p className="text-sm text-text-muted mb-3">
                Deze subsidie ondersteunt verbetering van zonnepanelen, isolatie, HR++ glas en vergelijkbare duurzaamheidsmaatregelen.
              </p>
            </div>

            {/* SNN Subsidie Verduurzaming en Verbetering */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-lg font-semibold text-text-main mb-2">SNN Subsidie Verduurzaming en Verbetering</h3>
              <div className="bg-teal-50 rounded-lg p-4 mb-3">
                <p className="text-3xl font-bold text-teal-600">€ 17.000</p>
                <p className="text-sm text-teal-900 mt-1">Voor gelijktijdige verbetering én duurzaamheidsinvestering</p>
              </div>
              <p className="text-sm text-text-muted">
                <strong className="text-text-main">Let op:</strong> Dit kost echter een lange wachttijd voor beoordeling of herbeoordeling van je woning. Plan je aanvraag ruim van tevoren in.
              </p>
            </div>

            {/* Deadline */}
            <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 mb-2">Deadline: 31 mei 2026, 23:59</h4>
              <p className="text-sm text-amber-800">
                Beide subsidies delen dezelfde subsidiepot. Aanvragen zijn mogelijk tot 31 mei 2026. Plan je aanvraag op tijd in.
              </p>
            </div>

            {/* Waardevermeerderingsregeling */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-text-main mb-2">Waardevermeerderingsregeling (bevingsschade)</h3>
              <div className="bg-orange-50 rounded-lg p-4 mb-3">
                <p className="text-2xl font-bold text-orange-600">Max € 4.000</p>
                <p className="text-sm text-orange-900 mt-1">Minimum €1.000 erkende schadevergoeding</p>
              </div>
              <p className="text-sm text-text-muted">
                Dit is de laatste opening voor deze subsidie. Heb je bevingsschade? Dit kan significant bijdragen aan renovatiekosten.
              </p>
            </div>

            {/* Kennertip */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-400 rounded-lg p-5">
              <h4 className="font-semibold text-teal-900 mb-2 flex items-center gap-2">
                <span className="text-xl">💡</span> Kennertip
              </h4>
              <p className="text-sm text-text-muted">
                Wacht niet op "perfecte zekerheid" als je aan de voorwaarden voldoet. Begin nu al met het verzamelen van bewijsmateriaal en het plannen van maatregelen. De bureaucratie kan langzaam gaan, maar jouw aanvraag hoeft niet tot het laatste moment te wachten.
              </p>
            </div>

            {/* Sources */}
            <div className="text-xs text-text-muted space-y-1">
              <p><strong>Bronnen:</strong> snn.nl, rijksoverheid.nl</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article 2: Quick wins - onderbouwd */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl border border-teal-300 bg-white p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">Quick wins in huis: Onderbouwde besparingen</h2>

          <div className="space-y-6">
            {/* Douchegedrag */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-text-main mb-2">Korter douchen: Van 7 naar 5 minuten</h3>
              <div className="bg-blue-50 rounded-lg p-4 mb-3">
                <p className="text-3xl font-bold text-blue-600">€ 36/jaar</p>
                <p className="text-sm text-blue-900 mt-1">Per persoon, bij reductie van 7,4 naar 5 minuten duschen</p>
              </div>
              <p className="text-sm text-text-muted">
                Milieu Centraal adviseert een maximale douchetijd van 5 minuten. Veel huishoudens douchen langer dan nodig. Deze kleine verandering bespaart zowel gas (warm water) als water.
              </p>
            </div>

            {/* Wassen eco-mode */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-text-main mb-2">Wasmachine: Eco-programma gebruiken</h3>
              <div className="bg-green-50 rounded-lg p-4 mb-3">
                <p className="text-3xl font-bold text-green-600">25% besparing</p>
                <p className="text-sm text-green-900 mt-1">Eco-programma vs. normaal katoen bij gelijke temperatuur</p>
              </div>
              <p className="text-sm text-text-muted mb-3">
                Het eco-programma gebruikt minder energie en water bij dezelfde reinigingskracht. Het duurt langer, maar je verbruikt aanzienlijk minder stroom en water.
              </p>
            </div>

            {/* Verwarming */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-text-main mb-2">CV-ketel temperatuur: De kunst van het laag zetten</h3>
              <div className="bg-orange-50 rounded-lg p-4 mb-3">
                <p className="text-sm text-orange-900 font-semibold">Standaard: 80°C → Advies: 50-70°C</p>
              </div>
              <p className="text-sm text-text-muted mb-3">
                Natuur & Milieu adviseert om je CV-ketel aanvoertemperatuur naar 70°C, 60°C, of zelfs 50°C te verlagen. Dit is veel lager dan de fabrieksinstelling en bespaart tot <strong>€100 per jaar</strong> zonder verlies van comfort.
              </p>
              <p className="text-xs text-text-muted italic">
                Tip: Veel ketelinstallateurs stellen nog altijd in op 80°C uit gewoonte. Vraag expliciet om lager in te stellen.
              </p>
            </div>

            {/* Kennertip */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-400 rounded-lg p-5">
              <h4 className="font-semibold text-teal-900 mb-2 flex items-center gap-2">
                <span className="text-xl">💡</span> Kennertip: Meetweek strategie
              </h4>
              <p className="text-sm text-text-muted mb-3">
                Kies één week per maand als "meetweek":
              </p>
              <ul className="text-sm text-text-muted space-y-1 ml-4">
                <li>• Noteer je douchetijden</li>
                <li>• Zet altijd het eco-programma aan</li>
                <li>• Check je P1-data om het verschil te zien</li>
              </ul>
              <p className="text-sm text-text-muted mt-3">
                Dit geeft je concrete feedback en houdt je accountable. Over het hele jaar voelt dit aan als kleine stappen, maar de besparing loopt op.
              </p>
            </div>

            {/* Sources */}
            <div className="text-xs text-text-muted space-y-1">
              <p><strong>Bronnen:</strong> milieucentraal.nl, natuurenmilieu.nl</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Stap 1: Vergelijk je leverancier</h2>
          <p className="mt-2 text-teal-100">De meeste besparingen beginnen bij het juiste contract.</p>
          <Link href="/#vergelijk" className="inline-flex items-center mt-4 px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
            Vergelijk nu
          </Link>
        </div>
      </section>
    </>
  );
}
