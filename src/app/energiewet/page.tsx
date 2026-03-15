import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Energiewet 2026: Wetgeving & Regelingen | Energiekenner.nl",
  description: "Overzicht van de energiewet 2026, subsidies en regelingen voor duurzame energie in Nederland.",
  alternates: {
    canonical: "https://energiekenner.nl/energiewet",
  },
};

const rights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Flitsoverstap in 5 werkdagen",
    description: "De opzegtermijn is verkort van 30 dagen naar slechts 5 werkdagen. Speel direct in op prijsdalingen.",
    color: "blue",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Alleen geld als bonus",
    description: "Welkomstbonussen mogen uitsluitend in geld worden uitgekeerd. Geen tablets, cadeaubonnen of andere fysieke producten meer.",
    color: "green",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "14 dagen bedenktijd",
    description: "Na ontvangst van je contractbevestiging kun je altijd binnen 14 dagen zonder opgave van reden annuleren.",
    color: "purple",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Bescherming bij faillissement",
    description: "Als je leverancier omvalt, word je automatisch overgezet naar een andere partij. Je zit nooit zonder stroom of gas.",
    color: "red",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Transparante modelcontracten",
    description: "Elke leverancier moet gestandaardiseerde contracten aanbieden. Terugleverkosten worden verplicht per kWh getoond.",
    color: "teal",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Energie delen met buren",
    description: "Sinds 2026 mag je officieel stroom verkopen aan buren of familieleden. Beide partijen hebben een slimme meter nodig.",
    color: "orange",
  },
];

const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-100" },
  green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-100" },
  red: { bg: "bg-red-50", text: "text-red-600", iconBg: "bg-red-100" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", iconBg: "bg-teal-100" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", iconBg: "bg-orange-100" },
};

