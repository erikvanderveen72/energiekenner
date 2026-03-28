import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energieverbruik per Apparaat 2026 - Kosten & Bespaartips | Energiekenner.nl",
  description:
    "Wat verbruikt jouw huishouden aan energie? Bekijk het verbruik per apparaat, kosten per seizoen en bespaar tot €500/jaar. Inclusief EV-laadkosten en energielabels.",
  alternates: {
    canonical: "https://energiekenner.nl/verbruik",
  },
  openGraph: {
    title: "Energieverbruik per Apparaat 2026 - Kosten & Bespaartips",
    description:
      "Wat verbruikt jouw huishouden aan energie? Bekijk het verbruik per apparaat, kosten per seizoen en bespaar tot €500/jaar.",
    url: "https://energiekenner.nl/verbruik",
  },
};

export const revalidate = 3600;

export default function VerbruikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
