import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://energiekenner.nl";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/dynamisch`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/zonnepanelen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/thuisbatterij`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/energiewet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/duurzaamheid`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/tips`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/netbeheer`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
