export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Energiekenner.nl",
    alternateName: ["Energiekenner", "Energie Vergelijken", "Energievergelijker"],
    url: "https://energiekenner.nl",
    description: "Energie vergelijken? Vergelijk alle energieleveranciers in Nederland op actuele tarieven. Stroom, gas, vast & dynamisch. Onafhankelijk en gratis.",
    inLanguage: "nl-NL",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://energiekenner.nl/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "Energiekenner.nl",
      url: "https://energiekenner.nl",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Energiekenner.nl",
    legalName: "Energiekenner",
    url: "https://energiekenner.nl",
    logo: {
      "@type": "ImageObject",
      url: "https://energiekenner.nl/logo.png",
      width: 512,
      height: 512,
    },
    description: "Onafhankelijk energie vergelijken in Nederland. Actuele tarieven, kennisbank en bespaartips voor consumenten.",
    foundingDate: "2025",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@energiekenner.nl",
      availableLanguage: ["Dutch", "nl"],
      areaServed: "NL",
    },
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
      "@id": "https://www.wikidata.org/wiki/Q55",
    },
    knowsAbout: [
      "Energie vergelijken",
      "Energietarieven",
      "Energieleveranciers Nederland",
      "Dynamische energie",
      "Zonnepanelen",
      "Warmtepompen",
      "Salderingsregeling",
      "Energiewet 2026",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Energie Vergelijken",
    description: "Gratis en onafhankelijk alle energieleveranciers in Nederland vergelijken op actuele tarieven.",
    provider: {
      "@type": "Organization",
      name: "Energiekenner.nl",
      url: "https://energiekenner.nl",
    },
    serviceType: "Energievergelijking",
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Consumenten",
      geographicArea: {
        "@type": "Country",
        name: "Netherlands",
      },
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Gratis energievergelijking",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ title, description, url, datePublished, dateModified }: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Energiekenner.nl",
      url: "https://energiekenner.nl",
    },
    publisher: {
      "@type": "Organization",
      name: "Energiekenner.nl",
      logo: {
        "@type": "ImageObject",
        url: "https://energiekenner.nl/logo.png",
      },
    },
    inLanguage: "nl-NL",
    isPartOf: {
      "@type": "WebSite",
      name: "Energiekenner.nl",
      url: "https://energiekenner.nl",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
