import type { MetadataRoute } from "next";
import { seo, getSeoSiteOrigin } from "@/src/config/seo";

export default function manifest(): MetadataRoute.Manifest {
  const origin = getSeoSiteOrigin();

  return {
    name: seo.siteTitle,
    short_name: seo.shortTitle,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "en",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
