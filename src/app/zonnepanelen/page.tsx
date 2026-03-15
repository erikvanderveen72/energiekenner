import { supabase } from "@/lib/supabase";
import { fallbackProviders } from "@/lib/fallback-data";
import type { EnergyProvider } from "@/lib/database.types";
import { PageHero } from "@/components/PageHero";

export const revalidate = 60;

async function getProviders(): Promise<EnergyProvider[]> {
  try {
    const { data, error } = await supabase
      .from("energy_providers")
      .select("*")
      .order("feed_in_cost_kwh", { ascending: true });
    if (error || !data) return fallbackProviders;
    return data;
  } catch {
    return fallbackProviders;
  }
}

export const metadata = {
  title: "Zonnepanelen: Terugleverkosten & Vergoedingen 2026 | Energievergelijker",
  description: "Vergelijk terugleverkosten en -vergoedingen per leverancier. Salderingsregeling stopt in 2027.",
};

export default async function ZonnepanelenPage() {
  const providers = await getProviders();
  const withFeedInCost = providers.filter((p) => p.feed_in_cost_kwh !== null);
  const withFeedInComp = providers.filter((p) => p.feed_in_compensation !== null);

  return (
    <>
      <PageHero
        badge="Laatste jaar volledige saldering"
        title="Zonnepanelen &amp; teruglevering"
        highlight="Vergelijk terugleverkosten 2026"
        description="2026 is het laatste jaar waarin de salderingsregeling volledig van kracht is. Vanaf 2027 wordt deze definitief afgeschaft."
        accentColor="amber"
      />

      {/* Terugleverkosten */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold text-text-main mb-2">Terugleverkosten per leverancier</h2>
        <p className="text-text-muted mb-6">Kosten die in rekening worden gebracht over teruggeleverde stroom (bij 2.400 kWh/jaar)</p>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {withFeedInCost
            .sort((a, b) => (a.feed_in_cost_kwh ?? 0) - (b.feed_in_cost_kwh ?? 0))
            .map((p) => (
              <div key={p.id} className="rounded-xl border border-border bg-white p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-text-main">{p.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">€ {p.feed_in_cost_kwh?.toFixed(3).replace(".", ",")}/kWh</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-semibold text-text-main">€ {((p.feed_in_cost_kwh ?? 0) * 2400).toFixed(0).replace(".", ",")}</p>
                  <p className="text-xs text-text-muted">/jaar</p>
                </div>
              </div>
            ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Leverancier</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Per kWh</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Jaarlijks (2.400 kWh)</th>
              </tr>
            </thead>
            <tbody>
              {withFeedInCost
                .sort((a, b) => (a.feed_in_cost_kwh ?? 0) - (b.feed_in_cost_kwh ?? 0))
                .map((p) => (
                  <tr key={p.id} className="border-t border-border hover:bg-yellow-50 transition-colors">
                    <td className="px-4 py-4 font-semibold">{p.name}</td>
                    <td className="text-right px-4 py-4 font-mono">€ {p.feed_in_cost_kwh?.toFixed(3).replace(".", ",")}</td>
                    <td className="text-right px-4 py-4 font-mono font-semibold">
                      € {((p.feed_in_cost_kwh ?? 0) * 2400).toFixed(2).replace(".", ",")}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Terugleververgoeding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-text-main mb-2">Terugleververgoeding per leverancier</h2>
        <p className="text-text-muted mb-6">Vergoeding die je ontvangt voor overtollig teruggeleverde stroom</p>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {withFeedInComp
            .sort((a, b) => (b.feed_in_compensation ?? 0) - (a.feed_in_compensation ?? 0))
            .map((p) => (
              <div key={p.id} className="rounded-xl border border-border bg-white p-4 flex items-center justify-between">
                <p className="font-semibold text-text-main">{p.name}</p>
                <span className={`font-mono font-semibold ${(p.feed_in_compensation ?? 0) > 0.10 ? "text-green-600" : "text-red-500"}`}>
                  € {p.feed_in_compensation?.toFixed(3).replace(".", ",")}/kWh
                </span>
              </div>
            ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left px-4 py-3 font-semibold text-text-muted">Leverancier</th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">Vergoeding per kWh</th>
              </tr>
            </thead>
            <tbody>
              {withFeedInComp
                .sort((a, b) => (b.feed_in_compensation ?? 0) - (a.feed_in_compensation ?? 0))
                .map((p) => (
                  <tr key={p.id} className="border-t border-border hover:bg-yellow-50 transition-colors">
                    <td className="px-4 py-4 font-semibold">{p.name}</td>
                    <td className="text-right px-4 py-4">
                      <span className={`font-mono font-semibold ${(p.feed_in_compensation ?? 0) > 0.10 ? "text-green-600" : "text-red-500"}`}>
                        € {p.feed_in_compensation?.toFixed(3).replace(".", ",")}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Salderingsregeling info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-8">
          <h2 className="text-xl font-bold text-text-main mb-4">Einde salderingsregeling in 2027</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-yellow-900">
            <div>
              <h3 className="font-semibold mb-2">Wat verandert er?</h3>
              <p>Vanaf 2027 mag opgewekte stroom niet meer 1-op-1 worden verrekend met verbruik op jaarbasis. De focus verschuift naar maximaal direct eigen verbruik.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Wat kun je doen?</h3>
              <p>Overweeg een thuisbatterij, verschuif groot verbruik (wasmachine, vaatwasser) naar zonnige uren, en vergelijk terugleververgoedingen voor het beste rendement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article 1: Salderen in 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <article className="bg-white rounded-xl border border-border p-8">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Saldering</span>
          </div>
          <h3 className="text-2xl font-bold text-text-main mb-4">Salderen in 2026 - het laatste volle jaar</h3>
          <div className="prose prose-sm max-w-none text-text-main space-y-4">
            <p>
              2026 is een cruciaal jaar voor zonnepaneleneigenaren. De salderingsregeling, die sinds jaren gebruikers toestaat hun afname en teruglevering op jaarbasis te verrekenen, stopt definitief per 1 januari 2027. Dit betekent dat 2026 uw laatste volledige jaar is om volledig van deze gunstige regeling te profiteren.
            </p>
            <h4 className="font-semibold text-text-main">Hoe werkt saldering nu?</h4>
            <p>
              Momenteel kunt u afgenomen stroom en teruggeleverde stroom tegen dezelfde prijs verrekenen op jaarbasis. Hebt u in totaal 8.500 kWh afgenomen en 2.400 kWh teruggeleverd? Dan betaalt u alleen voor het netto verbruik van 6.100 kWh. Dit systeem is voordelig, vooral als uw teruglevering hoog is.
            </p>
            <h4 className="font-semibold text-text-main">Na 1 januari 2027</h4>
            <p>
              Vanaf 2027 verschuift de focus naar drie pijlers:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Direct eigen verbruik:</strong> De waarde van zonnestroom die u zelf verbruikt (meest waardevol).</li>
              <li><strong>Netto-teruglevering:</strong> Alleen overtollige stroom wordt tegen gespecificeerde tarieven vergoed of belast.</li>
              <li><strong>Terugleververgoeding of -kosten:</strong> Deze worden individueel per leverancier bepaald.</li>
            </ul>
            <h4 className="font-semibold text-text-main">Handelingspunten voor 2026</h4>
            <p>
              Gebruik 2026 als voorbereiding. Monitor uw teruglevering per maand om inzicht te krijgen in uw gedrag. Dit helpt u straks slimmere keuzes te maken, zoals het verschuiven van groot verbruik naar zonnige uren of investering in een thuisbatterij.
            </p>
          </div>

          {/* Kennertip box */}
          <div className="mt-6 bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-5">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <div>
                <p className="font-semibold text-orange-900">Kennertip</p>
                <p className="text-sm text-orange-800 mt-1">Maak nu al een maandelijkse monitor van uw teruglevering. Dit geeft u inzicht in pieken en dalen, waardvol voor uw strategie na 2027.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-text-muted border-t border-border pt-4">
            <p>Bron: <a href="https://www.rijksoverheid.nl" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">rijksoverheid.nl</a></p>
          </div>
        </article>
      </section>

      {/* Article 2: Terugleverkosten uitgelegd */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <article className="bg-white rounded-xl border border-border p-8">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Kosten</span>
          </div>
          <h3 className="text-2xl font-bold text-text-main mb-4">Terugleverkosten uitgelegd</h3>
          <div className="prose prose-sm max-w-none text-text-main space-y-4">
            <p>
              Veel zonnepaneleneigenaren kijken verbaasd naar hun rekening als zij zien dat leveranciers kosten in rekening brengen voor teruggeleverde stroom. Dit is echter niet verboden, maar de redenen erachter zijn belangrijk om te begrijpen.
            </p>
            <h4 className="font-semibold text-text-main">Waarom terugleverkosten?</h4>
            <p>
              De Autoriteit Consument en Markt (ACM) onderzoekt regelmatig of terugleverkosten gerechtvaardigd zijn. Leveranciers rechtvaardigen deze kosten met verschillende factoren:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Hogere inkoopkosten:</strong> Aanname van stroom uit het net kan meer kosten dan afzet.</li>
              <li><strong>Hogere onbalanskosten:</strong> Teruglevering veroorzaakt imbalans in het netwerk.</li>
              <li><strong>Kosten van saldering:</strong> De administratie en ondersteuning van saldingsregeling heeft een prijs.</li>
            </ul>
            <h4 className="font-semibold text-text-main">Transparantie is essentieel</h4>
            <p>
              Hoewel terugleverkosten niet verboden zijn (zolang ze niet onredelijk zijn), is het belangrijk dat leveranciers transparant zijn. Vergelijk daarom altijd contracten op dezelfde basis: zowel de jaarlijkse afname als de jaarteruglevering moeten gelijk zijn.
            </p>
            <h4 className="font-semibold text-text-main">Verwarring voorkomen</h4>
            <p>
              Veel consumenten verwarren terugleverkosten met terugleververgoedingen. Dit zijn twee verschillende dingen:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Terulevering-kosten:</strong> Wat u betaalt per kWh teruggeleverde stroom (negatief voor uw portemonnee).</li>
              <li><strong>Terugleververgoeding:</strong> Wat u verdient per kWh teruggeleverde stroom (positief voor uw portemonnee).</li>
            </ul>
            <p>
              Een leverancier kan beide hebben: u betaalt kosten op maandafleveringen, maar ontvangt vergoeding op jaarberekening na saldering.
            </p>
          </div>

          {/* Kennertip box */}
          <div className="mt-6 bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-5">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <div>
                <p className="font-semibold text-orange-900">Kennertip</p>
                <p className="text-sm text-orange-800 mt-1">Vergelijk contracten altijd met hetzelfde profiel: dezelfde jaarlijkse afname EN jaarteruglevering. Alleen dan kunt u werkelijk vergelijken.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-text-muted border-t border-border pt-4">
            <p>Bron: Autoriteit Consument en Markt (ACM)</p>
          </div>
        </article>
      </section>

      {/* Article 3: Netto-negatieve teruglevering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <article className="bg-white rounded-xl border border-border p-8">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4m0 0L3 5m0 0v8m0-8l4 4" />
            </svg>
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Waarschuwing</span>
          </div>
          <h3 className="text-2xl font-bold text-text-main mb-4">Netto-negatieve teruglevering - wat het is en hoe je het voorkomi</h3>
          <div className="prose prose-sm max-w-none text-text-main space-y-4">
            <p>
              In maart 2025 berichtte RTL Nieuws over een verontrustende trend: bij liefst elf leveranciers kan het voorkomen dat zonnepaneleneigenaren geld kwijtraken door teruglevering. Dit gebeurt als de kosten hoger zijn dan de vergoeding. Deze situatie staat bekend als netto-negatieve teruglevering.
            </p>
            <h4 className="font-semibold text-text-main">Wat is netto-negatieve teruglevering?</h4>
            <p>
              Stel: uw leverancier berekent €0,05/kWh kosten voor teruglevering, maar geeft slechts €0,02/kWh vergoeding. Over 2.400 kWh teruglevering betekent dit: €120 kosten minus €48 vergoeding = €72 netto verlies. Dit noemen we netto-negatief.
            </p>
            <h4 className="font-semibold text-text-main">Is het legaal?</h4>
            <p>
              Ja, volgens de ACM. Zolang de tarieven niet onredelijk zijn, mogen leveranciers dit doen. Er is echter een juridische nuance: leveranciers kunnen u niet een negatieve terugleververgoeding (dus daadwerkelijk geld afnemen) in rekening brengen. Echter, door afzonderlijke kosten en vergoedingen in te stellen, kan het netto-resultaat toch negatief worden.
            </p>
            <h4 className="font-semibold text-text-main">Hoe voorkom je dit?</h4>
            <p>
              U heeft drie sterke instrumenten:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Meer direct eigen verbruik:</strong> Wat u zelf verbruikt, kost u niet en geeft geen kosten. Dit is het meest waardevol.</li>
              <li><strong>Slimmer contracten:</strong> Vergelijk actief en wissels naar leveranciers met beter balans tussen kosten en vergoeding.</li>
              <li><strong>Opslagtechnologie:</strong> Een thuisbatterij verschuift teruglevering naar momenten als zij het meest waardevol is.</li>
            </ul>
          </div>

          {/* Kennertip box */}
          <div className="mt-6 bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-5">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <div>
                <p className="font-semibold text-orange-900">Kennertip</p>
                <p className="text-sm text-orange-800 mt-1">Controleer de verhouding tussen terulevering-kosten en -vergoeding in uw huidige contract. Netto-negatief? Bespreek met uw leverancier of switch naar een beter alternatief.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-text-muted border-t border-border pt-4">
            <p>Bron: <a href="https://www.rtlnieuws.nl" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">RTL Nieuws</a> (maart 2025), Autoriteit Consument en Markt (ACM)</p>
          </div>
        </article>
      </section>

      {/* Article 4: Sturen op opwek */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <article className="bg-white rounded-xl border border-border p-8">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Strategie</span>
          </div>
          <h3 className="text-2xl font-bold text-text-main mb-4">Sturen op opwek - de toekomst van zonnepanelen</h3>
          <div className="prose prose-sm max-w-none text-text-main space-y-4">
            <p>
              Wat in 2026 nog een luxe is, wordt na 2027 noodzakelijk: het slim sturen van uw energieverbruik naar momenten van maximale zonneopwek. Dit heet "sturen op opwek" en het kan uw zonnepanelen veel waardevol maken.
            </p>
            <h4 className="font-semibold text-text-main">Waarom is dit belangrijk?</h4>
            <p>
              Na 2027 bepaalt het percentage eigen verbruik (ook wel "zelfvoorzieningsgraad" genoemd) rechtstreeks uw besparing. Hoe meer u van uw eigen opwek verbruikt op het moment dat de zon schijnt, hoe hoger uw voordeel. Stroom die u teruggeeft, levert veel minder op.
            </p>
            <h4 className="font-semibold text-text-main">Beginnen met "dumb" timers</h4>
            <p>
              U hoeft niet meteen slim huisvermogen (HEMS) aan te schaffen. Begin eenvoudig: zet uw vaatwasser en wasmachine op een vast moment in als de zon doorgaans schijnt. Op zonnige dagen kunt u dit handmatig vervroegen. Dit kost niets en helpt al significant.
            </p>
            <h4 className="font-semibold text-text-main">Stap voor stap naar intelligenter verbruik</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Fase 1 (Gratis):</strong> Handmatig verschuiven van vaatwasser, wasmachine naar zonnige uren.</li>
              <li><strong>Fase 2 (Budget):</strong> Goedkope timers op stopcontacten (€10-50) voor vaste planningen.</li>
              <li><strong>Fase 3 (Geavanceerd):</strong> HEMS-systeem dat real-time prijzen/opwek volgt (€1.000-3.000).</li>
            </ul>
            <h4 className="font-semibold text-text-main">Praktische tips</h4>
            <p>
              Focus op 2-3 grote verbruikers die u kunt verplaatsen. Vaatwasser, wasmachine en elektrische auto-oplaadpunt zijn de makkelijkste kandidaten. Elke kWh die u zelf direct verbruikt, bespaart u duidelijk geld.
            </p>
          </div>

          {/* Kennertip box */}
          <div className="mt-6 bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-5">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <div>
                <p className="font-semibold text-orange-900">Kennertip</p>
                <p className="text-sm text-orange-800 mt-1">Begin vandaag nog: kies 2-3 apparaten (vaatwasser, wasmachine, auto-oplader) die u naar zonnige uren kunt verschuiven. Dit kost niets en bespaart direct.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-text-muted border-t border-border pt-4">
            <p>Bron: Interne analyse op basis van toekomstige salderingsregels (2027+)</p>
          </div>
        </article>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <div className="rounded-xl bg-gradient-to-br from-orange-600 to-yellow-500 p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Klaar om uw zonnepanelen optimaal in te zetten?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">Vergelijk nu de beste teruglever tarieven en bereid u voor op 2027. De tijd voor voorbereiding is nu.</p>
          <a href="/" className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
            Naar vergelijker
          </a>
        </div>
      </section>
    </>
  );
}
