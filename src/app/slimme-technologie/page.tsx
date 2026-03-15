import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Slimme Technologie: P1-meter, HEMS en Home Assistant | Energiekenner",
  description: "P1-meter, HEMS en dynamische tarieven: je gids voor slimme energiestuur. Van DSMR data tot Home Assistant automatie.",
  keywords: ["P1-meter", "DSMR", "HEMS", "Home Assistant", "slimme meter", "smart home energiebeheer", "home energy management system"],
  openGraph: {
    title: "Slimme Technologie: Slim Energie Sturen",
    description: "P1-meter, HEMS en dynamische tarieven: alles wat je moet weten over slimme energiestuur.",
  },
};

export default function SlimmeTechnologiePage() {
  return (
    <>
      <PageHero badge="Slim Energie Sturen" title="Slimme technologie" highlight="P1-meter, HEMS &amp; meer" description="Van P1-meter tot Home Energy Management System: hoe je met slimme technologie je energieverbruik optimaliseert en bespaart." accentColor="cyan" />

      {/* Article 1: P1-meter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">P1-meter: je eerste plug voor energiebeheer</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De P1-poort van je slimme meter is veel meer dan alleen aflezen. Het is de "eerste plug" van slim energiebeheer: een gestandaardiseerde datalijn waar je rechtstreeks van afleest wat je huishouden in real-time doet.
            </p>
            <p>
              Twee DSMR-versies zijn vandaag gangbaar. DSMR 5.0.2 (nieuwer) geeft je data elke seconde. DSMR 4.2.2 (ouder) elke tien seconden. Dit verschil klinkt klein, maar het maakt uit. Met 1-secondaire data zie je veel sneller pieken ontstaan - bijvoorbeeld wanneer je warmtepomp of elektrische auto inschakelt. Met 10-secondaire data mis je korte pieken.
            </p>
            <p>
              Waarom doet dit ertoe? Sluipverbruik detecteren (apparaten die je bent vergeten uit te zetten) gebeurt sneller. Pieken zien wanneer ze ontstaan helpt je inzicht krijgen. En als je van dynamische tarieven profiteert, wil je elke seconde weten waar je verbruik is.
            </p>
            <p>
              Veiligheid: DSMR 5.0.2 beschrijft in detail hoe galvanische isolatie moet werken - dus je huisnetwerk en je elektriciteitsnet zijn elektrisch gescheiden. Dit is belangrijk. Koop niet zomaar een goedkoop "mysterie dongeltje" zonder duidelijke DSMR-specificatie. Het moet helder vermeld hebben welke versie het ondersteunt.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">💡 Kennertip</p>
            <p className="text-sm text-amber-800">
              Kies voor een P1-oplossing met brede integratie. Home Assistant compatibility is goud waard - je opent meteen een hele ecosystem van automaties. Check netbeheernederland.nl voor officiële DSMR-specs.
            </p>
          </div>
          <p className="text-xs text-text-muted mt-4">Bronnen: netbeheernederland.nl DSMR documentatie, home-assistant.io/integrations/dsmr</p>
        </article>
      </section>

      {/* Article 2: HEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">HEMS: de intelligente regisseur van je energie</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              HEMS staat voor Home Energy Management System. Maar het is geen "apparaat" dat je koopt - het is een laag. Een integratie van gegevens en beslissingen die samen zorgen dat je huis slim reageert op energie.
            </p>
            <p>
              HEMS combineert vier lagen: (1) meting - je P1-meter, je zonnepanelen, je batterij, allemaal in één datastream. (2) zichtbaarheid - een dashboard waar je live ziet wat je huishouden doet. (3) prijsinput - wat dynamische tarieven kosten per uur. (4) regels - "laad mijn auto als elektriciteit goedkoop is" of "verwarm mijn boiler als de zon schijnt".
            </p>
            <p>
              Het echte voordeel van HEMS is niet één trucje. Het is consistent slim gedrag. Je huis reageert automatisch op prijzen, zonnestralingen en je comfortvoorkeuren - dag in, dag uit. Geen stress, geen keuzes - gewoon goed energiebeheer.
            </p>
            <p>
              Waarom wordt HEMS groter naar 2027? De salderingsregeling stopt. Als je zonnestroom niet meer 1-op-1 kan verrekenen met je teruglevering, moet je slimmer worden. HEMS helpt je de waardeverlies van saldering op te vangen door slim te laden en te ontladen.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">💡 Kennertip</p>
            <p className="text-sm text-amber-800">
              Bouw HEMS in lagen op. Stap 1: meet (P1). Stap 2: visualiseer (dashboard). Stap 3: één automatisering toevoegen (bijv. auto laden). Stap 4: meet 2-4 weken, kijk naar resultaten. Stap 5: volgende automatisering. Dit voorkoomt overshooting en geeft je controle.
            </p>
          </div>
          <p className="text-xs text-text-muted mt-4">Bron: rijksoverheid.nl salderingsregeling, HEMS-design-patterns</p>
        </article>
      </section>

      {/* Article 3: Dynamische tarieven en arbitrage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">Dynamische tarieven: arbitrage en marktinzicht</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              De nieuwe Energiewet maakt dynamische prijscontracten mainstream. Grote leveranciers (meer dan 200.000 klanten) moeten ze aanbieden. Dit opent een heel nieuwe kans: arbitrage - goedkoop kopen, duur verkopen.
            </p>
            <p>
              Hoe werkt het? De EPEX SPOT dayahead markt bepaalt stroomprijs per uur - soms negatief! Een negatieve prijs betekent: er is zoveel aanbod dat producenten betalen om hun stroom kwijt te raken. Dit is jouw signaal: consumeer (laad je auto, verwarm water, laad je batterij) want stroom is gratis of je krijgt er geld voor.
            </p>
            <p>
              Arbitrage is eenvoudig in theorie: koop/laad goedkoop, consumeer/verkoop duur. Je auto laden als elektriciteit -10 euro/MWh kost, en hem ontladen als prijzen 300 euro/MWh bereiken. Winstmarge. Maar let op: je contractprijs is zelden zuiver "spotprijs". Er zitten marges, vaste kosten en belastingen in.
            </p>
            <p>
              De sleutel: kijk niet naar de spotprijs, maar naar je all-in kWh-kosten. Inclusief alles. Dynamisch is machtig met flexibele stuurapparaten (EV, warmtepomp, batterij), maar zwak als je alles vast afneemt.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">💡 Kennertip</p>
            <p className="text-sm text-amber-800">
              Dynamisch is alleen rendabel als je flexibel bent. Een EV of warmtepomp helpt enorm. Kijk naar all-in kosten, niet naar spotprijs-fantasieën. En meet resultaten: ben je echt aan het sparen of betaal je meer vanwege automatische fouten?
            </p>
          </div>
          <p className="text-xs text-text-muted mt-4">Bronnen: consumentenbond.nl, epexspot.com, ENTSO-e Transparency Platform</p>
        </article>
      </section>

      {/* Article 4: Home Assistant en API-koppelingen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">Home Assistant: het platform voor je HEMS</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Home Assistant is open-source software waarin je alles samenbreng: je slimme meter, je zonnepanelen, je warmtepomp, je auto, je batterij. En meer. Het is de platform waar je HEMS echt gebeurt.
            </p>
            <p>
              Drie integraties zijn goud voor energiestuur: (1) DSMR voor je P1-meter - live stroomverbruik en -opbrengst, (2) ENTSO-e Transparency Platform via de community-component hass-entso-e - dag-vooruit prijzen per uur, (3) je eigen zonnepaneel-omvormer (SMA, Huawei, Fronius, enzovoort) - inzicht in productie.
            </p>
            <p>
              Als je dit hebt, kun je automaties bouwen. Bijvoorbeeld: "Laad mijn EV alleen als elektriciteit onder €0,20/kWh kost." Of: "Verwarm mijn boiler als ik zonnepanelen heb en de zon minstens 3 uur zichtbaar is." Or: "Ontlaad mijn batterij als prijzen boven €1/kWh gaan."
            </p>
            <p>
              Het cruciale is guardrails. Automaties moeten menselijk blijven. Je auto moet klaar zijn voor werk tegen 7 uur - dus je laadt hem 's avonds duur op als dat nodig is. Je wc-bril mag niet bevriezen. Comfort voor je gezin gaat voor. Dan pas optimalisatie.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">💡 Kennertip</p>
            <p className="text-sm text-amber-800">
              Automatiseer eerst één ding. EV laden op goedkope uren, bijvoorbeeld. Meet 2-4 weken resultaat. Pas aan. Pas dan je volgende automatisering toe. Dit voorkoomt chaos en geeft je zelfvertrouwen. Home Assistant heeft een grote community - je staat niet alleen.
            </p>
          </div>
          <p className="text-xs text-text-muted mt-4">Bronnen: home-assistant.io, github.com/JaccoR/hass-entso-e, ENTSO-e Transparency Platform</p>
        </article>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Klaar om je energie slim in te richten?</h2>
          <p className="mt-2 text-cyan-100">Vergelijk leveranciers met dynamische tarieven en begin je HEMS-journey.</p>
          <Link href="/#vergelijk" className="inline-flex items-center mt-4 px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
            Vergelijk leveranciers
          </Link>
        </div>
      </section>
    </>
  );
}
