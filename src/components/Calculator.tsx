"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// Alle leveranciers met tariefdata maart 2026
const providers = [
  { name: "Energiedirect", kwh: 0.2595, gas: 1.2954, bonus: 350, green: false, fixed: 7.50 },
  { name: "Essent", kwh: 0.279, gas: 1.3341, bonus: 300, green: false, fixed: 7.95 },
  { name: "Vattenfall", kwh: 0.264, gas: 1.3962, bonus: 400, green: true, fixed: 8.25 },
  { name: "Eneco", kwh: 0.2612, gas: 1.3802, bonus: 350, green: true, fixed: 7.75 },
  { name: "Greenchoice", kwh: 0.2623, gas: 1.3895, bonus: 350, green: true, fixed: 7.50 },
  { name: "DELTA Energie", kwh: 0.251, gas: 1.3712, bonus: 300, green: true, fixed: 6.95 },
  { name: "OXXIO", kwh: 0.2561, gas: 1.3766, bonus: 275, green: false, fixed: 7.25 },
  { name: "Budget Energie", kwh: 0.2548, gas: 1.38, bonus: 370, green: false, fixed: 7.50 },
  { name: "UnitedConsumers", kwh: 0.225, gas: 1.166, bonus: 465, green: false, fixed: 6.50 },
  { name: "Mega", kwh: 0.329, gas: 1.654, bonus: 688, green: false, fixed: 9.95 },
  { name: "Vandebron", kwh: 0.268, gas: 1.41, bonus: 440, green: true, fixed: 8.00 },
  { name: "Engie", kwh: 0.272, gas: 1.405, bonus: 435, green: false, fixed: 7.95 },
  { name: "Coolblue Energie", kwh: 0.265, gas: 1.39, bonus: 300, green: true, fixed: 7.00 },
  { name: "Pure Energie", kwh: 0.26, gas: 1.385, bonus: 320, green: true, fixed: 7.25 },
];

// Energiebelasting 2026
const TAX_KWH = 0.1108;
const TAX_GAS = 0.7268;
const TAX_REDUCTION_MONTHLY = 628.96 / 12;

// Kleuren per leverancier
const COLORS = [
  "#2563EB", "#059669", "#D97706", "#DC2626", "#7C3AED",
  "#0891B2", "#BE185D", "#65A30D", "#EA580C", "#4F46E5",
  "#0D9488", "#CA8A04", "#9333EA", "#E11D48",
];

function calculateMonthly(
  provider: typeof providers[0],
  kwhYear: number,
  gasYear: number,
  includeBonus: boolean
) {
  const kwhMonth = kwhYear / 12;
  const gasMonth = gasYear / 12;

  const stroomKosten = kwhMonth * (provider.kwh + TAX_KWH);
  const gasKosten = gasMonth * (provider.gas + TAX_GAS);
  const vast = provider.fixed;
  const belastingVoordeel = TAX_REDUCTION_MONTHLY;
  const bonusPerMaand = includeBonus ? provider.bonus / 12 : 0;

  return stroomKosten + gasKosten + vast - belastingVoordeel - bonusPerMaand;
}

