import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema, ArticleSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Beste Energie-Apps 2026: Vergelijking & Ranking | Energiekenner.nl",
  description:
    "Vergelijk de beste energie-apps van 2026: Zonneplan, Tibber, Frank Energie en meer. Scores, functies en welke app bij jouw situatie past.",
  alternates: {
    canonical: "https://energiekenner.nl/energie-apps",
  },
};

const apps = [
  {
    name: "Zonneplan",
    score: 9.6,
    type: "Dynamisch",
    bestFor: "Zonnepaneel-eigenaren",
    pros: ["Zonnebonus: 10% extra op teruglevering", "Live groenpercentage op het net", "Automatische batterij-aansturing", "Gebruiksvriendelijke interface"],
    cons: ["Alleen dynamisch contract", "Beperkte API voor developers"],
    features: { smartCharging: true, batteryControl: true, solarIntegration: true, apiAccess: false, homeAssistant: false },
    url: "https://www.zonneplan.nl/",
    color: "bg-yellow-500",
  },
  {
    name: "Tibber",
    score: 8.9,
    type: "Dynamisch",
    bestFor: "Smart home gebruikers",
    pros: ["Uitstekende Homey & Home Assistant integratie", "Slim laden van EV geïntegreerd", "Duidelijk uurprijzen-overzicht", "Actieve community"],
    cons: ["Geen zonnebonus", "Klantenservice soms traag"],
    features: { smartCharging: true, batteryControl: true, solarIntegration: true, apiAccess: true, homeAssistant: true },
    url: "https://tibber.com/nl",
    color: "bg-sky-500",
  },
  {
    name: "Frank Energie",
    score: 8.6,
    type: "Dynamisch",
    bestFor: "Techneuten & API-gebruikers",
    pros: ["Volledige API beschikbaar", "Lage opslag op EPEX-prijzen", "Transparante kostenstructuur", "Real-time data feeds"],
    cons: ["Minder geschikt voor beginners", "Interface minder gepolijst"],
    features: { smartCharging: true, batteryControl: false, solarIntegration: true, apiAccess: true, homeAssistant: true },
    url: "https://www.frankenergie.nl/",
    color: "bg-emerald-500",
  },
  {
    name: "Eneco",
    score: 7.8,
    type: "Vast & Dynamisch",
    bestFor: "Mainstream gebruikers",
    pros: ["Groot merk, betrouwbare service", "Zowel vast als dynamisch beschikbaar", "Goede klantenservice", "Toon-thermostaat integratie"],
    cons: ["Hogere opslag dan pure dynamische spelers", "App minder innovatief"],
    features: { smartCharging: false, batteryControl: false, solarIntegration: true, apiAccess: false, homeAssistant: false },
    url: "https://www.eneco.nl/",
    color: "bg-orange-500",
  },
  {
    name: "ANWB Energie",
    score: 5.4,
    type: "Vast & Dynamisch",
    bestFor: "ANWB-leden (korting)",
    pros: ["Ledenkorting voor ANWB-leden", "Breed contractaanbod", "Slim laden via app"],
    cons: ["Technische problemen en instabiele inlog", "Verouderde app-interface", "Beperkte smart home integratie"],
    features: { smartCharging: true, batteryControl: false, solarIntegration: false, apiAccess: false, homeAssistant: false },
    url: "https://www.anwb.nl/huis/energie",
    color: "bg-amber-500",
  },
];

