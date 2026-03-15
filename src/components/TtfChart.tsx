"use client";

import type { TtfPrice } from "@/lib/database.types";

interface Props {
  prices: TtfPrice[];
}

export function TtfChart({ prices }: Props) {
  const max = Math.max(...prices.map((p) => p.price_eur_mwh));
  const min = Math.min(...prices.map((p) => p.price_eur_mwh));

  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-text-main mb-1">
        TTF Gasprijs Maart 2026
      </h3>
      <p className="text-sm text-text-muted mb-6">
        Dagelijkse notering in €/MWh — Extreme volatiliteit door geopolitieke onrust
      </p>

      <div className="flex items-end gap-2 h-48">
        {prices.map((price) => {
          const height = ((price.price_eur_mwh - min + 5) / (max - min + 10)) * 100;
          const isMax = price.price_eur_mwh === max;
          return (
            <div key={price.id} className="flex-1 flex flex-col items-center gap-1">
              <span className={`text-xs font-mono ${isMax ? "text-red-500 font-bold" : "text-text-muted"}`}>
                €{price.price_eur_mwh}
              </span>
              <div
                className={`w-full rounded-t-md transition-all ${
                  isMax ? "bg-red-400" : "bg-primary"
                }`}
                style={{ height: `${height}%` }}
                title={price.event_description ?? ""}
              />
              <span className="text-xs text-text-muted mt-1">
                {new Date(price.date).getDate()}/3
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-primary" />
          <span>Normaal</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-red-400" />
          <span>Piek (€{max}/MWh)</span>
        </div>
      </div>
    </div>
  );
}
