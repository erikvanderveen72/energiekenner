import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema } from "@/components/StructuredData";
import Link from "next/link";

const faqItems = [
  {
    question: "Wat is het verschil tussen kWh en kW?",
    answer: "kW (kilowatt) is een eenheid van vermogen — hoeveel energie een apparaat op een bepaald moment verbruikt. kWh (kilowattuur) is een eenheid van energieverbruik — hoeveel energie er over een periode is verbruikt. Voorbeeld: een 2 kW wasmachine die 1,5 uur draait verbruikt 3 kWh.",
  },
  {
    question: "Wat betekent TTF en waarom is het belangrijk?",
    answer: "TTF (Title Transfer Facility) is de Europese gasbeurs in Amsterdam waar de groothandelsprijs voor aardgas wordt bepaald. De TTF-prijs heeft direct invloed op je energierekening: een hogere TTF-prijs betekent hogere gastarieven. In maart 2026 schommelde de prijs tussen €32 en €68 per MWh.",
  },
  {
    question: "Wat is het verschil tussen variabel, vast en dynamisch contract?",
    answer: "Bij een vast contract staat je tarief voor 1-3 jaar vast. Bij een variabel contract wordt je tarief elke 1-3 maanden aangepast. Bij een dynamisch contract betaal je de echte marktprijs per uur (stroom) of per dag (gas). Vast geeft zekerheid, dynamisch kan goedkoper zijn als je flexibel bent.",
  },
  {
    question: "Wat is de energiebelasting en hoeveel is het in 2026?",
    answer: "Energiebelasting is een belasting die je betaalt per verbruikte kWh stroom of m³ gas. In 2026 is dit €0,1108 per kWh stroom en €0,7268 per m³ gas. Daarbovenop betaal je ODE (Opslag Duurzame Energie) en 21% btw over het totaal. De belasting is gelijk bij alle leveranciers.",
  },
  {
    question: "Wat zijn netbeheerkosten en kan ik die verlagen?",
    answer: "Netbeheerkosten zijn transporttarieven voor het gebruik van het stroomnet. Deze worden bepaald door je netbeheerder (Liander, Stedin, Enexis) op basis van je adres. Je kunt deze kosten niet verlagen of je netbeheerder kiezen. In 2026 betaal je gemiddeld €150-€250 per jaar.",
  },
];

export const metadata: Metadata = {
  title: "Begrippenlijst Energie 2026 | Alle Energietermen Uitgelegd",
  description:
    "Begrippenlijst met alle energietermen: van kWh en TTF tot saldering en dynamisch contract. Duidelijke uitleg voor consumenten over stroom, gas en energiemarkt.",
  alternates: {
    canonical: "https://energiekenner.nl/begrippenlijst",
  },
  openGraph: {
    title: "Begrippenlijst Energie | Alle Termen Uitgelegd",
    description: "Begrijp alle energietermen: kWh, TTF, EPEX, saldering, dynamisch contract en meer. Duidelijke uitleg voor consumenten.",
    url: "https://energiekenner.nl/begrippenlijst",
  },
};

export const revalidate = 3600;

interface Term {
  term: string;
  explanation: string;
  category: string;
}

