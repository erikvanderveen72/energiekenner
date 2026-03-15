import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { SalderenKeuzehulp } from "@/components/Keuzehulp";

export const metadata: Metadata = {
  title: "Salderingsregeling 2027: Wat Verandert Er? | Energiekenner.nl",
  description:
    "De salderingsregeling stopt per 1 januari 2027. Wat betekent dat voor jouw zonnepanelen? Terugverdientijd, terugleverkosten, thuisbatterij en slimme strategieen - alles uitgelegd.",
  keywords: [
    "salderingsregeling",
    "salderingsregeling 2027",
    "salderen zonnepanelen",
    "einde salderingsregeling",
    "terugleverkosten zonnepanelen",
    "thuisbatterij zonder salderen",
    "zonnepanelen rendement 2027",
    "salderen afgeschaft",
    "terugleververgoeding",
    "slimme meter verplicht",
  ],
  openGraph: {
    title: "Salderingsregeling Stopt in 2027 - Wat Nu?",
    description:
      "Alles over het einde van de salderingsregeling: impact op je zonnepanelen, terugleverkosten, en hoe je je kunt voorbereiden met een thuisbatterij of dynamisch contract.",
  },
};

const faqItems = [
  {
    question: "Wat is de salderingsregeling?",
    answer:
      "De salderingsregeling is een Nederlandse regeling waarmee je de stroom die je met zonnepanelen teruglevert aan het net, mag wegstrepen tegen de stroom die je afneemt. Je betaalt dan alleen over het verschil. Dit geldt inclusief energiebelasting en btw, waardoor elke teruggeleverde kWh evenveel waard is als een afgenomen kWh.",
  },
  {
    question: "Wanneer stopt de salderingsregeling?",
    answer:
      "De salderingsregeling stopt per 1 januari 2027. De Tweede Kamer stemde op 14 november 2024 voor de afschaffing, de Eerste Kamer bekrachtigde dit op 17 december 2024. De wet is op 29 januari 2025 gepubliceerd. Tot en met 31 december 2026 kun je nog volledig salderen.",
  },
  {
    question: "Hoeveel leveren mijn zonnepanelen op na 2027?",
    answer:
      "Na 2027 hangt je opbrengst af van hoeveel stroom je zelf direct verbruikt. Stroom die je zelf gebruikt bespaart je circa 0,25 tot 0,30 euro per kWh. Stroom die je teruglevert brengt netto slechts 0,05 tot 0,12 euro per kWh op. De gemiddelde terugverdientijd stijgt van 5-6 jaar naar 9-11 jaar.",
  },
  {
    question: "Is een thuisbatterij rendabel zonder salderen?",
    answer:
      "Ja, een thuisbatterij wordt juist rendabeler na het einde van de salderingsregeling. Zonder saldering fungeerde het stroomnet als gratis virtuele batterij - dat voordeel vervalt. Een thuisbatterij van 5-10 kWh kan je zelfverbruik verhogen van 30% naar 65-85%, met een geschatte terugverdientijd van 6 tot 8 jaar.",
  },
  {
    question: "Wat zijn terugleverkosten?",
    answer:
      "Terugleverkosten zijn maandelijkse kosten die energieleveranciers in rekening brengen als je stroom teruglevert met zonnepanelen. Ze variëren van 3 tot 90 euro per maand, afhankelijk van hoeveel je teruglevert en je leverancier. Vanaf 2026 moeten leveranciers deze kosten uitsluitend per kWh berekenen.",
  },
  {
    question: "Moet ik een slimme meter hebben?",
    answer:
      "Ja, vanaf 2026 is een digitale of slimme meter verplicht op basis van de nieuwe Energiewet. De slimme meter meet afname en teruglevering apart, wat nodig is voor de correcte afrekening na 2027. Nog circa 500.000 huishoudens hebben een analoge meter. Weigeren kan leiden tot boetes.",
  },
  {
    question: "Is een dynamisch contract beter na 2027?",
    answer:
      "Een dynamisch contract kan voordelig zijn na 2027, vooral als je een thuisbatterij of warmtepomp hebt. Bij dynamische contracten ontvang je de actuele marktprijs voor teruggeleverde stroom en worden vaak geen vaste terugleverkosten gerekend. Het vereist wel dat je je verbruik actief kunt sturen.",
  },
  {
    question: "Wat kan ik nu al doen om me voor te bereiden?",
    answer:
      "Verschuif je stroomverbruik naar zonnige uren (wasmachine, vaatwasser overdag draaien), overweeg een thuisbatterij of V2G-laadpaal, check of je al een slimme meter hebt, en vergelijk energieleveranciers op terugleverkosten. Een dynamisch contract kan voordelig zijn als je slim kunt sturen.",
  },
];

