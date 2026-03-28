import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Bespaartips Energie 2026: Bespaar tot €450 op Gas & Stroom | Energiekenner.nl",
  description: "20+ praktische bespaartips voor je gas- en stroomverbruik. Van gratis tips tot slimme investeringen. Bespaar honderden euro's per jaar op je energierekening.",
  alternates: {
    canonical: "https://energiekenner.nl/tips",
  },
};

export const revalidate = 3600;

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

const faqItems = [
  {
    question: "Hoeveel kun je besparen met energietips in 2026?",
    answer: "Met de 8 bespaartips uit deze gids kun je gemiddeld €450 tot €900 per jaar besparen. De grootste winsten kom je binnen met leverancierwisseling (€450/jaar), sluipverbruik elimineren (€250/jaar) en de CV-ketel op 50°C zetten (€100/jaar). In 2026 is de flitsoverstap in slechts 5 werkdagen mogelijk, dus overstappen is nog nooit zo makkelijk geweest."
  },
  {
    question: "Wat is het verschil tussen een digitale en analoge meter in 2026?",
    answer: "Vanaf 2026 zijn analoge meters verboden in Nederland. Digitale slimme meters geven je real-time inzicht in je verbruik en maken dynamische contracten mogelijk. Met een P1-dongle (ongeveer €30) kun je je verbruik live op je smartphone volgen, wat gemiddeld tot 10% minder verbruik leidt. Dit is je eerste stap naar energiebewustzijn."
  },
  {
    question: "Hoe bespaar je zonder grote investeringen?",
    answer: "De makkelijkste besparingen zit in sluipverbruik, douchegedrag en je CV-ketel instellen. Schakel oude apparaten uit (kan €250/jaar schelen), zet je ketel op 50°C in plaats van 80°C (€100/jaar), en zorg voor een waterbesparende douchekop (€170/jaar). Deze maatregelen kosten bijna niks en geven direct resultaat in 2026."
  },
  {
    question: "Is het waard om naar een dynamisch contract over te stappen?",
    answer: "Met een dynamisch contract en thuisbatterij kun je €300 tot €900 per jaar besparen in 2026. Je kunt elektriciteit kopen op het goedkoopste moment (soms gratis bij negatieve prijzen) en verbruiken in dure uren. Dit vergt wel wat technische kennis en een investering in een batterij, maar het groeit snel populairder."
  },
  {
    question: "Wat gebeurt er in 2026 met energiesubsidies voor Groningen?",
    answer: "Groningen-bewoners hebben in 2026 toegang tot unieke subsidies: tot €17.000 voor verduurzaming en verbetering, tot €4.000 waardevermeerding, en 0% rente via het Nationaal Warmtefonds. De deadline is 31 mei 2026 dus plan je aanvraag nu al in. Begin met het verzamelen van bewijsmateriaal voor het sterkste dossier."
  }
];


export default function TipsPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Bespaartips", href: "/tips" },
      ]} />
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

      {/* Gerelateerde pagina's */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="text-xl font-bold text-text-main mb-4">Meer besparen? Bekijk ook</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href: "/energie-delen", title: "Energie Delen", desc: "Verdien meer aan je zonnestroom" },
            { href: "/energie-apps", title: "Energie-Apps", desc: "De slimste apps vergeleken" },
            { href: "/thuisbatterij", title: "Thuisbatterij", desc: "Sla op en verdien met arbitrage" },
            { href: "/dynamisch", title: "Dynamisch contract", desc: "Bespaar met uurprijzen" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-xl border border-border bg-white p-4 hover:shadow-md transition-all group">
              <h3 className="font-semibold text-text-main group-hover:text-primary transition-colors text-sm">{link.title}</h3>
              <p className="text-xs text-text-muted mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-8">
        <div className="rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Stap 1: Vergelijk je leverancier</h2>
          <p className="mt-2 text-teal-100">De meeste besparingen beginnen bij het juiste contract.</p>
          <Link href="/#vergelijk" className="inline-flex items-center mt-4 px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
            Vergelijk nu
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <FAQSchema items={faqItems} />
        <h2 className="text-2xl font-bold text-text-main mb-8">Veelgestelde vragen over bespaartips</h2>
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
            De grootste besparing? Overstappen van leverancier
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Met de juiste leverancier bespaar je tot €450 per jaar. Vergelijk alle tarieven en ontdek hoeveel jij kunt besparen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#vergelijk" className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
              Vergelijk leveranciers
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/calculator" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              Bereken je besparing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