const terms: Term[] = [
  // Eenheden & Metingen
  { term: "kWh", explanation: "Kilowattuur. De standaardeenheid voor elektriciteitsverbruik. Een gemiddeld huishouden verbruikt circa 2.400 kWh stroom per jaar.", category: "Eenheden" },
  { term: "MWh", explanation: "Megawattuur. 1 MWh = 1.000 kWh. Wordt gebruikt voor groothandelsprijzen op de energiemarkt, bijvoorbeeld de TTF-gasprijs.", category: "Eenheden" },
  { term: "m³", explanation: "Kubieke meter. De eenheid voor gasverbruik. Een gemiddeld huishouden verbruikt circa 1.000 m³ aardgas per jaar.", category: "Eenheden" },
  { term: "SCOP", explanation: "Seasonal Coefficient of Performance. Geeft het seizoensrendement van een warmtepomp weer. Een SCOP van 4 betekent dat de pomp 4 kWh warmte levert per 1 kWh stroom.", category: "Eenheden" },
  { term: "GWP", explanation: "Global Warming Potential. Maatstaf voor het broeikaseffect van koelvloeistoffen in warmtepompen. Hoe lager, hoe milieuvriendelijker.", category: "Eenheden" },

  // Energiemarkt
  { term: "TTF", explanation: "Title Transfer Facility. De Europese referentieprijs voor aardgas, verhandeld in Amsterdam. De TTF-prijs bepaalt indirect wat jij betaalt voor gas.", category: "Energiemarkt" },
  { term: "EPEX", explanation: "European Power Exchange. De Europese beurs waar stroom wordt verhandeld. De EPEX SPOT dayahead-markt bepaalt de stroomprijs voor de volgende dag.", category: "Energiemarkt" },
  { term: "Spotmarkt", explanation: "De markt waar energie wordt verhandeld tegen de actuele dagprijs. Bij een dynamisch contract betaal je de spotmarktprijs plus een opslag.", category: "Energiemarkt" },
  { term: "LNG", explanation: "Liquefied Natural Gas. Vloeibaar aardgas dat per schip wordt vervoerd. Belangrijk voor de gasvoorziening in Europa als alternatief voor pijpleidinggas.", category: "Energiemarkt" },
  { term: "Arbitrage", explanation: "Het benutten van prijsverschillen op de energiemarkt. Bijvoorbeeld stroom opslaan als het goedkoop is en gebruiken als het duur is, met een thuisbatterij.", category: "Energiemarkt" },

  // Contractvormen
  { term: "Vast contract", explanation: "Een energiecontract waarbij de prijs per kWh en m³ vaststaat voor de hele looptijd (meestal 1 of 3 jaar). Geeft zekerheid over je maandlasten.", category: "Contracten" },
  { term: "Dynamisch contract", explanation: "Een energiecontract waarbij je de echte marktprijs betaalt, die elk uur (stroom) of elke dag (gas) verandert. Kan goedkoper zijn als je flexibel verbruikt.", category: "Contracten" },
  { term: "Variabel contract", explanation: "Een energiecontract met tarieven die per kwartaal worden aangepast op basis van de marktprijzen. Zit qua risico tussen vast en dynamisch in.", category: "Contracten" },
  { term: "Modelcontract", explanation: "Sinds de Energiewet 2026 verplichte gestandaardiseerde contracten die leveranciers moeten aanbieden, zodat consumenten makkelijker kunnen vergelijken.", category: "Contracten" },
  { term: "Contractduur", explanation: "De looptijd van je energiecontract. Meestal 1 of 3 jaar bij vaste contracten, of maandelijks opzegbaar bij variabele en dynamische contracten.", category: "Contracten" },

  // Kosten & Tarieven
  { term: "Vastrecht", explanation: "De vaste maandelijkse kosten die je leverancier rekent, ongeacht je verbruik. Dit bedrag betaal je voor de levering van stroom en gas.", category: "Kosten" },
  { term: "Energiebelasting", explanation: "Belasting die de overheid heft op stroom (€0,1108/kWh) en gas (€0,7268/m³) in 2026. Inbegrepen in de tarieven op Energiekenner.nl.", category: "Kosten" },
  { term: "Vermindering energiebelasting", explanation: "Een korting op je energierekening van €628,96 per jaar (2026). Ieder huishouden met een stroomaansluiting krijgt dit automatisch.", category: "Kosten" },
  { term: "Netbeheerkosten", explanation: "De kosten voor transport van energie via het elektriciteits- en gasnet. Je betaalt dit aan je netbeheerder (Liander, Enexis of Stedin), gemiddeld ~€750/jaar.", category: "Kosten" },
  { term: "Welkomstbonus", explanation: "Een eenmalige bonus die sommige leveranciers geven als je overstapt. Klinkt aantrekkelijk, maar compenseert niet altijd een duurder tarief.", category: "Kosten" },
  { term: "Opzegvergoeding", explanation: "De boete die je betaalt als je een vast contract voortijdig beëindigt. Bij variabele en dynamische contracten geldt geen opzegvergoeding.", category: "Kosten" },
  { term: "Terugleverkosten", explanation: "Kosten die leveranciers rekenen als je stroom teruglevert aan het net (bijvoorbeeld van zonnepanelen). Kan oplopen tot €0,11 per kWh.", category: "Kosten" },
  { term: "Terugleververgoeding", explanation: "De vergoeding die je ontvangt voor stroom die je teruglevert aan het net. Niet alle leveranciers bieden dit; sommige rekenen juist kosten.", category: "Kosten" },
  { term: "BTW", explanation: "Belasting Toegevoegde Waarde. Alle energietarieven op Energiekenner.nl zijn inclusief 21% BTW.", category: "Kosten" },

  // Overstappen
  { term: "Flitsoverstap", explanation: "Sinds de Energiewet 2026 kun je binnen 5 werkdagen overstappen naar een andere energieleverancier. Je nieuwe leverancier regelt alles.", category: "Overstappen" },
  { term: "Opzegtermijn", explanation: "De tijd die je in acht moet nemen voordat je contract eindigt. Sinds 2026 is dit maximaal 5 werkdagen voor alle contractvormen.", category: "Overstappen" },
  { term: "Bedenktijd", explanation: "Na het afsluiten van een nieuw energiecontract heb je 14 dagen bedenktijd om kosteloos te annuleren.", category: "Overstappen" },
  { term: "Vangnetleverancier", explanation: "Als je energieleverancier failliet gaat, word je automatisch overgeheveld naar een vangnetleverancier zodat je nooit zonder stroom of gas zit.", category: "Overstappen" },

  // Netbeheer
  { term: "Netbeheerder", explanation: "Het bedrijf dat verantwoordelijk is voor het elektriciteits- en gasnet in jouw regio. In Nederland zijn dit Liander, Enexis en Stedin.", category: "Netbeheer" },
  { term: "Liander", explanation: "De grootste netbeheerder van Nederland. Actief in grote delen van Noord-Holland, Gelderland, Flevoland en delen van Zuid-Holland en Noord-Brabant.", category: "Netbeheer" },
  { term: "Enexis", explanation: "Netbeheerder actief in Noord-Brabant, Limburg, Overijssel, Drenthe en Groningen.", category: "Netbeheer" },
  { term: "Stedin", explanation: "Netbeheerder actief in Zuid-Holland, Utrecht en delen van Noord-Holland.", category: "Netbeheer" },
  { term: "Smart Grid", explanation: "Een intelligent elektriciteitsnet dat vraag en aanbod beter op elkaar afstemt. Maakt lokale energiedeling en slim laden mogelijk.", category: "Netbeheer" },

  // Zonnepanelen & Saldering
  { term: "Saldering", explanation: "De regeling waarbij je teruggeleverde zonnestroom verrekent met je afgenomen stroom. De salderingsregeling wordt afgebouwd en stopt volledig in 2027.", category: "Zonnepanelen" },
  { term: "Salderingsregeling", explanation: "De wettelijke regeling die je toestaat om teruggeleverde stroom (van zonnepanelen) te verrekenen met afgenomen stroom op jaarbasis.", category: "Zonnepanelen" },
  { term: "Terugleversubsidie", explanation: "Verwachte vergoeding na afschaffing van saldering in 2027 om zonnepaneelbezitters te compenseren. Details worden nog uitgewerkt.", category: "Zonnepanelen" },
  { term: "Netto-negatieve teruglevering", explanation: "De situatie waarin je terugleverkosten hoger zijn dan de vergoeding die je ontvangt. Dit kan voorkomen bij leveranciers met hoge terugleverkosten.", category: "Zonnepanelen" },

  // Warmtepompen
  { term: "Warmtepomp", explanation: "Een systeem dat warmte uit de buitenlucht, bodem of grondwater haalt en omzet in verwarming voor je huis. Veel zuiniger dan een cv-ketel.", category: "Warmtepompen" },
  { term: "Lucht-water warmtepomp", explanation: "Warmtepomp die warmte uit buitenlucht haalt en via radiatoren of vloerverwarming afgeeft. Meest populair type in Nederland.", category: "Warmtepompen" },
  { term: "Grond-water warmtepomp", explanation: "Warmtepomp die warmte uit de bodem haalt via een bodemlus. Hogere aanschafkosten maar stabieler rendement, ook bij vrieskou.", category: "Warmtepompen" },
  { term: "Hybride warmtepomp", explanation: "Combinatie van een warmtepomp en gasketel. De warmtepomp doet het basiswerk, de gasketel springt bij op koude dagen. Goede eerste stap naar gasvrij.", category: "Warmtepompen" },
  { term: "ISDE-subsidie", explanation: "Investeringssubsidie Duurzame Energie. Subsidie van de overheid voor de aanschaf van een warmtepomp, tot enkele duizenden euro's.", category: "Warmtepompen" },

  // Thuisbatterij & Opslag
  { term: "Thuisbatterij", explanation: "Een batterij die je thuis installeert om zonnestroom op te slaan of goedkope stroom in te kopen. Steeds populairder nu saldering stopt.", category: "Opslag" },
  { term: "V2G", explanation: "Vehicle-to-Grid. Technologie waarmee je elektrische auto stroom teruggeeft aan het elektriciteitsnet op momenten dat de stroomprijs hoog is.", category: "Opslag" },
  { term: "V2H", explanation: "Vehicle-to-Home. Technologie waarmee je elektrische auto je huis van stroom voorziet, bijvoorbeeld 's avonds met overdag opgeladen zonnestroom.", category: "Opslag" },
  { term: "LFP", explanation: "Lithium-ijzerfosfaat. Batterijchemie die veel wordt gebruikt in thuisbatterijen vanwege de lange levensduur en veiligheid.", category: "Opslag" },
  { term: "NMC", explanation: "Nikkel-Mangaan-Cobalt. Batterijchemie met hogere energiedichtheid maar kortere levensduur dan LFP.", category: "Opslag" },
  { term: "Round-trip efficiency", explanation: "De efficiëntie waarmee een batterij stroom opslaat en weer afgeeft. Bij 90% efficiency verlies je 10% van de opgeslagen stroom.", category: "Opslag" },

  // Slimme Technologie
  { term: "Slimme meter", explanation: "Een digitale energiemeter die automatisch je verbruik registreert en doorgeeft aan je netbeheerder. Nodig voor dynamische tarieven.", category: "Technologie" },
  { term: "P1-poort", explanation: "De gegevensuitgang op je slimme meter waarmee je real-time verbruiksdata kunt uitlezen met een P1-dongle.", category: "Technologie" },
  { term: "DSMR", explanation: "Dutch Smart Meter Requirements. De standaard voor slimme meters in Nederland. Versie 5.0.2 is de meest recente.", category: "Technologie" },
  { term: "HEMS", explanation: "Home Energy Management System. Software die je energieverbruik, opwek en opslag automatisch optimaliseert op basis van tarieven en weer.", category: "Technologie" },
  { term: "Home Assistant", explanation: "Een open-source HEMS-platform waarmee je je energieverbruik kunt monitoren en apparaten slim kunt aansturen.", category: "Technologie" },

  // Laadpalen & EV
  { term: "Laadpaal", explanation: "Een oplaadpunt voor elektrische auto's. Kan thuis (3,7–22 kW), semi-publiek of publiek langs de weg (50–350 kW) staan.", category: "Laadpalen" },
  { term: "CCS/CCS2", explanation: "Combined Charging System. De Europese standaard voor snelladen van elektrische auto's, tot 350 kW.", category: "Laadpalen" },
  { term: "CHAdeMO", explanation: "Een Japanse snellaadstandaard die wordt uitgefaseerd in Europa ten gunste van CCS.", category: "Laadpalen" },
  { term: "MID-meter", explanation: "Een gekalibreerde energiemeter die wettelijk vereist is als je laadkosten wilt doorberekenen aan derden.", category: "Laadpalen" },

  // Groene Stroom & Duurzaamheid
  { term: "GvO", explanation: "Garantie van Oorsprong. Een certificaat dat bewijst dat stroom uit een hernieuwbare bron komt (wind, zon, water). Leveranciers kopen GvO's om groene stroom te claimen.", category: "Duurzaamheid" },
  { term: "Sjoemelstroom", explanation: "Groene stroom die eigenlijk niet groen is: leveranciers kopen goedkope buitenlandse GvO-certificaten en verkopen grijze stroom als groen.", category: "Duurzaamheid" },
  { term: "Stroometiket", explanation: "Een label dat toont uit welke bronnen de stroom van een leverancier komt (percentage wind, zon, kolen, gas). Verplicht voor alle leveranciers.", category: "Duurzaamheid" },
  { term: "VertiCer", explanation: "De organisatie die in Nederland GvO's uitgeeft en beheert voor hernieuwbare energieproductie.", category: "Duurzaamheid" },
  { term: "ERE-certificaten", explanation: "Emissiereductie-eenheden. Certificaten die de CO2-besparing van hernieuwbare energie vastleggen.", category: "Duurzaamheid" },
  { term: "Energiegemeenschap", explanation: "Een groep burgers of bedrijven die samen lokaal energie opwekken, opslaan en delen.", category: "Duurzaamheid" },

  // Wetgeving & Toezicht
  { term: "Energiewet 2026", explanation: "De nieuwe energiewet die per 2026 in werking is getreden. Regelt onder andere de flitsoverstap (5 dagen), modelcontracten en betere consumentenbescherming.", category: "Wetgeving" },
  { term: "ACM", explanation: "Autoriteit Consument & Markt. De toezichthouder die de energiemarkt bewaakt en leveranciers controleert op naleving van regels.", category: "Wetgeving" },
  { term: "Actieve afnemer", explanation: "Wettelijke status uit de Energiewet 2026 voor consumenten die zelf energie opwekken, opslaan of delen.", category: "Wetgeving" },
  { term: "Energiedelen", explanation: "Het delen of verkopen van zelfopgewekte energie met buren of een energiegemeenschap. Mogelijk gemaakt door de Energiewet 2026.", category: "Wetgeving" },

  // Verbruik & Besparing
  { term: "Energielabel", explanation: "Een classificatie (A+++ t/m G) die aangeeft hoe energiezuinig een woning of apparaat is. A+++ is het zuinigst.", category: "Verbruik" },
  { term: "Sluipverbruik", explanation: "Het stroomverbruik van apparaten die op standby staan. Kan oplopen tot 10% van je totale stroomverbruik.", category: "Verbruik" },
  { term: "Terugverdientijd", explanation: "De periode die nodig is om een investering (zoals zonnepanelen of een warmtepomp) terug te verdienen door besparing op energiekosten.", category: "Verbruik" },
  { term: "Verbruiksprofiel", explanation: "Het patroon van je energieverbruik over de dag en het jaar. Belangrijk bij de keuze tussen vast en dynamisch contract.", category: "Verbruik" },

  // Subsidies
  { term: "KOR", explanation: "Kleineondernemersregeling. BTW-vrijstelling voor kleine zonnepaneelbezitters die stroom terugleveren.", category: "Subsidies" },
  { term: "SPRILA", explanation: "Subsidieregeling voor publiek toegankelijke laadinfrastructuur. Voor bedrijven die openbare laadpalen plaatsen.", category: "Subsidies" },
  { term: "SVVE", explanation: "Subsidieregeling voor Verduurzaming van Verenigingen van Eigenaars. VvE's kunnen subsidie krijgen voor energiebesparende maatregelen.", category: "Subsidies" },
  { term: "RVO", explanation: "Rijksdienst voor Ondernemend Nederland. Voert energie- en subsidiegeregelingen uit namens de overheid.", category: "Subsidies" },

  // Organisaties
  { term: "Consumentenbond", explanation: "Nederlandse consumentenorganisatie die onder andere energieleveranciers beoordeelt en vergelijkt.", category: "Organisaties" },
  { term: "WISE", explanation: "World Information Service on Energy. Onafhankelijk onderzoeksinstituut dat energiemarkten analyseert.", category: "Organisaties" },
  { term: "ElaadNL", explanation: "Kenniscentrum voor laadinfrastructuur in Nederland. Onderzoekt en adviseert over slim laden en V2G.", category: "Organisaties" },
  { term: "TNO", explanation: "Nederlandse Organisatie voor Toegepast Wetenschappelijk Onderzoek. Doet onder andere onderzoek naar energietechnologie.", category: "Organisaties" },
];

