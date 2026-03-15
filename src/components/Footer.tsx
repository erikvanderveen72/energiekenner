import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-main text-white mt-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="font-bold text-xl">Energiekenner<span className="text-primary text-base font-semibold">.nl</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Onafhankelijk energietarieven vergelijken in heel Nederland. Alle data is gebaseerd op actuele marktprijzen.
              Geen provisie, geen adverteerders, geen belangen.
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                SSL beveiligd
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                AVG-conform
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Dagelijks bijgewerkt
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">
              Vergelijken
            </h3>
            <nav aria-label="Vergelijken">
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Vaste contracten</Link></li>
                <li><Link href="/dynamisch" className="text-gray-300 hover:text-white transition-colors">Dynamische tarieven</Link></li>
                <li><Link href="/zonnepanelen" className="text-gray-300 hover:text-white transition-colors">Zonnepanelen</Link></li>
                <li><Link href="/verbruik" className="text-gray-300 hover:text-white transition-colors">Energieverbruik</Link></li>
                <li><Link href="/warmtepompen" className="text-gray-300 hover:text-white transition-colors">Warmtepompen</Link></li>
                <li><Link href="/slimme-technologie" className="text-gray-300 hover:text-white transition-colors">Slim Sturen</Link></li>
                <li><Link href="/salderen" className="text-gray-300 hover:text-white transition-colors">Salderingsregeling 2027</Link></li>
                <li><Link href="/opzegvergoeding" className="text-gray-300 hover:text-white transition-colors">Opzegvergoeding</Link></li>
                <li><Link href="/energievergelijkers" className="text-gray-300 hover:text-white transition-colors">Hoe werken vergelijkers?</Link></li>
                <li><Link href="/laadpalen" className="text-gray-300 hover:text-white transition-colors">Laadpalen &amp; EV</Link></li>
                <li><Link href="/netbeheer" className="text-gray-300 hover:text-white transition-colors">Netbeheerkosten</Link></li>
                <li><Link href="/begrippenlijst" className="text-gray-300 hover:text-white transition-colors">Begrippenlijst</Link></li>
              </ul>
            </nav>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">
              Informatie
            </h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-300">Tarieven: maart 2026</span></li>
              <li><span className="text-gray-300">Gemiddeld verbruik: 2.400 kWh / 1.000 m³</span></li>
              <li><span className="text-gray-300">Inclusief belastingen</span></li>
            </ul>

            <h3 className="font-semibold mt-6 mb-3 text-sm uppercase tracking-wider text-gray-400">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@energiekenner.nl" className="text-gray-300 hover:text-white transition-colors">
                  info@energiekenner.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>Prijzen zijn indicatief en kunnen afwijken. Controleer altijd de actuele tarieven bij de leverancier zelf.</p>
            <p className="whitespace-nowrap">&copy; {currentYear} Energiekenner.nl. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