export function Calculator() {
  const [kwhYear, setKwhYear] = useState(2400);
  const [gasYear, setGasYear] = useState(1000);
  const [includeBonus, setIncludeBonus] = useState(true);
  const [greenOnly, setGreenOnly] = useState(false);

  const results = useMemo(() => {
    let filtered = providers;
    if (greenOnly) filtered = filtered.filter((p) => p.green);

    return filtered
      .map((p, idx) => ({
        ...p,
        monthly: calculateMonthly(p, kwhYear, gasYear, includeBonus),
        color: COLORS[idx % COLORS.length],
        originalIndex: idx,
      }))
      .sort((a, b) => a.monthly - b.monthly);
  }, [kwhYear, gasYear, includeBonus, greenOnly]);

  const cheapest = results[0]?.monthly ?? 0;
  const mostExpensive = results[results.length - 1]?.monthly ?? 0;
  const maxBar = mostExpensive > 0 ? mostExpensive : 1;
  const yearSaving = ((mostExpensive - cheapest) * 12).toFixed(0);

  return (
    <div>
      {/* Sliders */}
      <div className="rounded-xl border border-border bg-white p-6 shadow-sm mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Stroom slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-text-main">
                Stroomverbruik per jaar
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={kwhYear}
                  onChange={(e) => setKwhYear(Math.max(0, Math.min(10000, Number(e.target.value))))}
                  className="w-20 text-right px-2 py-1 rounded-lg border border-border text-sm font-mono font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <span className="text-sm text-text-muted">kWh</span>
              </div>
            </div>
            <input
              type="range"
              min={500}
              max={10000}
              step={100}
              value={kwhYear}
              onChange={(e) => setKwhYear(Number(e.target.value))}
              className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-text-muted mt-1">
              <span>500 kWh</span>
              <span className="font-medium text-blue-600">
                {kwhYear < 1500 ? "Weinig" : kwhYear < 3500 ? "Gemiddeld" : "Veel"}
              </span>
              <span>10.000 kWh</span>
            </div>
          </div>

          {/* Gas slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-text-main">
                Gasverbruik per jaar
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={gasYear}
                  onChange={(e) => setGasYear(Math.max(0, Math.min(5000, Number(e.target.value))))}
                  className="w-20 text-right px-2 py-1 rounded-lg border border-border text-sm font-mono font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <span className="text-sm text-text-muted">m³</span>
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={5000}
              step={50}
              value={gasYear}
              onChange={(e) => setGasYear(Number(e.target.value))}
              className="w-full h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-xs text-text-muted mt-1">
              <span>0 m³</span>
              <span className="font-medium text-orange-500">
                {gasYear === 0 ? "Geen gas" : gasYear < 800 ? "Weinig" : gasYear < 1500 ? "Gemiddeld" : "Veel"}
              </span>
              <span>5.000 m³</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border">
          <button
            onClick={() => setIncludeBonus(!includeBonus)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
              includeBonus
                ? "bg-amber-50 border-amber-300 text-amber-700"
                : "bg-white border-border text-text-muted hover:border-amber-300"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            Welkomstbonus meegerekend
          </button>
          <button
            onClick={() => setGreenOnly(!greenOnly)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
              greenOnly
                ? "bg-green-50 border-green-300 text-green-700"
                : "bg-white border-border text-text-muted hover:border-green-300"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Alleen groene stroom
          </button>

          {/* Quick presets */}
          <div className="flex gap-2 ml-auto">
            {[
              { label: "Appartement", kwh: 1500, gas: 500 },
              { label: "Tussenwoning", kwh: 2400, gas: 1000 },
              { label: "Vrijstaand", kwh: 4000, gas: 1800 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => { setKwhYear(preset.kwh); setGasYear(preset.gas); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  kwhYear === preset.kwh && gasYear === preset.gas
                    ? "bg-primary text-white border-primary"
                    : "bg-white border-border text-text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Savings banner */}
      <div className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-green-100 text-sm">Verschil goedkoopste vs. duurste leverancier</p>
          <p className="text-3xl font-extrabold">€ {yearSaving} per jaar</p>
        </div>
        <div className="text-right">
          <p className="text-green-100 text-sm">Goedkoopst voor jouw verbruik</p>
          <p className="text-2xl font-bold">{results[0]?.name}</p>
          <p className="text-green-100 text-sm">€ {results[0]?.monthly.toFixed(2)}/mnd</p>
        </div>
      </div>

      {/* Chart - horizontal bar chart */}
      <div className="rounded-xl border border-border bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-surface-alt">
          <h2 className="font-semibold text-text-main">Geschat maandbedrag per leverancier</h2>
          <p className="text-xs text-text-muted mt-0.5">
            {kwhYear.toLocaleString()} kWh stroom + {gasYear.toLocaleString()} m³ gas per jaar
            {includeBonus ? " (incl. welkomstbonus)" : ""}
          </p>
        </div>

        <div className="p-6 space-y-3">
          {results.map((provider, idx) => {
            const barWidth = maxBar > 0 ? Math.max((provider.monthly / maxBar) * 100, 5) : 5;
            const isCheapest = idx === 0;
            const saving = ((provider.monthly - cheapest) * 12).toFixed(0);

            return (
              <div key={provider.name} className={`group ${isCheapest ? "" : ""}`}>
                <div className="flex items-center gap-3">
                  {/* Rank */}
                  <div className="w-7 flex-shrink-0 text-center">
                    {isCheapest ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold">
                        1
                      </span>
                    ) : (
                      <span className="text-sm text-text-muted font-medium">{idx + 1}</span>
                    )}
                  </div>

                  {/* Provider name */}
                  <div className="w-36 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${isCheapest ? "text-green-600" : "text-text-main"}`}>
                        {provider.name}
                      </span>
                      {provider.green && (
                        <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Bar */}
                  <div className="flex-1 relative">
                    <div className="w-full bg-gray-50 rounded-full h-8 overflow-hidden">
                      <div
                        className={`h-8 rounded-full transition-all duration-500 ease-out flex items-center px-3 ${
                          isCheapest
                            ? "bg-gradient-to-r from-green-400 to-green-500"
                            : "bg-gradient-to-r from-blue-400 to-blue-500"
                        }`}
                        style={{ width: `${barWidth}%` }}
                      >
                        <span className="text-white text-xs font-bold whitespace-nowrap">
                          € {provider.monthly.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Difference */}
                  <div className="w-24 flex-shrink-0 text-right">
                    {isCheapest ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                        Goedkoopst
                      </span>
                    ) : (
                      <span className="text-xs text-text-muted">
                        +€ {saving}/jr
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-8 rounded-xl bg-surface p-6 border border-border">
        <h3 className="font-semibold text-text-main mb-2">Hoe wordt dit berekend?</h3>
        <p className="text-sm text-text-muted">
          Het geschatte maandbedrag is: (stroomverbruik × kWh-tarief) + (gasverbruik × m³-tarief)
          + energiebelasting + vaste leveringskosten − vermindering energiebelasting (€52,41/mnd)
          {includeBonus && " − welkomstbonus verdeeld over 12 maanden"}.
          Alle bedragen zijn inclusief 21% BTW. Netbeheerkosten (gemiddeld ±€62/mnd) zijn voor alle leveranciers gelijk en daarom niet meegenomen.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 p-8 text-white text-center">
        <h2 className="text-2xl font-bold">Klaar om over te stappen?</h2>
        <p className="mt-2 text-violet-100">Met de nieuwe Energiewet switch je in 5 werkdagen.</p>
        <div className="flex justify-center gap-3 mt-4">
          <Link href="/#vergelijk" className="inline-flex items-center px-6 py-3 bg-white text-violet-600 rounded-lg font-semibold hover:bg-violet-50 transition-colors">
            Vergelijk contracten
          </Link>
          <Link href="/energiewet" className="inline-flex items-center px-6 py-3 bg-white/15 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/25 transition-colors">
            Je rechten in 2026
          </Link>
        </div>
      </div>
    </div>
  );
}
