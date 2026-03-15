"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import type { EnergyProvider } from "@/lib/database.types";

type SortField = "estimated_monthly" | "kwh_rate" | "gas_rate" | "welcome_bonus";
type SortDir = "asc" | "desc";

interface Props {
  providers: EnergyProvider[];
}

// URLs per leverancier
const providerUrls: Record<string, string> = {
  "Energiedirect": "https://www.energiedirect.nl",
  "Essent": "https://www.essent.nl",
  "Vattenfall": "https://www.vattenfall.nl",
  "Eneco": "https://www.eneco.nl",
  "Greenchoice": "https://www.greenchoice.nl",
  "DELTA Energie": "https://www.delta.nl",
  "OXXIO": "https://www.oxxio.nl",
  "Budget Energie": "https://www.budgetenergie.nl",
  "UnitedConsumers": "https://www.unitedconsumers.com/energie",
  "Mega": "https://www.mega.nl",
  "Vandebron": "https://www.vandebron.nl",
  "Engie": "https://www.engie.nl",
  "Coolblue Energie": "https://www.coolblue.nl/energie",
  "Pure Energie": "https://www.pureenergie.nl",
};

// Vergelijkingssites
const comparisonSites = [
  { name: "Gaslicht.com", url: "https://www.gaslicht.com/energievergelijken" },
  { name: "EasySwitch", url: "https://www.easyswitch.nl/energie-vergelijken/" },
  { name: "Overstappen.nl", url: "https://www.overstappen.nl/energie/vergelijken/" },
];

export function ComparisonTable({ providers }: Props) {
  const [greenOnly, setGreenOnly] = useState(false);
  const [sortField, setSortField] = useState<SortField>("estimated_monthly");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sluit dropdown bij klik buiten
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const sorted = useMemo(() => {
    let filtered = providers;
    if (greenOnly) filtered = filtered.filter((p) => p.green_energy);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(q));
    }
    return [...filtered].sort((a, b) => {
      const aVal = a[sortField] ?? 0;
      const bVal = b[sortField] ?? 0;
      return sortDir === "asc"
        ? (aVal as number) - (bVal as number)
        : (bVal as number) - (aVal as number);
    });
  }, [providers, greenOnly, sortField, sortDir, searchQuery]);

  const cheapest = sorted.length > 0 ? sorted[0].estimated_monthly ?? 0 : 0;

  function toggleSort(field: SortField) {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  }

  function SortIcon({ field }: { field: SortField }) {
    if (sortField !== field) return <span className="text-gray-300 ml-1">↕</span>;
    return <span className="text-primary ml-1">{sortDir === "asc" ? "↑" : "↓"}</span>;
  }

  function formatEuro(val: number | null) {
    if (val === null || val === undefined) return "—";
    return `€ ${val.toFixed(val < 10 ? 4 : 2)}`;
  }

  return (
    <div id="vergelijk">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Zoek leverancier..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <button
          onClick={() => setGreenOnly(!greenOnly)}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all ${
            greenOnly
              ? "bg-accent-light border-accent text-accent"
              : "bg-white border-border text-text-muted hover:border-accent hover:text-accent"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          100% Groene stroom
        </button>
      </div>

      {/* Results count */}
      <p className="text-sm text-text-muted mb-4">
        {sorted.length} leverancier{sorted.length !== 1 ? "s" : ""} gevonden
        {greenOnly && " met groene stroom"}
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-alt">
              <th className="text-left px-4 py-3 font-semibold text-text-muted">#</th>
              <th className="text-left px-4 py-3 font-semibold text-text-muted">Leverancier</th>
              <th
                className="text-right px-4 py-3 font-semibold text-text-muted cursor-pointer select-none hover:text-text-main"
                onClick={() => toggleSort("kwh_rate")}
              >
                Stroom/kWh <SortIcon field="kwh_rate" />
              </th>
              <th
                className="text-right px-4 py-3 font-semibold text-text-muted cursor-pointer select-none hover:text-text-main"
                onClick={() => toggleSort("gas_rate")}
              >
                Gas/m³ <SortIcon field="gas_rate" />
              </th>
              <th
                className="text-right px-4 py-3 font-semibold text-text-muted cursor-pointer select-none hover:text-text-main"
                onClick={() => toggleSort("welcome_bonus")}
              >
                Bonus <SortIcon field="welcome_bonus" />
              </th>
              <th
                className="text-right px-4 py-3 font-semibold text-text-muted cursor-pointer select-none hover:text-text-main"
                onClick={() => toggleSort("estimated_monthly")}
              >
                Geschat/mnd <SortIcon field="estimated_monthly" />
              </th>
              <th className="text-center px-4 py-3 font-semibold text-text-muted">Groen</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((provider, idx) => {
              const isCheapest = provider.estimated_monthly === cheapest && idx === 0;
              return (
                <tr
                  key={provider.id}
                  className={`border-t border-border hover:bg-primary-light/30 transition-colors ${
                    isCheapest ? "bg-accent-light/30" : ""
                  }`}
                >
                  <td className="px-4 py-4">
                    {isCheapest ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white text-xs font-bold">
                        1
                      </span>
                    ) : (
                      <span className="text-text-muted">{idx + 1}</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center text-xs font-bold text-primary border border-border">
                        {provider.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <span className="font-semibold text-text-main">{provider.name}</span>
                        {isCheapest && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent text-white">
                            Goedkoopst
                          </span>
                        )}
                        <div className="text-xs text-text-muted mt-0.5">1 jaar vast</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right px-4 py-4 font-mono text-sm">
                    {formatEuro(provider.kwh_rate)}
                  </td>
                  <td className="text-right px-4 py-4 font-mono text-sm">
                    {formatEuro(provider.gas_rate)}
                  </td>
                  <td className="text-right px-4 py-4">
                    {provider.welcome_bonus > 0 ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-warning-light text-warning">
                        € {provider.welcome_bonus}
                      </span>
                    ) : (
                      <span className="text-text-muted">—</span>
                    )}
                  </td>
                  <td className="text-right px-4 py-4">
                    <span className="font-semibold text-lg text-text-main">
                      {formatEuro(provider.estimated_monthly)}
                    </span>
                    <span className="text-text-muted text-xs">/mnd</span>
                  </td>
                  <td className="text-center px-4 py-4">
                    {provider.green_energy ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent-light">
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-text-muted">—</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="relative" ref={openDropdown === provider.id ? dropdownRef : undefined}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === provider.id ? null : provider.id)}
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-colors shadow-sm"
                      >
                        Bekijk
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === provider.id && (
                        <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white border border-border shadow-lg z-50">
                          <div className="py-1">
                            {providerUrls[provider.name] && (
                              <a
                                href={providerUrls[provider.name]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-main hover:bg-primary-light/30 transition-colors"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Site {provider.name}
                              </a>
                            )}
                            <div className="border-t border-border my-1" />
                            <p className="px-4 py-1.5 text-xs text-text-muted font-medium">Vergelijk op:</p>
                            {comparisonSites.map((site) => (
                              <a
                                key={site.name}
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-primary-light/30 transition-colors"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                {site.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {sorted.length === 0 && (
        <div className="text-center py-12 text-text-muted">
          <p className="text-lg">Geen leveranciers gevonden</p>
          <p className="text-sm mt-1">Probeer andere zoekfilters</p>
        </div>
      )}
    </div>
  );
}
