import type { MetadataRoute } from "next";
import { getSeoSiteOrigin } from "@/src/config/seo";

export default function robots(): MetadataRoute.Robots {
  const origin = getSeoSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
