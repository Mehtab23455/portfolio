import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mehtabsinghsidhu.com",
      // Use a static date string to allow Next.js to compile it statically
      lastModified: "2026-07-16", 
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}