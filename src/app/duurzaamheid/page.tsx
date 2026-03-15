import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Groene Stroom 2026: Duurzaamheidsscores & Greenwashing | Energiekenner",
  description: "Welke leverancier levert echt groene stroom? Vergelijk duurzaamheidsscores, GvO-herkomst en EU-greenwashing regels in 2026.",
  keywords: ["groene stroom", "duurzame energie", "greenwashing", "sjoemelstroom", "garanties van oorsprong", "GvO", "stroometiket"],
  openGraph: {
    title: "Groene Stroom 2026: Wie is echt duurzaam?",
    description: "Duurzaamheidsscores, GvO-transparantie en EU-greenwashing regels vergeleken.",
  },
};

const providers = [
  { name: "Vrijopnaam", score: "10.0", source: "100% NL Zon", strategy: "Eigen zonneparken", color: "bg-green-600" },
  { name: "Greenchoice", score: "9.8", source: "NL Wind & Zon", strategy: "Bosprojecten (CCQI gecertificeerd)", color: "bg-green-500" },
  { name: "Vandebron", score: "9.8", source: "100% NL Wind/Zon", strategy: "Lokale bronnen, geen sjoemelstroom", color: "bg-green-500" },
  { name: "Eneco", score: "8.5", source: "Grote focus op NL Wind", strategy: "Investering in waterstof en warmte", color: "bg-green-400" },
  { name: "Zonneplan", score: "6.5", source: "Marktgemiddelde", strategy: "Eerlijk grijs/groen stroometiket", color: "bg-yellow-500" },
];

export default function DuurzaamheidPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium mb-4">
            EU Anti-Greenwashing Richtlijn 2026
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold">Groene Stroom & Duurzaamheid</h1>
          <p className="mt-4 text-lg text-green-100 max-w-2xl">
            Niet alle groene stroom is gelijk. In 2026 maakt de EU een einde aan greenwashing en worden duurzaamheidsclaims streng gehandhaafd.
          </p>
        </div>
      </section>

      {/* Scores */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-2">Duurzaamheidsscores 2026</h2>
        <p className="text-text-muted mb-6">Op basis van WISE/Consumentenbond onderzoek. Score van 1-10.</p>
        <div className="space-y-3">
          {providers.map((p) => (
            <div key={p.name} className="rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-xs font-bold text-green-600 border border-green-200">
                    {p.name.substring(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-semibold text-text-main">{p.name}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${p.color}`}>{p.score}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 mb-3">
                <div className={`h-2.5 rounded-full ${p.color}`} style={{ width: `${parseFloat(p.score) * 10}%` }} />
              </div>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <div><span className="text-text-muted">Herkomst:</span> <span className="font-medium text-text-main">{p.source}</span></div>
                <div><span className="text-text-muted">Strategie:</span> <span className="font-medium text-text-main">{p.strategy}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GvO uitleg */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-green-50 border border-green-200 p-6">
            <h3 className="font-bold text-text-main mb-2">Wat zijn Garanties van Oorsprong (GvO)?</h3>
            <p className="text-sm text-green-900">
              VertiCer geeft per geproduceerde MWh hernieuwbare energie een certificaat uit. Leveranciers kopen deze om hun stroom te &quot;vergroenen&quot;. Let op: goedkope buitenlandse GvO&apos;s dragen niet bij aan de Nederlandse energietransitie.
            </p>
          </div>
          <div className="rounded-xl bg-red-50 border border-red-200 p-6">
            <h3 className="font-bold text-text-main mb-2">Wat is sjoemelstroom?</h3>
            <p className="text-sm text-red-900">
              Stroom die op papier is vergroend met goedkope buitenlandse certificaten, terwijl er geen cent wordt ge&iuml;nvesteerd in echte Nederlandse duurzame opwek. De EU verbiedt sinds 2026 misleidende claims als &quot;CO2-neutraal via compensatie&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* EU regels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-6">Nieuwe EU-regels tegen greenwashing</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border p-5">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-main text-sm">Wetenschappelijke onderbouwing</h3>
            <p className="text-xs text-text-muted mt-1">Claims moeten wetenschappelijk onderbouwd zijn. Geen vage termen meer.</p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-main text-sm">Stroometiket als waarheid</h3>
            <p className="text-xs text-text-muted mt-1">Het stroometiket is het enige betrouwbare instrument voor consumenten.</p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-main text-sm">Verbod compensatieclaims</h3>
            <p className="text-xs text-text-muted mt-1">&quot;CO2-neutraal via compensatie&quot; mag niet meer zonder bewijs van werkelijke reductie.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Kies bewust groen</h2>
          <p className="mt-2 text-green-100">Vergelijk leveranciers op prijs én duurzaamheid.</p>
          <Link href="/#vergelijk" className="inline-flex items-center mt-4 px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Vergelijk leveranciers
          </Link>
        </div>
      </section>
    </>
  );
}
