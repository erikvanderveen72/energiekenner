import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema, ArticleSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Energie Delen 2026: Stroom Delen met Buren & Familie | Energiekenner.nl",
  description:
    "Sinds de Energiewet 2026 mag je officieel zonnestroom delen met buren en familie. Ontdek hoe het werkt, wat je kunt verdienen en welke voorwaarden er gelden.",
  alternates: {
    canonical: "https://energiekenner.nl/energie-delen",
  },
};

export const revalidate = 3600;

const faqItems = [
  {
    question: "Mag ik energie delen met mijn buren?",
    answer:
      "Ja, sinds de Energiewet 2026 is het wettelijk toegestaan om zelfopgewekte elektriciteit te delen met andere huishoudens. Je moet wel aan bepaalde voorwaarden voldoen, zoals het hebben van een slimme meter en een overeenkomst met je leverancier.",
  },
  {
    question: "Hoeveel kan ik verdienen met energie delen?",
    answer:
      "Je bepaalt zelf de prijs. Als je overtollige zonnestroom verkoopt voor bijvoorbeeld €0,15/kWh aan je buren — in plaats van de terugleververgoeding van €0,02–0,07/kWh — verdien je aanzienlijk meer. Bij 2.000 kWh overproductie kan dat €160–260 extra per jaar opleveren.",
  },
  {
    question: "Heb ik een slimme meter nodig voor energie delen?",
    answer:
      "Ja, zowel jij als de ontvangende partij hebben een slimme meter nodig. Vanaf 2026 is een digitale meter sowieso verplicht voor deelname aan de energiemarkt. Als je nog een analoge meter hebt, neem dan contact op met je netbeheerder.",
  },
  {
    question: "Moet ik bij dezelfde leverancier zitten als mijn buren?",
    answer:
      "In de huidige fase van energiedelen is het in veel gevallen vereist dat beide partijen bij dezelfde leverancier zitten. Sommige leveranciers bieden al speciale deelprogramma's aan. De verwachting is dat dit in de toekomst verder versoepeld wordt.",
  },
  {
    question: "Wat is een energiegemeenschap?",
    answer:
      "Een energiegemeenschap is een groep huishoudens (bijvoorbeeld in een VvE, wijk of straat) die samen energie opwekken, opslaan en delen. De Energiewet 2026 geeft dit een wettelijk kader. Bekende voorbeelden zijn zonnepaneelcoöperaties en buurtbatterij-projecten.",
  },
  {
    question: "Betaal ik belasting over energie die ik deel?",
    answer:
      "De fiscale regels rond energie delen zijn complex. Als actieve afnemer mag je leveren zonder vergunning zolang het niet je hoofdactiviteit is. Voor de BTW-kant: raadpleeg de Belastingdienst of een fiscaal adviseur, want de exacte regeling hangt af van je situatie en omvang.",
  },
];

