"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";

const metadata = {
  title: "Energieverbruik 2026: Apparaten, Seizoen & Kosten | Energiekenner",
  description: "Alles over energieverbruik in Nederland: Wat kost een wasmachine, koelkast, verwarming per jaar? Vergelijk apparaten en bespar tot €1.000/jaar.",
  keywords: ["energieverbruik", "kWh", "verbruik apparaten", "jaarlijks verbruik", "energiekosten", "wasmachine verbruik", "koelkast verbruik", "verlichting verbruik"],
  openGraph: {
    title: "Energieverbruik: Wat kost wat?",
    description: "Overzicht van jaarlijks energieverbruik per apparaat en manieren om te besparen.",
  },
};

interface Appliance {
  name: string;
  minKwh: number;
  maxKwh: number;
  icon: string;
}

interface Activity {
  name: string;
  minCost: number;
  maxCost: number;
  icon: string;
  detail: string;
}

interface EnergyLabel {
  label: string;
  minCost: number;
  maxCost: number;
  color: string;
}

const appliances: Appliance[] = [
  { name: "Koelkast", minKwh: 150, maxKwh: 300, icon: "❄️" },
  { name: "Wasmachine", minKwh: 150, maxKwh: 200, icon: "🧺" },
  { name: "Droger", minKwh: 300, maxKwh: 500, icon: "🔄" },
  { name: "Vaatwasser", minKwh: 200, maxKwh: 300, icon: "🍽️" },
  { name: "TV", minKwh: 100, maxKwh: 200, icon: "📺" },
  { name: "Computer/Laptop", minKwh: 100, maxKwh: 300, icon: "💻" },
  { name: "Verlichting", minKwh: 200, maxKwh: 400, icon: "💡" },
  { name: "Warmtepomp", minKwh: 2000, maxKwh: 4000, icon: "🌡️" },
  { name: "Elektrische auto", minKwh: 2000, maxKwh: 4000, icon: "🚗" },
  { name: "Airco", minKwh: 500, maxKwh: 1000, icon: "❄️" },
];

const energyLabels: EnergyLabel[] = [
  { label: "A", minCost: 1200, maxCost: 1500, color: "from-green-500 to-emerald-500" },
  { label: "B", minCost: 1500, maxCost: 1800, color: "from-green-400 to-yellow-400" },
  { label: "C", minCost: 1800, maxCost: 2200, color: "from-yellow-400 to-orange-400" },
  { label: "D", minCost: 2200, maxCost: 2600, color: "from-orange-400 to-orange-500" },
  { label: "E", minCost: 2600, maxCost: 3200, color: "from-orange-500 to-red-400" },
  { label: "F", minCost: 3200, maxCost: 3800, color: "from-red-400 to-red-500" },
  { label: "G", minCost: 3800, maxCost: 5000, color: "from-red-600 to-red-700" },
];

const activities: Activity[] = [
  { name: "Douchen (8 min)", minCost: 0.80, maxCost: 1.20, icon: "🚿", detail: "gas + water" },
  { name: "Bad nemen", minCost: 2.00, maxCost: 3.50, icon: "🛁", detail: "gas + water" },
  { name: "Koken (gas)", minCost: 0.30, maxCost: 0.50, icon: "🍳", detail: "per maaltijd" },
  { name: "Koken (inductie)", minCost: 0.15, maxCost: 0.25, icon: "🍳", detail: "per maaltijd" },
  { name: "Wasmachine (60°C)", minCost: 0.40, maxCost: 0.60, icon: "🧺", detail: "per wassing" },
  { name: "Wasmachine (30°C)", minCost: 0.15, maxCost: 0.25, icon: "🧺", detail: "per wassing" },
  { name: "Droger", minCost: 0.80, maxCost: 1.20, icon: "🔄", detail: "per cyclus" },
  { name: "Vaatwasser", minCost: 0.40, maxCost: 0.60, icon: "🍽️", detail: "per cyclus" },
  { name: "Verwarming (winter)", minCost: 5, maxCost: 10, icon: "🔥", detail: "per dag" },
  { name: "Verwarming (herfst)", minCost: 2, maxCost: 4, icon: "🔥", detail: "per dag" },
];

