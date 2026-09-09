import type { MetadataRoute } from "next";
import { PRODUCTS, REFERENZEN } from "@/lib/data";

const BASE = "https://www.altvater.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Statische Seiten
  const staticSeiten: MetadataRoute.Sitemap = [
    { url: BASE,                               lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/produkte`,                 lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/leistungen`,               lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/leistungen/gewerbebau/fassaden`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/leistungen/gewerbebau/daecher`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/leistungen/gewerbebau/abdichtungen`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/leistungen/gewerbebau/sonderanfertigungen`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/leistungen/privatbau/blechdach`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/leistungen/privatbau/dachrinnen`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/leistungen/privatbau/kaminverkleidungen`,lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/leistungen/privatbau/kundendienst`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/referenzen`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/unternehmen`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/unternehmen/team`,         lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/unternehmen/qualitaet`,    lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE}/unternehmen/karriere`,     lastModified: now, changeFrequency: "weekly",  priority: 0.6 },
    { url: `${BASE}/downloads`,                lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/kontakt`,                  lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${BASE}/impressum`,                lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/datenschutz`,              lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];

  // Produktseiten (dynamisch)
  const produktSeiten: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${BASE}/produkte/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Referenzseiten (dynamisch)
  const referenzSeiten: MetadataRoute.Sitemap = REFERENZEN.map((r) => ({
    url: `${BASE}/referenzen/${r.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // Portal-Seiten NICHT in Sitemap (kein crawling erwünscht)

  return [...staticSeiten, ...produktSeiten, ...referenzSeiten];
}
