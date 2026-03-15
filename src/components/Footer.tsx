import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-text-main text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-white text-sm font-bold">
                Ek
              </div>
              <span className="font-bold text-lg">Energiekenner<span className="text-primary text-sm font-medium">.nl</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Onafhankelijk energietarieven vergelijken. Alle data is gebaseerd op actuele marktprijzen van maart 2026.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">
              Vergelijken
            </h3>
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
              <li><Link href="/laadpalen" className="text-gray-300 hover:text-white transition-colors">Laadpalen & EV</Link></li>
              <li><Link href="/netbeheer" className="text-gray-300 hover:text-white transition-colors">Netbeheerkosten</Link></li>
            </ul>
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
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
          <p>Prijzen zijn indicatief en kunnen afwijken. Controleer altijd de actuele tarieven bij de leverancier zelf.</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Energievergelijker. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
