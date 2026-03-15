import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Groene Stroom 2026: Duurzaamheidsscores & Greenwashing | Energiekenner",
  description: "Welke leverancier levert echt groene stroom? Vergelijk duurzaamheidsscores, GvO-herkomst en EU-greenwashing regels in 2026.",
  keywords: ["groene stroom", "duurzame energie", "greenwashing", "sjoemelstroom", "garanties van oorsprong", "GvO", "stroometiket"],
  openGraph: {
    title: "Groene Stroom 2026: Wie is echt duurzaam?",
    description: "Duurzaamheidsscores, GvO-transparantie en EU-greenwashing regels vergeleken.",
  },
};

const providers = [
  { name: "Pure Energie", score: "10.0", source: "100% NL Wind & Zon", strategy: "9x groenste leverancier, eigen opwek >400M kWh", color: "bg-green-600" },
  { name: "Vrijopnaam", score: "10.0", source: "100% NL Zon", strategy: "Eigen zonneparken in Nederland", color: "bg-green-600" },
  { name: "Greenchoice", score: "9.5", source: "NL Wind & Zon", strategy: "Investeert in NL duurzame projecten", color: "bg-green-500" },
  { name: "Vandebron", score: "9.5", source: "100% NL Wind/Zon", strategy: "Lokale bronnen, directe inkoop bij producenten", color: "bg-green-500" },
  { name: "Eneco", score: "8.0", source: "Grote focus op NL Wind", strategy: "Investering in windparken en warmtenetten", color: "bg-green-400" },
];

