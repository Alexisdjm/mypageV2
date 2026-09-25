import { menuLinks } from "@/src/config/siteNav";

export const footerIndexLinks = menuLinks;

export const footerSocialLinks = [
  { label: "Email", href: "mailto:" },
  { label: "Github", href: "https://github.com/Alexisdjm" },
  { label: "Linkedin", href: "https://www.linkedin.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
] as const;

export const footerSite = {
  authorName: "Alexis Jiménez",
  basedIn: "Venezuela",
  wordEffectName: "Alexis Jiménez",
  copyrightYear: 2026,
  /** Default WordEffect cursor reveal — tune here or override via `<WordEffect />` props. */
  wordEffect: {
    baseColor: "#030303",
    glowColor: "#141414",
    glowRadius: 520,
    glowCore: 5,
    glowFalloff: 32,
  },
} as const;
