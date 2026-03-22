import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema, ArticleSchema } from "@/components/StructuredData";
import { PaybackChart, RevenueBreakdown, LfpVsNmcTable, PriceTrendChart } from "@/components/BatteryCharts";
import { RelatedPages } from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Thuisbatterij 2026: Kosten, Rendement & Vergelijking | Energiekenner.nl",
  description:
    "Alles over thuisbatterijen in 2026: vergelijk prijzen per kWh, bekijk terugverdientijden, LFP vs NMC en ontdek of een thuisbatterij rendabel is voor jouw situatie.",
  alternates: {
    canonical: "https://energiekenner.nl/thuisbatterij",
  },
};

const batteries = [
  { capacity: "3 kWh", price: "€ 3.000 – € 4.000", pricePerKwh: "€ 1.000 – € 1.333", profile: "Klein huishouden, laag dagelijks verbruik", yieldYear: "€ 150 – € 300", panels: "4–6", breakeven: "~15 jaar" },
  { capacity: "5 kWh", price: "€ 3.500 – € 5.500", pricePerKwh: "€ 700 – € 1.100", profile: "Gemiddeld huishouden, 6–8 zonnepanelen", yieldYear: "€ 300 – € 500", panels: "6–8", breakeven: "~11 jaar" },
  { capacity: "10 kWh", price: "€ 5.500 – € 7.500", pricePerKwh: "€ 550 – € 750", profile: "Huishouden met warmtepomp of EV", yieldYear: "€ 600 – € 900", panels: "10–14", breakeven: "~9 jaar" },
  { capacity: "15 kWh", price: "€ 8.000 – € 12.000", pricePerKwh: "€ 533 – € 800", profile: "Grootverbruikers, kleine bedrijven", yieldYear: "€ 900 – € 1.300", panels: "14–20", breakeven: "~9 jaar" },
  { capacity: "30 kWh", price: "€ 12.000 – € 18.000", pricePerKwh: "€ 400 – € 600", profile: "Kleine bedrijven, hoge piekbelasting", yieldYear: "€ 1.500+", panels: "20+", breakeven: "~10 jaar" },
];

const v2gCars = [
  { name: "Renault 5", feature: "Compleet V2G-ecosysteem met Solar Life-wallbox en Hegg-contract", capacity: "52 kWh", available: "Nu" },
  { name: "Volvo EX90 / Polestar 3", feature: "Volledig V2G-voorbereid, capaciteit boven 100 kWh", capacity: "100+ kWh", available: "2026" },
  { name: "Nissan Leaf", feature: "Pionier V2H via CHAdeMO-protocol", capacity: "40–62 kWh", available: "Nu" },
  { name: "Lucid Air", feature: "Extreem hoge laad-/ontlaadsnelheden voor luxe segment", capacity: "112 kWh", available: "2026" },
];