// Groepeer termen per categorie
const categories = Array.from(new Set(terms.map((t) => t.category)));

export default function BegrippenlijstPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Begrippenlijst", href: "/begrippenlijst" },
      ]} />

      <PageHero
        badge="Kennisbank"
        title="Begrippenlijst"
        highlight="Alle energietermen uitgelegd"
        description="Van kWh tot saldering, van TTF tot dynamisch contract. Begrijp alle termen die je tegenkomt bij het vergelijken van energie."
        accentColor="cyan"
      />

      {/* Quick nav */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-xl bg-surface border border-border p-5">
          <p className="text-sm font-semibold text-text-main mb-3">Spring naar categorie:</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-white border border-border text-text-muted hover:text-primary hover:border-primary transition-colors"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Termen per categorie */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="space-y-12">
          {categories.map((cat) => {
            const catTerms = terms.filter((t) => t.category === cat);
            return (
              <div key={cat} id={cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}>
                <h2 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded-full bg-primary" />
                  {cat}
                </h2>
                <div className="space-y-3">
                  {catTerms.map((item) => (
                    <div
                      key={item.term}
                      className="rounded-xl border border-border bg-white p-5 hover:border-primary/30 transition-colors"
                    >
                      <dt className="font-semibold text-text-main text-base">
                        {item.term}
                      </dt>
                      <dd className="text-sm text-text-muted mt-1.5 leading-relaxed">
                        {item.explanation}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Totaal + CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <div className="rounded-xl bg-surface border border-border p-6 text-center">
          <p className="text-sm text-text-muted">
            Totaal <strong className="text-text-main">{terms.length} energietermen</strong> uitgelegd. Mis je een begrip?{" "}
            <a href="mailto:info@energiekenner.nl" className="text-primary hover:text-primary-dark underline">Laat het ons weten</a>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <FAQSchema items={faqItems} />
        <h2 className="text-2xl font-bold text-text-main mb-8">Veelgestelde vragen over energietermen</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Nu je de termen kent: vergelijk zelf</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Met kennis van alle energietermen kun je beter vergelijken. Bekijk de actuele tarieven en vind de goedkoopste leverancier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#vergelijk"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Vergelijk alle leveranciers
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Bereken je kosten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
