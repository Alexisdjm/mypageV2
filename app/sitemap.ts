import type { MetadataRoute } from "next";
import { getSeoSiteOrigin } from "@/src/config/seo";
import { sitemapPaths } from "@/src/config/sitemap-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSeoSiteOrigin();
  const lastModified = new Date();

  return sitemapPaths.map((path) => ({
    url: `${origin}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
