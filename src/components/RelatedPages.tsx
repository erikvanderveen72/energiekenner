import Link from "next/link";

interface RelatedPage {
  href: string;
  title: string;
  description: string;
  color: string;
  hoverColor: string;
}

const allPages: Record<string, RelatedPage> = {
  vergelijker: {
    href: "/",
    title: "Energie Vergelijken",
    description: "Vergelijk alle energieleveranciers op actuele tarieven.",
    color: "border-sky-200",
    hoverColor: "hover:border-sky-400",
  },
  dynamisch: {
    href: "/dynamisch",
    title: "Dynamische Tarieven",
    description: "Vergelijk Frank Energie, Tibber, Zonneplan en meer.",
    color: "border-purple-200",
    hoverColor: "hover:border-purple-400",
  },
  zonnepanelen: {
    href: "/zonnepanelen",
    title: "Zonnepanelen",
    description: "Terugleverkosten vergeleken per leverancier.",
    color: "border-amber-200",
    hoverColor: "hover:border-amber-400",
  },
  warmtepompen: {
    href: "/warmtepompen",
    title: "Warmtepompen",
    description: "Types, ISDE-subsidie en terugverdientijd.",
    color: "border-rose-200",
    hoverColor: "hover:border-rose-400",
  },
  calculator: {
    href: "/calculator",
    title: "Energiecalculator",
    description: "Bereken je exacte maandkosten.",
    color: "border-indigo-200",
    hoverColor: "hover:border-indigo-400",
  },
  salderen: {
    href: "/salderen",
    title: "Salderingsregeling",
    description: "Salderen stopt in 2027 — wat betekent dit?",
    color: "border-orange-200",
    hoverColor: "hover:border-orange-400",
  },
  thuisbatterij: {
    href: "/thuisbatterij",
    title: "Thuisbatterij & V2G",
    description: "Sla zonnestroom op en verdien terug.",
    color: "border-sky-200",
    hoverColor: "hover:border-sky-400",
  },
  energiewet: {
    href: "/energiewet",
    title: "Energiewet 2026",
    description: "Je nieuwe rechten als consument.",
    color: "border-indigo-200",
    hoverColor: "hover:border-indigo-400",
  },
  tips: {
    href: "/tips",
    title: "Bespaartips",
    description: "Concrete besparingen met bedragen.",
    color: "border-amber-200",
    hoverColor: "hover:border-amber-400",
  },
  verbruik: {
    href: "/verbruik",
    title: "Energieverbruik",
    description: "Verbruik per apparaat en seizoen.",
    color: "border-violet-200",
    hoverColor: "hover:border-violet-400",
  },
  netbeheer: {
    href: "/netbeheer",
    title: "Netbeheerkosten",
    description: "Vergelijk Liander, Enexis, Stedin.",
    color: "border-emerald-200",
    hoverColor: "hover:border-emerald-400",
  },
  opzegvergoeding: {
    href: "/opzegvergoeding",
    title: "Opzegvergoeding",
    description: "Wat kost voortijdig opzeggen?",
    color: "border-red-200",
    hoverColor: "hover:border-red-400",
  },
  laadpalen: {
    href: "/laadpalen",
    title: "Laadpalen & EV",
    description: "Thuis laden en kosten vergeleken.",
    color: "border-teal-200",
    hoverColor: "hover:border-teal-400",
  },
  "slimme-technologie": {
    href: "/slimme-technologie",
    title: "Slim Energie Sturen",
    description: "P1-meter, HEMS en dynamische tarieven.",
    color: "border-cyan-200",
    hoverColor: "hover:border-cyan-400",
  },
  duurzaamheid: {
    href: "/duurzaamheid",
    title: "Groene Stroom",
    description: "GvO-check en anti-greenwashing regels.",
    color: "border-green-200",
    hoverColor: "hover:border-green-400",
  },
  "energie-delen": {
    href: "/energie-delen",
    title: "Energie Delen",
    description: "Samen energie opwekken en gebruiken.",
    color: "border-emerald-200",
    hoverColor: "hover:border-emerald-400",
  },
  "energie-apps": {
    href: "/energie-apps",
    title: "Energie-Apps",
    description: "De beste apps om je verbruik te monitoren.",
    color: "border-blue-200",
    hoverColor: "hover:border-blue-400",
  },
  begrippenlijst: {
    href: "/begrippenlijst",
    title: "Begrippenlijst",
    description: "75+ energietermen uitgelegd.",
    color: "border-stone-300",
    hoverColor: "hover:border-stone-500",
  },
  energievergelijkers: {
    href: "/energievergelijkers",
    title: "Hoe werken vergelijkers?",
    description: "Commissies en ACM-toezicht uitgelegd.",
    color: "border-emerald-200",
    hoverColor: "hover:border-emerald-400",
  },
};

interface RelatedPagesProps {
  currentPage: string;
  relatedKeys: string[];
}

export function RelatedPages({ currentPage, relatedKeys }: RelatedPagesProps) {
  const pages = relatedKeys
    .filter((key) => key !== currentPage && allPages[key])
    .map((key) => allPages[key])
    .slice(0, 4);

  if (pages.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8">
      <h2 className="text-xl font-bold text-text-main mb-4">Gerelateerde onderwerpen</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className={`group rounded-xl border-2 ${page.color} ${page.hoverColor} bg-white p-5 hover:shadow-md transition-all`}
          >
            <h3 className="font-semibold text-text-main group-hover:text-primary transition-colors">
              {page.title}
            </h3>
            <p className="text-xs text-text-muted mt-1">{page.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
