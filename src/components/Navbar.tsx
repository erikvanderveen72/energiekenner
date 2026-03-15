"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Vergelijker" },
    { href: "/dynamisch", label: "Dynamisch" },
    { href: "/zonnepanelen", label: "Zonnepanelen" },
    { href: "/thuisbatterij", label: "Batterij & V2G" },
    { href: "/energiewet", label: "Energiewet" },
    { href: "/duurzaamheid", label: "Groen" },
    { href: "/tips", label: "Tips" },
    { href: "/netbeheer", label: "Netbeheer" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/favicon.svg" alt="Energiekenner logo" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-lg text-text-main">
              Energie<span className="text-primary">kenner</span><span className="text-primary text-sm font-medium">.nl</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-alt transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#vergelijk"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm"
            >
              Direct vergelijken
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-alt"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-alt"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#vergelijk"
              className="block mt-2 text-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Direct vergelijken
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
