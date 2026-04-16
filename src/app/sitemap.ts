import { MetadataRoute } from "next";

const BASE_URL = "https://alloutwindowtint.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/locations`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/locations/gonzales`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/locations/baton-rouge`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/gallery`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/franchise`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const primaryServicePages = [
    "automotive-tinting",
    "residential-tinting",
    "commercial-tinting",
    "marine-tinting",
    "paint-protection-film",
    "vehicle-wraps",
    "ceramic-coating",
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const cities = ["gonzales", "baton-rouge"];
  const services = [
    "automotive-tinting",
    "residential-tinting",
    "commercial-tinting",
    "marine-tinting",
    "paint-protection-film",
    "vehicle-wraps",
  ];

  const cityServicePages = cities.flatMap((city) =>
    services.map((service) => ({
      url: `${BASE_URL}/services/${service}/${city}`,
      priority: 0.75,
      changeFrequency: "monthly" as const,
    }))
  );

  return [...staticPages, ...primaryServicePages, ...cityServicePages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
