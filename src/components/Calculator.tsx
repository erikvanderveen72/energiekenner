"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { EnergyProvider } from "@/lib/database.types";

interface CalculatorProps {
  providers: EnergyProvider[];
}

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

interface CalcProvider {
  name: string;
  kwh: number;
  gas: number;
  bonus: number;
  green: boolean;
  fixed: number;
  feedInCost: number;
  feedInComp: number;
}

function mapProviders(providers: EnergyProvider[]): CalcProvider[] {
  return providers.map((p) => ({
    name: p.name,
    kwh: Number(p.kwh_rate),
    gas: Number(p.gas_rate),
    bonus: p.welcome_bonus,
    green: p.green_energy,
    fixed: 7.50, // gemiddelde vaste leveringskosten
    feedInCost: Number(p.feed_in_cost_kwh ?? 0),
    feedInComp: Number(p.feed_in_compensation ?? 0),
  }));
}

function calculateMonthly(
  provider: CalcProvider,
  kwhYear: number,
  gasYear: number,
  includeBonus: boolean,
  hasSolar: boolean,
  solarKwh: number
) {
  const kwhMonth = kwhYear / 12;
  const gasMonth = gasYear / 12;

  const stroomKosten = kwhMonth * (provider.kwh + TAX_KWH);
  const gasKosten = gasMonth * (provider.gas + TAX_GAS);
  const vast = provider.fixed;
  const belastingVoordeel = TAX_REDUCTION_MONTHLY;
  const bonusPerMaand = includeBonus ? provider.bonus / 12 : 0;

  let solarEffect = 0;
  if (hasSolar && solarKwh > 0) {
    const monthlyGenerated = solarKwh / 12;
    const netSaving = monthlyGenerated * (provider.kwh + TAX_KWH);
    const feedInCosts = monthlyGenerated * provider.feedInCost;
    const feedInCompensation = monthlyGenerated * provider.feedInComp;
    solarEffect = netSaving - feedInCosts + feedInCompensation;
  }

  return stroomKosten + gasKosten + vast - belastingVoordeel - bonusPerMaand - solarEffect;
}

