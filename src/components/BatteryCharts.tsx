"use client";

import { useState } from "react";

/* ── Terugverdientijd Bar Chart ── */
const paybackData = [
  { label: "3 kWh", cost: 3500, yieldPerYear: 225, years: 15.6, color: "bg-amber-300" },
  { label: "5 kWh", cost: 4500, yieldPerYear: 400, years: 11.3, color: "bg-amber-400" },
  { label: "10 kWh", cost: 6500, yieldPerYear: 750, years: 8.7, color: "bg-amber-500" },
  { label: "15 kWh", cost: 10000, yieldPerYear: 1100, years: 9.1, color: "bg-orange-500" },
  { label: "30 kWh", cost: 15000, yieldPerYear: 1500, years: 10.0, color: "bg-orange-600" },
];

export function PaybackChart() {
  const maxYears = 18;

  return (
    <div className="space-y-4">
      {paybackData.map((item) => {
        const widthPercent = Math.min((item.years / maxYears) * 100, 100);
        const isGood = item.years <= 10;
        return (
          <div key={item.label} className="flex items-center gap-3">
            <span className="text-sm font-semibold text-text-main w-14 shrink-0">{item.label}</span>
            <div className="flex-1 bg-stone-100 rounded-full h-8 relative overflow-hidden">
              <div
                className={`h-full rounded-full ${item.color} flex items-center transition-all duration-700`}
                style={{ width: `${widthPercent}%` }}
              >
                <span className="text-xs font-bold text-white pl-3 whitespace-nowrap drop-shadow-sm">
                  {item.years.toFixed(1)} jaar
                </span>
              </div>
            </div>
            <span className={`text-xs font-medium w-20 text-right shrink-0 ${isGood ? "text-green-600" : "text-text-muted"}`}>
              {isGood ? "Rendabel" : "Lang"}
            </span>
          </div>
        );
      })}
      <div className="flex items-center justify-between text-xs text-text-muted mt-2 px-[4.25rem]">
        <span>0 jaar</span>
        <span>5 jaar</span>
        <span>10 jaar</span>
        <span>15 jaar</span>
      </div>
    </div>
  );
}

/* ── Verdienmodel Donut / Visual ── */
const verdienModellen = [
  { label: "Eigenverbruik", value: 55, amount: "€ 300–500/jr", color: "text-amber-500", bg: "bg-amber-500", desc: "Zonnestroom opslaan en 's avonds gebruiken" },
  { label: "Arbitrage", value: 30, amount: "€ 150–400/jr", color: "text-orange-500", bg: "bg-orange-500", desc: "Goedkoop laden, duur terugleveren (dynamisch contract)" },
  { label: "Flexservices", value: 15, amount: "€ 100–300/jr", color: "text-rose-500", bg: "bg-rose-500", desc: "Capaciteit aanbieden aan netbeheerders" },
];

export function RevenueBreakdown() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {verdienModellen.map((model, idx) => (
        <button
          key={model.label}
          className={`w-full text-left rounded-xl border p-4 transition-all ${
            active === idx ? "border-amber-400 bg-amber-50/50 shadow-sm" : "border-border hover:border-amber-200"
          }`}
          onClick={() => setActive(active === idx ? null : idx)}
        >
          <div className="flex items-center gap-4">
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${model.bg}`} />
                  <span className="font-semibold text-text-main text-sm">{model.label}</span>
                </div>
                <span className={`text-sm font-bold ${model.color}`}>{model.amount}</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2.5">
                <div
                  className={`h-full rounded-full ${model.bg} transition-all duration-500`}
                  style={{ width: `${model.value}%` }}
                />
              </div>
              {active === idx && (
                <p className="text-xs text-text-muted mt-2 animate-in">{model.desc}</p>
              )}
            </div>
          </div>
        </button>
      ))}
      <p className="text-xs text-text-muted text-center">
        Gebaseerd op 10 kWh LFP-batterij met dynamisch contract. Klik voor uitleg.
      </p>
    </div>
  );
}

/* ── LFP vs NMC Comparison ── */
const specs = [
  { label: "Levensduur", lfp: "15–20 jaar", nmc: "8–12 jaar", lfpWins: true },
  { label: "Cycli", lfp: "6.000–10.000", nmc: "2.000–4.000", lfpWins: true },
  { label: "Veiligheid", lfp: "Zeer hoog (geen thermal runaway)", nmc: "Goed (met BMS)", lfpWins: true },
  { label: "Energiedichtheid", lfp: "~160 Wh/kg", nmc: "~250 Wh/kg", lfpWins: false },
  { label: "Kosten/kWh", lfp: "€ 300–500", nmc: "€ 400–700", lfpWins: true },
  { label: "Temperatuurrange", lfp: "-20°C tot 60°C", nmc: "-10°C tot 45°C", lfpWins: true },
  { label: "Gewicht (10 kWh)", lfp: "~65 kg", nmc: "~42 kg", lfpWins: false },
  { label: "Efficiency", lfp: "85–90%", nmc: "88–93%", lfpWins: false },
];

export function LfpVsNmcTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface-alt">
            <th className="text-left px-4 py-3 font-semibold text-text-muted">Eigenschap</th>
            <th className="text-left px-4 py-3 font-semibold text-amber-700">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                LFP
              </span>
            </th>
            <th className="text-left px-4 py-3 font-semibold text-blue-700">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                NMC
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, idx) => (
            <tr key={spec.label} className={`border-t border-border ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
              <td className="px-4 py-3 font-medium text-text-main">{spec.label}</td>
              <td className={`px-4 py-3 ${spec.lfpWins ? "text-green-700 font-semibold" : "text-text-muted"}`}>
                <span className="flex items-center gap-1.5">
                  {spec.lfpWins && (
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {spec.lfp}
                </span>
              </td>
              <td className={`px-4 py-3 ${!spec.lfpWins ? "text-green-700 font-semibold" : "text-text-muted"}`}>
                <span className="flex items-center gap-1.5">
                  {!spec.lfpWins && (
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {spec.nmc}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Prijsontwikkeling Chart ── */
const priceHistory = [
  { year: "2020", price: 1200 },
  { year: "2021", price: 1050 },
  { year: "2022", price: 900 },
  { year: "2023", price: 700 },
  { year: "2024", price: 550 },
  { year: "2025", price: 450 },
  { year: "2026", price: 380 },
];

export function PriceTrendChart() {
  const maxPrice = 1400;
  const minPrice = 0;

  return (
    <div className="flex items-end gap-2 sm:gap-4 h-48 px-2">
      {priceHistory.map((item, idx) => {
        const heightPercent = ((item.price - minPrice) / (maxPrice - minPrice)) * 100;
        const isLatest = idx === priceHistory.length - 1;
        return (
          <div key={item.year} className="flex-1 flex flex-col items-center gap-1">
            <span className={`text-xs font-bold ${isLatest ? "text-green-600" : "text-text-muted"}`}>
              €{item.price}
            </span>
            <div className="w-full bg-stone-100 rounded-t-lg relative" style={{ height: "140px" }}>
              <div
                className={`absolute bottom-0 left-0 right-0 rounded-t-lg transition-all duration-700 ${
                  isLatest ? "bg-green-500" : "bg-amber-400"
                }`}
                style={{ height: `${heightPercent}%` }}
              />
            </div>
            <span className={`text-xs ${isLatest ? "font-bold text-text-main" : "text-text-muted"}`}>
              {item.year}
            </span>
          </div>
        );
      })}
    </div>
  );
}