const seasons = [
  {
    name: "Winter (dec/jan/feb)",
    months: "Dec, Jan, Feb",
    electricity: "Gemiddeld",
    gas: "Zeer hoog",
    electricityAvg: 250,
    gasAvg: 200,
    avgCost: 350,
  },
  {
    name: "Lente (mrt/apr/mei)",
    months: "Mrt, Apr, Mei",
    electricity: "Gemiddeld",
    gas: "Matig",
    electricityAvg: 200,
    gasAvg: 80,
    avgCost: 150,
  },
  {
    name: "Zomer (jun/jul/aug)",
    months: "Jun, Jul, Aug",
    electricity: "Kan hoger zijn (airco)",
    gas: "Laag",
    electricityAvg: 220,
    gasAvg: 20,
    avgCost: 130,
  },
  {
    name: "Herfst (sep/okt/nov)",
    months: "Sep, Okt, Nov",
    electricity: "Gemiddeld",
    gas: "Stijgend",
    electricityAvg: 220,
    gasAvg: 120,
    avgCost: 200,
  },
];

const evCosts = [
  { label: "Klein (10.000 km/jaar)", minCost: 400, maxCost: 600 },
  { label: "Gemiddeld (15.000 km/jaar)", minCost: 600, maxCost: 900 },
  { label: "Veel (25.000 km/jaar)", minCost: 1000, maxCost: 1500 },
];

