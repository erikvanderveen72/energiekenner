import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-text-main text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-lg">Energievergelijker</span>
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
