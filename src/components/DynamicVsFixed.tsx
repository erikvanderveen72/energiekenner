"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// Gemiddelde EPEX day-ahead prijzen afgelopen 12 maanden (€/kWh, excl. belasting)
// Bron: marktdata ENTSO-E Transparency Platform, gemiddeld 2025-03 t/m 2026-02
const AVG_EPEX_PRICES_PER_MONTH = [
  0.076, // mrt 2025
  0.068, // apr
  0.058, // mei
  0.052, // jun
  0.049, // jul
  0.055, // aug
  0.072, // sep
  0.088, // okt
  0.105, // nov
  0.118, // dec
  0.112, // jan 2026
  0.095, // feb 2026
];

// Gemiddelde TTF day-ahead gasprijs (€/m³) afgelopen 12 maanden
const AVG_TTF_GAS_MONTHLY = [
  0.95, 0.88, 0.82, 0.78, 0.76, 0.80, 0.92, 1.05, 1.18, 1.32, 1.25, 1.10,
];

// Typische dynamische opslag (inkoop + marge leverancier)
const DYNAMIC_ELECTRICITY_SURCHARGE = 0.025; // €/kWh opslag
const DYNAMIC_GAS_SURCHARGE = 0.08; // €/m³ opslag
const DYNAMIC_FIXED_COST_MONTHLY = 6.50; // Vastrecht per maand

// Energiebelasting 2026
const EB_ELECTRICITY = 0.1108;
const EB_GAS = 0.7268;
const TAX_REDUCTION_MONTHLY = 628.96 / 12;
const BTW = 1.21;

interface Props {
  avgFixedKwhRate: number; // Gemiddeld vast tarief stroom (excl. belasting effectief)
  avgFixedGasRate: number; // Gemiddeld vast tarief gas
  cheapestFixedName: string;
  cheapestFixedMonthly: number;
}

