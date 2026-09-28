import { getSiteOrigin } from "@/src/lib/site-url";

/** SEO copy — prioritize personal name discovery over service keywords. */
export const seo = {
  personName: "Alexis Jiménez",
  /** Common search variant without accent */
  personNameAlt: "Alexis Jimenez",
  siteTitle: "Alexis Jiménez — Official Portfolio",
  shortTitle: "Alexis Jiménez",
  description:
    "Official website of Alexis Jiménez (Alexis Jimenez). Portfolio, resume, contact, and selected work — the primary place to find Alexis Jiménez online.",
  localeDefault: "en_US" as const,
  localeAlternates: ["es_ES", "es_VE"] as const,
  sameAs: ["https://github.com/Alexisdjm"] as const,
  jobTitle: "Full-Stack Developer",
};

export function getSeoSiteOrigin(): string {
  return getSiteOrigin();
}
