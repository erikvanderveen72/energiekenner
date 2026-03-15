import { supabase } from "@/lib/supabase";
import { fallbackGridOperators } from "@/lib/fallback-data";
import type { GridOperator } from "@/lib/database.types";
import { PageHero } from "@/components/PageHero";

export const revalidate = 60;

async function getGridOperators(): Promise<GridOperator[]> {
  try {
    const { data, error } = await supabase
      .from("grid_operators")
      .select("*")
      .order("total_yearly", { ascending: true });
    if (error || !data) return fallbackGridOperators;
    return data;
  } catch {
    return fallbackGridOperators;
  }
}

export const metadata = {
  title: "Netbeheerkosten 2026 | Energievergelijker",
  description: "Vergelijk netbeheerkosten van Liander, Enexis, Stedin en andere netbeheerders in 2026.",
};

export default async function NetbeheerPage() {
  const operators = await getGridOperators();
  const avg = operators.reduce((sum, o) => sum + o.total_yearly, 0) / operators.length;

  return (
    <>
      <PageHero badge="Tarieven 2026" title="Netbeheerkosten 2026" highlight="Transporttarieven vergeleken" description={`De kosten voor het transport van energie zijn in 2026 fors gestegen door miljardeninvesteringen in netverzwaring. Gemiddeld betaal je €${avg.toFixed(0).replace(".", ",")} per jaar.`} accentColor="cyan" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {operators.map((op, idx) => (
            <div key={op.id} className={`rounded-xl border p-4 ${idx === 0 ? "border-green-300 bg-green-50/50" : "border-border bg-white"}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-xs font-bold text-green-600 border border-green-200">
                  {op.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-text-main">{op.name}</span>
                  {idx === 0 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">
                      Goedkoopst
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-2xl font-bold text-text-main">€ {op.total_yearly.toFixed(0).replace(".", ",")}</span>
                <span className="text-sm text-text-muted">/jaar</span>
                <span className="text-sm text-text-muted ml-2">(€ {(op.total_yearly / 12).toFixed(0).replace(".", ",")}/mnd)</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-text-muted">Elektriciteit/jaar</p>
                  <p className="text-sm font-mono font-medium">€ {op.electricity_cost_yearly.toFixed(2).replace(".", ",")}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">Gas/jaar</p>
                  <p className="text-sm font-mono font-medium">€ {op.gas_cost_yearly.toFixed(2).replace(".", ",")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Netbeheerder</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Elektriciteit/jaar</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Gas/jaar</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Totaal/jaar</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Per maand</th>
              </tr>
            </thead>
            <tbody>
              {operators.map((op, idx) => (
                <tr key={op.id} className={`border-t border-border hover:bg-green-50 transition-colors ${idx === 0 ? "bg-green-50/50" : ""} ${idx % 2 === 1 && idx !== 0 ? "bg-stone-50/60" : ""}`}>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-xs font-bold text-green-600 border border-green-200">
                        {op.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <span className="font-semibold text-text-main">{op.name}</span>
                        {idx === 0 && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">
                            Goedkoopst
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="text-right px-4 py-4 font-mono">€ {op.electricity_cost_yearly.toFixed(2).replace(".", ",")}</td>
                  <td className="text-right px-4 py-4 font-mono">€ {op.gas_cost_yearly.toFixed(2).replace(".", ",")}</td>
                  <td className="text-right px-4 py-4 font-mono font-semibold text-text-main">€ {op.total_yearly.toFixed(2).replace(".", ",")}</td>
                  <td className="text-right px-4 py-4 font-mono text-text-muted">€ {(op.total_yearly / 12).toFixed(2).replace(".", ",")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-text-muted mt-4">
          * Op basis van een standaard huishoudelijke aansluiting (3x25A stroom, G4/G6 gasmeter). Tarieven vastgesteld door de ACM.
        </p>
      </section>

      {/* Eenmalige kosten */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-6">Eenmalige kosten (voorbeeld Enexis)</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Meterijking", price: "€ 100,00", desc: "Bij vermoeden defect" },
            { title: "Slimme meter plaatsen", price: "€ 81,89", desc: "Elektra + gas" },
            { title: "Hoofdzekering vervangen", price: "€ 445,46", desc: "Door automaat" },
            { title: "Voorrijkosten", price: "€ 81,89", desc: "Bij niet thuis" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border p-5">
              <p className="text-sm text-text-muted">{item.title}</p>
              <p className="text-xl font-bold text-text-main mt-1">{item.price}</p>
              <p className="text-xs text-text-muted mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mt-3">* Prijzen inclusief 21% BTW, bron: Enexis 2026</p>
      </section>

      {/* Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl bg-green-50 border border-green-200 p-8">
          <h2 className="text-xl font-bold text-text-main mb-3">Waarom stijgen de netbeheerkosten?</h2>
          <p className="text-sm text-green-900">
            Het elektriciteitsnet heeft op veel plaatsen in Nederland zijn maximale capaciteit bereikt. Door de groei van zonnepanelen, warmtepompen en elektrische auto&apos;s zijn miljardeninvesteringen nodig om het net te verzwaren. Deze kosten worden via de netbeheertarieven doorberekend aan consumenten.
          </p>
        </div>
      </section>
    </>
  );
}
