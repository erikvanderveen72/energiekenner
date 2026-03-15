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
      <section className="bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium mb-4">
            Actueel — maart 2026
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold">Thuisbatterij & V2G</h1>
          <p className="mt-4 text-lg text-orange-100 max-w-2xl">
            De residentiële batterijmarkt is volwassen. Met dalende LFP-prijzen en stijgende terugleverkosten is een thuisbatterij in 2026 een slimme investering met 5-10 jaar pure winst na break-even.
          </p>
        </div>
      </section>

      {/* Battery comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-2">Vergelijk thuisbatterijen</h2>
        <p className="text-text-muted mb-6">Indicatieve prijzen netto na 21% BTW-teruggave. Rendement op basis van EPEX-arbitrage met dynamisch contract.</p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
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

      {/* V2G section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-2">Vehicle-to-Grid (V2G): Je auto als energiebuffer</h2>
        <p className="text-text-muted mb-6">
          Met een bidirectionele laadpaal (ca. €6.000) wordt je EV een volwaardige thuisbatterij — 5 tot 10 keer groter dan een standaard stationaire batterij.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
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