const faqItems = [
  {
    question: "Is een thuisbatterij rendabel in 2026?",
    answer: "Dat hangt af van je situatie. Met zonnepanelen, een dynamisch contract en slim laden kun je een 10 kWh batterij in 8–10 jaar terugverdienen. Na break-even heb je 5–10 jaar pure winst. Zonder zonnepanelen is de terugverdientijd langer.",
  },
  {
    question: "Wat is het verschil tussen LFP en NMC batterijen?",
    answer: "LFP (lithium-ijzerfosfaat) is veiliger, gaat langer mee (15–20 jaar vs 8–12 jaar) en is goedkoper per cyclus. NMC heeft een hogere energiedichtheid (compacter) maar is duurder en gevoeliger voor hitte. Voor thuisbatterijen is LFP de beste keuze.",
  },
  {
    question: "Kan ik BTW terugvragen op mijn thuisbatterij?",
    answer: "Ja, onder voorwaarden. Je hebt een dynamisch energiecontract nodig, de factuur en het contract moeten op dezelfde naam staan, en je moet een BTW-nummer aanvragen bij de Belastingdienst. Let op: val je onder de KOR (Kleine Ondernemersregeling), dan heb je geen recht op BTW-teruggave.",
  },
  {
    question: "Hoe groot moet mijn thuisbatterij zijn?",
    answer: "Als vuistregel: 1 kWh batterijcapaciteit per 2 zonnepanelen. Een gemiddeld huishouden met 8 panelen heeft genoeg aan 5 kWh. Met een warmtepomp of EV is 10–15 kWh beter. Bekijk je dagelijks verbruiksprofiel via je slimme meter.",
  },
  {
    question: "Wat is V2G (Vehicle-to-Grid)?",
    answer: "V2G maakt het mogelijk om de batterij van je elektrische auto te gebruiken als thuisbatterij. Met een bidirectionele laadpaal (~€6.000) kun je stroom terugleveren aan het net of je huis. De Renault 5 is momenteel de frontrunner in Nederland.",
  },
  {
    question: "Is een thuisbatterij brandveilig?",
    answer: "Moderne LFP-batterijen zijn inherent veilig: ze zijn bestand tegen thermal runaway. Volg wel de PGS 37-2 richtlijnen: installeer op een geventileerde plek, houd 30 cm afstand tot muren, en vermijd krappe ruimtes. Meld je batterij bij je verzekeraar.",
  },
  {
    question: "Heb ik zonnepanelen nodig voor een thuisbatterij?",
    answer: "Niet per se. Met een dynamisch contract kun je ook geld verdienen door goedkoop stroom in te kopen en duur terug te leveren (arbitrage). Maar de combinatie met zonnepanelen levert het meeste rendement op, zeker nu de salderingsregeling in 2027 afloopt.",
  },
  {
    question: "Welke merken thuisbatterijen zijn beschikbaar in Nederland?",
    answer: "Populaire merken zijn o.a. BYD, Huawei Luna, SolarEdge Home Battery, Tesla Powerwall, Enphase en GoodWe. Bij de keuze is batterijchemie (kies LFP), garantievoorwaarden, compatibiliteit met je omvormer en de prijs per kWh het belangrijkst.",
  },
];

