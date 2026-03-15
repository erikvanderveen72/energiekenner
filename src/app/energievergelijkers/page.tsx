import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hoe Werken Energievergelijkers? Eerlijk Uitgelegd | Energiekenner.nl",
  description:
    "Hoe verdienen vergelijkingssites als Independer en Gaslicht geld? Welke contractvorm past bij jou? En waar let de ACM op? Wij leggen het eerlijk uit.",
  keywords: [
    "energievergelijker",
    "energie vergelijken",
    "hoe werkt energievergelijker",
    "independer energie",
    "gaslicht.com",
    "overstappen energie",
    "vast variabel dynamisch contract",
    "ACM energie toezicht",
    "terugleverkosten zonnepanelen",
  ],
  openGraph: {
    title: "Hoe Werken Energievergelijkers? Eerlijk Uitgelegd",
    description:
      "Commissies, contractvormen, terugleverkosten en ACM-toezicht: alles wat je moet weten over de markt van energievergelijkers.",
  },
};

export default function EnergievergelijkersPage() {
  return (
    <>
      {/* Hero */}
      <PageHero badge="Consumentengids 2026" title="Hoe werken energievergelijkers?" highlight="Eerlijk uitgelegd" description="Miljoenen Nederlanders gebruiken vergelijkingssites om van energieleverancier te wisselen. Maar hoe verdienen die platforms geld, en kun je ze vertrouwen? Een eerlijke uitleg." accentColor="emerald" />

      {/* Inhoudsopgave */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <nav className="rounded-xl border border-border bg-white p-6">
          <h2 className="font-semibold text-text-main mb-3">In dit artikel</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-primary">
            <li><a href="#verdienmodel" className="hover:underline">Het verdienmodel van vergelijkingssites</a></li>
            <li><a href="#contractvormen" className="hover:underline">Vast, variabel of dynamisch contract</a></li>
            <li><a href="#zonnepanelen" className="hover:underline">Zonnepanelen en terugleverkosten</a></li>
            <li><a href="#acm" className="hover:underline">Toezicht door de ACM</a></li>
            <li><a href="#consumentengedrag" className="hover:underline">Trends in consumentengedrag</a></li>
            <li><a href="#overstappen" className="hover:underline">Hoe werkt overstappen precies?</a></li>
            <li><a href="#toekomst" className="hover:underline">De toekomst van energievergelijking</a></li>
          </ol>
        </nav>
      </section>

      {/* 1. Verdienmodel */}
      <section id="verdienmodel" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">1. Het verdienmodel: hoe verdient een vergelijker geld?</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Vergelijkingssites als Independer, Gaslicht.com, Pricewise en Overstappen.nl zijn gratis voor jou als consument. Maar ze zijn niet liefdadig: voor elke overstap die via hen wordt afgesloten, betaalt de energieleverancier een commissie aan het platform. Dat bedrag varieert per platform en per leverancier.
            </p>
            <p>
              De resultaten worden doorgaans gesorteerd op de laagste jaarkosten voor jou als klant. De hoogte van de commissie zou daar geen invloed op moeten hebben. Toch is het goed om te weten dat niet elk platform alle leveranciers toont - sommige vergelijkers werken alleen met partijen waarmee ze een actieve samenwerking hebben. Een &ldquo;vergelijking&rdquo; is dus niet altijd de volledige markt.
            </p>
          </div>

          {/* Vergelijkingstabel platforms */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Platform</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Commissiestructuur</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Bijzonderheid</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">Independer</td>
                  <td className="p-3 text-text-muted">Gemiddeld &euro;59 per overstap</td>
                  <td className="p-3 text-text-muted">Experts controleren adviezen</td>
                </tr>
                <tr className="border-b border-border bg-surface-alt/30">
                  <td className="p-3 font-medium text-text-main">Overstappen.nl</td>
                  <td className="p-3 text-text-muted">Ca. 2% van contractwaarde</td>
                  <td className="p-3 text-text-muted">Sorteert strikt op laagste prijs</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">Gaslicht.com</td>
                  <td className="p-3 text-text-muted">Commissie per overstap</td>
                  <td className="p-3 text-text-muted">Pionier sinds 2003</td>
                </tr>
                <tr className="border-b border-border bg-surface-alt/30">
                  <td className="p-3 font-medium text-text-main">Pricewise</td>
                  <td className="p-3 text-text-muted">Commissie per overstap</td>
                  <td className="p-3 text-text-muted">Breed aanbod (energie + verzekering)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Op Energiekenner.nl ontvangen we geen provisie van leveranciers. We tonen alle tarieven transparant, ook van partijen waarmee we g&eacute;&eacute;n samenwerking hebben. Zo weet je zeker dat je de volledige markt ziet.
            </p>
          </div>
        </article>
      </section>

      {/* 2. Contractvormen */}
      <section id="contractvormen" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">2. Vast, variabel of dynamisch: welk contract past bij jou?</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Bij het vergelijken van energie kies je uit drie contractvormen. Elk heeft voordelen en risico&apos;s. De juiste keuze hangt af van je situatie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {/* Vast */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main mb-2">Vast contract</h3>
              <p className="text-sm text-text-muted mb-3">
                Vaste prijs per kWh en m&sup3; voor 1 of 3 jaar. Bijna 90% van de overstappers kiest hiervoor. Je betaalt altijd hetzelfde, ook als de marktprijs stijgt.
              </p>
              <div className="text-xs space-y-1">
                <p className="text-blue-700 font-medium">+ Budgetzekerheid</p>
                <p className="text-blue-700 font-medium">+ Vaak hoge welkomstbonus</p>
                <p className="text-red-600 font-medium">&minus; Opzegvergoeding bij vroegtijdig stoppen</p>
              </div>
            </div>

            {/* Variabel */}
            <div className="rounded-xl border-2 border-orange-200 bg-orange-50/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main mb-2">Variabel contract</h3>
              <p className="text-sm text-text-muted mb-3">
                Tarieven worden per kwartaal of maand aangepast. Altijd opzegbaar met 30 dagen opzegtermijn. Circa 3,5 miljoen huishoudens zitten op een variabel contract.
              </p>
              <div className="text-xs space-y-1">
                <p className="text-blue-700 font-medium">+ Maximale flexibiliteit</p>
                <p className="text-blue-700 font-medium">+ Geen opzegvergoeding</p>
                <p className="text-red-600 font-medium">&minus; Vaak duurder dan vast (risico-opslag)</p>
              </div>
            </div>

            {/* Dynamisch */}
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main mb-2">Dynamisch contract</h3>
              <p className="text-sm text-text-muted mb-3">
                De prijs verandert per uur (stroom) of per dag (gas), direct gekoppeld aan de spotmarkt. Bij overaanbod kan de prijs zelfs negatief zijn.
              </p>
              <div className="text-xs space-y-1">
                <p className="text-blue-700 font-medium">+ Profiteer van lage marktprijzen</p>
                <p className="text-blue-700 font-medium">+ Ideaal met batterij of warmtepomp</p>
                <p className="text-red-600 font-medium">&minus; Risico op prijspieken</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Heb je een warmtepomp, thuisbatterij of elektrische auto? Dan kan een dynamisch contract interessant zijn, omdat je verbruik kunt verschuiven naar goedkope uren. Zonder slimme apparaten is een vast contract voor de meeste huishoudens de veiligste keuze.
            </p>
          </div>

          <div className="mt-4">
            <Link href="/dynamisch" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
              Bekijk dynamische tarieven
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      {/* 3. Zonnepanelen & terugleverkosten */}
      <section id="zonnepanelen" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">3. Zonnepanelen en terugleverkosten: de verborgen kosten</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Heb je zonnepanelen? Dan is vergelijken extra belangrijk. Sinds 2024 rekenen de meeste grote leveranciers vaste terugleverkosten. Dit zijn maandelijkse bedragen die je betaalt als je stroom teruglevert aan het net. Hoe meer je teruglevert, hoe hoger de kosten.
            </p>
            <p>
              De goedkoopste leverancier op basis van alleen het leveringstarief is daardoor niet per se de voordeligste onderaan de streep. Je moet de terugleverkosten meenemen in je vergelijking.
            </p>
          </div>

          {/* Terugleverkosten tabel */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Leverancier</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Tot 1.000 kWh/jaar</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">1.000 &ndash; 2.000 kWh/jaar</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">5.000+ kWh/jaar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">Vandebron</td>
                  <td className="p-3 text-text-muted">&euro;4/mnd</td>
                  <td className="p-3 text-text-muted">&euro;12,50/mnd</td>
                  <td className="p-3 text-text-muted">&euro;46/mnd</td>
                </tr>
                <tr className="border-b border-border bg-surface-alt/30">
                  <td className="p-3 font-medium text-text-main">Budget Energie</td>
                  <td className="p-3 text-text-muted">&euro;3/mnd</td>
                  <td className="p-3 text-text-muted">&euro;10/mnd</td>
                  <td className="p-3 text-text-muted">&euro;90/mnd</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">Essent</td>
                  <td className="p-3 text-text-muted">&euro;9,47/mnd</td>
                  <td className="p-3 text-text-muted">&euro;20,32/mnd</td>
                  <td className="p-3 text-text-muted">&euro;111/mnd</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl bg-teal-50 border border-teal-200 p-6">
            <h3 className="font-semibold text-text-main mb-2">Salderingsregeling: wat verandert er?</h3>
            <p className="text-sm text-text-muted">
              De salderingsregeling - waarbij je teruggeleverde stroom 1-op-1 mag wegstrepen tegen afgenomen stroom - blijft tot 1 januari 2027 ongewijzigd. Daarna wordt de regeling afgeschaft. Je krijgt dan alleen nog een (lagere) terugleververgoeding. Bereid je voor door te investeren in zelfverbruik: een thuisbatterij, warmtepomp of slim laadstation.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/zonnepanelen" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
              Meer over zonnepanelen
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/thuisbatterij" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
              Thuisbatterij als oplossing
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      {/* 4. ACM toezicht */}
      <section id="acm" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">4. Toezicht door de ACM: jouw bescherming</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De Autoriteit Consument &amp; Markt (ACM) houdt toezicht op de energiebranche. Uit hun onderzoek blijkt dat veel consumenten het lastig vinden om aanbiedingen te vergelijken, met name door tijdelijke acties en onduidelijke voorwaarden.
            </p>
            <p>
              Vergelijkingssites vallen onder de P2B-verordening (Platform-to-Business). Dat betekent dat ze verplicht transparant moeten zijn over hoe ze resultaten rangschikken en of ze betaalde advertenties tonen in de zoekresultaten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-xl bg-red-50 border border-red-200 p-6">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-main mb-2">Pas op voor telefonische verkoop</h3>
              <p className="text-sm text-text-muted">
                Uit ACM-onderzoek blijkt dat een kwart van de huishoudens telefonisch wordt benaderd door energieleveranciers. Bijna de helft voelde zich onder druk gezet. Ga nooit direct in op een telefonisch aanbod - vergelijk altijd eerst zelf.
              </p>
            </div>
            <div className="rounded-xl bg-blue-50 border border-blue-200 p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-main mb-2">ACM-lijst met te dure contracten</h3>
              <p className="text-sm text-text-muted">
                De ACM publiceert maandelijks een overzicht van contracten met tarieven die fors boven het marktgemiddelde liggen. Zo kun je snel zien of je huidige contract te duur is en of overstappen de moeite waard is.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Vul bij een vergelijker altijd je postcode en je exacte verbruik in. Alleen dan krijg je een betrouwbaar resultaat. Gebruik je jaarafrekening voor de juiste cijfers, of check je slimme meter via de app van je netbeheerder.
            </p>
          </div>
        </article>
      </section>

      {/* 5. Consumentengedrag */}
      <section id="consumentengedrag" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">5. Trends in consumentengedrag</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De manier waarop Nederlanders energie verbruiken verandert snel. Het gemiddelde gasverbruik is in vijf jaar met zo&apos;n 25% gedaald: van 1.381 m&sup3; in 2020 naar 1.040 m&sup3; in 2024. Steeds meer huishoudens isoleren beter, plaatsen warmtepompen of koken elektrisch.
            </p>
            <p>
              Tegelijkertijd groeit het aantal huishoudens dat helemaal geen gascontract meer nodig heeft. In 2020 zocht 1 op de 8 huishoudens alleen een stroomcontract, in 2024 is dat al 1 op de 6. De trend naar gasloos wonen versnelt.
            </p>
          </div>

          {/* Gasverbruik trend */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Jaar</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Gem. gasverbruik</th>
                  <th className="text-left p-3 font-semibold text-text-main border-b border-border">Huishoudens &lt; 1.000 m&sup3;</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">2020</td>
                  <td className="p-3 text-text-muted">1.381 m&sup3;</td>
                  <td className="p-3 text-text-muted">24,3%</td>
                </tr>
                <tr className="border-b border-border bg-surface-alt/30">
                  <td className="p-3 font-medium text-text-main">2022</td>
                  <td className="p-3 text-text-muted">1.273 m&sup3;</td>
                  <td className="p-3 text-text-muted">29,0%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">2024</td>
                  <td className="p-3 text-text-muted">1.040 m&sup3;</td>
                  <td className="p-3 text-text-muted">41,3%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-text-muted mt-3">Bron: Independer gasverbruik-onderzoek 2025</p>
        </article>
      </section>

      {/* 6. Overstappen */}
      <section id="overstappen" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">6. Hoe werkt overstappen precies?</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Overstappen van energieleverancier is eenvoudiger dan veel mensen denken. Het proces verloopt volledig via de zogenaamde overstapservice: je nieuwe leverancier regelt de opzegging bij je oude leverancier, zodat jij er geen omkijken naar hebt.
            </p>
          </div>

          {/* Stappen */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Vergelijk", desc: "Vul je verbruik in en vergelijk alle leveranciers op jaarkosten." },
              { step: "2", title: "Kies & meld aan", desc: "Selecteer het beste aanbod en meld je online aan bij de nieuwe leverancier." },
              { step: "3", title: "Overstapservice", desc: "Je nieuwe leverancier regelt alles, inclusief opzegging bij je oude leverancier." },
              { step: "4", title: "Klaar!", desc: "Binnen 5 werkdagen (Energiewet 2026) zit je bij je nieuwe leverancier." },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-border p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-text-main mb-1">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 p-6">
            <h3 className="font-semibold text-text-main mb-2">14 dagen bedenktijd</h3>
            <p className="text-sm text-text-muted">
              Na de aanmelding heb je altijd een wettelijke bedenktijd van 14 dagen. Binnen die termijn kun je het contract zonder kosten en zonder opgave van reden annuleren. Bij misleiding of agressieve verkoopmethoden kan deze termijn zelfs worden verlengd.
            </p>
          </div>

          <div className="mt-4">
            <Link href="/energiewet" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
              Lees meer over de Energiewet 2026
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      {/* 7. Toekomst */}
      <section id="toekomst" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">7. De toekomst: van vergelijker naar energie-adviseur</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De rol van vergelijkingssites verschuift. In plaats van &eacute;&eacute;n keer per jaar je contract vergelijken, zullen consumenten behoefte hebben aan platforms die hun energieverbruik, opslag en teruglevering continu optimaliseren. Denk aan een systeem dat op basis van weersvoorspellingen en marktprijzen automatisch bepaalt wanneer je batterij oplaadt, wanneer je auto laadt en wanneer je stroom teruglevert.
            </p>
            <p>
              Slimme meters vormen hiervoor de basis. Ze maken niet alleen nauwkeurige facturatie mogelijk, maar bieden ook de data die nodig is voor real-time monitoring via energie-apps. De vergelijker van de toekomst is een continue energie-adviseur die je elke dag helpt besparen.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/slimme-technologie" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
              Slim energie sturen
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/thuisbatterij" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
              Thuisbatterij &amp; V2G
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Klaar om te vergelijken?</h2>
          <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
            Op Energiekenner.nl vergelijk je alle leveranciers onafhankelijk en transparant. Geen verborgen commissies, geen ontbrekende aanbieders.
          </p>
          <Link
            href="/#vergelijk"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Direct energie vergelijken
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
