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
    default: "Energiekenner.nl | Vergelijk Energieleveranciers 2026",
    template: "%s | Energiekenner.nl",
  },
  description:
    "Vergelijk alle energieleveranciers in Nederland. Actuele tarieven maart 2026 voor stroom en gas. Vaste, variabele en dynamische contracten.",
  keywords: [
    "energievergelijker",
    "energie vergelijken",
    "stroom vergelijken",
    "gas vergelijken",
    "energietarieven 2026",
    "goedkoopste energie",
    "energiekenner",
    "thuisbatterij",
    "dynamische energie",
    "zonnepanelen",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://energiekenner.nl"),
  openGraph: {
    title: "Energiekenner.nl | Vergelijk & Bespaar op Energie",
    description:
      "Vergelijk alle energieleveranciers en bespaar tot €450 op je energierekening.",
    type: "website",
    locale: "nl_NL",
    siteName: "Energiekenner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energiekenner.nl | Vergelijk Energieleveranciers 2026",
    description: "Bespaar tot €450 op je energierekening. Vergelijk alle leveranciers.",
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
