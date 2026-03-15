import type { Metadata } from "next";
import Link from "next/link";

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
  { item: "Slimme meter check — is je analoge meter al vervangen? Vanaf 2026 is een digitale meter verplicht.", done: false },
  { item: "Contractvrijheid — controleer je einddatum. Met de 5-daagse opzegtermijn kun je direct overstappen.", done: false },
  { item: "P1-dongle kopen — ca. €30 voor live inzicht in je verbruik via je smartphone.", done: false },
  { item: "CV-ketel op 50°C zetten — direct €100 per jaar besparen.", done: false },
  { item: "Sluipverbruik meten — check oude apparaten in schuur, garage en bijkeuken.", done: false },
  { item: "Groningen subsidie checken — woon je in de regio? Check SNN.nl voor deadlines.", done: false },
  { item: "Leverancier vergelijken — is je huidige contract nog de beste deal?", done: false },
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
      <section className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold">Bespaartips 2026</h1>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl">
            Van quick wins tot slimme technologie. Bespaar honderden euro&apos;s op je energierekening met bewezen methodes.
          </p>
        </div>
      </section>

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