export function Calculator({ providers: rawProviders }: CalculatorProps) {
  const providers = useMemo(() => mapProviders(rawProviders), [rawProviders]);
  const [kwhYear, setKwhYear] = useState(2400);
  const [gasYear, setGasYear] = useState(1000);
  const [includeBonus, setIncludeBonus] = useState(true);
  const [greenOnly, setGreenOnly] = useState(false);
  const [hasSolar, setHasSolar] = useState(false);
  const [solarKwh, setSolarKwh] = useState(3000);

  const results = useMemo(() => {
    let filtered = providers;
    if (greenOnly) filtered = filtered.filter((p) => p.green);

    return filtered
      .map((p, idx) => ({
        ...p,
        monthly: calculateMonthly(p, kwhYear, gasYear, includeBonus, hasSolar, solarKwh),
        color: COLORS[idx % COLORS.length],
        originalIndex: idx,
      }))
      .sort((a, b) => a.monthly - b.monthly);
  }, [kwhYear, gasYear, includeBonus, greenOnly, hasSolar, solarKwh]);

  const cheapest = results[0]?.monthly ?? 0;
  const mostExpensive = results[results.length - 1]?.monthly ?? 0;
  const maxBar = mostExpensive > 0 ? mostExpensive : 1;
  const yearSaving = ((mostExpensive - cheapest) * 12).toFixed(0).replace(".", ",");

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

        {/* Solar panel section */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => setHasSolar(!hasSolar)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                hasSolar
                  ? "bg-yellow-50 border-yellow-400 text-yellow-700"
                  : "bg-white border-border text-text-muted hover:border-yellow-400"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Ik heb zonnepanelen
            </button>

            {hasSolar && (
              <div className="w-full sm:w-auto sm:flex-1 mt-3 sm:mt-0">
                <label className="text-sm text-text-muted block sm:inline mb-1 sm:mb-0 sm:mr-2">Opwek per jaar:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min={500}
                    max={8000}
                    step={250}
                    value={solarKwh}
                    onChange={(e) => setSolarKwh(Number(e.target.value))}
                    className="flex-1 h-2 bg-yellow-100 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                  />
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <input
                      type="number"
                      value={solarKwh}
                      onChange={(e) => setSolarKwh(Math.max(0, Math.min(8000, Number(e.target.value))))}
                      className="w-16 sm:w-20 text-right px-2 py-1 rounded-lg border border-border text-sm font-mono font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
                    />
                    <span className="text-xs sm:text-sm text-text-muted">kWh</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          {hasSolar && (
            <p className="text-xs text-text-muted mt-2">
              De berekening houdt rekening met saldering (tot 2027), terugleverkosten en terugleververgoedingen per leverancier.
              {solarKwh < 1500 ? " Tip: een gemiddeld systeem van 8 panelen levert ~2.400 kWh/jaar op." : ""}
            </p>
          )}
        </div>

        {/* Filters + Quick presets */}
        <div className="mt-6 pt-6 border-t border-border space-y-3">
          {/* Quick presets */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {[
              { label: "Appartement", kwh: 1500, gas: 500 },
              { label: "Tussenwoning", kwh: 2400, gas: 1000 },
              { label: "Vrijstaand", kwh: 4000, gas: 1800 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => { setKwhYear(preset.kwh); setGasYear(preset.gas); }}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  kwhYear === preset.kwh && gasYear === preset.gas
                    ? "bg-primary text-white border-primary"
                    : "bg-white border-border text-text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setIncludeBonus(!includeBonus)}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all ${
                includeBonus
                  ? "bg-amber-50 border-amber-300 text-amber-700"
                  : "bg-white border-border text-text-muted hover:border-amber-300"
              }`}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              Welkomstbonus
            </button>
            <button
              onClick={() => setGreenOnly(!greenOnly)}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all ${
                greenOnly
                  ? "bg-green-50 border-green-300 text-green-700"
                  : "bg-white border-border text-text-muted hover:border-green-300"
              }`}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Groene stroom
            </button>
          </div>
        </div>
      </div>

      {/* Savings banner */}
      <div className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <p className="text-green-100 text-xs sm:text-sm">Verschil goedkoopste vs. duurste</p>
          <p className="text-2xl sm:text-3xl font-extrabold">&euro; {yearSaving} per jaar</p>
        </div>
        <div className="sm:text-right">
          <p className="text-green-100 text-xs sm:text-sm">Goedkoopst voor jouw verbruik</p>
          <p className="text-xl sm:text-2xl font-bold">{results[0]?.name}</p>
          <p className="text-green-100 text-xs sm:text-sm">&euro; {results[0]?.monthly.toFixed(2).replace(".", ",")}/mnd</p>
        </div>
      </div>

      {/* Solar info banner */}
      {hasSolar && (
        <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-5 mb-8 flex gap-4">
          <div className="flex-shrink-0 mt-0.5">
            <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-800">Zonnepanelen actief in berekening</h3>
            <p className="text-sm text-yellow-700 mt-1">
              Met {solarKwh.toLocaleString()} kWh opwek is de ranking aangepast. Leveranciers met lage terugleverkosten en hoge vergoedingen scoren beter.
              Let op: saldering eindigt geleidelijk vanaf 2027. <Link href="/zonnepanelen" className="underline font-medium">Meer over zonnepanelen →</Link>
            </p>
          </div>
        </div>
      )}

      {/* Chart - horizontal bar chart */}
      <div className="rounded-xl border border-border bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border" style={{ backgroundColor: "#f8fafc" }}>
          <h2 className="font-semibold text-text-main">Geschat maandbedrag per leverancier</h2>
          <p className="text-xs text-text-muted mt-0.5">
            {kwhYear.toLocaleString()} kWh stroom + {gasYear.toLocaleString()} m³ gas per jaar
            {hasSolar ? ` − ${solarKwh.toLocaleString()} kWh zonnepanelen` : ""}
            {includeBonus ? " (incl. welkomstbonus)" : ""}
          </p>
        </div>

        {/* Mobile card view */}
        <div className="p-4 space-y-3 md:hidden">
          {results.map((provider, idx) => {
            const barWidth = maxBar > 0 ? Math.max((provider.monthly / maxBar) * 100, 10) : 10;
            const isCheapest = idx === 0;
            const saving = ((provider.monthly - cheapest) * 12).toFixed(0).replace(".", ",");

            return (
              <div
                key={provider.name}
                className={`rounded-lg border p-3 ${isCheapest ? "border-green-300 bg-green-50/50" : "border-border"}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                      isCheapest ? "bg-green-500 text-white" : "text-text-muted"
                    }`}>
                      {idx + 1}
                    </span>
                    <span className={`text-sm font-semibold ${isCheapest ? "text-green-600" : "text-text-main"}`}>
                      {provider.name}
                    </span>
                    {provider.green && (
                      <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div className="text-right">
                    <span className={`text-base font-bold ${isCheapest ? "text-green-600" : "text-text-main"}`}>
                      &euro; {provider.monthly.toFixed(2).replace(".", ",")}
                    </span>
                    <span className="text-xs text-text-muted">/mnd</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-2.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${barWidth}%`,
                      background: isCheapest
                        ? "linear-gradient(to right, #4ade80, #22c55e)"
                        : "linear-gradient(to right, #60a5fa, #3b82f6)",
                    }}
                  />
                </div>
                <div className="flex justify-between items-center mt-1.5">
                  {hasSolar && provider.feedInCost > 0 ? (
                    <span className="text-[10px] text-yellow-600">teruglevering: &euro;{provider.feedInCost.toFixed(3).replace(".", ",")}/kWh</span>
                  ) : <span />}
                  {isCheapest ? (
                    <span className="text-[10px] font-bold text-green-600">Goedkoopst</span>
                  ) : (
                    <span className="text-[10px] text-text-muted">+&euro; {saving}/jr</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop bar chart */}
        <div className="p-6 space-y-3 hidden md:block">
          {results.map((provider, idx) => {
            const barWidth = maxBar > 0 ? Math.max((provider.monthly / maxBar) * 100, 5) : 5;
            const isCheapest = idx === 0;
            const saving = ((provider.monthly - cheapest) * 12).toFixed(0).replace(".", ",");

            return (
              <div key={provider.name} className="group">
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
                    {hasSolar && provider.feedInCost > 0 && (
                      <span className="text-[10px] text-yellow-600">teruglevering: &euro;{provider.feedInCost.toFixed(3).replace(".", ",")}/kWh</span>
                    )}
                  </div>

                  {/* Bar */}
                  <div className="flex-1 relative">
                    <div className="w-full bg-gray-50 rounded-full h-8 overflow-hidden">
                      <div
                        className="h-8 rounded-full transition-all duration-500 ease-out flex items-center px-3"
                        style={{
                          width: `${barWidth}%`,
                          background: isCheapest
                            ? "linear-gradient(to right, #4ade80, #22c55e)"
                            : "linear-gradient(to right, #60a5fa, #3b82f6)",
                        }}
                      >
                        <span className="text-white text-xs font-bold whitespace-nowrap">
                          &euro; {provider.monthly.toFixed(2).replace(".", ",")}
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
                        +&euro; {saving}/jr
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
          + energiebelasting + vaste leveringskosten − vermindering energiebelasting (&euro;52,41/mnd)
          {includeBonus && " − welkomstbonus verdeeld over 12 maanden"}
          {hasSolar && " − besparing door zonnepanelen (saldering) + terugleverkosten − terugleververgoeding"}.
          Alle bedragen zijn inclusief 21% BTW. Netbeheerkosten (gemiddeld ±&euro;62/mnd) zijn voor alle leveranciers gelijk en daarom niet meegenomen.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 p-6 sm:p-8 text-white text-center">
        <h2 className="text-xl sm:text-2xl font-bold">Klaar om over te stappen?</h2>
        <p className="mt-2 text-violet-100 text-sm sm:text-base">Met de nieuwe Energiewet switch je in 5 werkdagen.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
          <Link href="/#vergelijk" className="inline-flex items-center justify-center px-5 py-3 bg-white text-violet-600 rounded-lg font-semibold hover:bg-violet-50 transition-colors text-sm sm:text-base">
            Vergelijk contracten
          </Link>
          <Link href="/energiewet" className="inline-flex items-center justify-center px-5 py-3 bg-white/15 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/25 transition-colors text-sm sm:text-base">
            Je rechten in 2026
          </Link>
        </div>
      </div>
    </div>
  );
}
