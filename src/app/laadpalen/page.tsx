import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Laadpalen 2026: Types, Kosten & Installatie | Energiekenner.nl",
  description: "Alles over thuis- en openbare laadpalen. Kosten, installatie en steden laadpaalnetwerk.",
  alternates: {
    canonical: "https://energiekenner.nl/laadpalen",
  },
};

const faqItems = [
  {
    question: "Wat kost een laadpaal voor thuis?",
    answer:
      "Een thuislaadpaal kost inclusief installatie gemiddeld €1.200 tot €2.500. De hardware zelf kost €400 tot €1.800 afhankelijk van het model en de functies. Installatie kost €300 tot €800. Bij een 3-fase aansluiting komen daar eventueel verzwaringskosten bij.",
  },
  {
    question: "Hoeveel kost thuis laden per kilometer?",
    answer:
      "Bij een gemiddeld verbruik van 20 kWh per 100 km en een thuistarief van €0,25/kWh kost thuis laden circa €5 per 100 km. Dat is ruim 50% goedkoper dan benzine (€13,33 per 100 km bij 1:15 en €2,00/liter) en tot 75% goedkoper dan snelladen langs de snelweg.",
  },
  {
    question: "Heb ik een 3-fase aansluiting nodig?",
    answer:
      "Niet per se, maar het is wel aan te raden voor volledig elektrische auto's. Met 1 fase laad je maximaal 3,7 tot 7,4 kW. Met 3 fasen bereik je 11 kW, waardoor een gemiddelde accu van 60 kWh in 5-6 uur vol is in plaats van 16-24 uur. Verzwaren kost €200 tot €500 via je netbeheerder.",
  },
  {
    question: "Wat zijn ERE-certificaten?",
    answer:
      "ERE-certificaten (Emissiereductie-eenheden) zijn de opvolger van HBE's. Oliemaatschappijen moeten emissierechten kopen van partijen die schone energie leveren aan wegvervoer. Als thuislader met MID-meter kun je circa €0,10 per geladen kWh terugverdienen, oftewel zo'n €400 per jaar bij 4.000 kWh.",
  },
  {
    question: "Welke laadpaal is het beste voor bij zonnepanelen?",
    answer:
      "De Zappi V2 is speciaal ontworpen voor gebruik met zonnepanelen. Hij kan automatisch alleen het overschot van je zonnepanelen in de auto laden (Solar Tracking). De Wallbox Pulsar Plus met Eco-Smart biedt vergelijkbare functionaliteit.",
  },
  {
    question: "Kan mijn auto stroom terugleveren aan huis?",
    answer:
      "Ja, dat heet bidirectioneel laden (V2H/V2G). Je hebt een speciale lader nodig zoals de Wallbox Quasar 2 (±€5.800) en een compatibele auto. Steeds meer merken ondersteunen dit via CCS, waaronder Hyundai, Kia, Volvo en Renault. Een 77 kWh accu kan je huis 3-5 dagen voorzien.",
  },
];

