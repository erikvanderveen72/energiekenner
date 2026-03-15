import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thuisbatterij kopen in 2026 | Prijzen, Rendement & V2G | Energiekenner",
  description: "Vergelijk thuisbatterijen van 3 tot 30 kWh. Terugverdientijd berekenen, BTW-teruggave en Vehicle-to-Grid (V2G) uitgelegd. Actuele prijzen maart 2026.",
  keywords: ["thuisbatterij", "thuisbatterij kopen", "thuisbatterij prijs 2026", "V2G", "vehicle to grid", "LFP batterij", "energieopslag"],
  openGraph: {
    title: "Thuisbatterij kopen in 2026 | Prijzen & Rendement",
    description: "Vergelijk thuisbatterijen, bereken je terugverdientijd en ontdek Vehicle-to-Grid.",
  },
};

const batteries = [
  { capacity: "3 kWh", price: "€ 3.000 - € 4.000", profile: "Klein huishouden, laag dagelijks verbruik", yield: "€ 150 - € 300" },
  { capacity: "5 kWh", price: "€ 3.500 - € 5.500", profile: "Gemiddeld huishouden, 6-8 zonnepanelen", yield: "€ 300 - € 500" },
  { capacity: "10 kWh", price: "€ 5.500 - € 7.500", profile: "Huishouden met warmtepomp of EV", yield: "€ 600 - € 900" },
  { capacity: "15 kWh", price: "€ 8.000 - € 12.000", profile: "Grootverbruikers, kleine bedrijven", yield: "€ 900 - € 1.300" },
  { capacity: "30 kWh", price: "€ 12.000 - € 18.000", profile: "Kleine bedrijven, hoge piekbelasting", yield: "€ 1.500+" },
];

const v2gCars = [
  { name: "Renault 5", feature: "Compleet V2G-ecosysteem met Solar Life-wallbox en Hegg-contract", capacity: "52 kWh" },
  { name: "Volvo EX90 / Polestar 3", feature: "Volledig V2G-voorbereid, capaciteit boven 100 kWh", capacity: "100+ kWh" },
  { name: "Nissan Leaf", feature: "Pionier V2H via CHAdeMO-protocol", capacity: "40-62 kWh" },
  { name: "Lucid Air", feature: "Extreem hoge laad-/ontlaadsnelheden voor luxe segment", capacity: "112 kWh" },
];

