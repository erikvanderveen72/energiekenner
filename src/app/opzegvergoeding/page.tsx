import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedPages } from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Opzegvergoeding Energiecontract 2026 | Energiekenner.nl",
  description: "Lees hier wat opzegtermijn en -vergoedingen zijn voor energiecontracten in Nederland.",
  alternates: {
    canonical: "https://energiekenner.nl/opzegvergoeding",
  },
};

const faqItems = [
  {
    question: "Hoe hoog kan een opzegvergoeding worden?",
    answer:
      "Er is geen wettelijk maximum meer. De vergoeding is gebaseerd op het werkelijke verlies van je leverancier. Bij een driejarig contract dat is afgesloten op een prijspiek kan dit oplopen tot meer dan \u20ac 1.000 voor gas en stroom samen. Maar als de marktprijzen zijn gestegen sinds je contract, betaal je \u20ac 0.",
  },
  {
    question: "Wanneer betaal ik geen opzegvergoeding?",
    answer:
      "Je betaalt geen boete als: de marktprijzen hoger zijn dan jouw contracttarief, je opzegt binnen het switchwindow (6-8 weken voor einddatum), je een variabel of maandelijks opzegbaar contract hebt, of je leverancier failliet gaat. Bij overlijden van de contracthouder wordt de boete standaard kwijtgescholden.",
  },
  {
    question: "Geldt de opzegvergoeding ook bij verhuizing?",
    answer:
      "Ja. Een energiecontract is persoonsgebonden, niet adresgebonden. Bij verhuizing verhuist je contract mee. Als je besluit over te stappen naar een andere leverancier, ben je de opzegvergoeding verschuldigd. Sommige leveranciers zijn coulant bij emigratie of verhuizing naar een zorginstelling.",
  },
  {
    question: "Mag mijn leverancier de welkomstpremie terugvorderen?",
    answer:
      "Alleen als je binnen zes maanden na de start van je contract opzegt. Na die zes maanden mag de leverancier de welkomstpremie of cashback niet meer terugvorderen, ongeacht de resterende looptijd van je contract.",
  },
  {
    question: "Hoe weet ik hoeveel mijn opzegvergoeding is?",
    answer:
      "Je leverancier is verplicht om op elk moment een indicatie te geven van je opzegvergoeding. Vraag dit op via je online klantportaal of de klantenservice. Het berekende bedrag staat vervolgens twee maanden vast, zodat je in alle rust kunt vergelijken.",
  },
  {
    question: "Wat verandert er met de Energiewet 2026?",
    answer:
      "De Energiewet harmoniseert de regels voor gas en stroom. Leveranciers moeten een nauwkeuriger indicatie geven op basis van je slimme meterdata. De tweemaandenregel (berekend bedrag staat twee maanden vast) wordt wettelijk verankerd. Vanaf 2027 verandert de berekening voor zonnepaneelhouders door het einde van salderen.",
  },
];