export default function EnergiewetPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Energiewet 2026", href: "/energiewet" },
      ]} />
      <PageHero badge="Sinds 1 januari 2026" title="Energiewet 2026" highlight="Jouw nieuwe rechten" description="De nieuwe Energiewet geeft je als consument meer macht, bescherming en transparantie. Dit zijn je rechten." accentColor="purple" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-8">Jouw 6 nieuwe rechten</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((right) => {
            const colors = colorMap[right.color];
            return (
              <div key={right.title} className={`rounded-xl border border-border p-6 ${colors.bg} hover:shadow-md transition-shadow`}>
                <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center ${colors.text} mb-4`}>
                  {right.icon}
                </div>
                <h3 className="font-semibold text-lg text-text-main">{right.title}</h3>
                <p className="text-sm text-text-muted mt-2">{right.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dynamische contracten verplicht */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-8">
          <h2 className="text-xl font-bold text-text-main mb-3">Dynamisch contract nu verplicht aanbod</h2>
          <p className="text-sm text-indigo-900">
            Onder de nieuwe Energiewet zijn leveranciers met meer dan 200.000 klanten verplicht om dynamische contracten aan te bieden. Dit vergroot de concurrentie en transparantie. De kern is een koppeling aan de EPEX-spotmarkt, waarbij de stroomprijs per uur wordt vastgesteld op basis van vraag en aanbod.
          </p>
          <Link href="/dynamisch" className="inline-flex items-center mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
            Vergelijk dynamische tarieven
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Juridische context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-6">Juridische context: terugleverkosten</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border p-6">
            <h3 className="font-semibold text-text-main mb-2">ACM Modelcontracten</h3>
            <p className="text-sm text-text-muted">
              Per 1 januari 2026 zijn terugleverkosten verplicht als aparte component per kWh opgenomen in modelcontracten. Dit maakt een einde aan het verstoppen van kosten in verhoogde vastrechten.
            </p>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h3 className="font-semibold text-text-main mb-2">Uitspraak Rechtbank Limburg</h3>
            <p className="text-sm text-text-muted">
              De rechter oordeelde dat een leverancier de terugleververgoeding eenzijdig mag verlagen. Een 1-op-1 koppeling tussen lever- en terugleverprijs mag niet voor onbepaalde tijd verwacht worden.
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge Base Article 1: Energiewet basis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">Energiewet basis: alles op nieuw</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Op 1 januari 2026 is de Energiewet in werking getreden. Deze vervangt twee oude wetten: de Elektriciteitswet uit 1998 en de Gaswet. Dit is niet zomaar een update - het is een compleet heruitgevonden regelkader voor de energiemarkt van de 21e eeuw.
            </p>
            <p>
              De grootste conceptuele verandering is de introductie van de "actieve afnemer" (active consumer). Dit ben jij als je niet alleen energie verbruikt, maar ook produceert (bijvoorbeeld via zonnepanelen), opslaat (batterij), of deelt met anderen. De Energiewet erkent dat consumenten niet langer passief zijn.
            </p>
            <p>
              Een belangrijk detail voor zonnepaneel-eigenaren: je mag nu onder bepaalde voorwaarden zelf stroom verkopen zonder leveringsvergunning. Dit geldt voor kleine verbindingen (tot een bepaalde capaciteit). De Energiewet stelt veel soepeler regels dan haar voorgangers.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Denk aan de Energiewet als je "grondwet" voor slim energiebeheer. Ze geeft jou meer speelruimte dan ooit. Bijzonder nuttig als je zonnepanelen hebt of van plan bent die aan te schaffen.
            </p>
          </div>
          <p className="text-xs text-text-muted mt-4">Bron: Energiewet 2026, Kamer van Koophandel</p>
        </article>
      </section>

      {/* Knowledge Base Article 2: Opzegtermijn 5 werkdagen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">Opzegtermijn 5 werkdagen: flits overstappen</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De opzegtermijn voor energiecontracten is in 2026 drastisch ingekort. Waar je vroeger 30 dagen moest wachten, is het nu slechts 5 werkdagen. Dit is een gamechanger voor consumenten die actief willen profiteren van prijsdalingen.
            </p>
            <p>
              Dit betekent dat je veel sneller kunt reageren op marktveranderingen. Zakt de stroomprijs plots? Dan kun je nu snel switchen naar een goedkoper contract. Geen maandenlange verplichting meer aan een dure deal.
            </p>
            <p>
              Een belangrijk onderscheid: opzegtermijn is niet hetzelfde als opzegvergoeding. Je mag sneller opzeggen (5 werkdagen), maar als je een vast contract hebt afgesloten, kan de leverancier nog steeds een vergoeding vragen als je voortijdig stopt. Lees je contract goed - modelcontracten moeten dit transparant vermelden.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Maak van "5 werkdagen" onderdeel van je routinecheck. Controleer eens per maand of er goedkopere aanbiedingen zijn. Met korte opzegperiodes loont het nu echt om actief te blijven.
            </p>
          </div>
          <p className="text-xs text-text-muted mt-4">Bron: ACM Energiewet 2026, consumentengids</p>
        </article>
      </section>

      {/* Knowledge Base Article 3: Modelcontracten 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">Modelcontracten 2026: eindelijk transparantie</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De Autoriteit Consument & Markt (ACM) heeft voor 2026 nieuwe standaardcontracten vastgesteld. Elke grote leverancier moet minstens twee contracttypen aanbieden: een vast contract (fixed term) en een contract voor onbepaalde duur (indefinite).
            </p>
            <p>
              Het grote voordeel: deze modelcontracten zijn gestandaardiseerd en vergelijkbaar. Je kunt ze echt naast elkaar leggen zonder in de fijne print verdwaald te raken. Geen verborgen termen meer in onleesbare bijlagen.
            </p>
            <p>
              Voor zonnepaneel-eigenaren is er een specifiek verscherpte regel: de terugleverkosten (wat je krijgt als je stroom teruggeeft) moeten nu expliciet per kWh worden vermeld. Niet verstopt in een vastrecht of verdeeld over onbegrijpelijke componenten. Dit maakt vergelijken veel eerlijker.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Gebruik modelcontracten als je benchmark. Als een leverancier iets aanpast of afwijkt, weet je precies wat anders is. Dit geeft je macht in onderhandelingen.
            </p>
          </div>
          <p className="text-xs text-text-muted mt-4">Bron: ACM Modelcontracten 2026</p>
        </article>
      </section>

      {/* Knowledge Base Article 4: Welkomstbonussen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">Welkomstbonussen: alleen geld, geen gadgets</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Jaren lang konden leveranciers consumenten lokken met allerlei voordelen: gratis tablets, cadeaubonnen, kerstpakketten. Sinds 2026 mag dat niet meer. Welkomstbonussen mogen uitsluitend in contanten (of creditering op je rekening) worden gegeven.
            </p>
            <p>
              Dit is geen toeval. De regelgever wil voorkomen dat bonussen verwarrend werken. Een tablet kost de leverancier minder dan je zou denken, maar jij ervaart het als veel meer waard. Contanten zijn helder: je ziet precies wat je krijgt.
            </p>
            <p>
              Hoeveel mogen leveranciers je eigenlijk geven? De Consumentenbond heeft geconstateerd dat bonussen tot €688 voorkomen. Maar bedenk: een bonus van €500 is aardig, maar betekent niets als je jaarlijks €600 meer betaalt dan bij een concurrent.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Focus altijd op de totale jaarlijkse kosten, niet op de welkomstbonus. De bonus is icing op de cake - het contract zelf moet goed zijn.
            </p>
          </div>
          <p className="text-xs text-text-muted mt-4">Bron: Consumentenbond, ACM richtlijnen 2026</p>
        </article>
      </section>

      {/* Knowledge Base Article 5: Bescherming bij faillissement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">Bescherming bij faillissement: je raakt nooit zonder stroom</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Een van de zwaarwegendste beschermingen van de Energiewet: als je leverancier failliet gaat, gebeurt het volgende automatisch. Je wordt binnen 20 werkdagen overgezet naar een nieuwe leverancier. Geen onderbreking, geen gedoe.
            </p>
            <p>
              Let op: gedurende de overstap (de "vensterperiode") kun je zelf niet switchen naar een ander bedrijf. Je zit even vast bij de noodfornuitswijzer. Dit is een bescherming - het zorgt voor stabiliteit en voorkoomt chaos op de markt. Meestal duurt dit niet meer dan 20 dagen.
            </p>
            <p>
              Een praktisch detail: je oude contractvoorwaarden gelden vaak nog even door totdat het contract officieel overgezet is. Zorg dat je je meterstand noteert voordat de overgang plaatsvindt. Dit voorkomt latere disputen over verbruik.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Noteer je meterstand als je hoort dat je leverancier in problemen zit. Dit is belangrijk voor afstemming tussen de oude en nieuwe leverancier. Je hebt rechtszekerheid.
            </p>
          </div>
          <p className="text-xs text-text-muted mt-4">Bron: Energiewet 2026, artikel faillissementsbescherming</p>
        </article>
      </section>

      {/* Actieve afnemer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">De actieve afnemer: jouw nieuwe rol</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De Energiewet introduceert een nieuw begrip: de &quot;actieve afnemer&quot;. Dit is een eindgebruiker die niet alleen energie verbruikt, maar ook produceert (zonnepanelen), opslaat (thuisbatterij), verkoopt of deelt. De wet erkent dat consumenten niet langer passief zijn.
            </p>
            <p>
              Als actieve afnemer met een kleine aansluiting mag je onder voorwaarden zonder vergunning leveren — zolang dat niet je hoofdactiviteit is. Dit opent de deur naar{" "}
              <Link href="/energie-delen" className="text-primary hover:underline">energie delen met buren</Link>,{" "}
              <Link href="/thuisbatterij" className="text-primary hover:underline">batterij-arbitrage</Link> en deelname aan{" "}
              <Link href="/duurzaamheid" className="text-primary hover:underline">energiegemeenschappen</Link>.
            </p>
          </div>
        </article>
      </section>

      {/* Gerelateerde pagina's */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-xl font-bold text-text-main mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { href: "/energie-delen", title: "Energie Delen", desc: "Verkoop stroom aan buren sinds de Energiewet", color: "bg-emerald-100 text-emerald-600" },
            { href: "/opzegvergoeding", title: "Opzegvergoeding", desc: "Wat kost voortijdig opzeggen?", color: "bg-rose-100 text-rose-600" },
            { href: "/dynamisch", title: "Dynamische tarieven", desc: "Verplicht aanbod sinds 2026", color: "bg-blue-100 text-blue-600" },
            { href: "/salderen", title: "Salderingsregeling", desc: "Laatste jaar salderen in 2026", color: "bg-green-100 text-green-600" },
            { href: "/thuisbatterij", title: "Thuisbatterij", desc: "Opslaan en handelen als actieve afnemer", color: "bg-amber-100 text-amber-600" },
            { href: "/energie-apps", title: "Energie-Apps", desc: "De beste apps voor slim energiebeheer", color: "bg-purple-100 text-purple-600" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-xl border border-border bg-white p-5 hover:shadow-md transition-all group">
              <div className={`w-9 h-9 rounded-lg ${link.color} flex items-center justify-center mb-3`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-main group-hover:text-primary transition-colors">{link.title}</h3>
              <p className="text-xs text-text-muted mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <FAQSchema items={[
          { question: "Wat verandert er door de Energiewet 2026?", answer: "De belangrijkste veranderingen zijn: opzegtermijn van 5 werkdagen, welkomstbonussen alleen in geld, 14 dagen bedenktijd, bescherming bij faillissement, transparante modelcontracten en het recht om energie te delen met buren." },
          { question: "Kan ik sneller overstappen sinds de Energiewet?", answer: "Ja, de opzegtermijn is verkort van 30 naar 5 werkdagen. Je nieuwe leverancier regelt alles. Let op: bij vaste contracten kan er nog een opzegvergoeding gelden als je voortijdig stopt." },
          { question: "Wat is een actieve afnemer?", answer: "Een actieve afnemer is iemand die naast energieverbruik ook produceert (zonnepanelen), opslaat (batterij) of deelt. De Energiewet geeft je als actieve afnemer het recht om zonder vergunning te leveren, zolang het niet je hoofdactiviteit is." },
          { question: "Zijn dynamische contracten verplicht?", answer: "Leveranciers met meer dan 200.000 klanten moeten een dynamisch contract aanbieden. Je bent niet verplicht er een af te sluiten, maar het vergroot je keuze." },
          { question: "Wat gebeurt er als mijn leverancier failliet gaat?", answer: "Je wordt automatisch binnen 20 werkdagen overgezet naar een nieuwe leverancier. Je zit nooit zonder stroom. Noteer wel je meterstand als je hoort dat je leverancier in problemen zit." },
          { question: "Mag ik stroom verkopen aan mijn buren?", answer: "Ja, sinds de Energiewet 2026 mag je als actieve afnemer overtollige stroom delen of verkopen aan buren en familieleden. Beide partijen hebben een slimme meter nodig." },
        ]} />
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-6">Veelgestelde vragen over de Energiewet</h2>
          <div className="space-y-4">
            {[
              { question: "Wat verandert er door de Energiewet 2026?", answer: "De belangrijkste veranderingen zijn: opzegtermijn van 5 werkdagen, welkomstbonussen alleen in geld, 14 dagen bedenktijd, bescherming bij faillissement, transparante modelcontracten en het recht om energie te delen met buren." },
              { question: "Kan ik sneller overstappen sinds de Energiewet?", answer: "Ja, de opzegtermijn is verkort van 30 naar 5 werkdagen. Je nieuwe leverancier regelt alles. Let op: bij vaste contracten kan er nog een opzegvergoeding gelden als je voortijdig stopt." },
              { question: "Wat is een actieve afnemer?", answer: "Een actieve afnemer is iemand die naast energieverbruik ook produceert (zonnepanelen), opslaat (batterij) of deelt. De Energiewet geeft je als actieve afnemer het recht om zonder vergunning te leveren, zolang het niet je hoofdactiviteit is." },
              { question: "Zijn dynamische contracten verplicht?", answer: "Leveranciers met meer dan 200.000 klanten moeten een dynamisch contract aanbieden. Je bent niet verplicht er een af te sluiten, maar het vergroot je keuze." },
              { question: "Wat gebeurt er als mijn leverancier failliet gaat?", answer: "Je wordt automatisch binnen 20 werkdagen overgezet naar een nieuwe leverancier. Je zit nooit zonder stroom. Noteer wel je meterstand als je hoort dat je leverancier in problemen zit." },
              { question: "Mag ik stroom verkopen aan mijn buren?", answer: "Ja, sinds de Energiewet 2026 mag je als actieve afnemer overtollige stroom delen of verkopen aan buren en familieleden. Beide partijen hebben een slimme meter nodig." },
            ].map((item, idx) => (
              <details key={idx} className={`group rounded-lg border border-border overflow-hidden ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-stone-50 transition-colors">
                  <h3 className="font-semibold text-text-main text-sm pr-4">{item.question}</h3>
                  <svg className="w-5 h-5 flex-shrink-0 text-text-muted transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8">
        <div className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Profiteer van je nieuwe rechten</h2>
          <p className="mt-2 text-indigo-100">Met de flitsoverstap switch je in 5 dagen. Vergelijk nu en bespaar.</p>
          <Link href="/#vergelijk" className="inline-flex items-center mt-4 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Vergelijk leveranciers
          </Link>
        </div>
      </section>
    </>
  );
}