export default function VerbruikPage() {
  const [selectedAppliance, setSelectedAppliance] = useState<number | null>(null);
  const kwhPrice = 0.25;

  const getApplianceCost = (minKwh: number, maxKwh: number) => {
    const minCost = minKwh * kwhPrice;
    const maxCost = maxKwh * kwhPrice;
    return { minCost: minCost.toFixed(2), maxCost: maxCost.toFixed(2) };
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("nl-NL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const getMaxKwh = Math.max(...appliances.map((a) => a.maxKwh));

  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="Infografiek"
        title="Energieverbruik"
        highlight="Wat bepaalt je kosten?"
        description="Ontdek hoeveel elektriciteit en gas je huishouden verbruikt. Van apparaten tot dagelijkse activiteiten: alles heeft een prijs."
        accentColor="sky"
      />

      {/* Article: Gemiddeld verbruik in Nederland */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <nav className="rounded-xl border border-border bg-white p-6 mb-10">
          <h2 className="font-semibold text-text-main mb-3">In dit artikel</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-primary">
            <li><a href="#gemiddelden" className="hover:underline">Gemiddeld verbruik in Nederland</a></li>
            <li><a href="#factoren" className="hover:underline">Wat bepaalt je verbruik?</a></li>
            <li><a href="#apparaten" className="hover:underline">Verbruik per apparaat</a></li>
            <li><a href="#energielabel" className="hover:underline">Energielabel maakt het verschil</a></li>
            <li><a href="#seizoen" className="hover:underline">Verschil per seizoen</a></li>
            <li><a href="#activiteiten" className="hover:underline">Dagelijkse activiteiten en kosten</a></li>
            <li><a href="#ev" className="hover:underline">Elektrische auto</a></li>
          </ol>
        </nav>

        <article id="gemiddelden" className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-4">Gemiddeld energieverbruik in Nederland</h2>
          <div className="prose prose-sm max-w-none text-text-muted space-y-4">
            <p>
              Een gemiddeld Nederlands huishouden verbruikt circa 2.400 kWh stroom en 1.000 m&sup3; gas per jaar. Maar de spreiding is enorm: alleenstaanden in een goed ge&iuml;soleerd appartement komen soms uit op 1.200 kWh, terwijl een gezin met warmtepomp en elektrische auto richting 8.000 kWh of meer kan gaan.
            </p>
            <p>
              Bij gas is de trend dalend: het gemiddelde gasverbruik daalde van 1.381 m&sup3; in 2020 naar circa 1.040 m&sup3; in 2024 door betere isolatie, warmtepompen en mildere winters. Steeds meer huishoudens hebben zelfs helemaal geen gas meer nodig.
            </p>
          </div>

          {/* Huishoudtypes vergelijking */}
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { type: "Alleenstaand (appartement)", stroom: "1.200 - 1.800", gas: "500 - 800", kosten: "900 - 1.400", color: "sky" },
              { type: "Stel (rijtjeshuis)", stroom: "2.000 - 3.000", gas: "800 - 1.200", kosten: "1.400 - 2.200", color: "emerald" },
              { type: "Gezin (4 pers, tussenwoning)", stroom: "3.000 - 4.500", gas: "1.000 - 1.500", kosten: "2.200 - 3.200", color: "amber" },
              { type: "Groot gezin (vrijstaand)", stroom: "4.000 - 6.500", gas: "1.500 - 2.500", kosten: "3.200 - 5.500", color: "rose" },
            ].map((item) => (
              <div key={item.type} className={`rounded-xl border-2 border-${item.color}-200 bg-${item.color}-50/50 p-5`}>
                <h3 className="font-bold text-text-main text-sm mb-3">{item.type}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Stroom</span>
                    <span className="font-semibold text-text-main">{item.stroom} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Gas</span>
                    <span className="font-semibold text-text-main">{item.gas} m&sup3;</span>
                  </div>
                  <div className="pt-2 border-t border-border flex justify-between">
                    <span className="text-text-muted">Kosten/jaar</span>
                    <span className={`font-bold text-${item.color}-600`}>&euro; {item.kosten}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Uitschieters */}
          <div className="mt-8">
            <h3 className="font-semibold text-text-main mb-4">De uitschieters: laagste en hoogste verbruik</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-sky-50">
                    <th className="text-left p-3 font-semibold text-text-main border-b border-border">Profiel</th>
                    <th className="text-left p-3 font-semibold text-text-main border-b border-border">Stroom (kWh/jaar)</th>
                    <th className="text-left p-3 font-semibold text-text-main border-b border-border">Gas (m&sup3;/jaar)</th>
                    <th className="text-left p-3 font-semibold text-text-main border-b border-border">Geschatte kosten</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">Zuinigst: alleenstaand, goed ge&iuml;soleerd</td>
                    <td className="p-3 text-text-muted">800 - 1.200</td>
                    <td className="p-3 text-text-muted">300 - 500</td>
                    <td className="p-3 text-emerald-600 font-semibold">&euro; 600 - 900/jaar</td>
                  </tr>
                  <tr className="border-b border-border bg-stone-50/60">
                    <td className="p-3 font-medium text-text-main">Gemiddeld huishouden</td>
                    <td className="p-3 text-text-muted">2.400</td>
                    <td className="p-3 text-text-muted">1.000</td>
                    <td className="p-3 text-text-main font-semibold">&euro; 1.800 - 2.200/jaar</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">Gezin + warmtepomp</td>
                    <td className="p-3 text-text-muted">5.000 - 7.000</td>
                    <td className="p-3 text-text-muted">0 (gasloos)</td>
                    <td className="p-3 text-text-main font-semibold">&euro; 1.500 - 2.100/jaar</td>
                  </tr>
                  <tr className="border-b border-border bg-stone-50/60">
                    <td className="p-3 font-medium text-text-main">Gezin + EV + warmtepomp</td>
                    <td className="p-3 text-text-muted">7.000 - 10.000</td>
                    <td className="p-3 text-text-muted">0 (gasloos)</td>
                    <td className="p-3 text-text-main font-semibold">&euro; 2.100 - 3.000/jaar</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">Hoogst: groot huis, slechte isolatie (label E/F)</td>
                    <td className="p-3 text-text-muted">4.000 - 6.000</td>
                    <td className="p-3 text-text-muted">2.500 - 4.000</td>
                    <td className="p-3 text-red-600 font-semibold">&euro; 4.500 - 7.000/jaar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Visuele vergelijking laag vs hoog */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6">
              <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Laag verbruik - zo doe je dat
              </h4>
              <ul className="text-sm text-emerald-900 space-y-1.5">
                <li>- Goed ge&iuml;soleerde woning (label A of B)</li>
                <li>- LED-verlichting in het hele huis</li>
                <li>- A-label apparaten</li>
                <li>- Kort douchen (5 min) i.p.v. bad</li>
                <li>- Wassen op 30&deg;C, aan de lijn drogen</li>
                <li>- Verwarming op max 19&deg;C met programmeerbare thermostaat</li>
                <li>- Zonnepanelen voor eigen verbruik</li>
              </ul>
            </div>
            <div className="rounded-xl bg-red-50 border border-red-200 p-6">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Hoog verbruik - herken je dit?
              </h4>
              <ul className="text-sm text-red-900 space-y-1.5">
                <li>- Slechte isolatie (enkel glas, geen spouwmuur)</li>
                <li>- Oude apparaten (15+ jaar, G-label)</li>
                <li>- Dagelijks bad nemen</li>
                <li>- Droger na elke was</li>
                <li>- Verwarming op 21&deg;C+ de hele dag aan</li>
                <li>- Elektrische boiler voor warm water</li>
                <li>- Meerdere TV&apos;s en computers aan in standby</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-semibold text-amber-900 mb-2">Kennertip</p>
            <p className="text-sm text-amber-800">
              Check je slimme meter of de app van je netbeheerder (Liander, Stedin, Enexis) om je werkelijke verbruik te zien. Vul dit in bij onze vergelijker voor het meest nauwkeurige resultaat. Het gemiddelde (2.400 kWh / 1.000 m&sup3;) klopt voor veel huishoudens niet meer.
            </p>
          </div>
        </article>
      </section>

      {/* Section 1: Factoren */}
      <section id="factoren" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-2">Wat bepaalt je energieverbruik?</h2>
        <p className="text-text-muted mb-8">Vier grote factoren beïnvloeden hoeveel energie je gebruikt (en dus betaalt).</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Isolatie",
              description: "Slechtere isolatie = meer warmte verloren = meer verwarming nodig",
              icon: "🏠",
            },
            {
              title: "Gezinsgrootte",
              description: "Meer personen = meer douches, koken, wasmachines, verlichting",
              icon: "👨‍👩‍👧‍👦",
            },
            {
              title: "Apparaten",
              description: "Oude apparaten gebruiken veel meer energie dan moderne A-label apparaten",
              icon: "⚡",
            },
            {
              title: "Seizoen",
              description: "Winter: veel verwarming. Zomer: mogelijk airco. Lente/Herfst: matig",
              icon: "🌡️",
            },
          ].map((factor, i) => (
            <div key={i} className="rounded-xl border border-border bg-white p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{factor.icon}</div>
              <h3 className="font-semibold text-text-main mb-2">{factor.title}</h3>
              <p className="text-sm text-text-muted">{factor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Verbruik per apparaat */}
      <section id="apparaten" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-2">Verbruik per apparaat</h2>
        <p className="text-text-muted mb-2">Jaarlijkse kWh-consumptie (tegen €0,25/kWh)</p>

        {/* Desktop: Horizontal bars */}
        <div className="hidden md:block space-y-4">
          {appliances.map((appliance, idx) => {
            const avgKwh = (appliance.minKwh + appliance.maxKwh) / 2;
            const barWidth = (avgKwh / getMaxKwh) * 100;
            const cost = getApplianceCost(appliance.minKwh, appliance.maxKwh);

            return (
              <div
                key={idx}
                className="group cursor-pointer"
                onClick={() => setSelectedAppliance(selectedAppliance === idx ? null : idx)}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 min-w-fit">
                    <span className="text-xl">{appliance.icon}</span>
                    <span className="font-medium text-text-main">{appliance.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-semibold text-text-main">
                      {appliance.minKwh}-{appliance.maxKwh} kWh
                    </span>
                    <span className="text-xs text-text-muted ml-2">€{cost.minCost}-€{cost.maxCost}/jaar</span>
                  </div>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-sky-400 to-cyan-500 group-hover:to-sky-600"
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Cards */}
        <div className="md:hidden space-y-3">
          {appliances.map((appliance, idx) => {
            const cost = getApplianceCost(appliance.minKwh, appliance.maxKwh);
            return (
              <div key={idx} className="rounded-xl border border-border bg-white p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{appliance.icon}</span>
                  <h3 className="font-semibold text-text-main flex-1">{appliance.name}</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-text-muted">
                    {appliance.minKwh}-{appliance.maxKwh} kWh/jaar
                  </p>
                  <p className="text-sm font-semibold text-sky-600">€{cost.minCost}-€{cost.maxCost}/jaar</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl bg-sky-50 border border-sky-200 p-6">
          <p className="text-sm text-sky-900">
            <strong>Tip:</strong> Energielabel A-apparaten gebruiken 30-50% minder energie dan G-label apparaten. Over 10 jaar scheelt dit duizenden euro's.
          </p>
        </div>
      </section>

      {/* Section 3: Energielabels */}
      <section id="energielabel" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-2">Energielabel maakt het verschil</h2>
        <p className="text-text-muted mb-8">Een slechter energielabel betekent een hogere jaarlijkse energierekening.</p>

        {/* Desktop bars */}
        <div className="hidden md:block space-y-3">
          {energyLabels.map((label, idx) => {
            const barHeight = ((label.maxCost - label.minCost) / (energyLabels[energyLabels.length - 1].maxCost - energyLabels[0].minCost)) * 100 + 30;
            const midCost = (label.minCost + label.maxCost) / 2;

            return (
              <div key={idx} className="flex items-end gap-4">
                <div className="w-12">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg border-2 border-stone-300 font-bold text-lg text-stone-700">
                    {label.label}
                  </div>
                </div>
                <div className="flex-1 flex items-end gap-2">
                  <div className={`flex-1 rounded-t-xl bg-gradient-to-t ${label.color} transition-all duration-300 hover:shadow-lg`} style={{ height: `${barHeight + 20}px` }} />
                  <div className="mb-2 text-right">
                    <p className="font-semibold text-text-main">€{label.minCost.toLocaleString("nl-NL")}-€{label.maxCost.toLocaleString("nl-NL")}</p>
                    <p className="text-xs text-text-muted">per jaar</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {energyLabels.map((label, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg border-2 border-stone-300 font-bold text-text-main">
                  {label.label}
                </div>
                <p className="text-sm font-semibold text-text-main">
                  €{label.minCost.toLocaleString("nl-NL")}-€{label.maxCost.toLocaleString("nl-NL")}/jaar
                </p>
              </div>
              <div className={`w-full h-3 rounded-full bg-gradient-to-r ${label.color}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Seizoensverbruik */}
      <section id="seizoen" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-2">Seizoensverbruik</h2>
        <p className="text-text-muted mb-8">Je energieverbruik varieert flink per seizoen. Winter is duur door verwarming.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {seasons.map((season, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-white p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-text-main mb-1">{season.name}</h3>
              <p className="text-xs text-text-muted mb-4">{season.months}</p>

              <div className="space-y-4">
                {/* Electricity */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-muted">Elektriciteit</span>
                    <span className="text-sm font-semibold text-text-main">~{season.electricityAvg} kWh</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                      style={{ width: `${(season.electricityAvg / 300) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-text-muted mt-1">{season.electricity}</p>
                </div>

                {/* Gas */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-muted">Gas</span>
                    <span className="text-sm font-semibold text-text-main">~{season.gasAvg} m³</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-red-400 to-orange-500"
                      style={{ width: `${(season.gasAvg / 250) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-text-muted mt-1">{season.gas}</p>
                </div>

                {/* Total cost */}
                <div className="pt-3 border-t border-border">
                  <p className="text-sm font-semibold text-text-main">Gemiddelde maandelijks: €{season.avgCost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Dagelijkse activiteiten */}
      <section id="activiteiten" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-2">Dagelijkse activiteiten en hun kosten</h2>
        <p className="text-text-muted mb-8">Deze activiteiten doen we regelmatig. Elk heeft een prijs. Kies slimmer en bespaar!</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-white p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-2xl mb-2">{activity.icon}</div>
                  <h3 className="font-semibold text-text-main">{activity.name}</h3>
                  <p className="text-xs text-text-muted mt-1">{activity.detail}</p>
                </div>
              </div>
              <div className="rounded-lg bg-sky-50 p-3">
                <p className="text-sm font-bold text-sky-700">
                  €{activity.minCost.toFixed(2)}-€{activity.maxCost.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 p-6">
          <p className="text-sm text-emerald-900 mb-3">
            <strong>Bespaartips:</strong>
          </p>
          <ul className="text-sm text-emerald-900 space-y-1 list-disc pl-5">
            <li>Wasmachine op 30°C in plaats van 60°C = 66% besparing</li>
            <li>Douchen in plaats van bad nemen = 60% besparing</li>
            <li>Inductiekookplaat in plaats van gas = 50% besparing</li>
            <li>Geen voorraaswassen = €1-2/week besparen</li>
          </ul>
        </div>
      </section>

      {/* Section 6: Elektrische auto */}
      <section id="ev" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-text-main mb-2">Elektrische auto: Impact op je energierekening</h2>
        <p className="text-text-muted mb-8">Een EV kost minder dan benzine, maar verhoogt wel je elektriciteitverbruik.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {evCosts.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-white p-6 text-center hover:shadow-md transition-shadow">
              <p className="font-semibold text-text-main mb-3">{item.label}</p>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 mb-3">
                <p className="text-2xl font-bold text-emerald-600">€{item.minCost}-€{item.maxCost}</p>
                <p className="text-xs text-text-muted mt-1">per jaar</p>
              </div>
              <p className="text-xs text-text-muted">bij thuisladen (€0,25/kWh)</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-200 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-text-main mb-3">EV vs. Benzine</h3>
              <ul className="space-y-2 text-sm text-text-main">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>EV: €600-900/jaar (15.000 km)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Benzine: €1.500-2.000/jaar (dezelfde afstand)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-sky-600">Besparing:</span>
                  <span>€900-1.100/jaar met EV</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-main mb-3">Laadtips</h3>
              <ul className="space-y-2 text-sm text-text-main">
                <li className="flex items-start gap-2">
                  <span className="font-bold">→</span>
                  <span>Thuis laden is goedkoper dan publiek laden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">→</span>
                  <span>Dynamisch elektriciteitscontract = extra besparing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">→</span>
                  <span>Laden in de nacht (als goedkoper) helpt kosten sparen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <div className="rounded-xl bg-gradient-to-br from-sky-600 to-cyan-700 p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Bereid je voor op je volgende energierekening</h2>
          <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
            Nu je begrijpt wat je energieverbruik bepaalt, is het tijd om je contract te vergelijken. Met het juiste contract bespaar je honderden euro's per jaar.
          </p>
          <Link
            href="/#vergelijk"
            className="inline-block bg-white text-cyan-600 font-semibold px-8 py-3 rounded-lg hover:bg-sky-50 transition-colors"
          >
            Vergelijk nu (snelste deal)
          </Link>
        </div>
      </section>
    </>
  );
}
