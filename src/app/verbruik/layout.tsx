import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energieverbruik: Apparaten & Kosten 2026 | Energiekenner.nl",
  description:
    "Ontdek energieverbruik per apparaat en bespaartips voor gas en stroom in Nederland. Vergelijk kosten per seizoen, energielabel en activiteit.",
  alternates: {
    canonical: "https://energiekenner.nl/verbruik",
  },
  openGraph: {
    title: "Energieverbruik: Apparaten & Kosten 2026",
    description:
      "Ontdek energieverbruik per apparaat en bespaartips voor gas en stroom in Nederland.",
    url: "https://energiekenner.nl/verbruik",
    type: "article",
  },
};

export default function VerbruikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
