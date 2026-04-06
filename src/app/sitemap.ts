import type { MetadataRoute } from "next";
import { rooms } from "@/lib/data";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://palmaalacati.com";

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    // Home
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    });

    // Rooms listing
    entries.push({
      url: `${baseUrl}/${locale}/odalar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Individual rooms
    for (const room of rooms) {
      entries.push({
        url: `${baseUrl}/${locale}/odalar/${room.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }

    // Restaurant
    entries.push({
      url: `${baseUrl}/${locale}/restoran`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // Gallery
    entries.push({
      url: `${baseUrl}/${locale}/galeri`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });

    // About
    entries.push({
      url: `${baseUrl}/${locale}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });

    // Contact
    entries.push({
      url: `${baseUrl}/${locale}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
