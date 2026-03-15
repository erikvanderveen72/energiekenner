import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Energievergelijker 2026 | Bespaar tot €450 op je energierekening",
  description:
    "Vergelijk alle energieleveranciers in Nederland. Actuele tarieven maart 2026 voor stroom en gas. Vaste, variabele en dynamische contracten.",
  keywords: [
    "energievergelijker",
    "energie vergelijken",
    "stroom vergelijken",
    "gas vergelijken",
    "energietarieven 2026",
    "goedkoopste energie",
  ],
  openGraph: {
    title: "Energievergelijker 2026 | Bespaar tot €450",
    description:
      "Vergelijk alle energieleveranciers en bespaar op je energierekening.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