export default function ThuisbatterijPage() {
  return (
    <>
      <ArticleSchema
        title="Thuisbatterij 2026: Kosten, Rendement & Vergelijking"
        description="Alles over thuisbatterijen: vergelijk prijzen, bekijk terugverdientijden en ontdek of een thuisbatterij rendabel is."
        url="https://energiekenner.nl/thuisbatterij"
        datePublished="2025-09-01"
        dateModified="2026-03-15"
      />

      {/* Breadcrumbs + Hero */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Thuisbatterij", href: "/thuisbatterij" },
        ]}
      />
      <PageHero
        badge="Actueel — maart 2026"
        title="Thuisbatterij & V2G"
        highlight="Slim opslaan, slim verdienen"
        description="De residentiële batterijmarkt is volwassen. Met dalende LFP-prijzen en stijgende terugleverkosten is een thuisbatterij in 2026 een slimme investering met 5–10 jaar pure winst na break-even."
        accentColor="amber"
      />

      {/* ── Key Stats ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { value: "€ 380", unit: "/kWh", label: "Gemiddelde prijs 2026", color: "text-amber-600" },
            { value: "8–10", unit: " jaar", label: "Terugverdientijd (10 kWh)", color: "text-green-600" },
            { value: "15–20", unit: " jaar", label: "Levensduur LFP", color: "text-primary" },
            { value: "21%", unit: " BTW", label: "Terug te vragen", color: "text-rose-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-border p-4 md:p-6 shadow-sm">
              <p className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                {stat.value}
                <span className="text-base font-semibold">{stat.unit}</span>
              </p>
              <p className="text-xs md:text-sm text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Inhoudsopgave ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <nav className="rounded-xl border border-border bg-white p-6">
          <h2 className="font-bold text-text-main mb-3">Op deze pagina</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {[
              { href: "#vergelijking", label: "Batterijen vergelijken" },
              { href: "#terugverdientijd", label: "Terugverdientijd" },
              { href: "#verdienmodellen", label: "3 verdienmodellen" },
              { href: "#prijsontwikkeling", label: "Prijsontwikkeling" },
              { href: "#lfp-vs-nmc", label: "LFP vs NMC" },
              { href: "#btw", label: "BTW terugvragen" },
              { href: "#brandveiligheid", label: "Brandveiligheid" },
              { href: "#v2g", label: "V2G & elektrische auto" },
              { href: "#links", label: "Gerelateerde pagina's" },
              { href: "#faq", label: "Veelgestelde vragen" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors py-1">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </section>

      {/* ── Battery Comparison Table ── */}
      <section id="vergelijking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="text-2xl font-bold text-text-main mb-2">Thuisbatterijen vergelijken</h2>
        <p className="text-text-muted mb-6">
          Indicatieve prijzen netto na 21% BTW-teruggave. Rendement op basis van{" "}
          <a href="https://www.epexspot.com/en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            EPEX-arbitrage
          </a>{" "}
          met{" "}
          <Link href="/dynamisch" className="text-primary hover:underline">
            dynamisch contract
          </Link>.
        </p>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {batteries.map((b) => (
            <div key={b.capacity} className="rounded-xl border border-border bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
                  {b.capacity}
                </span>
                <span className="font-semibold text-green-600 text-sm">{b.yieldYear}/jaar</span>
              </div>
              <p className="font-mono font-semibold text-text-main">{b.price}</p>
              <p className="text-sm text-text-muted mt-1">{b.profile}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border text-xs text-text-muted">
                <span>Prijs/kWh: {b.pricePerKwh}</span>
                <span>Break-even: {b.breakeven}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Capaciteit</th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Prijs (netto)</th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Prijs/kWh</th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Ideaal profiel</th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Panelen</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Rendement/jaar</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Break-even</th>
              </tr>
            </thead>
            <tbody>
              {batteries.map((b, idx) => (
                <tr
                  key={b.capacity}
                  className={`border-t border-border hover:bg-amber-50/50 transition-colors ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}
                >
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
                      {b.capacity}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-mono font-semibold">{b.price}</td>
                  <td className="px-4 py-4 text-text-muted">{b.pricePerKwh}</td>
                  <td className="px-4 py-4 text-text-muted">{b.profile}</td>
                  <td className="px-4 py-4 text-text-muted">{b.panels}</td>
                  <td className="px-4 py-4 text-right">
                    <span className="font-semibold text-green-600">{b.yieldYear}</span>
                  </td>
                  <td className="px-4 py-4 text-right font-medium">{b.breakeven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Terugverdientijd Chart ── */}
      <section id="terugverdientijd" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h2 className="text-xl font-bold text-text-main">Terugverdientijd per capaciteit</h2>
            </div>
            <p className="text-sm text-text-muted mb-6">
              Geschatte break-even op basis van eigenverbruik + arbitrage met{" "}
              <Link href="/dynamisch" className="text-primary hover:underline">dynamisch contract</Link>.
            </p>
            <PaybackChart />
          </article>

          <article className="bg-white rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl font-bold text-text-main">3 verdienmodellen</h2>
            </div>
            <p className="text-sm text-text-muted mb-6" id="verdienmodellen">
              Zo verdien je je thuisbatterij terug. Combineer alle drie voor het beste rendement.
            </p>
            <RevenueBreakdown />
          </article>
        </div>
      </section>

      {/* ── Prijsontwikkeling ── */}
      <section id="prijsontwikkeling" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <article className="bg-white rounded-xl border border-border p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-text-main">Prijsontwikkeling thuisbatterij (€/kWh)</h2>
              <p className="text-sm text-text-muted mt-1">
                De gemiddelde prijs per kWh is in 6 jaar met 68% gedaald dankzij schaalvoordelen in LFP-productie.
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200 shrink-0">
              <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
              <span className="text-sm font-semibold text-green-700">-68% sinds 2020</span>
            </div>
          </div>
          <PriceTrendChart />
          <p className="text-xs text-text-muted mt-4 text-center">
            Bron: BloombergNEF, CATL/BYD marktdata, Energiekenner analyse 2026
          </p>
        </article>
      </section>

      {/* ── LFP vs NMC ── */}
      <section id="lfp-vs-nmc" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <article className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="p-6 md:p-8 pb-0 md:pb-0">
            <h2 className="text-xl font-bold text-text-main mb-1">LFP vs NMC: welke batterij kiezen?</h2>
            <p className="text-sm text-text-muted mb-6">
              LFP wint op 5 van de 8 punten en is de aangeraden keuze voor thuisbatterijen. NMC is compacter maar duurder en minder duurzaam.
            </p>
          </div>
          <LfpVsNmcTable />
          <div className="p-6 md:p-8 pt-4">
            <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5">
              <p className="flex items-start gap-3">
                <span className="text-xl font-bold text-amber-600 shrink-0">💡</span>
                <span className="text-sm">
                  <strong className="text-text-main">Kennertip:</strong> Kies altijd LFP voor thuisbatterijen. De hogere energiedichtheid van NMC is alleen relevant voor{" "}
                  <Link href="/laadpalen" className="text-primary hover:underline">elektrische auto&apos;s</Link> waar gewicht en ruimte kritisch zijn.
                </span>
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* ── BTW Teruggave ── */}
      <section id="btw" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <article className="rounded-xl bg-amber-50 border border-amber-200 p-6 md:p-8">
          <h2 className="text-xl font-bold text-text-main mb-3">BTW-teruggave: 21% besparen op je batterij</h2>
          <p className="text-sm text-amber-900 mb-4">
            Je kunt de BTW (21%) op aanschaf en installatie terugvragen. Op een 10 kWh batterij van €7.500 bespaar je daarmee ruim <strong>€1.300</strong>.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { title: "Dynamisch contract", desc: "Je moet een dynamisch energiecontract hebben", icon: "⚡" },
              { title: "Zelfde naam", desc: "Factuur en contract staan op dezelfde naam", icon: "📄" },
              { title: "BTW-nummer", desc: "Vraag een BTW-nummer aan bij de Belastingdienst", icon: "🏛️" },
              { title: "Geen KOR", desc: "Je mag niet onder de Kleine Ondernemersregeling vallen", icon: "⚠️" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-4 border border-amber-200">
                <span className="text-xl">{item.icon}</span>
                <p className="font-semibold text-text-main text-sm mt-2">{item.title}</p>
                <p className="text-xs text-text-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5">
            <p className="flex items-start gap-3">
              <span className="text-xl font-bold text-amber-600 shrink-0">💡</span>
              <span className="text-sm">
                <strong className="text-text-main">Kennertip:</strong> Check je KOR-status voordat je aanschaft. Bel de{" "}
                <a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/btw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Belastingdienst
                </a>{" "}
                (0800-0543) om zeker te weten dat teruggave mogelijk is. Het verschil op een 5 kWh batterij is al €750.
              </span>
            </p>
          </div>
        </article>
      </section>

      {/* ── Brandveiligheid ── */}
      <section id="brandveiligheid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <article className="bg-white rounded-xl border border-border p-6 md:p-8">
          <h2 className="text-xl font-bold text-text-main mb-4">Brandveiligheid: PGS 37-2 & installatie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-text-muted mb-4">
                <a href="https://publicatiereeksgevaarlijkestoffen.nl/publicaties/PGS37-2.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">PGS 37-2</a> is
                de Nederlandse richtlijn voor veilige opslag van lithium-energiebatterijen. Niet verplicht voor huishoudens, maar steeds vaker vereist door verzekeraars.
              </p>
              <p className="text-sm text-text-muted">
                Moderne LFP-batterijen zijn inherent veiliger dan NMC — de kans op thermal runaway is minimaal. Toch is een goede installatielocatie essentieel.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { rule: "Geventileerde plek", desc: "Garage, veranda of buiten onder overkapping" },
                { rule: "30 cm afstand", desc: "Minimaal 30 cm vrij rond de batterij" },
                { rule: "Niet in krappe kast", desc: "Vermijd inbouw in gesloten meubels" },
                { rule: "Meld bij verzekeraar", desc: "Vraag of PGS 37-2 compliance vereist is" },
              ].map((item) => (
                <div key={item.rule} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-text-main">{item.rule}</p>
                    <p className="text-xs text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      {/* ── V2G Section ── */}
      <section id="v2g" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="text-2xl font-bold text-text-main mb-2">Vehicle-to-Grid (V2G)</h2>
        <p className="text-text-muted mb-6">
          Met een bidirectionele laadpaal (~€6.000) wordt je EV een thuisbatterij van 40–112 kWh — tot 10x groter dan een standaard stationaire batterij.
          Lees meer over{" "}
          <Link href="/laadpalen" className="text-primary hover:underline">laadpalen &amp; EV</Link>.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {v2gCars.map((car) => (
            <div key={car.name} className="rounded-xl border border-border bg-white p-6 hover:border-amber-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs">
                    EV
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-main">{car.name}</h3>
                    <span className="text-xs text-text-muted">{car.capacity}</span>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${car.available === "Nu" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                  {car.available}
                </span>
              </div>
              <p className="text-sm text-text-muted">{car.feature}</p>
            </div>
          ))}
        </div>

        {/* V2G uitleg */}
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white rounded-xl border border-border p-6 md:p-8">
            <h3 className="text-lg font-bold text-text-main mb-3">V2G in Nederland: stand van zaken</h3>
            <p className="text-sm text-text-muted mb-3">
              <a href="https://www.wedrivesolar.nl/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">We Drive Solar</a> en Renault bieden sinds 2026 het eerste complete V2G-pakket voor consumenten. Maar de markt is nog jong.
            </p>
            <div className="space-y-2 text-sm text-text-muted">
              <p className="flex items-start gap-2">
                <span className="text-amber-500 shrink-0">▸</span>
                Weinig auto&apos;s met bidirectioneel laden
              </p>
              <p className="flex items-start gap-2">
                <span className="text-amber-500 shrink-0">▸</span>
                Netbeheerders nog niet klaar voor grootschalig reverse-flow
              </p>
              <p className="flex items-start gap-2">
                <span className="text-amber-500 shrink-0">▸</span>
                Regelgeving rond terugleververgoeding niet definitief
              </p>
              <p className="flex items-start gap-2">
                <span className="text-amber-500 shrink-0">▸</span>
                Hardware (wallbox) nog duur voor massa-adoptie
              </p>
            </div>
            <p className="text-xs text-text-muted mt-4">
              Bron:{" "}
              <a href="https://elaad.nl/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ElaadNL</a>,
              We Drive Solar, Renault Nederland
            </p>
          </article>

          <article className="bg-white rounded-xl border border-border p-6 md:p-8">
            <h3 className="text-lg font-bold text-text-main mb-3">Slim EV-laden zonder V2G</h3>
            <p className="text-sm text-text-muted mb-3">
              Zelfs zonder V2G kun je flink besparen door slim te laden via apps die elektriciteitsprijzen scannen.
            </p>
            <div className="space-y-3">
              {[
                { name: "Tibber", desc: "Automatisch laden op de goedkoopste uren", url: "https://tibber.com/nl" },
                { name: "Jedlix", desc: "Slim laden + flexibiliteitsvergoeding", url: "https://www.jedlix.com/" },
                { name: "ANWB Energie", desc: "Optimale timing via dagmarkt-integratie", url: "https://www.anwb.nl/huis/energie" },
              ].map((app) => (
                <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-amber-300 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 text-xs font-bold shrink-0">
                    {app.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors">{app.name}</p>
                    <p className="text-xs text-text-muted">{app.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-xs text-text-muted mt-4">
              Lees meer op onze{" "}
              <Link href="/slimme-technologie" className="text-primary hover:underline">pagina over slim sturen</Link>.
            </p>
          </article>
        </div>
      </section>

      {/* ── Gerelateerde pagina's (interne links) ── */}
      <section id="links" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="text-xl font-bold text-text-main mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { href: "/dynamisch", title: "Dynamische tarieven", desc: "Essentieel voor maximaal rendement uit je batterij", color: "bg-blue-100 text-blue-600" },
            { href: "/zonnepanelen", title: "Zonnepanelen", desc: "De ideale combinatie met een thuisbatterij", color: "bg-yellow-100 text-yellow-600" },
            { href: "/salderen", title: "Salderingsregeling 2027", desc: "Waarom een batterij steeds interessanter wordt", color: "bg-green-100 text-green-600" },
            { href: "/slimme-technologie", title: "Slim Energie Sturen", desc: "Automatisch laden en ontladen optimaliseren", color: "bg-purple-100 text-purple-600" },
            { href: "/laadpalen", title: "Laadpalen & EV", desc: "V2G, slim laden en bidirectionele wallboxen", color: "bg-cyan-100 text-cyan-600" },
            { href: "/warmtepompen", title: "Warmtepompen", desc: "Batterij + warmtepomp = lagere piekbelasting", color: "bg-rose-100 text-rose-600" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-border bg-white p-5 hover:shadow-md hover:border-amber-300 transition-all group"
            >
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

      {/* ── FAQ ── */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <FAQSchema items={faqItems} />
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-6">Veelgestelde vragen over thuisbatterijen</h2>
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

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-8">
        <div className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold">Combineer je batterij met het juiste contract</h2>
            <p className="mt-2 text-amber-100 max-w-xl mx-auto">
              Een dynamisch contract is essentieel voor maximaal rendement uit je thuisbatterij. Vergelijk alle aanbieders.
            </p>
            <Link
              href="/dynamisch"
              className="inline-flex items-center mt-6 px-6 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-lg"
            >
              Vergelijk dynamische tarieven
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <RelatedPages currentPage="thuisbatterij" relatedKeys={["zonnepanelen", "dynamisch", "salderen", "slimme-technologie"]} />
    </>
  );
}
