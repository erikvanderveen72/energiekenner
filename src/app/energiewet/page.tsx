import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Energiewet 2026: Jouw Nieuwe Rechten als Consument | Energiekenner",
  description: "De Energiewet 2026 geeft je meer macht: 5 dagen opzegtermijn, 14 dagen bedenktijd, bescherming bij faillissement. Alles wat je moet weten.",
  keywords: ["energiewet 2026", "nieuwe energiewet", "opzegtermijn energie", "consumentenrechten energie", "flitsoverstap energie"],
  openGraph: {
    title: "Energiewet 2026: Jouw Nieuwe Rechten",
    description: "Flitsoverstap in 5 dagen, geen gratis tablets meer, en 14 dagen bedenktijd. Alles over de Energiewet 2026.",
  },
};

const rights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Flitsoverstap in 5 werkdagen",
    description: "De opzegtermijn is verkort van 30 dagen naar slechts 5 werkdagen. Speel direct in op prijsdalingen.",
    color: "blue",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Alleen geld als bonus",
    description: "Welkomstbonussen mogen uitsluitend in geld worden uitgekeerd. Geen tablets, cadeaubonnen of andere fysieke producten meer.",
    color: "green",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "14 dagen bedenktijd",
    description: "Na ontvangst van je contractbevestiging kun je altijd binnen 14 dagen zonder opgave van reden annuleren.",
    color: "purple",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Bescherming bij faillissement",
    description: "Als je leverancier omvalt, word je automatisch overgezet naar een andere partij. Je zit nooit zonder stroom of gas.",
    color: "red",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Transparante modelcontracten",
    description: "Elke leverancier moet gestandaardiseerde contracten aanbieden. Terugleverkosten worden verplicht per kWh getoond.",
    color: "teal",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Energie delen met buren",
    description: "Sinds 2026 mag je officieel stroom verkopen aan buren of familieleden. Beide partijen hebben een slimme meter nodig.",
    color: "orange",
  },
];

const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-100" },
  green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-100" },
  red: { bg: "bg-red-50", text: "text-red-600", iconBg: "bg-red-100" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", iconBg: "bg-teal-100" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", iconBg: "bg-orange-100" },
};

export default function EnergiewetPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium mb-4">
            Sinds 1 januari 2026
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold">Energiewet 2026</h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl">
            De nieuwe Energiewet geeft je als consument meer macht, bescherming en transparantie. Dit zijn je rechten.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-8">Jouw 6 nieuwe rechten</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((right) => {
            const colors = colorMap[right.color];
            return (
              <div key={right.title} className={`rounded-xl border border-border p-6 ${colors.bg} hover:shadow-md transition-shadow`}>
                <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center ${colors.text} mb-4`}>
                  {right.icon}
                </div>
                <h3 className="font-semibold text-lg text-text-main">{right.title}</h3>
                <p className="text-sm text-text-muted mt-2">{right.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dynamische contracten verplicht */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-8">
          <h2 className="text-xl font-bold text-text-main mb-3">Dynamisch contract nu verplicht aanbod</h2>
          <p className="text-sm text-indigo-900">
            Onder de nieuwe Energiewet zijn leveranciers met meer dan 200.000 klanten verplicht om dynamische contracten aan te bieden. Dit vergroot de concurrentie en transparantie. De kern is een koppeling aan de EPEX-spotmarkt, waarbij de stroomprijs per uur wordt vastgesteld op basis van vraag en aanbod.
          </p>
          <Link href="/dynamisch" className="inline-flex items-center mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
            Vergelijk dynamische tarieven
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Juridische context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-6">Juridische context: terugleverkosten</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border p-6">
            <h3 className="font-semibold text-text-main mb-2">ACM Modelcontracten</h3>
            <p className="text-sm text-text-muted">
              Per 1 januari 2026 zijn terugleverkosten verplicht als aparte component per kWh opgenomen in modelcontracten. Dit maakt een einde aan het verstoppen van kosten in verhoogde vastrechten.
            </p>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h3 className="font-semibold text-text-main mb-2">Uitspraak Rechtbank Limburg</h3>
            <p className="text-sm text-text-muted">
              De rechter oordeelde dat een leverancier de terugleververgoeding eenzijdig mag verlagen. Een 1-op-1 koppeling tussen lever- en terugleverprijs mag niet voor onbepaalde tijd verwacht worden.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Profiteer van je nieuwe rechten</h2>
          <p className="mt-2 text-indigo-100">Met de flitsoverstap switch je in 5 dagen. Vergelijk nu en bespaar.</p>
          <Link href="/#vergelijk" className="inline-flex items-center mt-4 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Vergelijk leveranciers
          </Link>
        </div>
      </section>
    </>
  );
}
