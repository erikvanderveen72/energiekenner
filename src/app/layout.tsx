import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WebsiteSchema, OrganizationSchema } from "@/components/StructuredData";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Energie Vergelijken 2026 - Onafhankelijk & Gratis | Energiekenner.nl",
    description: "Vergelijk alle energieleveranciers op actuele tarieven. Bespaar tot €450 per jaar op stroom en gas.",
  },
  alternates: {
    canonical: "https://energiekenner.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MZM9PLZKZX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MZM9PLZKZX');
            `,
          }}
        />
        <WebsiteSchema />
        <OrganizationSchema />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