export default function ThuisbatterijPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-600 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium mb-4">
            Actueel — maart 2026
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">Thuisbatterij & V2G</h1>
          <p className="mt-4 text-lg text-orange-100 max-w-2xl">
            De residentiële batterijmarkt is volwassen. Met dalende LFP-prijzen en stijgende terugleverkosten is een thuisbatterij in 2026 een slimme investering met 5-10 jaar pure winst na break-even.
          </p>
        </div>
      </section>

      {/* Battery comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-2">Vergelijk thuisbatterijen</h2>
        <p className="text-text-muted mb-6">Indicatieve prijzen netto na 21% BTW-teruggave. Rendement op basis van EPEX-arbitrage met dynamisch contract.</p>
        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {batteries.map((b) => (
            <div key={b.capacity} className="rounded-xl border border-border bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">{b.capacity}</span>
                <span className="font-semibold text-green-600 text-sm">{b.yield}/jaar</span>
              </div>
              <p className="font-mono font-semibold text-text-main">{b.price}</p>
              <p className="text-sm text-text-muted mt-1">{b.profile}</p>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Capaciteit</th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Prijs (netto)</th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Ideaal profiel</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Rendement/jaar</th>
              </tr>
            </thead>
            <tbody>
              {batteries.map((b) => (
                <tr key={b.capacity} className="border-t border-border hover:bg-amber-50 transition-colors">
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">{b.capacity}</span>
                  </td>
                  <td className="px-4 py-4 font-mono font-semibold">{b.price}</td>
                  <td className="px-4 py-4 text-text-muted">{b.profile}</td>
                  <td className="px-4 py-4 text-right">
                    <span className="font-semibold text-green-600">{b.yield}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* BTW teruggave */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-8">
          <h2 className="text-xl font-bold text-text-main mb-3">BTW-teruggave: 21% besparen op je batterij</h2>
          <p className="text-sm text-amber-900 mb-4">
            Je kunt de BTW (21%) op aanschaf en installatie terugvragen als je aan deze voorwaarden voldoet:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Dynamisch contract", desc: "Je moet een dynamisch energiecontract hebben" },
              { title: "Zelfde naam", desc: "Factuur en contract staan op dezelfde naam" },
              { title: "BTW-nummer", desc: "Vraag een BTW-nummer aan bij de Belastingdienst" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="font-semibold text-text-main text-sm">{item.title}</p>
                <p className="text-xs text-text-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LFP info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border p-6">
            <p className="text-3xl font-bold text-primary">15-20 jaar</p>
            <p className="text-sm text-text-muted mt-1">Levensduur LFP-batterij</p>
          </div>
          <div className="rounded-xl border border-border p-6">
            <p className="text-3xl font-bold text-primary">6.000-10.000</p>
            <p className="text-sm text-text-muted mt-1">Volledige laadcycli</p>
          </div>
          <div className="rounded-xl border border-border p-6">
            <p className="text-3xl font-bold text-primary">85-90%</p>
            <p className="text-sm text-text-muted mt-1">Round-trip efficiency</p>
          </div>
        </div>
      </section>

      {/* Article 1: Thuisbatterij rendabel? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">Is een thuisbatterij rendabel?</h2>
          <div className="prose prose-sm max-w-none text-text-muted mb-6">
            <p className="mb-4">
              Organisaties zoals <strong>Milieu Centraal</strong> en <strong>Consumentenbond</strong> wijzen op onzekerheden rond terugverdientijd. Voor een gemiddeld huishouden is het niet vanzelfsprekend dat je je batterij binnen 15 jaar terugverdient, tenzij je actief gebruikmaakt van aanvullende inkomstenbronnen.
            </p>
            <p className="mb-4">
              <strong>3 modellen om geld mee te verdienen:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Eigen verbruik optimaliseren:</strong> Zonnepanelen laten opladen als het zonnig is, 's avonds gebruiken (5-20 cent/kWh besparing)</li>
              <li><strong>Day-ahead & dynamische steering:</strong> Laad voordelig in als prijzen laag zijn, verkoop terug als prijzen stijgen (5-15% arbitrage)</li>
              <li><strong>Onbalansmarkt/flexservices:</strong> Bied je batterijcapaciteit aan netbeheerders (ANWB, Jedlix) — 100-500 euro/jaar</li>
            </ul>
            <p className="mb-4">
              Volgens <strong>ANWB</strong> is een basisregel: <em>€750 per kWh</em> (exclusief installatie). Een 5 kWh batterij kost dus minstens €3.750 + installatie (€500-1.500).
            </p>
          </div>

          {/* Kennertip */}
          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5">
            <p className="flex items-start gap-3">
              <span className="text-xl font-bold text-amber-600">💡</span>
              <span className="text-sm">
                <strong className="text-text-main">Kennertip:</strong> Maak je businesscase &quot;dom en eerlijk&quot;: reken alleen op gegarandeerde inkomsten (eigenverbruik), en beschouw arbitrage als bonus. Dan ben je aangenaam verrast als het beter uitvalt.
              </span>
            </p>
          </div>

          <p className="text-xs text-text-muted mt-6">
            Bron: Milieu Centraal, Consumentenbond, ANWB richtlijnen 2026
          </p>
        </div>
      </section>

      {/* Article 2: BTW terugvragen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">BTW terugvragen: Niet automatisch, wel mogelijk</h2>
          <div className="prose prose-sm max-w-none text-text-muted mb-6">
            <p className="mb-4">
              De <strong>Belastingdienst</strong> stelt duidelijk: ja, je kunt 21% BTW terugvragen op je thuisbatterij — <em>maar niet automatisch</em>. Je moet zelf actief aanvragen en aan voorwaarden voldoen.
            </p>
            <p className="mb-4">
              <strong>Kritieke uitzondering: KOR (Kleine Ondernemersregeling)</strong><br/>
              Ondernemers met jaarlijkse inkomsten onder €50.000 vallen onder de KOR. Als jij onder KOR valt, heb je <strong>geen recht op BTW-teruggave</strong> — het systeem is niet voor jou bedoeld.
            </p>
            <p className="mb-4">
              <strong>Wie kan wel teruggave krijgen?</strong> <br/>
              Je moet:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Een <strong>dynamisch energiecontract</strong> hebben (essentieel)</li>
              <li>Lid zijn van een <strong>Vereniging Energiebeheer Huishoudens (VEH)</strong> of vergelijkbare organisatie</li>
              <li>Energielevering via <strong>elektriciteitshandel</strong> op je adres hebben</li>
              <li>Factuur en contract op dezelfde naam</li>
            </ul>
          </div>

          {/* Kennertip */}
          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5">
            <p className="flex items-start gap-3">
              <span className="text-xl font-bold text-amber-600">💡</span>
              <span className="text-sm">
                <strong className="text-text-main">Kennertip:</strong> Check je KOR-status voordat je aanschaft. Bel de Belastingdienst (0800-0543) of mail het BTW-team van je leverancier om zeker te weten dat teruggave mogelijk is. Het verschil is €750 op een 5 kWh batterij.
              </span>
            </p>
          </div>

          <p className="text-xs text-text-muted mt-6">
            Bron: Belastingdienst, VEH, Energiekenner jurisprudentie 2025-2026
          </p>
        </div>
      </section>

      {/* Article 3: Brandveiligheid PGS 37-2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">Brandveiligheid: PGS 37-2 & lithium</h2>
          <div className="prose prose-sm max-w-none text-text-muted mb-6">
            <p className="mb-4">
              <strong>PGS 37-2</strong> is een Nederlandse richtlijn voor veilige opslag van lithium-energiebatterijen. Het is niet verplicht voor huishoudelijke batterijen, maar verzekeraars gebruiken het steeds vaker als referentie.
            </p>
            <p className="mb-4">
              <strong>Kernpunten van PGS 37-2:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Grenswaarde per compartiment:</strong> 333 kg lithium per brandcompartiment (woning = 1 compartiment)</li>
              <li><strong>Afstand tot woningen:</strong> Minimaal 5 meter als buiten geplaatst</li>
              <li><strong>Ventilatie:</strong> Goede luchtcirculatie voorkomen hitteopbouw</li>
              <li><strong>Isolatie:</strong> Niet in aansluitende kamers of onder houten vloeren</li>
            </ul>
            <p className="mb-4">
              Thuisbatterijen (5-15 kWh) bevinden zich meestal ver onder de 333 kg-grens en hebben een ander risicoprofiel dan grote industriële opslagen. Toch kunnen incidenten voorkomen — moderne LFP-batterijen hebben interne beveiligingsmechanismen.
            </p>
          </div>

          {/* Kennertip */}
          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5">
            <p className="flex items-start gap-3">
              <span className="text-xl font-bold text-amber-600">💡</span>
              <span className="text-sm">
                <strong className="text-text-main">Kennertip:</strong> Installeer je batterij NIET in een krappe kast, maar op een goed geventileerde plek (garage, veranda, buiten onder dak). Houd minstens 30 cm afstand tot muren. Vraag je verzekeraar of die PGS 37-2 compliance vereist.
              </span>
            </p>
          </div>

          <p className="text-xs text-text-muted mt-6">
            Bron: PGS 37-2 (Publicatiereeks Gevaarlijke Stoffen), NVBW (Nederlandse Verzekerings Brancheorganisatie) 2025
          </p>
        </div>
      </section>

      {/* Article 4: LFP vs NMC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">LFP vs NMC: Mythes en feiten</h2>
          <div className="prose prose-sm max-w-none text-text-muted mb-6">
            <p className="mb-4">
              LFP (Lithium-ijzerfosfaat) wordt vaak gemarkeerd als "thermale runaway-proof". Dat is te absoluut. Wetenschappelijke literatuur rapporteert nog altijd incidenten met LFP, vooral onder extreme omstandigheden (overcharging, fysieke beschadiging, interne kortsluiting).
            </p>
            <p className="mb-4">
              <strong>Echte verschillen tussen LFP en NMC:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Thermale stabiliteit:</strong> LFP is inherent stabieler, NMC is gevoeliger voor hitte</li>
              <li><strong>Energiedichtheid:</strong> NMC wint hier (~250 Wh/kg vs ~160 Wh/kg) — relevant voor EV's, niet huisbatterijen</li>
              <li><strong>Cycluslevensduur:</strong> LFP: 6.000-10.000 cycli; NMC: 2.000-4.000 cycli</li>
              <li><strong>Kosten:</strong> LFP is goedkoper en wordt steeds voordeliger</li>
              <li><strong>Temperatuurbereik:</strong> LFP verdraagt koud beter, NMC moet warmgehouden worden</li>
            </ul>
            <p className="mb-4">
              <strong>Voor thuisbatterijen:</strong> LFP wint op vrijwel alle punten. Voor auto's (high-power, compact) is NMC nog relevant. Maar LFP groeit ook daar snel.
            </p>
          </div>

          {/* Kennertip */}
          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5">
            <p className="flex items-start gap-3">
              <span className="text-xl font-bold text-amber-600">💡</span>
              <span className="text-sm">
                <strong className="text-text-main">Kennertip:</strong> Kies batterijchemie op basis van jouw doel: LFP voor duur, stabiliteit en dagelijks laden/ontladen; NMC als je compact & mobiel moet zijn. Voor huisbatterijen: kies altijd LFP.
              </span>
            </p>
          </div>

          <p className="text-xs text-text-muted mt-6">
            Bron: Journal of Power Sources, NREL, Energieverbruikstest 2025
          </p>
        </div>
      </section>

      {/* V2G section - ENRICHED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-2">Vehicle-to-Grid (V2G): Je auto als energiebuffer</h2>
        <p className="text-text-muted mb-6">
          Met een bidirectionele laadpaal (ca. €6.000) wordt je EV een volwaardige thuisbatterij — 5 tot 10 keer groter dan een standaard stationaire batterij.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {v2gCars.map((car) => (
            <div key={car.name} className="rounded-xl border border-border p-6 hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">
                  EV
                </div>
                <div>
                  <h3 className="font-semibold text-text-main">{car.name}</h3>
                  <span className="text-xs text-text-muted">Batterij: {car.capacity}</span>
                </div>
              </div>
              <p className="text-sm text-text-muted">{car.feature}</p>
            </div>
          ))}
        </div>

        {/* Article 5: V2G in Nederland */}
        <div className="bg-white rounded-xl border border-border p-8 mb-8">
          <h3 className="text-xl font-bold text-text-main mb-4">V2G in Nederland: Timing & Realiteit</h3>
          <div className="prose prose-sm max-w-none text-text-muted mb-6">
            <p className="mb-4">
              <strong>Renault + We Drive Solar</strong> plannen V2G-diensten voor consumenten in het <strong>eerste halfjaar 2026</strong>. Dit is een belangrijk milestone, maar voltooi verwachting is gedegradeerd.
            </p>
            <p className="mb-4">
              <strong>ElaadNL</strong> (de Nederlandse laadpaalbeheerder) ziet groot potentieel, maar waarschuwt: <em>ontbrekende standaardisering kan adoptie vertragen</em>. Verwachte volwassenheid van het ecosysteem: rond 2030.
            </p>
            <p className="mb-4">
              <strong>Huidige blockers:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Weinig auto's met bidirectioneel laden (Renault 5 is frontrunner)</li>
              <li>Netbeheerders nog niet klaar voor groot-schalig reverse-flow</li>
              <li>Regelgeving rond terugleververgoeding niet definitief</li>
              <li>Hardware costs (wallbox) nog hoog voor massa-adoptie</li>
            </ul>
          </div>

          {/* Kennertip */}
          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5">
            <p className="flex items-start gap-3">
              <span className="text-xl font-bold text-amber-600">💡</span>
              <span className="text-sm">
                <strong className="text-text-main">Kennertip:</strong> Zie V2G als "ecosysteem-product", niet als standalone. Je hebt nodig: V2G-auto + bidirectionele wallbox + netbeheerder-akkoord + dynamisch contract. Alleen samen maken ze sense.
              </span>
            </p>
          </div>

          <p className="text-xs text-text-muted mt-4">
            Bron: We Drive Solar 2026, ElaadNL roadmap, Renault Nederland
          </p>
        </div>

        {/* Article 6: V2G hardware */}
        <div className="bg-white rounded-xl border border-border p-8 mb-8">
          <h3 className="text-xl font-bold text-text-main mb-4">V2G Hardware: Auto, Wallbox, Aarding</h3>
          <div className="prose prose-sm max-w-none text-text-muted mb-6">
            <p className="mb-4">
              V2G vereist bidirectioneel laden aan <strong>beide kanten</strong>: in de auto UIT de batterijmodule én in de wallbox. Dit is radicaal anders dan de meeste laadpalen, die slechts eenrichtingsverkeer toestaan.
            </p>
            <p className="mb-4">
              <strong>AC vs DC:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>AC V2G:</strong> Omvormer in auto; laadpaal blijft eenvoudig (maar langzaam, max 11 kW)</li>
              <li><strong>DC V2G:</strong> Omvormer in laadpaal; auto voert alleen vermogen uit (sneller, 50+ kW mogelijk)</li>
            </ul>
            <p className="mb-4">
              Voor thuisgebruik is <strong>AC vaak genoeg</strong>. Hoger vermogen helpt alleen als je dagelijks veel elektriciteit wilt terugleveringen (onbalansmarkt, arbitrage op schaal).
            </p>
            <p className="mb-4">
              <strong>We Drive Solar "Solar Life"</strong> is een van de eerste commercieel beschikbare bidirectionele wallboxen in Nederland (~€4.500-5.500). Installatiekosten: €1.000-2.000.
            </p>
          </div>

          {/* Kennertip */}
          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5">
            <p className="flex items-start gap-3">
              <span className="text-xl font-bold text-amber-600">💡</span>
              <span className="text-sm">
                <strong className="text-text-main">Kennertip:</strong> Vraag de leverancier deze 3 dingen voordat je koopt: (1) Is mijn auto echt V2G-capable? (2) Welk vermogen? (3) Is er netbeheerderakkoord nodig & hoeveel kost dat?
              </span>
            </p>
          </div>

          <p className="text-xs text-text-muted mt-4">
            Bron: We Drive Solar, ChargePoint, IEC 61851-24 standaard, ElaadNL
          </p>
        </div>

        {/* Article 7: Slim EV-laden */}
        <div className="bg-white rounded-xl border border-border p-8">
          <h3 className="text-xl font-bold text-text-main mb-4">Slim EV-laden: Optimalisatie via software</h3>
          <div className="prose prose-sm max-w-none text-text-muted mb-6">
            <p className="mb-4">
              Zelfs zonder V2G kun je slim laden via software. App's scannen elektriciteitsprijzen en laden je auto voordelig op.
            </p>
            <p className="mb-4">
              <strong>Populaire tools:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Tibber:</strong> Integreert batterij-info, laadvermogen, prijs EN vertrekmoment. Volledig geautomatiseerd.</li>
              <li><strong>ANWB:</strong> Laat je energiecontract kiezen in app voor optimale timing (dagmarkt).</li>
              <li><strong>Jedlix:</strong> Sprijnt op flexibiliteit — optimalisatie voor dynamische tarieven met real-time feedback.</li>
            </ul>
            <p className="mb-4">
              <strong>Eerste regel van slim laden:</strong> Stel je vertrekmoment in. Alles anders is optimalisatie.
            </p>
          </div>

          {/* Kennertip */}
          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5">
            <p className="flex items-start gap-3">
              <span className="text-xl font-bold text-amber-600">💡</span>
              <span className="text-sm">
                <strong className="text-text-main">Kennertip:</strong> Zet één harde eis: vertrekmoment. Alles daarbuiten (laadkracht, prijs, zon) is negotiable. Apps werken het best als ze één constraint hebben.
              </span>
            </p>
          </div>

          <p className="text-xs text-text-muted mt-4">
            Bron: Tibber, ANWB, Jedlix, Energiekenner tests 2025-2026
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Combineer je batterij met het juiste contract</h2>
          <p className="mt-2 text-amber-100">Een dynamisch contract is essentieel voor maximaal rendement uit je thuisbatterij.</p>
          <Link href="/dynamisch" className="inline-flex items-center mt-4 px-6 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
            Vergelijk dynamische tarieven
          </Link>
        </div>
      </section>
    </>
  );
}
