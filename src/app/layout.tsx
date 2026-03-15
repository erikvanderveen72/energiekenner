import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WebsiteSchema, OrganizationSchema, ServiceSchema } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Energie Vergelijken 2026 | Bespaar tot €450 | Energiekenner.nl",
    template: "%s | Energiekenner.nl",
  },
  description:
    "Energie vergelijken? Vergelijk alle energieleveranciers in Nederland op actuele tarieven (maart 2026). Stroom, gas, vast & dynamisch. Onafhankelijk en gratis.",
  keywords: [
    "energie vergelijken",
    "energievergelijker",
    "energie vergelijken 2026",
    "stroom vergelijken",
    "gas vergelijken",
    "energieleveranciers vergelijken",
    "goedkoopste energie",
    "energietarieven 2026",
    "stroom en gas vergelijken",
    "energiekenner",
    "overstappen energie",
    "energiecontract vergelijken",
    "dynamische energie",
    "zonnepanelen",
    "energiekosten besparen",
    "energiecontract afsluiten",
    "beste energieleverancier",
    "energie overstappen 2026",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://energiekenner.nl"),
  openGraph: {
    title: "Energie Vergelijken 2026 | Bespaar tot €450 | Energiekenner.nl",
    description:
      "Energie vergelijken was nog nooit zo makkelijk. Vergelijk alle energieleveranciers op actuele tarieven en bespaar tot €450 per jaar.",
    type: "website",
    locale: "nl_NL",
    siteName: "Energiekenner.nl",
    url: "https://energiekenner.nl",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energie Vergelijken 2026 - Onafhankelijk & Gratis | Energiekenner.nl",
    description: "Vergelijk alle energieleveranciers op actuele tarieven. Bespaar tot €450 per jaar op stroom en gas.",
  },
  alternates: {
    canonical: "https://energiekenner.nl",
    languages: {
      "nl-NL": "https://energiekenner.nl",
    },
  },
  other: {
    "geo.region": "NL",
    "geo.placename": "Nederland",
    "geo.position": "52.3676;4.9041",
    "ICBM": "52.3676, 4.9041",
    "content-language": "nl",
    "rating": "general",
    "distribution": "global",
    "revisit-after": "3 days",
  },
  verification: {
    // Voeg hier je Google Search Console verificatie toe
    // google: "je-verificatie-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" dir="ltr" className={inter.variable}>
      <head>
        {/* Preconnect voor snellere externe resources */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <WebsiteSchema />
        <OrganizationSchema />
        <ServiceSchema />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold">
          Direct naar inhoud
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />

        {/* Google Analytics - afterInteractive voor betere performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MZM9PLZKZX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MZM9PLZKZX', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
