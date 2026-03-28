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
      availableLanguage: ["Dutch", "nl"],
      areaServed: "NL",
      email: "info@energiekenner.nl",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Netherlands",
        "@id": "https://www.wikidata.org/wiki/Q55",
      },
      // Provincies voor geo-targeting
      { "@type": "AdministrativeArea", name: "Noord-Holland" },
      { "@type": "AdministrativeArea", name: "Zuid-Holland" },
      { "@type": "AdministrativeArea", name: "Utrecht" },
      { "@type": "AdministrativeArea", name: "Noord-Brabant" },
      { "@type": "AdministrativeArea", name: "Gelderland" },
      { "@type": "AdministrativeArea", name: "Overijssel" },
      { "@type": "AdministrativeArea", name: "Limburg" },
      { "@type": "AdministrativeArea", name: "Friesland" },
      { "@type": "AdministrativeArea", name: "Groningen" },
      { "@type": "AdministrativeArea", name: "Drenthe" },
      { "@type": "AdministrativeArea", name: "Flevoland" },
      { "@type": "AdministrativeArea", name: "Zeeland" },
    ],
    knowsAbout: [
      "Energie vergelijken",
      "Energietarieven",
      "Energieleveranciers Nederland",
      "Dynamische energie",
      "Zonnepanelen",
      "Warmtepompen",
      "Salderingsregeling",
      "Energiewet 2026",
      "Netbeheerkosten",
      "Thuisbatterij",
      "Laadpalen",
      "Energiebesparing",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function GeoTargetingSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Energie Vergelijken Nederland 2026",
    url: "https://energiekenner.nl",
    inLanguage: "nl-NL",
    isPartOf: {
      "@type": "WebSite",
      name: "Energiekenner.nl",
      url: "https://energiekenner.nl",
    },
    about: {
      "@type": "Thing",
      name: "Energieprijzen in Nederland",
      description: "Actuele energietarieven vergelijken voor Nederlandse huishoudens",
    },
    spatialCoverage: {
      "@type": "Country",
      name: "Netherlands",
      identifier: "NL",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.1326,
        longitude: 5.2913,
      },
      containsPlace: [
        {
          "@type": "City",
          name: "Amsterdam",
          geo: { "@type": "GeoCoordinates", latitude: 52.3676, longitude: 4.9041 },
        },
        {
          "@type": "City",
          name: "Rotterdam",
          geo: { "@type": "GeoCoordinates", latitude: 51.9225, longitude: 4.4792 },
        },
        {
          "@type": "City",
          name: "Den Haag",
          geo: { "@type": "GeoCoordinates", latitude: 52.0705, longitude: 4.3007 },
        },
        {
          "@type": "City",
          name: "Utrecht",
          geo: { "@type": "GeoCoordinates", latitude: 52.0907, longitude: 5.1214 },
        },
        {
          "@type": "City",
          name: "Eindhoven",
          geo: { "@type": "GeoCoordinates", latitude: 51.4416, longitude: 5.4697 },
        },
        {
          "@type": "City",
          name: "Groningen",
          geo: { "@type": "GeoCoordinates", latitude: 53.2194, longitude: 6.5665 },
        },
        {
          "@type": "City",
          name: "Tilburg",
          geo: { "@type": "GeoCoordinates", latitude: 51.5555, longitude: 5.0913 },
        },
        {
          "@type": "City",
          name: "Almere",
          geo: { "@type": "GeoCoordinates", latitude: 52.3508, longitude: 5.2647 },
        },
        {
          "@type": "City",
          name: "Breda",
          geo: { "@type": "GeoCoordinates", latitude: 51.5719, longitude: 4.7683 },
        },
        {
          "@type": "City",
          name: "Nijmegen",
          geo: { "@type": "GeoCoordinates", latitude: 51.8126, longitude: 5.8372 },
        },
      ],
    },
    audience: {
      "@type": "Audience",
      audienceType: "Nederlandse huishoudens",
      geographicArea: {
        "@type": "Country",
        name: "Netherlands",
      },
    },
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
