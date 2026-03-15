"use client";

import type { TtfPrice } from "@/lib/database.types";

interface Props {
  prices: TtfPrice[];
}

export function TtfChart({ prices }: Props) {
  const max = Math.max(...prices.map((p) => p.price_eur_mwh));

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        TTF Gasprijs Maart 2026
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Dagelijkse notering in €/MWh - Extreme volatiliteit door geopolitieke onrust
      </p>

      <div className="overflow-x-auto -mx-2 px-2">
        <div className="flex items-end gap-1 sm:gap-2 md:gap-3" style={{ height: "220px", minWidth: prices.length > 15 ? `${prices.length * 28}px` : "auto" }}>
          {prices.map((price) => {
            const heightPct = Math.max((price.price_eur_mwh / max) * 100, 8);
            const isMax = price.price_eur_mwh === max;
            return (
              <div key={price.id} className="flex-1 flex flex-col items-center justify-end h-full min-w-[20px]">
                <span
                  className={`text-[10px] sm:text-xs font-mono mb-1 ${
                    isMax ? "text-red-600 font-bold sm:text-sm" : "text-gray-600"
                  }`}
                >
                  €{price.price_eur_mwh}
                </span>
                <div
                  className="w-full rounded-t-lg transition-all duration-500"
                  style={{
                    height: `${heightPct}%`,
                    backgroundColor: isMax ? "#EF4444" : "#3B82F6",
                    minHeight: "16px",
                  }}
                  title={price.event_description ?? ""}
                />
                <span className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2 font-medium">
                  {new Date(price.date).getDate()}/3
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#3B82F6" }} />
          <span>Normaal</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "#EF4444" }} />
          <span>Piek (€{max}/MWh)</span>
        </div>
      </div>
    </div>
  );
}
