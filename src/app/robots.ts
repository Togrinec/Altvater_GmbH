import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Alle Crawler: öffentliche Seiten erlaubt
        userAgent: "*",
        allow: "/",
        disallow: [
          "/portal/",   // Händler- und Kundenportal nicht crawlen
          "/api/",      // API-Routen nicht indexieren
        ],
      },
    ],
    sitemap: "https://www.altvater.de/sitemap.xml",
    host:    "https://www.altvater.de",
  };
}