export default function DuurzaamheidPage() {
  return (
    <>
      <PageHero badge="Bewust kiezen" title="Groene stroom &amp; duurzaamheid" highlight="Is jouw stroom echt groen?" description="Niet alle groene stroom is even groen. Ontdek het verschil tussen Garanties van Oorsprong, Europese windcertificaten en lokaal opgewekte energie." accentColor="emerald" />

      {/* Scores */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-2">Duurzaamheidsscores 2026</h2>
        <p className="text-text-muted mb-4">
          Op basis van de{" "}
          <a href="https://natuurenmilieu.nl/publicatie/stroomranking-hoe-duurzaam-is-jouw-stroom/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark">
            Stroomranking van Natuur &amp; Milieu
          </a>
          ,{" "}
          <a href="https://www.consumentenbond.nl/energie-vergelijken/de-groenste-energieleverancier" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark">
            Consumentenbond
          </a>
          {" "}en{" "}
          <a href="https://www.greenpeace.org/nl/acties/groene-stroom-ranglijst/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark">
            Greenpeace Groene Stroom Ranglijst
          </a>
          . Score van 1-10.
        </p>
        <div className="rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 mb-6 text-sm text-amber-800">
          <strong>Let op:</strong> Het gezamenlijke WISE/Consumentenbond/Natuur &amp; Milieu onderzoek is voor het laatst uitgevoerd in 2021. De scores hieronder zijn een indicatie op basis van de meest recente beschikbare bronnen.
        </div>
        <div className="space-y-3">
          {providers.map((p) => (
            <div key={p.name} className="rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-xs font-bold text-green-600 border border-green-200">
                    {p.name.substring(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-semibold text-text-main">{p.name}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${p.color}`}>{p.score}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 mb-3">
                <div className={`h-2.5 rounded-full ${p.color}`} style={{ width: `${parseFloat(p.score) * 10}%` }} />
              </div>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <div><span className="text-text-muted">Herkomst:</span> <span className="font-medium text-text-main">{p.source}</span></div>
                <div><span className="text-text-muted">Strategie:</span> <span className="font-medium text-text-main">{p.strategy}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GvO uitleg */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-green-50 border border-green-200 p-6">
            <h3 className="font-bold text-text-main mb-2">Wat zijn Garanties van Oorsprong (GvO)?</h3>
            <p className="text-sm text-green-900">
              VertiCer geeft per geproduceerde MWh hernieuwbare energie een certificaat uit. Leveranciers kopen deze om hun stroom te &quot;vergroenen&quot;. Let op: goedkope buitenlandse GvO&apos;s dragen niet bij aan de Nederlandse energietransitie.
            </p>
          </div>
          <div className="rounded-xl bg-red-50 border border-red-200 p-6">
            <h3 className="font-bold text-text-main mb-2">Wat is sjoemelstroom?</h3>
            <p className="text-sm text-red-900">
              Stroom die op papier is vergroend met goedkope buitenlandse certificaten, terwijl er geen cent wordt ge&iuml;nvesteerd in echte Nederlandse duurzame opwek. De EU verbiedt sinds 2026 misleidende claims als &quot;CO2-neutraal via compensatie&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* EU regels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-6">Nieuwe EU-regels tegen greenwashing</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border p-5">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-main text-sm">Wetenschappelijke onderbouwing</h3>
            <p className="text-xs text-text-muted mt-1">Claims moeten wetenschappelijk onderbouwd zijn. Geen vage termen meer.</p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-main text-sm">Stroometiket als waarheid</h3>
            <p className="text-xs text-text-muted mt-1">Het stroometiket is het enige betrouwbare instrument voor consumenten.</p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-main text-sm">Verbod compensatieclaims</h3>
            <p className="text-xs text-text-muted mt-1">&quot;CO2-neutraal via compensatie&quot; mag niet meer zonder bewijs van werkelijke reductie.</p>
          </div>
        </div>
      </section>

      {/* Article 1: De GvO-check */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl border-2 border-green-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">De GvO-check: Hoe groen is jouw stroom echt?</h2>

          <div className="space-y-4 mb-6 text-text-main">
            <p>
              De Garantie van Oorsprong (GvO) is een digitaal certificaat dat leveranciers gebruiken om aan te tonen dat hun stroom uit hernieuwbare bronnen komt.
              <strong> Eén GvO vertegenwoordigt één megawattuur (MWh) hernieuwbare energie.</strong> Dit systeem klinkt simpel, maar er schuilt een cruciaal verschil tussen stroom die echt in Nederland wordt opgewekt en stroom die "vergroend" wordt met goedkope buitenlandse certificaten.
            </p>

            <h3 className="font-semibold text-text-main text-lg mt-5">Het stroometiket als transparantiewapon</h3>
            <p>
              Alle leveranciers moeten op hun rekening een <strong>stroometiket</strong> tonen. Dit label toont je exact waar jouw stroom vandaan komt: welk percentage wind, zon, kolen, gas en kernenergie. Het stroometiket moet ook de milieuimpact aangeven. Maar hier zit 'm de kat in het nauw: het stroometiket verbergt ook waar de GvO's vandaan komen.
            </p>

            <h3 className="font-semibold text-text-main text-lg mt-5">ACM controleert met GvO en CvO</h3>
            <p>
              De Autoriteit Consument &amp; Markt (ACM) voert toezicht uit op de stroometiketgegevens door de GvO's (groene certificaten) en CvO's (grijze/fossiele certificaten) van leveranciers te verifiëren.
              Als een leverancier beweert 100% groen te zijn, moet dit gedekt zijn door voldoende GvO's. Het probleem: <strong>veel GvO's komen van buiten Nederland</strong>, wat betekent dat er geen werkelijke investeringen in Nederlandse duurzame energie plaatsvinden.
            </p>

            <h3 className="font-semibold text-text-main text-lg mt-5">Het kwaliteitsvraagstuk: NL-opwek versus vergroende stroom</h3>
            <p>
              Sommige producten bieden "100% Nederlands geproduceerde stroom" – dit betekent dat de stroom echt in Nederland wordt opgewekt. Andere producten zijn "vergroend" met buitenlandse certificaten, vaak van waterkracht uit Noorwegen of wind uit andere Europese landen.
              Dit hoeft niet slecht te zijn – buitenlandse hernieuwbare energie is nog steeds schoon – maar het draagt veel minder bij aan de Nederlandse energietransitie.
            </p>

            <h3 className="font-semibold text-text-main text-lg mt-5">Wat vonden onderzoekers?</h3>
            <p>
              Het onafhankelijke energieportaal <strong>Hier.nu</strong> (eerder Groene Stroom Checker van Consumentenbond) onderzocht leveranciers en vond duidelijke verschillen: producten met "100% NL-opwek" behalen beduidend betere scores dan producten die goedkoop internationale certificaten gebruiken.
            </p>
          </div>

          <div className="rounded-lg bg-amber-50 border-l-4 border-amber-500 p-5 mb-6">
            <h4 className="font-bold text-amber-900 mb-2">💡 Kennertip</h4>
            <p className="text-sm text-amber-900">
              Voor <strong>maximale Nederlandse impact</strong>: kies leveranciers die "100% NL-opwek" adverteren. Verifieer dit via het stroometiket op je rekening en controleer bij onafhankelijke checkers zoals Hier.nu of Consumentenbond. Vragen die je kunt stellen: "Hoeveel van deze GvO's komen uit Nederland?" en "Waar wordt de rest vandaan gehaald?"
            </p>
          </div>

          <div className="text-xs text-text-muted space-y-1">
            <p><strong>Bronnen:</strong></p>
            <p>• verticer.eu – Garanties van Oorsprong systeem</p>
            <p>• acm.nl – Toezicht stroometiket en certificaten</p>
            <p>• hier.nu – Onafhankelijke stroometiket-checker</p>
            <p>• consumentenbond.nl – Energieleverancier vergelijking</p>
          </div>
        </div>
      </section>

      {/* Article 2: EU-regels tegen greenwashing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl border-2 border-emerald-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">EU-regels tegen greenwashing: Directive 2024/825</h2>

          <div className="space-y-4 mb-6 text-text-main">
            <p>
              In maart 2026 trad één van de strengste Europese regelgeving tegen greenwashing in werking:
              <strong> Directive (EU) 2024/825 – Empowering Consumers for Green Transition.</strong> Dit is geen vrijblijvende richtlijn, maar een juridisch bindend decreet dat alle EU-lidstaten moeten implementeren.
            </p>

            <h3 className="font-semibold text-text-main text-lg mt-5">Wat verbiedt deze richtlijn?</h3>
            <p>
              De richtlijn verbiedt <strong>generieke milieubeweringen zonder bewijs.</strong> Termen als "eco-vriendelijk", "groen", "klimaatvriendelijk" of "milieuvriendelijk" mogen voortaan niet meer gebruikt worden tenzij er een solide onderbouwing is.
              Dit is een enorme slag voor bedrijven die vage groene beloften doen zonder daadwerkelijke acties.
            </p>

            <h3 className="font-semibold text-text-main text-lg mt-5">Duurzaamheidslabels en certificeringsvereisten</h3>
            <p>
              Duurzaamheidslabels – zoals je ze op veel producten en diensten ziet – mogen alleen gebruikt worden als ze:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-2">
              <li>Gebaseerd zijn op een erkend <strong>certificeringssysteem</strong> (bijvoorbeeld voor energie: ACM stroometiket, onafhankelijke duurzaamheidschema's), OF</li>
              <li>Goedgekeurd zijn door een <strong>overheidsinstantie</strong> (niet zomaar een marketing afdeling)</li>
            </ul>

            <h3 className="font-semibold text-text-main text-lg mt-5">Timeline voor implementatie</h3>
            <p>
              <strong>27 maart 2026:</strong> Alle EU-lidstaten moeten deze richtlijn in hun nationale wet opnemen.<br />
              <strong>27 september 2026:</strong> De richtlijn wordt volledig van toepassing. Bedrijven die vage claims blijven doen, riskeren juridische vervolgingen en boetes.
            </p>

            <h3 className="font-semibold text-text-main text-lg mt-5">Waarom is dit historisch?</h3>
            <p>
              Dit is de eerste keer dat de EU <strong>generieke duurzaamheidsclaims</strong> expliciet verbiedt en consumentenorganisaties wettelijke middelen geeft om tegen misleiding op te treden.
              Voor de energiesector betekent dit: geen "100% groen" zonder stroometiket, geen "CO2-neutraal" zonder verificatie, geen "duurzaam" zonder certificering.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border-l-4 border-green-500 p-5 mb-6">
            <h4 className="font-bold text-green-900 mb-2">💡 Kennertip voor energiekenners</h4>
            <p className="text-sm text-green-900">
              Dit is een gouden moment voor sites als energiekenner.nl om zich te positioneren als "<strong>greenwashing-proof</strong>" informatieplatform.
              Jullie kunnen leveranciers aanmoedigen om expliciet in termen van het stroometiket, GvO's en certificering te communiceren – niet in vage groene taal.
              Dit geeft jullie een competitief voordeel tegenover vergelijksites die nog steeds sloppige claims doorlaten.
            </p>
          </div>

          <div className="text-xs text-text-muted space-y-1">
            <p><strong>Bron:</strong></p>
            <p>• eur-lex.europa.eu – Directive (EU) 2024/825 volledige tekst</p>
          </div>
        </div>
      </section>

      {/* Article 3: Energiedelen en energiegemeenschappen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl border-2 border-teal-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">Energiedelen en energiegemeenschappen: Wat mag nu echt?</h2>

          <div className="space-y-4 mb-6 text-text-main">
            <p>
              Sinds <strong>1 januari 2026</strong> is "energiedelen" – het direct doorverkopen van je overschot zonnestroom aan buren – in Nederland <strong>wettelijk mogelijk.</strong>
              Dit lijkt een spelbreaker voor de energietransitie, maar de werkelijkheid is ingewikkelder dan de marketingtaal doet vermoeden.
            </p>

            <h3 className="font-semibold text-text-main text-lg mt-5">VEH: Vrienden van de Aarde en het Energiewet</h3>
            <p>
              De Energiewet definieerde voor het eerst twee nieuwe rollen:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-2">
              <li><strong>Actieve afnemers:</strong> Huishoudens en bedrijven die hun eigen energie opwekken en het overschot verkopen</li>
              <li><strong>Energiegemeenschappen:</strong> Groepen burgers of lokale organisaties die collectief in duurzame energie investeren en delen</li>
            </ul>
            <p className="mt-3">
              Onder bepaalde voorwaarden mogen actieve afnemers hun stroom <strong>zonder licentie doorverkopen</strong> aan buurtgenoten – mits aan strikte regels wordt voldaan.
            </p>

            <h3 className="font-semibold text-text-main text-lg mt-5">TNO bevestigt: Energiegemeenschappen zijn nu legaal</h3>
            <p>
              Onderzoeksinstituut TNO analyseerde het juridische kader en concludeerde dat buurtinitiatieven met zonnepanelen nu <strong>als energiegemeenschap kunnen worden erkend.</strong>
              Dit opent mogelijkheden voor coöperatieve energieprojecten die voorheen in een juridische grijze zone opereerden.
            </p>

            <h3 className="font-semibold text-text-main text-lg mt-5">Waarschuwing van VNG: Het is niet zo simpel</h3>
            <p>
              De Vereniging van Nederlandse Gemeenten (VNG) waarschuwt echter voor valse verwachtingen. In hun analyse stelden zij vast dat <strong>"energiedelen" niet volledig in de wet staat verankerd</strong> en dat het verschilt van het EU Clean Energy Package-concept van peer-to-peer energiehandel.
            </p>
            <p className="mt-3">
              Het probleem: terwijl de wet bepaalt <em>dat</em> je mag delen, is niet alles uitgewerkt over <em>hoe</em> dit praktisch moet werken:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-2">
              <li>Hoe meet je precies wie hoeveel verbruikt?</li>
              <li>Wie verwerkt die data?</li>
              <li>Wat zijn de contractverhoudingen?</li>
              <li>Wie is aansprakelijk bij storingen?</li>
              <li>Hoe regelen we belastingen en netbeheerder tarieven?</li>
            </ul>

            <h3 className="font-semibold text-text-main text-lg mt-5">De praktijk: Het kader bestaat, maar de uitvoering groeit nog</h3>
            <p>
              Energiedelen is dus wettelijk mogelijk, maar veel initiatieven werken nog met experimentele contracten en handmatige systemen.
              Netbeheerders, belastingautoriteiten en energiebedrijven werken aan standaardisering, maar deze zijn nog niet allemaal klaar.
            </p>
          </div>

          <div className="rounded-lg bg-amber-50 border-l-4 border-amber-500 p-5 mb-6">
            <h4 className="font-bold text-amber-900 mb-2">💡 Kennertip</h4>
            <p className="text-sm text-amber-900">
              Communiceer <strong>eerlijk en nuanced:</strong> "Energiedelen kan nu wettig, maar wordt nog praktisch uitgewerkt."
              Verwacht geen volledige peer-to-peer platforms morgen – er zijn nog veel organisatorische en technische hurdles.
              Interessante partners: TNO, VNG, locale netbeheerders en energiebedrijven die aan de praktische kant werken.
            </p>
          </div>

          <div className="text-xs text-text-muted space-y-1">
            <p><strong>Bronnen:</strong></p>
            <p>• eigenhuis.nl – Energiedelen en rechtskader</p>
            <p>• wetten.overheid.nl – Energiewet en actieve afnemers</p>
            <p>• tno.nl – Analyse energiegemeenschappen</p>
            <p>• vng.nl – Waarschuwing implementatie energiedelen</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Kies bewust groen</h2>
          <p className="mt-2 text-green-100">Vergelijk leveranciers op prijs én duurzaamheid.</p>
          <Link href="/#vergelijk" className="inline-flex items-center mt-4 px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Vergelijk leveranciers
          </Link>
        </div>
      </section>
    </>
  );
}