export function DynamicVsFixed({ avgFixedKwhRate, avgFixedGasRate, cheapestFixedName, cheapestFixedMonthly }: Props) {
  const [kwhUsage, setKwhUsage] = useState(2400);
  const [gasUsage, setGasUsage] = useState(1000);
  const [flexPercent, setFlexPercent] = useState(30); // Hoeveel % verbruik verschoven kan worden naar goedkope uren

  const result = useMemo(() => {
    const monthlyKwh = kwhUsage / 12;
    const monthlyGas = gasUsage / 12;

    // --- Vast contract berekening ---
    const fixedElecPerMonth = monthlyKwh * avgFixedKwhRate;
    const fixedGasPerMonth = monthlyGas * avgFixedGasRate;
    const fixedTotal = (fixedElecPerMonth + fixedGasPerMonth) * 12;

    // --- Dynamisch contract berekening ---
    // Bij dynamisch: marktprijs + opslag + energiebelasting + btw
    let dynamicElecTotal = 0;
    let dynamicGasTotal = 0;

    for (let m = 0; m < 12; m++) {
      // Stroom: EPEX prijs + opslag
      const baseElecPrice = AVG_EPEX_PRICES_PER_MONTH[m] + DYNAMIC_ELECTRICITY_SURCHARGE;
      // Flexibel verbruik: deel verschuiven naar goedkopere uren (gem. 15-25% besparing)
      const flexDiscount = 1 - (flexPercent / 100) * 0.20; // Max 20% besparing bij 100% flex
      const effectiveElecPrice = (baseElecPrice + EB_ELECTRICITY) * BTW * flexDiscount;
      dynamicElecTotal += monthlyKwh * effectiveElecPrice;

      // Gas: TTF prijs + opslag
      const baseGasPrice = AVG_TTF_GAS_MONTHLY[m] + DYNAMIC_GAS_SURCHARGE;
      const effectiveGasPrice = (baseGasPrice + EB_GAS) * BTW;
      dynamicGasTotal += monthlyGas * effectiveGasPrice;
    }

    const dynamicFixed = DYNAMIC_FIXED_COST_MONTHLY * 12;
    const dynamicTotal = dynamicElecTotal + dynamicGasTotal + dynamicFixed - (TAX_REDUCTION_MONTHLY * 12);
    const fixedTotalAfterReduction = fixedTotal - (TAX_REDUCTION_MONTHLY * 12);

    const difference = fixedTotalAfterReduction - dynamicTotal;
    const dynamicCheaper = difference > 0;

    return {
      fixedYearly: fixedTotalAfterReduction,
      dynamicYearly: dynamicTotal,
      fixedMonthly: fixedTotalAfterReduction / 12,
      dynamicMonthly: dynamicTotal / 12,
      difference: Math.abs(difference),
      dynamicCheaper,
      flexSaving: (flexPercent / 100) * 0.20 * dynamicElecTotal, // Besparing door flexibel verbruik
    };
  }, [kwhUsage, gasUsage, flexPercent, avgFixedKwhRate, avgFixedGasRate]);

  return (
    <div className="rounded-xl border border-border bg-white p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-text-main">Dynamisch of vast: wat is voordeliger?</h3>
          <p className="text-sm text-text-muted">Simulatie op basis van marktprijzen afgelopen 12 maanden</p>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs text-text-muted mb-1">Stroomverbruik</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={kwhUsage}
              onChange={(e) => setKwhUsage(Math.max(0, Number(e.target.value)))}
              className="w-full px-3 py-2 rounded-lg border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all"
              step={100}
            />
            <span className="text-xs text-text-muted whitespace-nowrap">kWh/jr</span>
          </div>
        </div>
        <div>
          <label className="block text-xs text-text-muted mb-1">Gasverbruik</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={gasUsage}
              onChange={(e) => setGasUsage(Math.max(0, Number(e.target.value)))}
              className="w-full px-3 py-2 rounded-lg border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all"
              step={100}
            />
            <span className="text-xs text-text-muted whitespace-nowrap">m³/jr</span>
          </div>
        </div>
        <div>
          <label className="block text-xs text-text-muted mb-1">
            Flexibiliteit: {flexPercent}%
          </label>
          <input
            type="range"
            min={0}
            max={80}
            step={10}
            value={flexPercent}
            onChange={(e) => setFlexPercent(Number(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-purple-500 mt-2"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>Niet flexibel</span>
            <span>Zeer flexibel</span>
          </div>
        </div>
      </div>

      {/* Resultaat */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Vast */}
        <div className={`rounded-xl p-5 border ${!result.dynamicCheaper ? "bg-green-50 border-green-200" : "bg-stone-50 border-border"}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text-muted">Vast contract</span>
            {!result.dynamicCheaper && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">Voordeliger</span>
            )}
          </div>
          <p className="text-2xl font-bold text-text-main">€{result.fixedMonthly.toFixed(0)}<span className="text-sm font-normal text-text-muted">/mnd</span></p>
          <p className="text-xs text-text-muted mt-1">€{result.fixedYearly.toFixed(0)} per jaar</p>
        </div>

        {/* Dynamisch */}
        <div className={`rounded-xl p-5 border ${result.dynamicCheaper ? "bg-purple-50 border-purple-200" : "bg-stone-50 border-border"}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text-muted">Dynamisch contract</span>
            {result.dynamicCheaper && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Voordeliger</span>
            )}
          </div>
          <p className="text-2xl font-bold text-text-main">€{result.dynamicMonthly.toFixed(0)}<span className="text-sm font-normal text-text-muted">/mnd</span></p>
          <p className="text-xs text-text-muted mt-1">€{result.dynamicYearly.toFixed(0)} per jaar</p>
        </div>

        {/* Verschil */}
        <div className="rounded-xl p-5 bg-stone-50 border border-border flex flex-col justify-center">
          <p className="text-sm text-text-muted mb-1">Verschil per jaar</p>
          <p className={`text-2xl font-bold ${result.dynamicCheaper ? "text-purple-600" : "text-green-600"}`}>
            €{result.difference.toFixed(0)}
          </p>
          <p className="text-xs text-text-muted mt-1">
            {result.dynamicCheaper ? "Dynamisch is voordeliger" : "Vast is voordeliger"}
          </p>
          {flexPercent > 0 && (
            <p className="text-xs text-purple-600 mt-2">
              Flexibel laden/verbruiken bespaart ~€{result.flexSaving.toFixed(0)}/jr
            </p>
          )}
        </div>
      </div>

      {/* Toelichting */}
      <div className="mt-4 text-xs text-text-muted bg-stone-50 rounded-lg p-4 border border-border leading-relaxed">
        <p>
          <strong className="text-text-main">Hoe werkt deze berekening?</strong> We simuleren wat je afgelopen 12 maanden had betaald
          met een dynamisch contract (gemiddelde EPEX-uurprijzen + €0,025/kWh opslag) versus het huidige gemiddelde vaste tarief.
          De flexibiliteitsschuif simuleert hoeveel verbruik je kunt verschuiven naar goedkope uren — bijvoorbeeld met een
          <Link href="/thuisbatterij" className="text-primary underline mx-1">thuisbatterij</Link>,
          <Link href="/laadpalen" className="text-primary underline mx-1">slim laden</Link> of
          <Link href="/warmtepompen" className="text-primary underline mx-1">warmtepomp</Link>.
        </p>
        <p className="mt-2">
          <strong className="text-text-main">Let op:</strong> historische prestaties bieden geen garantie voor de toekomst.
          Dynamische prijzen kunnen sterk schommelen — in maart 2026 zagen we pieken tot €0,68/kWh.
          <Link href="/dynamisch" className="text-primary underline ml-1">Meer over dynamische tarieven →</Link>
        </p>
      </div>
    </div>
  );
}