export default function OpzegvergoedingPage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://energiekenner.nl" },
          { name: "Opzegvergoeding", url: "https://energiekenner.nl/opzegvergoeding" },
        ]}
      />

      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Opzegvergoeding", href: "/opzegvergoeding" },
      ]} />
      <PageHero
        badge="ACM-regels 2026"
        title="Opzegvergoeding energie"
        highlight="Wat kost voortijdig opzeggen?"
        description="Sinds juni 2023 zijn de regels voor opzegvergoedingen compleet veranderd. De boete is niet meer vast, maar hangt af van de marktprijs. We leggen uit hoe het werkt en hoe je slim overstap."
        accentColor="rose"
      />

      {/* Inhoudsopgave */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <nav className="rounded-xl border border-border bg-white p-6">
          <h2 className="font-semibold text-text-main mb-3">In dit artikel</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-primary">
            <li><a href="#oud-vs-nieuw" className="hover:underline">Oud vs. nieuw: wat is er veranderd?</a></li>
            <li><a href="#hoe-berekend" className="hover:underline">Zo wordt je opzegvergoeding berekend</a></li>
            <li><a href="#voorbeelden" className="hover:underline">Voorbeeldberekeningen</a></li>
            <li><a href="#wanneer-gratis" className="hover:underline">Wanneer betaal je niets?</a></li>
            <li><a href="#bijzondere-situaties" className="hover:underline">Verhuizing, overlijden en andere situaties</a></li>
            <li><a href="#zonnepanelen" className="hover:underline">Opzegvergoeding met zonnepanelen</a></li>
            <li><a href="#tips" className="hover:underline">Slim overstappen zonder boete</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </nav>
      </section>

      {/* 1. Oud vs Nieuw */}
      <section id="oud-vs-nieuw" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">1. Oud vs. nieuw: wat is er veranderd?</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Tot juni 2023 was de opzegboete simpel: een vast bedrag van maximaal &euro; 50 tot &euro; 125 per product, ongeacht de marktprijs. Toen de energieprijzen in 2021-2022 explodeerden, konden consumenten hun dure contract afkopen voor een fractie van het werkelijke verlies. Leveranciers boden daardoor bijna geen vaste contracten meer aan.
            </p>
            <p>
              De ACM greep in en koppelde de opzegvergoeding aan het echte economische verlies van de leverancier. Resultaat: vaste contracten zijn terug, maar de boete kan flink oplopen.
            </p>
          </div>

          {/* Visuele vergelijking */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl border-2 border-stone-200 bg-stone-50/50 p-6 relative">
              <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-stone-400 text-white text-xs font-bold">
                VÓÓR juni 2023
              </div>
              <div className="mt-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-lg">&euro;</div>
                  <div>
                    <p className="font-semibold text-text-main">Vast bedrag</p>
                    <p className="text-sm text-text-muted">Max &euro; 50 - &euro; 125 per product</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-stone-200 flex items-center justify-center text-stone-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-main">Voorspelbaar</p>
                    <p className="text-sm text-text-muted">Altijd hetzelfde bedrag</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-main">Gevolg</p>
                    <p className="text-sm text-text-muted">Bijna geen vaste contracten meer beschikbaar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-rose-200 bg-rose-50/50 p-6 relative">
              <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-rose-500 text-white text-xs font-bold">
                VANAF juni 2023
              </div>
              <div className="mt-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-lg">&euro;</div>
                  <div>
                    <p className="font-semibold text-text-main">Variabel bedrag</p>
                    <p className="text-sm text-text-muted">Gebaseerd op werkelijk verlies leverancier</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-main">Prijsafhankelijk</p>
                    <p className="text-sm text-text-muted">Kan &euro; 0 zijn, maar ook &euro; 1.000+</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-main">Gevolg</p>
                    <p className="text-sm text-text-muted">Vaste contracten zijn weer beschikbaar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overzichtstabel */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-rose-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Kenmerk</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Oud (vóór juni 2023)</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Nieuw (vanaf juni 2023)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Grondslag", "Resterende looptijd", "Economisch verlies leverancier"],
                  ["Maximum", "\u20ac 125 per product", "Geen maximum"],
                  ["Voorspelbaarheid", "Hoog (vaste tabel)", "Laag (afhankelijk van marktprijs)"],
                  ["Risico leverancier", "Hoog bij dalende prijzen", "Gedekt door vergoeding"],
                  ["Risico consument", "Max \u20ac 250 (gas + stroom)", "Kan oplopen tot \u20ac 1.000+"],
                ].map(([kenmerk, oud, nieuw], idx) => (
                  <tr key={kenmerk} className={`border-b border-border ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                    <td className="p-3 font-medium text-text-main">{kenmerk}</td>
                    <td className="p-3 text-text-muted">{oud}</td>
                    <td className="p-3 text-text-muted">{nieuw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      {/* 2. Hoe berekend */}
      <section id="hoe-berekend" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">2. Zo wordt je opzegvergoeding berekend</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De kern is simpel: je leverancier heeft energie ingekocht voor de hele looptijd van je contract. Als je voortijdig opzegt, moet die energie weer op de markt worden verkocht. Is de marktprijs inmiddels lager? Dan maakt de leverancier verlies, en dat verlies is jouw opzegvergoeding.
            </p>
          </div>

          {/* Visuele formule */}
          <div className="mt-8 rounded-xl bg-gradient-to-br from-rose-50 to-orange-50 border-2 border-rose-200 p-6 sm:p-8">
            <h3 className="font-bold text-text-main mb-6 text-center">De formule</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
              <div className="rounded-xl bg-white border border-rose-200 p-4 shadow-sm flex-1 max-w-[200px]">
                <p className="text-xs text-text-muted mb-1">Jouw contracttarief</p>
                <p className="text-lg font-bold text-rose-600">minus</p>
                <p className="text-xs text-text-muted mt-1">Huidig markttarief</p>
              </div>
              <div className="text-2xl font-bold text-rose-400">&times;</div>
              <div className="rounded-xl bg-white border border-rose-200 p-4 shadow-sm flex-1 max-w-[200px]">
                <p className="text-xs text-text-muted mb-1">Geschat resterend</p>
                <p className="text-lg font-bold text-rose-600">verbruik</p>
                <p className="text-xs text-text-muted mt-1">in kWh of m&sup3;</p>
              </div>
              <div className="text-2xl font-bold text-rose-400">=</div>
              <div className="rounded-xl bg-white border-2 border-rose-400 p-4 shadow-sm flex-1 max-w-[200px]">
                <p className="text-xs text-text-muted mb-1">Jouw</p>
                <p className="text-lg font-bold text-rose-700">opzegvergoeding</p>
              </div>
            </div>
          </div>

          {/* Drie variabelen uitgelegd */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="rounded-xl bg-white border border-border p-5">
              <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm mb-3">1</div>
              <h4 className="font-semibold text-text-main mb-2">Contracttarief</h4>
              <p className="text-sm text-text-muted">
                Het tarief per kWh of m&sup3; dat in jouw contract staat, exclusief belastingen. Dit is het bedrag waarvoor je leverancier energie heeft ingekocht.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-border p-5">
              <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm mb-3">2</div>
              <h4 className="font-semibold text-text-main mb-2">Referentietarief</h4>
              <p className="text-sm text-text-muted">
                Het tarief dat je leverancier nu vraagt voor een vergelijkbaar nieuw contract. Belangrijk: als dit tarief hoger is dan jouw contracttarief, is de boete &euro; 0.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-border p-5">
              <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm mb-3">3</div>
              <h4 className="font-semibold text-text-main mb-2">Resterend verbruik</h4>
              <p className="text-sm text-text-muted">
                Hoeveel energie je nog zou verbruiken tot het einde van je contract, berekend op basis van je slimme meter en seizoensprofielen.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-rose-50 border-l-4 border-rose-400 rounded">
            <p className="font-semibold text-rose-900 mb-2">Kennertip</p>
            <p className="text-sm text-rose-800">
              Het referentietarief moet een product zijn dat de leverancier daadwerkelijk aanbiedt met een vergelijkbare resterende looptijd. Vraag altijd welk referentieproduct is gebruikt in de berekening.
            </p>
          </div>
        </article>
      </section>

      {/* 3. Voorbeeldberekeningen */}
      <section id="voorbeelden" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">3. Voorbeeldberekeningen</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-8">
            <p>
              De hoogte van je opzegvergoeding hangt volledig af van het verschil tussen jouw contracttarief en de huidige marktprijs. Twee scenario&apos;s maken dit duidelijk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Scenario 1: Boete */}
            <div className="rounded-xl border-2 border-red-200 bg-red-50/30 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <h3 className="font-bold text-text-main">Prijzen zijn gedaald</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-red-200/50">
                  <span className="text-text-muted">Jouw contracttarief stroom</span>
                  <span className="font-semibold text-text-main">&euro; 0,40 /kWh</span>
                </div>
                <div className="flex justify-between py-2 border-b border-red-200/50">
                  <span className="text-text-muted">Huidige marktprijs</span>
                  <span className="font-semibold text-text-main">&euro; 0,25 /kWh</span>
                </div>
                <div className="flex justify-between py-2 border-b border-red-200/50">
                  <span className="text-text-muted">Verschil</span>
                  <span className="font-semibold text-red-600">&euro; 0,15 /kWh</span>
                </div>
                <div className="flex justify-between py-2 border-b border-red-200/50">
                  <span className="text-text-muted">Resterend verbruik (12 mnd)</span>
                  <span className="font-semibold text-text-main">2.400 kWh</span>
                </div>
                <div className="flex justify-between py-3 rounded-lg bg-red-100 px-3 mt-2">
                  <span className="font-bold text-red-900">Opzegvergoeding stroom</span>
                  <span className="font-bold text-red-700 text-lg">&euro; 360</span>
                </div>
                <p className="text-xs text-text-muted mt-2">
                  Tel daar de gasboete bij op en het totaal kan richting &euro; 600 - &euro; 1.000 gaan.
                </p>
              </div>
            </div>

            {/* Scenario 2: Geen boete */}
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/30 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-text-main">Prijzen zijn gestegen</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-emerald-200/50">
                  <span className="text-text-muted">Jouw contracttarief stroom</span>
                  <span className="font-semibold text-text-main">&euro; 0,25 /kWh</span>
                </div>
                <div className="flex justify-between py-2 border-b border-emerald-200/50">
                  <span className="text-text-muted">Huidige marktprijs</span>
                  <span className="font-semibold text-text-main">&euro; 0,35 /kWh</span>
                </div>
                <div className="flex justify-between py-2 border-b border-emerald-200/50">
                  <span className="text-text-muted">Verschil</span>
                  <span className="font-semibold text-emerald-600">&euro; -0,10 /kWh</span>
                </div>
                <div className="flex justify-between py-2 border-b border-emerald-200/50">
                  <span className="text-text-muted">Leverancier maakt winst</span>
                  <span className="font-semibold text-emerald-600">Geen verlies</span>
                </div>
                <div className="flex justify-between py-3 rounded-lg bg-emerald-100 px-3 mt-2">
                  <span className="font-bold text-emerald-900">Opzegvergoeding stroom</span>
                  <span className="font-bold text-emerald-700 text-lg">&euro; 0</span>
                </div>
                <p className="text-xs text-text-muted mt-2">
                  Let op: overstappen is nu waarschijnlijk niet voordelig, want de nieuwe tarieven zijn hoger.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* 4. Wanneer gratis */}
      <section id="wanneer-gratis" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">4. Wanneer betaal je niets?</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-6">
            <p>
              Er zijn meerdere situaties waarin je geen opzegvergoeding betaalt. Hier een overzicht.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Prijzen gestegen",
                desc: "De marktprijs is hoger dan jouw contracttarief. De leverancier maakt geen verlies.",
                color: "emerald",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Switchwindow",
                desc: "Je zegt op in de laatste 6-8 weken van je contract en stapt aansluitend over.",
                color: "blue",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: "Variabel contract",
                desc: "Bij een variabel of maandelijks opzegbaar contract geldt geen opzegvergoeding.",
                color: "purple",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
                title: "Faillissement leverancier",
                desc: "Als je leverancier failliet gaat, kun je boetevrij overstappen.",
                color: "amber",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
                title: "Leverancier wijzigt voorwaarden",
                desc: "Pas je leverancier eenzijdig de voorwaarden aan? Dan mag je kosteloos opzeggen.",
                color: "rose",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Contract vóór juni 2023",
                desc: "Contracten afgesloten v\u00f3\u00f3r 1 juni 2023 vallen onder de oude regels met lage vaste boetes.",
                color: "cyan",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl bg-${item.color}-50/50 border border-${item.color}-200 p-5`}>
                <div className={`w-9 h-9 rounded-lg bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 mb-3`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-text-main text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* 5. Bijzondere situaties */}
      <section id="bijzondere-situaties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">5. Verhuizing, overlijden en andere situaties</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-6">
            <p>
              Persoonlijke omstandigheden veranderen de regels niet automatisch. Een energiecontract is persoonsgebonden, niet adresgebonden. Toch zijn er uitzonderingen.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-rose-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Situatie</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Opzegvergoeding?</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Verhuizing binnen NL", "Ja", "Contract verhuist mee. Bij overstap is boete verschuldigd."],
                  ["Samenwonen", "Meestal ja", "Sommige leveranciers bieden coulance bij bewijs van samenwonen."],
                  ["Emigratie", "Juridisch ja", "Leveranciers zijn vaak coulant. Neem contact op voor maatwerk."],
                  ["Verhuizing naar zorginstelling", "Vaak niet", "De meeste leveranciers schelden de boete kwijt."],
                  ["Overlijden contracthouder", "Nee", "De ACM beschouwt dit als onredelijk. Standaard kwijtschelding."],
                  ["Faillissement leverancier", "Nee", "Klanten gaan boetevrij over naar een vangnetleverancier."],
                ].map(([situatie, boete, toelichting], idx) => (
                  <tr key={situatie} className={`border-b border-border ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                    <td className="p-3 font-medium text-text-main">{situatie}</td>
                    <td className="p-3">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-bold ${
                        boete === "Nee" ? "bg-emerald-100 text-emerald-700" :
                        boete === "Ja" ? "bg-red-100 text-red-700" :
                        "bg-amber-100 text-amber-700"
                      }`}>
                        {boete}
                      </span>
                    </td>
                    <td className="p-3 text-text-muted">{toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      {/* 6. Zonnepanelen */}
      <section id="zonnepanelen" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">6. Opzegvergoeding met zonnepanelen</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Heb je zonnepanelen? Dan wordt de berekening complexer. Je leverancier heeft energie ingekocht voor de momenten dat je stroom afneemt (bijvoorbeeld &apos;s nachts of in de winter). Bij voortijdige opzegging moet dit volume worden ingeschat.
            </p>
            <p>
              De meeste leveranciers kijken naar de balans tussen je afname en teruglevering, gecorrigeerd met seizoensprofielen. Sommige leveranciers hanteren het bruto verbruik, waardoor de boete hoger uitvalt. Vraag altijd specifiek na welke methode wordt gebruikt.
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-6">
              <h3 className="font-semibold text-amber-900 mb-2">Tot en met 2026: saldering</h3>
              <p className="text-sm text-amber-800">
                Bij de boeteberekening wordt rekening gehouden met saldering. De netto-afname (afname minus teruglevering) bepaalt het resterend verbruik. Netto-terugleveraars kunnen hierdoor een lagere boete hebben.
              </p>
            </div>
            <div className="rounded-xl bg-rose-50 border border-rose-200 p-6">
              <h3 className="font-semibold text-rose-900 mb-2">Vanaf 2027: zonder saldering</h3>
              <p className="text-sm text-rose-800">
                Afname en teruglevering worden apart berekend. Er kan ook een opzegvergoeding gelden over het teruglever-onderdeel als jouw terugleververgoeding gunstiger is dan de actuele marktvergoeding.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Link href="/salderen" className="inline-flex items-center text-sm font-semibold text-rose-600 hover:text-rose-800 transition-colors">
              Lees meer over het einde van salderen
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      {/* 7. Slim overstappen */}
      <section id="tips" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">7. Slim overstappen zonder boete</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4 mb-6">
            <p>
              Wil je overstappen? Met de juiste timing en voorbereiding kun je de opzegvergoeding vermijden of minimaliseren.
            </p>
          </div>

          {/* Visueel stappenplan */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-rose-200 hidden sm:block" />
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Check je contracttype en einddatum",
                  desc: "Heb je een variabel contract? Dan kun je altijd gratis opzeggen. Bij een vast contract, noteer de einddatum.",
                  tip: "Kijk in je klantportaal of op je laatste jaarafrekening.",
                },
                {
                  step: "2",
                  title: "Vraag een indicatie op",
                  desc: "Je leverancier is verplicht om een indicatie te geven. Dit bedrag staat twee maanden vast.",
                  tip: "Doe dit per e-mail zodat je bewijs hebt van het genoemde bedrag.",
                },
                {
                  step: "3",
                  title: "Bereken of overstappen loont",
                  desc: "Vergelijk de opzegvergoeding met de besparing bij een nieuw contract over de resterende looptijd.",
                  tip: "Vergeet de welkomstpremie van de nieuwe leverancier niet mee te rekenen.",
                },
                {
                  step: "4",
                  title: "Gebruik het switchwindow",
                  desc: "Stap 6-8 weken voor je einddatum over. Dan is de vergoeding \u20ac 0 en sluit je nieuwe contract naadloos aan.",
                  tip: "Zet een herinnering in je agenda 2 maanden voor de einddatum.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-lg relative z-10">
                    {item.step}
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="font-bold text-text-main mb-1">{item.title}</h3>
                    <p className="text-sm text-text-muted mb-2">{item.desc}</p>
                    <p className="text-xs text-rose-700 bg-rose-50 rounded-lg px-3 py-1.5 inline-block">
                      Tip: {item.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Welkomstpremie waarschuwing */}
          <div className="mt-8 rounded-xl bg-amber-50 border border-amber-200 p-6">
            <h3 className="font-semibold text-amber-900 mb-2">Let op: welkomstpremie terugvordering</h3>
            <p className="text-sm text-amber-800">
              Zeg je binnen zes maanden na de start op? Dan mag je leverancier de welkomstpremie (cashback) volledig terugvorderen. Na zes maanden vervalt dit recht. Houd hier rekening mee bij je overstapberekening.
            </p>
          </div>
        </article>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-6">Veelgestelde vragen over opzegvergoeding</h2>
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

      {/* Tweemaanden-regel highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-text-main mb-2">De tweemaandenregel beschermt je</h3>
              <p className="text-sm text-text-muted">
                Zodra je opzegt of een overstap initieert, berekent je leverancier de opzegvergoeding. Dit bedrag staat vervolgens twee maanden vast. Schommelt de marktprijs in de tussentijd? Dat heeft geen invloed meer op jouw boete. Zo kun je in alle rust vergelijken en beslissen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <div className="rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Overweeg je over te stappen?</h2>
          <p className="text-rose-100 mb-6 max-w-xl mx-auto">
            Vergelijk actuele tarieven en ontdek of overstappen loont. Houd rekening met je huidige contracttarief en de mogelijke opzegvergoeding.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#vergelijk"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-rose-700 font-semibold hover:bg-rose-50 transition-colors shadow-lg"
            >
              Direct energie vergelijken
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/salderen"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              Salderingsregeling 2027
            </Link>
          </div>
        </div>
      </section>

      <RelatedPages currentPage="opzegvergoeding" relatedKeys={["energiewet", "vergelijker", "dynamisch", "begrippenlijst"]} />
    </>
  );
}
