import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "@/components/Calculator";
import { supabase } from "@/lib/supabase";
import { fallbackProviders } from "@/lib/fallback-data";
import type { EnergyProvider } from "@/lib/database.types";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema } from "@/components/StructuredData";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Energiecalculator 2026: Bereken je Energiekosten | Energiekenner.nl",
  description: "Bereken je energiekosten met onze gratis calculator. Vul je verbruik in en zie direct welke leverancier het goedkoopst is. Actuele tarieven maart 2026.",
  alternates: {
    canonical: "https://energiekenner.nl/calculator",
  },
  openGraph: {
    title: "Energiecalculator 2026: Bereken je Besparing",
    description: "Vul je stroom- en gasverbruik in en zie direct welke energieleverancier het goedkoopst is voor jouw situatie.",
    url: "https://energiekenner.nl/calculator",
  },
};

const faqItems = [
  {
    question: "Hoe werkt de energiecalculator?",
    answer: "Vul je jaarlijkse stroom- (kWh) en gasverbruik (m³) in met de schuifregelaars. De calculator berekent direct je geschatte maandkosten bij alle leveranciers, inclusief energiebelasting, btw en vastrecht. Je ziet meteen wie het goedkoopst is voor jouw situatie.",
  },
  {
    question: "Waar vind ik mijn energieverbruik?",
    answer: "Je verbruik staat op je jaarafrekening of in de app van je energieleverancier. Gemiddeld verbruikt een Nederlands huishouden 2.400 kWh stroom en 1.000 m³ gas per jaar. Een huishouden met warmtepomp gebruikt meer stroom (4.000+ kWh) en minder gas.",
  },
  {
    question: "Zijn de berekende kosten inclusief belastingen?",
    answer: "Ja, alle bedragen zijn inclusief energiebelasting (€0,1108/kWh stroom, €0,7268/m³ gas in 2026), btw (21%) en de Opslag Duurzame Energie (ODE). Je ziet het werkelijke bedrag dat je maandelijks betaalt, zonder verrassingen.",
  },
  {
    question: "Klopt de berekening ook als ik zonnepanelen heb?",
    answer: "De basisberekening gaat uit van volledig verbruik van het net. Met zonnepanelen is je werkelijke stroomverbruik lager. Vul je netto verbruik in (verbruik minus eigen opwek) voor een nauwkeuriger resultaat. Bekijk ook onze zonnepanelen-pagina voor terugleverkosten.",
  },
  {
    question: "Hoe nauwkeurig is de energiecalculator?",
    answer: "De calculator gebruikt actuele tarieven van maart 2026 en geeft een betrouwbare schatting. Het werkelijke bedrag kan licht afwijken door seizoensverschillen in gasverbruik, netbeheerkosten per regio en eventuele welkomstbonussen die niet in de maandprijs zijn verwerkt.",
  },
];

async function getProviders(): Promise<EnergyProvider[]> {
  try {
    const { data, error } = await supabase
      .from("energy_providers")
      .select("*")
      .order("estimated_monthly", { ascending: true });
    if (error || !data) return fallbackProviders;
    return data;
  } catch {
    return fallbackProviders;
  }
}

export default async function CalculatorPage() {
  const providers = await getProviders();

  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Calculator", href: "/calculator" },
      ]} />
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium mb-4 mt-2">
            Interactief - actuele tarieven maart 2026
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">Energiecalculator</h1>
          <p className="mt-4 text-lg text-purple-100 max-w-2xl">
            Schuif met je stroom- en gasverbruik en zie direct welke leverancier het goedkoopst is voor jouw situatie.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Calculator providers={providers} />
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <FAQSchema items={faqItems} />
        <h2 className="text-2xl font-bold text-text-main mb-8">Veelgestelde vragen over de calculator</h2>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <details key={i} className="group rounded-xl border border-border bg-white overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-text-main hover:bg-surface-alt transition-colors">
                {item.question}
                <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Wil je meer details per leverancier?
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Bekijk de volledige vergelijkingstabel met welkomstbonussen, contractduur en terugleverkosten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#vergelijk"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Naar de vergelijkingstabel
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/dynamisch"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Dynamische tarieven
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