export default function EnergieDelenPage() {
  return (
    <>
      <ArticleSchema
        title="Energie Delen 2026: Stroom Delen met Buren & Familie"
        description="Hoe je sinds de Energiewet 2026 officieel zonnestroom kunt delen met buren en familie."
        url="https://energiekenner.nl/energie-delen"
        datePublished="2026-03-01"
        dateModified="2026-03-15"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Energie Delen", href: "/energie-delen" },
        ]}
      />
      <PageHero
        badge="Nieuw sinds Energiewet 2026"
        title="Energie Delen"
        highlight="Verkoop stroom aan je buren"
        description="Sinds de Energiewet 2026 mag je officieel overtollige zonnestroom verkopen aan buren, familieleden of via een energiegemeenschap. Je bepaalt zelf de prijs en verdient meer dan via de standaard terugleververgoeding."
        accentColor="emerald"
      />

      {/* Key Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { value: "€ 0,15", unit: "/kWh", label: "Gem. deelprijs (zelf bepaald)", color: "text-emerald-600" },
            { value: "€ 0,02", unit: "/kWh", label: "Gem. terugleververgoeding", color: "text-rose-500" },
            { value: "7x", unit: " meer", label: "Opbrengst via delen vs. terugleveren", color: "text-primary" },
            { value: "2026", unit: "", label: "Wettelijk kader sinds Energiewet", color: "text-amber-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-border p-4 md:p-6 shadow-sm">
              <p className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                {stat.value}
                <span className="text-base font-semibold">{stat.unit}</span>
              </p>
              <p className="text-xs md:text-sm text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="text-2xl font-bold text-text-main mb-2">Hoe werkt energie delen?</h2>
        <p className="text-text-muted mb-8">
          In drie stappen van zonnepaneel-eigenaar naar micro-energieleverancier.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Opwekken & overschot",
              desc: "Je zonnepanelen produceren meer stroom dan je zelf verbruikt. Normaal gaat dit overschot terug naar het net tegen een lage terugleververgoeding.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ),
            },
            {
              step: "2",
              title: "Deel met je omgeving",
              desc: "Via je leverancier of energiegemeenschap deel je het overschot met buren of familieleden. Beiden hebben een slimme meter nodig.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              ),
            },
            {
              step: "3",
              title: "Verdien meer",
              desc: "Je bepaalt zelf de prijs — bijvoorbeeld €0,15/kWh. Dat is tot 7x meer dan de standaard terugleververgoeding van grote leveranciers.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-xl border border-border p-6 relative">
              <div className="absolute -top-3 -left-1 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">
                {item.step}
              </div>
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 mt-2">
                {item.icon}
              </div>
              <h3 className="font-bold text-text-main mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rekenvoorbeeld */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <article className="bg-white rounded-xl border border-border p-6 md:p-8">
          <h2 className="text-xl font-bold text-text-main mb-4">Rekenvoorbeeld: wat levert energie delen op?</h2>
          <p className="text-sm text-text-muted mb-6">
            Een huishouden met 12 zonnepanelen produceert jaarlijks ca. 4.000 kWh. Bij 50% eigenverbruik is er 2.000 kWh overschot.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">Scenario</th>
                  <th className="text-right px-4 py-3 font-semibold text-text-muted">Prijs/kWh</th>
                  <th className="text-right px-4 py-3 font-semibold text-text-muted">Opbrengst/jaar</th>
                  <th className="text-right px-4 py-3 font-semibold text-text-muted">Verschil</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-4 text-text-muted">Terugleveren aan leverancier</td>
                  <td className="px-4 py-4 text-right font-mono">€ 0,02 – € 0,07</td>
                  <td className="px-4 py-4 text-right font-semibold text-rose-600">€ 40 – € 140</td>
                  <td className="px-4 py-4 text-right text-text-muted">—</td>
                </tr>
                <tr className="border-t border-border bg-stone-50/60">
                  <td className="px-4 py-4 text-text-muted">Delen met buren (€ 0,10/kWh)</td>
                  <td className="px-4 py-4 text-right font-mono">€ 0,10</td>
                  <td className="px-4 py-4 text-right font-semibold text-emerald-600">€ 200</td>
                  <td className="px-4 py-4 text-right font-semibold text-emerald-600">+ € 60 – € 160</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-4 text-text-muted">Delen met buren (€ 0,15/kWh)</td>
                  <td className="px-4 py-4 text-right font-mono">€ 0,15</td>
                  <td className="px-4 py-4 text-right font-semibold text-emerald-600">€ 300</td>
                  <td className="px-4 py-4 text-right font-semibold text-emerald-600">+ € 160 – € 260</td>
                </tr>
                <tr className="border-t border-border bg-emerald-50/60">
                  <td className="px-4 py-4 font-medium text-text-main">Delen + thuisbatterij (optimaal)</td>
                  <td className="px-4 py-4 text-right font-mono">€ 0,15 + arbitrage</td>
                  <td className="px-4 py-4 text-right font-semibold text-emerald-700">€ 450+</td>
                  <td className="px-4 py-4 text-right font-semibold text-emerald-700">+ € 310 – € 410</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 mt-6">
            <p className="flex items-start gap-3">
              <span className="text-xl font-bold text-emerald-600 shrink-0">💡</span>
              <span className="text-sm">
                <strong className="text-text-main">Kennertip:</strong> Combineer energie delen met een{" "}
                <Link href="/thuisbatterij" className="text-primary hover:underline">thuisbatterij</Link>. Sla overdag op, deel &apos;s avonds met je buren tegen een aantrekkelijke prijs. Met een{" "}
                <Link href="/dynamisch" className="text-primary hover:underline">dynamisch contract</Link> kun je ook nog arbitrage toevoegen.
              </span>
            </p>
          </div>
        </article>
      </section>

      {/* Voorwaarden */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="text-xl font-bold text-text-main mb-4">Voorwaarden voor energie delen</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white rounded-xl border border-border p-6 md:p-8">
            <h3 className="text-lg font-bold text-emerald-700 mb-4">Wat je nodig hebt</h3>
            <div className="space-y-3">
              {[
                { item: "Slimme meter", desc: "Beiden (opwekker en ontvanger) moeten een digitale meter hebben" },
                { item: "Zonnepanelen of opwekinstallatie", desc: "Je hebt een bron van eigen opwek nodig" },
                { item: "Overeenkomst met leverancier", desc: "Niet alle leveranciers ondersteunen delen — check dit vooraf" },
                { item: "Nabijheid", desc: "Momenteel vooral binnen dezelfde wijk of VvE mogelijk" },
              ].map((req) => (
                <div key={req.item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-text-main">{req.item}</p>
                    <p className="text-xs text-text-muted">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white rounded-xl border border-border p-6 md:p-8">
            <h3 className="text-lg font-bold text-text-main mb-4">Wettelijk kader: Energiewet 2026</h3>
            <p className="text-sm text-text-muted mb-4">
              De{" "}
              <Link href="/energiewet" className="text-primary hover:underline">Energiewet 2026</Link>{" "}
              introduceert de &quot;actieve afnemer&quot; — een eindgebruiker die zelfopgewekte stroom mag verbruiken, opslaan, verkopen of delen.
            </p>
            <p className="text-sm text-text-muted mb-4">
              Als actieve afnemer met een kleine aansluiting mag je onder voorwaarden zonder vergunning leveren, zolang het niet je hoofdactiviteit is.
            </p>
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
              <p className="text-sm text-amber-800">
                <strong>Let op:</strong> De exacte spelregels rond facturatie, belasting en administratie zijn nog in ontwikkeling. Raadpleeg je leverancier en de{" "}
                <a href="https://www.acm.nl/nl/onderwerpen/energie" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ACM</a>{" "}
                voor de meest actuele voorwaarden.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Energiegemeenschappen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <article className="bg-white rounded-xl border border-border p-6 md:p-8">
          <h2 className="text-xl font-bold text-text-main mb-4">Energiegemeenschappen: samen opwekken en delen</h2>
          <p className="text-sm text-text-muted mb-6">
            Een energiegemeenschap gaat een stap verder dan individueel delen. Denk aan een VvE met gedeelde zonnepanelen op het dak, een straatcoöperatie met een buurtbatterij, of een bedrijventerrein dat onderling stroom uitwisselt.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { type: "VvE / Flatgebouw", desc: "Gedeelde zonnepanelen op het dak, stroom verdelen over bewoners naar verbruik", icon: "🏢" },
              { type: "Buurtcoöperatie", desc: "Wijk investeert gezamenlijk in opwek en opslag, winst wordt gedeeld", icon: "🏘️" },
              { type: "Bedrijventerrein", desc: "Ondernemers wisselen onderling stroom uit, reduceren piekbelasting", icon: "🏭" },
            ].map((model) => (
              <div key={model.type} className="rounded-lg border border-border p-4">
                <span className="text-2xl">{model.icon}</span>
                <h3 className="font-semibold text-text-main text-sm mt-2">{model.type}</h3>
                <p className="text-xs text-text-muted mt-1">{model.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-4">
            Meer over duurzame energie en groene stroom op onze{" "}
            <Link href="/duurzaamheid" className="text-primary hover:underline">duurzaamheidspagina</Link>.
          </p>
        </article>
      </section>

      {/* Gerelateerde pagina's */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="text-xl font-bold text-text-main mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { href: "/zonnepanelen", title: "Zonnepanelen", desc: "Terugleverkosten en vergoedingen vergelijken", color: "bg-yellow-100 text-yellow-600" },
            { href: "/salderen", title: "Salderingsregeling 2027", desc: "Wat verandert er als salderen stopt?", color: "bg-green-100 text-green-600" },
            { href: "/thuisbatterij", title: "Thuisbatterij", desc: "Sla op en deel later — optimaal rendement", color: "bg-amber-100 text-amber-600" },
            { href: "/dynamisch", title: "Dynamische tarieven", desc: "Verdien meer met uur-voor-uur prijzen", color: "bg-blue-100 text-blue-600" },
            { href: "/energiewet", title: "Energiewet 2026", desc: "Je rechten als actieve afnemer", color: "bg-purple-100 text-purple-600" },
            { href: "/slimme-technologie", title: "Slim Sturen", desc: "Automatiseer opwek, opslag en deling", color: "bg-cyan-100 text-cyan-600" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-xl border border-border bg-white p-5 hover:shadow-md hover:border-emerald-300 transition-all group">
              <div className={`w-9 h-9 rounded-lg ${link.color} flex items-center justify-center mb-3`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-main group-hover:text-primary transition-colors">{link.title}</h3>
              <p className="text-xs text-text-muted mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <FAQSchema items={faqItems} />
        <article className="rounded-xl border border-border p-8 bg-white">
          <h2 className="text-2xl font-bold text-text-main mb-6">Veelgestelde vragen over energie delen</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <details key={idx} className={`group rounded-lg border border-border overflow-hidden ${idx % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-stone-50 transition-colors">
                  <h3 className="font-semibold text-text-main text-sm pr-4">{item.question}</h3>
                  <svg className="w-5 h-5 flex-shrink-0 text-text-muted transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-text-muted leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-8">
        <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold">Eerst je zonnepanelen optimaliseren?</h2>
            <p className="mt-2 text-emerald-100 max-w-xl mx-auto">
              Vergelijk terugleverkosten en vergoedingen bij alle leveranciers. Dan weet je precies wat delen je extra oplevert.
            </p>
            <Link href="/zonnepanelen" className="inline-flex items-center mt-6 px-6 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg">
              Vergelijk terugleverkosten
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