export default function SalderenPage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://energiekenner.nl" },
          { name: "Salderingsregeling", url: "https://energiekenner.nl/salderen" },
        ]}
      />

      {/* Hero */}
      <PageHero
        badge="Wetgeving 2027"
        title="Salderingsregeling stopt in 2027"
        highlight="Wat betekent dat voor jou?"
        description="De salderingsregeling wordt per 1 januari 2027 afgeschaft. Miljoenen zonnepaneelhouders worden geraakt. Wat verandert er precies, en hoe bereid je je voor?"
        accentColor="amber"
      />

      {/* Inhoudsopgave */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <nav className="rounded-xl border border-border bg-white p-6">
          <h2 className="font-semibold text-text-main mb-3">In dit artikel</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-primary">
            <li><a href="#wat-is-salderen" className="hover:underline">Wat is salderen en hoe werkt het?</a></li>
            <li><a href="#waarom-afgeschaft" className="hover:underline">Waarom wordt de regeling afgeschaft?</a></li>
            <li><a href="#impact" className="hover:underline">Wat verandert er voor jou na 2027?</a></li>
            <li><a href="#terugleverkosten" className="hover:underline">Terugleverkosten: de verborgen kosten</a></li>
            <li><a href="#slimme-meter" className="hover:underline">Slimme meter wordt verplicht</a></li>
            <li><a href="#voorbereiden" className="hover:underline">Zo bereid je je voor</a></li>
            <li><a href="#contract" className="hover:underline">Dynamisch of vast contract na 2027?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </nav>
      </section>

      {/* 1. Wat is salderen */}
      <section id="wat-is-salderen" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">1. Wat is salderen en hoe werkt het?</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De salderingsregeling bestaat sinds 2004 en is bedoeld om de aanschaf van zonnepanelen aantrekkelijker te maken. Het principe is simpel: de stroom die jouw zonnepanelen op zonnige momenten terugleveren aan het net, mag je wegstrepen tegen de stroom die je op andere momenten afneemt. Op je jaarafrekening betaal je dan alleen over het verschil.
            </p>
            <p>
              Het grote voordeel zit niet alleen in de besparing op de kale stroomprijs. Omdat je ook de energiebelasting en btw bespaart over elke gesaldeerde kWh, is een teruggeleverde kWh in de zomer precies evenveel waard als een afgenomen kWh in de winter. Dat maakt het rendement van zonnepanelen bijzonder aantrekkelijk.
            </p>
          </div>

          {/* Waarde tabel */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Component</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Bij saldering (1-op-1)</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Bij overschot (terugleververgoeding)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">Leveringstarief</td>
                  <td className="p-3 text-text-muted">Volledig verrekend</td>
                  <td className="p-3 text-text-muted">Beperkte vergoeding (&euro; 0,05 - &euro; 0,12)</td>
                </tr>
                <tr className="border-b border-border bg-stone-50/60">
                  <td className="p-3 font-medium text-text-main">Energiebelasting</td>
                  <td className="p-3 text-text-muted">Volledig verrekend</td>
                  <td className="p-3 text-text-muted">Niet vergoed</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">Btw (21%)</td>
                  <td className="p-3 text-text-muted">Volledig verrekend</td>
                  <td className="p-3 text-text-muted">Niet vergoed</td>
                </tr>
                <tr className="border-b border-border bg-stone-50/60">
                  <td className="p-3 font-medium text-text-main">Vermindering energiebelasting</td>
                  <td className="p-3 text-text-muted">Altijd van toepassing</td>
                  <td className="p-3 text-text-muted">Altijd van toepassing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Lever je meer stroom terug dan je afneemt? Dan ontvang je voor het overschot slechts een terugleververgoeding, die een stuk lager ligt dan het reguliere tarief. Overdimensioneer je systeem daarom niet - stem het af op je werkelijke verbruik.
            </p>
          </div>
        </article>
      </section>

      {/* 2. Waarom afgeschaft */}
      <section id="waarom-afgeschaft" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">2. Waarom wordt de regeling afgeschaft?</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De weg naar afschaffing was lang. Het oorspronkelijke plan was een geleidelijke afbouw vanaf 2025 tot 2031. De Eerste Kamer verwierp dat voorstel op 13 februari 2024, onder meer vanuit zorgen over de financiele positie van huurders. Na de vorming van een nieuw kabinet werd alsnog een volledige afschaffing per 2027 voorgesteld, die op 17 december 2024 door de Eerste Kamer werd aangenomen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Fiscale rechtvaardigheid",
                desc: "Salderen kost de staat jaarlijks miljarden aan misgelopen belastinginkomsten. Huishoudens zonder panelen betalen indirect mee via hogere stroomprijzen.",
                color: "amber",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Netstabiliteit",
                desc: "Salderen stimuleert niet om stroom direct te gebruiken. Dat leidt tot overbelasting van het net tijdens zonnige uren, met mogelijke spanningsproblemen.",
                color: "red",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
                title: "Ongelijkheid",
                desc: "Vooral eigenaren van koopwoningen profiteren. Huurders en huishoudens zonder geschikt dak betalen mee aan de voordelen van zonnepaneelbezitters.",
                color: "purple",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Marktrijpheid",
                desc: "Zonnepanelen zijn inmiddels zo goedkoop en effici&euml;nt dat ze ook zonder intensieve overheidssteun rendabel blijven.",
                color: "emerald",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl bg-${item.color}-50/50 border border-${item.color}-200 p-6`}>
                <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 mb-3`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-text-main mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tijdlijn */}
          <div className="mt-8">
            <h3 className="font-semibold text-text-main mb-4">Tijdlijn</h3>
            <div className="space-y-4">
              {[
                { year: "2004", event: "Salderingsregeling ingevoerd als stimulans voor zonnepanelen" },
                { year: "Feb 2024", event: "Eerste Kamer verwerpt geleidelijke afbouw (2025-2031)" },
                { year: "Nov 2024", event: "Tweede Kamer stemt voor volledige afschaffing per 2027" },
                { year: "Dec 2024", event: "Eerste Kamer bekrachtigt de Wet be\u00ebindiging salderingsregeling" },
                { year: "Jan 2025", event: "Wet gepubliceerd in het Staatsblad" },
                { year: "1 jan 2027", event: "Salderingsregeling definitief afgeschaft" },
              ].map((item, idx) => (
                <div key={item.year} className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-24 text-right text-sm font-bold ${idx === 5 ? "text-amber-600" : "text-text-main"}`}>
                    {item.year}
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-amber-400 mt-1.5 ring-4 ring-amber-100" />
                  <p className={`text-sm ${idx === 5 ? "text-amber-700 font-semibold" : "text-text-muted"}`}>{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      {/* 3. Impact */}
      <section id="impact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">3. Wat verandert er voor jou na 2027?</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Vanaf 2027 betaal je over elke afgenomen kWh de volledige energiebelasting en btw, ongeacht hoeveel je teruglevert. Het rendement van je zonnepanelen hangt dan vooral af van hoeveel stroom je zelf direct verbruikt. Het verschil in waarde is enorm: zelf verbruikte stroom bespaart je circa &euro; 0,25 tot &euro; 0,30 per kWh, terwijl teruggeleverde stroom netto slechts &euro; 0,05 oplevert.
            </p>
          </div>

          {/* Voor/na vergelijking */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Kenmerk</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Tot en met 2026</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Vanaf 2027</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">Waarde teruggeleverde kWh</td>
                  <td className="p-3 text-text-muted">Gelijk aan inkoopprijs incl. belastingen</td>
                  <td className="p-3 text-text-muted">Minimaal 50% van kaal tarief</td>
                </tr>
                <tr className="border-b border-border bg-stone-50/60">
                  <td className="p-3 font-medium text-text-main">Energiebelasting op afname</td>
                  <td className="p-3 text-text-muted">Verrekend met teruglevering</td>
                  <td className="p-3 text-text-muted">Volledig verschuldigd over elke kWh</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">Terugverdientijd (gemiddeld)</td>
                  <td className="p-3 text-text-muted">5 - 6 jaar</td>
                  <td className="p-3 text-text-muted">9 - 11 jaar</td>
                </tr>
                <tr className="border-b border-border bg-stone-50/60">
                  <td className="p-3 font-medium text-text-main">Rendementsfocus</td>
                  <td className="p-3 text-text-muted">Maximale jaaropbrengst</td>
                  <td className="p-3 text-text-muted">Maximaal direct eigen verbruik</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl bg-red-50 border border-red-200 p-6">
            <h3 className="font-semibold text-red-900 mb-2">Belangrijk om te weten</h3>
            <p className="text-sm text-red-800">
              Zonnepanelen blijven rendabel na 2027, ook zonder saldering. Ze gaan gemiddeld 25 jaar mee en leveren nog steeds een flinke besparing op ten opzichte van huishoudens zonder eigen opwek. De sleutel is: verhoog je eigen verbruik zo veel mogelijk.
            </p>
          </div>
        </article>
      </section>

      {/* 4. Terugleverkosten */}
      <section id="terugleverkosten" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">4. Terugleverkosten: de verborgen kosten</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Sinds 2024 rekenen vrijwel alle grote energieleveranciers terugleverkosten. Dit zijn maandelijkse bedragen die je betaalt voor het terugleveren van zonnestroom. Leveranciers voeren aan dat zij hoge kosten maken voor het verwerken van zonnestroom, waaronder onbalanskosten op de groothandelsmarkt.
            </p>
            <p>
              De ACM heeft onderzocht of deze kosten redelijk zijn. Conclusie: de kosten zijn niet onredelijk, maar wel moeilijk vergelijkbaar door verschillende rekenmethodes. Daarom verplicht de ACM leveranciers vanaf 2026 om terugleverkosten uitsluitend per kWh in rekening te brengen.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Leverancier</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Rekenmethode</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Indicatie kosten</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">Vattenfall</td>
                  <td className="p-3 text-text-muted">Vaste kosten bij &gt; 500 kWh teruglevering</td>
                  <td className="p-3 text-text-muted">Afhankelijk van schalen</td>
                </tr>
                <tr className="border-b border-border bg-stone-50/60">
                  <td className="p-3 font-medium text-text-main">Budget Energie</td>
                  <td className="p-3 text-text-muted">Schalen op basis van teruglevering</td>
                  <td className="p-3 text-text-muted">&euro; 3 tot &euro; 90 per maand</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">Delta Energie</td>
                  <td className="p-3 text-text-muted">Vanaf 2027 per kWh</td>
                  <td className="p-3 text-text-muted">&euro; 0,0574 per kWh</td>
                </tr>
                <tr className="border-b border-border bg-stone-50/60">
                  <td className="p-3 font-medium text-text-main">Dynamische aanbieders</td>
                  <td className="p-3 text-text-muted">Vaak geen vaste terugleverkosten</td>
                  <td className="p-3 text-text-muted">Verrekend via uurprijs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              De netto-opbrengst van je zonnestroom is de terugleververgoeding minus de terugleverkosten. Bij sommige leveranciers kan dit negatief uitpakken bij veel teruglevering. Vergelijk daarom altijd de totale kosten, niet alleen het leveringstarief.
            </p>
          </div>

          <div className="mt-4">
            <Link href="/zonnepanelen" className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-800 transition-colors">
              Vergelijk terugleverkosten per leverancier
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      {/* 5. Slimme meter */}
      <section id="slimme-meter" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">5. Slimme meter wordt verplicht</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De afschaffing van de salderingsregeling is technisch onmogelijk zonder een meter die afname en teruglevering apart registreert. De oude Ferrarismeter, die simpelweg terugdraait bij teruglevering, verdwijnt definitief.
            </p>
            <p>
              De nieuwe Energiewet, die per 1 januari 2026 van kracht wordt, verplicht alle huishoudens met een verouderde meter om een digitale of slimme meter te laten installeren. Nog circa 500.000 huishoudens hebben een analoge meter. Weigeren kan leiden tot boetes of dwangsommen van de Rijksinspectie Digitale Infrastructuur (RDI).
            </p>
          </div>

          <div className="mt-6 rounded-xl bg-blue-50 border border-blue-200 p-6">
            <h3 className="font-semibold text-text-main mb-2">Privacy en de slimme meter</h3>
            <p className="text-sm text-text-muted">
              Je mag de &lsquo;slimme&rsquo; functies (het op afstand uitlezen) administratief laten uitschakelen. De meter moet fysiek echter wel in staat zijn om afname en teruglevering apart te meten. Zonder zo&apos;n meter kan je leverancier na 2027 geen correcte jaarafrekening maken.
            </p>
          </div>

          <div className="mt-4">
            <Link href="/energiewet" className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-800 transition-colors">
              Lees meer over de Energiewet 2026
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      {/* 6. Voorbereiden */}
      <section id="voorbereiden" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">6. Zo bereid je je voor op het einde van salderen</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Na 2027 draait alles om zelfverbruik: elke kWh die je zelf opwekt en direct gebruikt, is circa vijf keer zoveel waard als een kWh die je teruglevert. Er zijn meerdere manieren om je zelfverbruik te verhogen.
            </p>
          </div>

          {/* Strategieen */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-xl border-2 border-amber-200 bg-amber-50/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main mb-2">Verbruik verschuiven</h3>
              <p className="text-sm text-text-muted mb-2">
                Draai de wasmachine, vaatwasser en droger overdag als de zon schijnt. Hiermee stijgt je zelfverbruik van gemiddeld 30% naar 40-45%.
              </p>
              <p className="text-xs text-amber-700 font-medium">Kosten: gratis</p>
            </div>

            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main mb-2">Thuisbatterij</h3>
              <p className="text-sm text-text-muted mb-2">
                Sla overtollige zonnestroom overdag op en gebruik deze &apos;s avonds. Verhoogt zelfverbruik tot 65-85%. Terugverdientijd: 6-8 jaar.
              </p>
              <p className="text-xs text-emerald-700 font-medium">Investering: &euro; 4.000 - &euro; 8.000</p>
            </div>

            <div className="rounded-xl border-2 border-blue-200 bg-blue-50/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main mb-2">Elektrische auto (V2G)</h3>
              <p className="text-sm text-text-muted mb-2">
                Laad je EV overdag met zonnestroom via een slimme laadpaal. Met V2G (Vehicle-to-Grid) kan de auto zelfs stroom terugleveren aan je woning.
              </p>
              <p className="text-xs text-blue-700 font-medium">Slimme laadpaal: &euro; 800 - &euro; 2.000</p>
            </div>

            <div className="rounded-xl border-2 border-rose-200 bg-rose-50/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main mb-2">Warmtepomp</h3>
              <p className="text-sm text-text-muted mb-2">
                Warm overdag een buffervat op met zonnestroom. Vermindert de noodzaak voor elektrisch verwarmen in de avonduren.
              </p>
              <p className="text-xs text-rose-700 font-medium">Investering: &euro; 8.000 - &euro; 15.000</p>
            </div>
          </div>

          {/* Batterij ROI tabel */}
          <div className="mt-8">
            <h3 className="font-semibold text-text-main mb-4">Thuisbatterij: verwacht rendement na 2027</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-amber-50">
                    <th className="text-left p-3 font-semibold text-text-main border-b border-border">Scenario</th>
                    <th className="text-left p-3 font-semibold text-text-main border-b border-border">Capaciteit</th>
                    <th className="text-left p-3 font-semibold text-text-main border-b border-border">Zelfvoorziening</th>
                    <th className="text-left p-3 font-semibold text-text-main border-b border-border">ROI (schatting)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">Klein huishouden</td>
                    <td className="p-3 text-text-muted">5 kWh</td>
                    <td className="p-3 text-text-muted">65%</td>
                    <td className="p-3 text-text-muted">18,5%</td>
                  </tr>
                  <tr className="border-b border-border bg-stone-50/60">
                    <td className="p-3 font-medium text-text-main">Gemiddeld gezin</td>
                    <td className="p-3 text-text-muted">8 kWh</td>
                    <td className="p-3 text-text-muted">75%</td>
                    <td className="p-3 text-text-muted">17,5%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">Groot verbruik / EV</td>
                    <td className="p-3 text-text-muted">12 kWh</td>
                    <td className="p-3 text-text-muted">82%</td>
                    <td className="p-3 text-text-muted">15,1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/thuisbatterij" className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-800 transition-colors">
              Meer over thuisbatterijen
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/slimme-technologie" className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-800 transition-colors">
              Slim energie sturen
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      {/* 7. Contract */}
      <section id="contract" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">7. Dynamisch of vast contract na 2027?</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De keuze van je energiecontract wordt na 2027 een strategische beslissing. Bij een vast of variabel contract vervalt het saldeervoordeel volledig. Bij een dynamisch contract ontvang je de actuele uurprijs voor je teruggeleverde stroom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50/50 p-6">
              <h3 className="font-bold text-text-main mb-2">Vast/variabel contract</h3>
              <ul className="text-sm text-text-muted space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">+</span>
                  <span>Voorspelbare maandkosten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">+</span>
                  <span>Geen risico op negatieve prijzen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">&minus;</span>
                  <span>Hogere terugleverkosten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">&minus;</span>
                  <span>Lagere terugleververgoeding</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
              <h3 className="font-bold text-text-main mb-2">Dynamisch contract</h3>
              <ul className="text-sm text-text-muted space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">+</span>
                  <span>Actuele marktprijs voor teruglevering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">+</span>
                  <span>Vaak geen vaste terugleverkosten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">&minus;</span>
                  <span>Risico op prijspieken</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">&minus;</span>
                  <span>Negatieve prijzen mogelijk (je betaalt om terug te leveren)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Heb je een thuisbatterij of warmtepomp waarmee je verbruik kunt verschuiven? Dan biedt een dynamisch contract de meeste flexibiliteit na 2027. Zonder slimme apparaten is een vast contract voor de meeste huishoudens de veiligste keuze.
            </p>
          </div>

          <div className="mt-4">
            <Link href="/dynamisch" className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-800 transition-colors">
              Bekijk dynamische tarieven
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-6">Veelgestelde vragen over salderen</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className={`group rounded-lg border border-border overflow-hidden ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}
              >
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-stone-50 transition-colors">
                  <h3 className="font-semibold text-text-main text-sm pr-4">{item.question}</h3>
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-text-muted transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-text-muted leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </article>
      </section>

      {/* Keuzehulp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <SalderenKeuzehulp />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <div className="rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Bereid je voor op 2027</h2>
          <p className="text-amber-100 mb-6 max-w-xl mx-auto">
            Vergelijk nu energieleveranciers op terugleverkosten, tarieven en contractvorm. Ontdek welk contract het beste past bij jouw situatie na het einde van de salderingsregeling.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#vergelijk"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-amber-700 font-semibold hover:bg-amber-50 transition-colors shadow-lg"
            >
              Direct energie vergelijken
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/thuisbatterij"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              Thuisbatterij bekijken
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
