"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [meerOpen, setMeerOpen] = useState(false);
  const meerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (meerRef.current && !meerRef.current.contains(e.target as Node)) {
        setMeerOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const mainLinks = [
    { href: "/", label: "Vergelijker" },
    { href: "/dynamisch", label: "Dynamisch" },
    { href: "/zonnepanelen", label: "Zonnepanelen" },
    { href: "/calculator", label: "Calculator" },
  ];

  const meerLinks = [
    { href: "/warmtepompen", label: "Warmtepompen" },
    { href: "/thuisbatterij", label: "Thuisbatterij & V2G" },
    { href: "/slimme-technologie", label: "Slim Energie Sturen" },
    { href: "/energiewet", label: "Energiewet 2026" },
    { href: "/energievergelijkers", label: "Hoe werken vergelijkers?" },
    { href: "/duurzaamheid", label: "Groene stroom" },
    { href: "/tips", label: "Bespaartips" },
    { href: "/netbeheer", label: "Netbeheerkosten" },
  ];

  const allLinks = [...mainLinks, ...meerLinks];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 mr-8">
            <Image src="/favicon.svg" alt="Energiekenner logo" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-lg text-text-main whitespace-nowrap">
              Energie<span className="text-primary">kenner</span><span className="text-primary text-sm font-medium">.nl</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-alt transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}

            {/* Meer dropdown */}
            <div ref={meerRef} className="relative">
              <button
                onClick={() => setMeerOpen(!meerOpen)}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-alt transition-colors"
              >
                Meer
                <svg
                  className={`w-4 h-4 transition-transform ${meerOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {meerOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 rounded-xl border border-border bg-white shadow-lg py-2 z-50">
                  {meerLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-text-muted hover:text-text-main hover:bg-surface-alt transition-colors"
                      onClick={() => setMeerOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:block flex-shrink-0 ml-4">
            <Link
              href="/#vergelijk"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm whitespace-nowrap"
            >
              Direct vergelijken
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-alt"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-3 space-y-1">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-alt"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#vergelijk"
              className="block mt-2 text-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Direct vergelijken
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