const faqItems = [
  {
    question: "Welke energie-app is het beste in 2026?",
    answer: "Zonneplan scoort het hoogst (9,6) dankzij de Zonnebonus en uitstekende solar-integratie. Tibber (8,9) is de beste keuze voor smart home gebruikers met Homey of Home Assistant. Frank Energie (8,6) is ideaal voor techneuten die via een API willen automatiseren.",
  },
  {
    question: "Heb ik een dynamisch contract nodig voor een energie-app?",
    answer: "Niet per se, maar de meeste slimme functies (uurprijzen, slim laden, batterij-aansturing) werken alleen met een dynamisch contract. Met een vast contract kun je de app vooral gebruiken voor verbruiksinzicht.",
  },
  {
    question: "Kan ik mijn thuisbatterij aansturen via een app?",
    answer: "Ja, Zonneplan en Tibber bieden directe batterij-aansturing. Frank Energie kan dit via de API en Home Assistant. De app bepaalt automatisch wanneer je batterij laadt en ontlaadt op basis van de EPEX-dagprijzen.",
  },
  {
    question: "Werken energie-apps met een P1-meter?",
    answer: "Ja. Een P1-dongel (ca. €30) op je slimme meter geeft je real-time verbruiksdata. Tibber heeft een eigen Pulse-dongel, en via Home Assistant kun je elke P1-meter koppelen. Lees meer op onze pagina over slimme technologie.",
  },
  {
    question: "Kan ik slim laden met mijn elektrische auto via een energie-app?",
    answer: "Zonneplan, Tibber en Frank Energie ondersteunen slim laden. De app plant het laden op de goedkoopste uren van de nacht en houdt rekening met je vertrekmoment. ANWB Energie biedt dit ook maar met minder integratiemogelijkheden.",
  },
];

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 9 ? "bg-green-500" : score >= 8 ? "bg-emerald-500" : score >= 7 ? "bg-amber-500" : "bg-red-500";
  return (
    <span className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${color} text-white text-lg font-bold`}>
      {score}
    </span>
  );
}

function FeatureCheck({ enabled }: { enabled: boolean }) {
  return enabled ? (
    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="w-5 h-5 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function EnergieAppsPage() {
  return (
    <>
      <ArticleSchema
        title="Beste Energie-Apps 2026: Vergelijking & Ranking"
        description="Vergelijk de beste energie-apps van 2026: scores, functies en welke app bij jouw situatie past."
        url="https://energiekenner.nl/energie-apps"
        datePublished="2026-03-01"
        dateModified="2026-03-15"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Energie-Apps", href: "/energie-apps" },
        ]}
      />
      <PageHero
        badge="Ranking maart 2026"
        title="Beste Energie-Apps"
        highlight="De afstandsbediening van je huis"
        description="In 2026 is je energie-app je belangrijkste tool voor slim energiebeheer. Vergelijk de top apps op functies, integraties en gebruiksgemak — van zonnepanelen tot slim laden."
        accentColor="purple"
      />

      {/* App Ranking Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-6">Top 5 energie-apps vergeleken</h2>
        <div className="space-y-4">
          {apps.map((app, idx) => (
            <article key={app.name} className="bg-white rounded-xl border border-border p-5 md:p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Score + Name */}
                <div className="flex items-center gap-4 md:w-56 shrink-0">
                  <div className="flex items-center gap-1 text-text-muted text-lg font-bold w-6">
                    {idx + 1}
                  </div>
                  <ScoreBadge score={app.score} />
                  <div>
                    <h3 className="font-bold text-text-main text-lg">{app.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-text-muted">{app.type}</span>
                      <span className="text-xs text-text-muted">{app.bestFor}</span>
                    </div>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="flex-1 grid sm:grid-cols-2 gap-3">
                  <div>
                    {app.pros.map((pro) => (
                      <p key={pro} className="flex items-start gap-2 text-sm text-text-muted py-0.5">
                        <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {pro}
                      </p>
                    ))}
                  </div>
                  <div>
                    {app.cons.map((con) => (
                      <p key={con} className="flex items-start gap-2 text-sm text-text-muted py-0.5">
                        <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {con}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a href={app.url} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium">
                  Bekijk
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <article className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="p-6 md:p-8 pb-0 md:pb-0">
            <h2 className="text-xl font-bold text-text-main mb-1">Functie-vergelijking</h2>
            <p className="text-sm text-text-muted mb-6">Welke app biedt welke slimme functies?</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">Functie</th>
                  {apps.map((app) => (
                    <th key={app.name} className="text-center px-3 py-3 font-semibold text-text-muted whitespace-nowrap">{app.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Slim EV-laden", key: "smartCharging" as const },
                  { label: "Batterij-aansturing", key: "batteryControl" as const },
                  { label: "Zonnepaneel-integratie", key: "solarIntegration" as const },
                  { label: "API-toegang", key: "apiAccess" as const },
                  { label: "Home Assistant", key: "homeAssistant" as const },
                ].map((feature, idx) => (
                  <tr key={feature.key} className={`border-t border-border ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                    <td className="px-4 py-3 font-medium text-text-main">{feature.label}</td>
                    {apps.map((app) => (
                      <td key={app.name} className="px-3 py-3 text-center">
                        <span className="inline-flex justify-center">
                          <FeatureCheck enabled={app.features[feature.key]} />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-border bg-surface-alt">
                  <td className="px-4 py-3 font-bold text-text-main">Score</td>
                  {apps.map((app) => (
                    <td key={app.name} className="px-3 py-3 text-center">
                      <span className={`font-bold ${app.score >= 8 ? "text-green-600" : app.score >= 7 ? "text-amber-600" : "text-rose-500"}`}>
                        {app.score}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>

      {/* Welke app past bij jou */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="text-xl font-bold text-text-main mb-4">Welke app past bij jou?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { profile: "Zonnepanelen + batterij", app: "Zonneplan", reason: "Zonnebonus + automatische batterij-aansturing", href: "/zonnepanelen" },
            { profile: "Smart home / domotica", app: "Tibber", reason: "Beste Homey & Home Assistant integratie", href: "/slimme-technologie" },
            { profile: "Developer / automatisering", app: "Frank Energie", reason: "Volledige API + lage opslagkosten", href: "/slimme-technologie" },
            { profile: "EV-rijder", app: "Tibber of Zonneplan", reason: "Slim laden met vertrekmoment-planning", href: "/laadpalen" },
            { profile: "Gemak / mainstream", app: "Eneco", reason: "Groot merk, betrouwbare service, vast + dynamisch", href: "/dynamisch" },
            { profile: "Maximale besparing", app: "Frank Energie", reason: "Laagste opslag + arbitrage via API", href: "/dynamisch" },
          ].map((item) => (
            <div key={item.profile} className="bg-white rounded-xl border border-border p-5">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Als je hebt:</p>
              <h3 className="font-semibold text-text-main mb-2">{item.profile}</h3>
              <p className="text-sm text-primary font-semibold">{item.app}</p>
              <p className="text-xs text-text-muted mt-1">{item.reason}</p>
              <Link href={item.href} className="text-xs text-primary hover:underline mt-2 inline-block">
                Meer info →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* P1 meter tip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="rounded-xl bg-purple-50 border border-purple-200 p-6 md:p-8">
          <h2 className="text-xl font-bold text-text-main mb-3">Eerste stap: een P1-meter dongel</h2>
          <p className="text-sm text-purple-900 mb-4">
            Alle energie-apps werken het beste met real-time verbruiksdata. Koop een P1-dongel (ca. €30) voor je slimme meter en je hebt direct inzicht in je verbruik per seconde. Tibber heeft een eigen &quot;Pulse&quot; dongel; voor andere apps gebruik je een generieke P1-dongel via{" "}
            <Link href="/slimme-technologie" className="text-primary hover:underline">Home Assistant of een HEMS</Link>.
          </p>
          <div className="rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5">
            <p className="flex items-start gap-3">
              <span className="text-xl font-bold text-purple-600 shrink-0">💡</span>
              <span className="text-sm">
                <strong className="text-text-main">Kennertip:</strong> Vanaf 2026 is een slimme meter verplicht. Heb je er nog geen? Neem contact op met je{" "}
                <Link href="/netbeheer" className="text-primary hover:underline">netbeheerder</Link>{" "}
                (Liander, Enexis of Stedin) voor een gratis plaatsing.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <FAQSchema items={faqItems} />
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-6">Veelgestelde vragen over energie-apps</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-8">
        <div className="rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold">Een app is zo goed als je contract</h2>
            <p className="mt-2 text-purple-100 max-w-xl mx-auto">
              De slimste apps draaien op dynamische tarieven. Vergelijk alle aanbieders en kies het contract dat bij jouw app past.
            </p>
            <Link href="/dynamisch" className="inline-flex items-center mt-6 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg">
              Vergelijk dynamische tarieven
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