export default function LaadpalenPage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://energiekenner.nl" },
          { name: "Laadpalen", url: "https://energiekenner.nl/laadpalen" },
        ]}
      />

      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Laadpalen", href: "/laadpalen" },
      ]} />
      <PageHero
        badge="Elektrisch rijden 2026"
        title="Laadpalen voor thuis"
        highlight="Kosten, vergelijking & subsidie"
        description="Nederland heeft een van de hoogste laadpuntdichtheden ter wereld. We leggen uit welke laadpaal bij jou past, wat het kost, en hoe je tot €400 per jaar kunt terugverdienen."
        accentColor="cyan"
      />

      {/* Inhoudsopgave */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <nav className="rounded-xl border border-border bg-white p-6">
          <h2 className="font-semibold text-text-main mb-3">In dit artikel</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-primary">
            <li><a href="#kosten" className="hover:underline">Wat kost laden? Thuis vs. publiek vs. snellader</a></li>
            <li><a href="#aansluiting" className="hover:underline">Welke aansluiting heb je nodig?</a></li>
            <li><a href="#vergelijking" className="hover:underline">Top 5 laadpalen vergeleken</a></li>
            <li><a href="#slim-laden" className="hover:underline">Slim laden met dynamische tarieven</a></li>
            <li><a href="#ere" className="hover:underline">ERE-certificaten: geld verdienen met laden</a></li>
            <li><a href="#subsidie" className="hover:underline">Subsidies en fiscale voordelen</a></li>
            <li><a href="#v2g" className="hover:underline">Bidirectioneel laden (V2G/V2H)</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </nav>
      </section>

      {/* 1. Kosten vergelijking */}
      <section id="kosten" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">1. Wat kost laden? De grote vergelijking</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-6">
            <p>
              De kosten per kilometer verschillen enorm afhankelijk van waar je laadt. Thuis laden is veruit het goedkoopst, zeker met zonnepanelen. We rekenen met een gemiddeld verbruik van 20 kWh per 100 km.
            </p>
          </div>

          {/* Visuele kostenvergelijking */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/50 p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-bold">
                Goedkoopst
              </div>
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-bold text-text-main mb-1">Thuis laden</h3>
              <p className="text-3xl font-extrabold text-emerald-600 mb-1">&euro; 5,00</p>
              <p className="text-xs text-text-muted">per 100 km</p>
              <div className="mt-3 w-full h-3 rounded-full bg-emerald-200">
                <div className="h-3 rounded-full bg-emerald-500" style={{ width: "23%" }} />
              </div>
              <p className="text-xs text-emerald-700 font-medium mt-2">&euro; 0,22 - &euro; 0,30 /kWh</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 text-center">
              <div className="text-3xl mb-2">🅿️</div>
              <h3 className="font-bold text-text-main mb-1">Publiek laden</h3>
              <p className="text-3xl font-extrabold text-amber-600 mb-1">&euro; 10,50</p>
              <p className="text-xs text-text-muted">per 100 km</p>
              <div className="mt-3 w-full h-3 rounded-full bg-amber-200">
                <div className="h-3 rounded-full bg-amber-500" style={{ width: "48%" }} />
              </div>
              <p className="text-xs text-amber-700 font-medium mt-2">&euro; 0,40 - &euro; 0,65 /kWh</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-text-main mb-1">Snelladen</h3>
              <p className="text-3xl font-extrabold text-red-600 mb-1">&euro; 17,50</p>
              <p className="text-xs text-text-muted">per 100 km</p>
              <div className="mt-3 w-full h-3 rounded-full bg-red-200">
                <div className="h-3 rounded-full bg-red-500" style={{ width: "80%" }} />
              </div>
              <p className="text-xs text-red-700 font-medium mt-2">&euro; 0,65 - &euro; 1,10 /kWh</p>
            </div>
          </div>

          {/* Jaarkosten tabel */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cyan-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Laadmethode</th>
                  <th className="text-right p-3 font-semibold text-text-main border-b border-border">Kosten/kWh</th>
                  <th className="text-right p-3 font-semibold text-text-main border-b border-border">Per 100 km</th>
                  <th className="text-right p-3 font-semibold text-text-main border-b border-border">Jaarkosten *</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "Thuis laden", kwh: "€ 0,25", per100: "€ 5,00", year: "€ 750", highlight: true },
                  { method: "Thuis + zonnepanelen", kwh: "€ 0,05", per100: "€ 1,00", year: "€ 150", highlight: true },
                  { method: "Publiek laden", kwh: "€ 0,52", per100: "€ 10,40", year: "€ 1.560", highlight: false },
                  { method: "Snelladen (snelweg)", kwh: "€ 0,87", per100: "€ 17,40", year: "€ 2.610", highlight: false },
                  { method: "Benzine (ter vergelijking)", kwh: "—", per100: "€ 13,33", year: "€ 2.000", highlight: false },
                ].map((row, idx) => (
                  <tr key={row.method} className={`border-b border-border ${idx % 2 === 1 ? "bg-stone-50/60" : ""} ${row.highlight ? "font-medium" : ""}`}>
                    <td className="p-3 text-text-main">
                      {row.highlight && <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2" />}
                      {row.method}
                    </td>
                    <td className="p-3 text-right text-text-muted">{row.kwh}</td>
                    <td className="p-3 text-right text-text-muted">{row.per100}</td>
                    <td className={`p-3 text-right font-semibold ${row.highlight ? "text-emerald-700" : "text-text-main"}`}>{row.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mt-2">* Gebaseerd op 15.000 km/jaar, 20 kWh per 100 km. Benzine: 1 op 15, €2,00/liter.</p>

          <div className="mt-6 p-4 bg-cyan-50 border-l-4 border-cyan-400 rounded">
            <p className="font-semibold text-cyan-900 mb-2">Kennertip</p>
            <p className="text-sm text-cyan-800">
              Met zonnepanelen daalt je thuislaadprijs naar bijna nul. Bij 15.000 km/jaar bespaar je dan &euro; 1.850 ten opzichte van benzine en &euro; 2.460 ten opzichte van snelladen. De investering in een thuislader verdien je in 1-2 jaar terug.
            </p>
          </div>
        </article>
      </section>

      {/* 2. Aansluiting */}
      <section id="aansluiting" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">2. Welke aansluiting heb je nodig?</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-6">
            <p>
              Het maximale laadvermogen hangt af van de zwakste schakel: je netaansluiting, de laadpaal, of de ingebouwde lader van je auto. Hieronder zie je welk vermogen mogelijk is per aansluitingstype.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cyan-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Aansluiting</th>
                  <th className="text-center p-3 font-semibold text-text-main border-b border-border">Fase</th>
                  <th className="text-center p-3 font-semibold text-text-main border-b border-border">Amp&egrave;re</th>
                  <th className="text-center p-3 font-semibold text-text-main border-b border-border">Max. vermogen</th>
                  <th className="text-center p-3 font-semibold text-text-main border-b border-border">Laadtijd 60 kWh</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Geschikt voor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Standaard", fase: "1-fase", amp: "16A", vermogen: "3,7 kW", tijd: "~16 uur", geschikt: "Hybrides, kleine accu's" },
                  { type: "Verzwaard", fase: "1-fase", amp: "32A", vermogen: "7,4 kW", tijd: "~8 uur", geschikt: "Moderne EV (1-fase lader)" },
                  { type: "Krachtstroom", fase: "3-fasen", amp: "16A", vermogen: "11 kW", tijd: "~5,5 uur", geschikt: "Standaard voor thuis" },
                  { type: "Krachtstroom hoog", fase: "3-fasen", amp: "32A", vermogen: "22 kW", tijd: "~3 uur", geschikt: "Zakelijk, semi-publiek" },
                ].map((row, idx) => (
                  <tr key={row.type} className={`border-b border-border ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                    <td className="p-3 font-medium text-text-main">{row.type}</td>
                    <td className="p-3 text-center">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-bold ${
                        row.fase === "3-fasen" ? "bg-emerald-100 text-emerald-700" : "bg-stone-100 text-stone-600"
                      }`}>
                        {row.fase}
                      </span>
                    </td>
                    <td className="p-3 text-center text-text-muted">{row.amp}</td>
                    <td className="p-3 text-center font-semibold text-text-main">{row.vermogen}</td>
                    <td className="p-3 text-center text-text-muted">{row.tijd}</td>
                    <td className="p-3 text-text-muted">{row.geschikt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl bg-blue-50 border border-blue-200 p-6">
            <h3 className="font-semibold text-text-main mb-2">Advies: 3-fase 11 kW is de sweet spot</h3>
            <p className="text-sm text-text-muted">
              Voor de meeste huishoudens is 3-fase 16A (11 kW) de ideale keuze. Het verdeelt de belasting symmetrisch over het net, je auto is &apos;s nachts ruim voldoende vol, en het is toekomstbestendig. Verzwaren naar 3-fase kost &euro; 200 tot &euro; 500 via je netbeheerder.
            </p>
          </div>
        </article>
      </section>

      {/* 3. Top 5 vergelijking */}
      <section id="vergelijking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">3. Top 5 laadpalen voor thuis vergeleken</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-6">
            <p>
              De markt voor thuisladers is volwassen geworden. We vergelijken vijf populaire modellen op vermogen, slimme functies en bijzonderheden.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cyan-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Model</th>
                  <th className="text-center p-3 font-semibold text-text-main border-b border-border">Max. vermogen</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Slimme functies</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Connectiviteit</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Bijzonder</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: "Wallbox Pulsar Plus", vermogen: "22 kW", functies: "Power Boost, Eco-Smart", conn: "WiFi, Bluetooth", bijz: "Zeer compact (16×16 cm)" },
                  { model: "Zappi V2", vermogen: "22 kW", functies: "Solar Tracking, DLB", conn: "WiFi, Ethernet", bijz: "Beste voor zonnepanelen" },
                  { model: "Easee Charge Lite", vermogen: "11 kW", functies: "DLB, Bluetooth setup", conn: "4G, WiFi, BT", bijz: "Extreem licht en veilig" },
                  { model: "Alfen Eve Single", vermogen: "22 kW", functies: "Display, RFID, MID", conn: "Ethernet, WiFi", bijz: "NL industriële kwaliteit" },
                  { model: "Webasto Pure", vermogen: "22 kW", functies: "Basis beveiliging", conn: "Geen (offline)", bijz: "Beste prijs-kwaliteit" },
                ].map((row, idx) => (
                  <tr key={row.model} className={`border-b border-border ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                    <td className="p-3 font-semibold text-text-main whitespace-nowrap">{row.model}</td>
                    <td className="p-3 text-center">
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold">
                        {row.vermogen}
                      </span>
                    </td>
                    <td className="p-3 text-text-muted">{row.functies}</td>
                    <td className="p-3 text-text-muted">{row.conn}</td>
                    <td className="p-3 text-text-muted">{row.bijz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-cyan-50 border-l-4 border-cyan-400 rounded">
            <p className="font-semibold text-cyan-900 mb-2">Kennertip</p>
            <p className="text-sm text-cyan-800">
              Kies een laadpaal met MID-meter als je ERE-certificaten wilt verdienen (tot &euro; 400/jaar). De Alfen Eve Single en Zaptec Go 2 zijn geschikt. Heb je zonnepanelen? Dan is de Zappi V2 met Solar Tracking de beste keuze.
            </p>
          </div>
        </article>
      </section>

      {/* 4. Slim laden */}
      <section id="slim-laden" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">4. Slim laden met dynamische tarieven</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-6">
            <p>
              Met een dynamisch energiecontract betaal je de uurprijs van de EPEX-beurs. Slimme laadpalen laden je auto automatisch op het goedkoopste moment, soms zelfs tegen negatieve prijzen (je krijgt betaald om te laden).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border p-6">
              <h3 className="font-bold text-text-main mb-4">Hoe werkt het?</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Vertrektijd instellen", desc: "Je geeft aan wanneer je auto vol moet zijn (bijv. 07:00)" },
                  { step: "2", title: "App analyseert uurprijzen", desc: "De app bekijkt de EPEX-prijzen voor komende nacht" },
                  { step: "3", title: "Laden op goedkoopste uren", desc: "De auto laadt automatisch wanneer stroom het goedkoopst is" },
                  { step: "4", title: "Besparing zonder moeite", desc: "Je bespaart 20-40% op laadkosten zonder iets te doen" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-text-main text-sm">{item.title}</p>
                      <p className="text-xs text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border p-6">
              <h3 className="font-bold text-text-main mb-4">Populaire apps voor slim laden</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-2 font-semibold text-text-main border-b border-border">App</th>
                      <th className="text-left p-2 font-semibold text-text-main border-b border-border">Sterke punten</th>
                      <th className="text-left p-2 font-semibold text-text-main border-b border-border">Kosten</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { app: "Zonneplan", sterkte: "AI-assistent, groenpercentage", kosten: "Gratis" },
                      { app: "Tibber", sterkte: "Grid Rewards, uitgebreide store", kosten: "€ 5,99/mnd" },
                      { app: "Jedlix", sterkte: "Merkonafhankelijk, cashback", kosten: "Gratis" },
                      { app: "Stekker.app", sterkte: "Geavanceerde algoritmes", kosten: "Gratis/Premium" },
                    ].map((row, idx) => (
                      <tr key={row.app} className={`border-b border-border ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                        <td className="p-2 font-medium text-text-main">{row.app}</td>
                        <td className="p-2 text-text-muted text-xs">{row.sterkte}</td>
                        <td className="p-2 text-text-muted text-xs">{row.kosten}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Link href="/dynamisch" className="inline-flex items-center text-sm font-semibold text-cyan-600 hover:text-cyan-800 transition-colors">
              Bekijk dynamische energietarieven
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      {/* 5. ERE-certificaten */}
      <section id="ere" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">5. ERE-certificaten: geld verdienen met laden</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-6">
            <p>
              Vanaf 2026 kun je als thuislader geld terugverdienen via ERE-certificaten. Oliemaatschappijen zijn verplicht emissierechten te kopen. Als jij thuis schone stroom in je auto laadt, lever je een aantoonbare CO&#8322;-reductie. Daar word je voor beloond.
            </p>
          </div>

          {/* Verdienmodel visueel */}
          <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-cyan-50 border-2 border-emerald-200 p-6 sm:p-8 mb-6">
            <h3 className="font-bold text-text-main mb-6 text-center text-lg">Wat levert het op?</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="rounded-xl bg-white/70 p-5">
                <p className="text-xs text-emerald-700 font-medium mb-1">Vergoeding per kWh</p>
                <p className="text-3xl font-extrabold text-emerald-700">&euro; 0,10</p>
                <p className="text-xs text-text-muted mt-1">Verwachte opbrengst 2026</p>
              </div>
              <div className="rounded-xl bg-white/70 p-5">
                <p className="text-xs text-emerald-700 font-medium mb-1">Bij 4.000 kWh/jaar laden</p>
                <p className="text-3xl font-extrabold text-emerald-700">&euro; 400</p>
                <p className="text-xs text-text-muted mt-1">Jaarlijkse extra inkomsten</p>
              </div>
              <div className="rounded-xl bg-white/70 p-5">
                <p className="text-xs text-emerald-700 font-medium mb-1">Maximaal (bij hoge markt)</p>
                <p className="text-3xl font-extrabold text-emerald-700">&euro; 0,30</p>
                <p className="text-xs text-text-muted mt-1">Per kWh, afhankelijk van markt</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-amber-50 border border-amber-200 p-6">
            <h3 className="font-semibold text-amber-900 mb-2">Vereiste: MID-gecertificeerde meter</h3>
            <p className="text-sm text-amber-800">
              Je laadpaal moet een ingebouwde MID-meter hebben. Een losse kWh-meter in je meterkast wordt niet geaccepteerd. Geschikte modellen zijn onder andere de Alfen Eve Single Pro-line en de Zaptec Go 2. Je meldt je aan bij een inboekdienstverlener die de data bundelt en de opbrengst periodiek uitkeert.
            </p>
          </div>
        </article>
      </section>

      {/* 6. Subsidies */}
      <section id="subsidie" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">6. Subsidies en fiscale voordelen</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-6">
            <p>
              Voor particulieren is er momenteel geen directe landelijke subsidie voor een thuislader. Wel kun je bij je gemeente vaak een gratis openbare laadpaal aanvragen als je geen eigen oprit hebt. Voor zakelijke gebruikers en VvE&apos;s zijn er wel forse subsidies.
            </p>
          </div>

          {/* SPRILA tabel */}
          <h3 className="font-semibold text-text-main mb-4">SPRILA-subsidie 2026 (zakelijk)</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cyan-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Type investering</th>
                  <th className="text-right p-3 font-semibold text-text-main border-b border-border">Subsidie MKB</th>
                  <th className="text-right p-3 font-semibold text-text-main border-b border-border">Subsidie grootbedrijf</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "AC-laadstation (≥ 11 kW)", mkb: "€ 800 /punt", groot: "€ 400 /punt" },
                  { type: "DC-laadstation (≥ 20 kW)", mkb: "€ 3.900 /station", groot: "€ 1.950 /station" },
                  { type: "DC-laadstation (≥ 150 kW)", mkb: "€ 24.400 /station", groot: "€ 12.200 /station" },
                  { type: "Stationaire batterij", mkb: "€ 85 /kWh", groot: "€ 60 /kWh" },
                ].map((row, idx) => (
                  <tr key={row.type} className={`border-b border-border ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                    <td className="p-3 font-medium text-text-main">{row.type}</td>
                    <td className="p-3 text-right text-emerald-700 font-semibold">{row.mkb}</td>
                    <td className="p-3 text-right text-text-muted">{row.groot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* VvE subsidie */}
          <h3 className="font-semibold text-text-main mb-4">SVVE-subsidie voor VvE&apos;s</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl bg-purple-50 border border-purple-200 p-5 text-center">
              <p className="text-2xl font-extrabold text-purple-700">&euro; 1.500</p>
              <p className="text-xs text-text-muted mt-1">Max. voor oplaadpuntenadvies (75% vergoed)</p>
            </div>
            <div className="rounded-xl bg-purple-50 border border-purple-200 p-5 text-center">
              <p className="text-2xl font-extrabold text-purple-700">&euro; 100</p>
              <p className="text-xs text-text-muted mt-1">Per parkeerplaats voor basislaadinfra</p>
            </div>
            <div className="rounded-xl bg-purple-50 border border-purple-200 p-5 text-center">
              <p className="text-2xl font-extrabold text-purple-700">&euro; 179 mln</p>
              <p className="text-xs text-text-muted mt-1">Totaal budget t/m 2030</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-cyan-50 border-l-4 border-cyan-400 rounded">
            <p className="font-semibold text-cyan-900 mb-2">Kennertip</p>
            <p className="text-sm text-cyan-800">
              Voor zakelijke gebruikers: combineer de SPRILA-subsidie met de KIA (28% extra aftrek op investeringen boven &euro; 2.800). De MIA/Vamil is per 2026 vervallen voor reguliere laadpalen, maar geldt nog voor zware voertuigen.
            </p>
          </div>
        </article>
      </section>

      {/* 7. V2G */}
      <section id="v2g" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">7. Bidirectioneel laden: je auto als thuisbatterij</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-6">
            <p>
              Met bidirectioneel laden kan je elektrische auto niet alleen stroom opnemen, maar ook terugleveren aan je woning (V2H) of het stroomnet (V2G). Een auto met een 77 kWh accu kan je huis 3 tot 5 dagen van stroom voorzien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50/50 p-6">
              <h3 className="font-bold text-text-main mb-3">V2H (Vehicle-to-Home)</h3>
              <p className="text-sm text-text-muted mb-3">
                Laad je auto overdag met zonnepanelen en gebruik de opgeslagen energie &apos;s avonds om te koken, verwarmen en verlichten. Ideaal na het einde van salderen in 2027.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">Besparing</span>
                <span className="text-text-muted">Vergelijkbaar met thuisbatterij van 10+ kWh</span>
              </div>
            </div>

            <div className="rounded-xl border-2 border-purple-200 bg-purple-50/50 p-6">
              <h3 className="font-bold text-text-main mb-3">V2G (Vehicle-to-Grid)</h3>
              <p className="text-sm text-text-muted mb-3">
                Lever stroom terug aan het net op momenten dat de prijs hoog is, en laad wanneer de prijs laag is. Je auto wordt een actieve speler in de energiemarkt.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">Verdienmodel</span>
                <span className="text-text-muted">Extra inkomsten via dynamische tarieven</span>
              </div>
            </div>
          </div>

          {/* Quasar 2 specs */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cyan-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Kenmerk</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Wallbox Quasar 2</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Wat betekent dit?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { kenmerk: "Laadvermogen", spec: "12,8 kW (DC)", impact: "Sneller dan AC-equivalenten thuis" },
                  { kenmerk: "Ontlaadvermogen", spec: "12,8 kW", impact: "Kan pieken in huisverbruik opvangen" },
                  { kenmerk: "Aansluiting", spec: "CCS2 (Type 2)", impact: "Universele standaard voor nieuwe EV's" },
                  { kenmerk: "Noodstroom", spec: "Blackout Mode", impact: "Stroom bij netuitval" },
                  { kenmerk: "Prijsindicatie", spec: "± € 5.800", impact: "Excl. installatie" },
                ].map((row, idx) => (
                  <tr key={row.kenmerk} className={`border-b border-border ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                    <td className="p-3 font-medium text-text-main">{row.kenmerk}</td>
                    <td className="p-3 text-text-muted">{row.spec}</td>
                    <td className="p-3 text-text-muted">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <Link href="/thuisbatterij" className="inline-flex items-center text-sm font-semibold text-cyan-600 hover:text-cyan-800 transition-colors">
              Meer over thuisbatterijen en V2G
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
          <h2 className="text-2xl font-bold text-text-main mb-6">Veelgestelde vragen over laadpalen</h2>
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

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-600 p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Slim laden begint met slim vergelijken</h2>
          <p className="text-cyan-100 mb-6 max-w-xl mx-auto">
            Combineer een thuislader met een dynamisch contract en zonnepanelen voor de laagste laadkosten. Vergelijk leveranciers op dynamische tarieven.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dynamisch"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-cyan-700 font-semibold hover:bg-cyan-50 transition-colors shadow-lg"
            >
              Dynamische tarieven vergelijken
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/zonnepanelen"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              Zonnepanelen bekijken
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
