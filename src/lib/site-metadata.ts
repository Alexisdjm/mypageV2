import type { Metadata } from "next";
import { seo, getSeoSiteOrigin } from "@/src/config/seo";
import { getGoogleSiteVerification } from "@/src/env/server";

export function buildSiteMetadata(): Metadata {
  const siteOrigin = getSeoSiteOrigin();
  const { personName, personNameAlt, siteTitle, description, localeDefault, localeAlternates } =
    seo;

  const googleVerification = getGoogleSiteVerification();

  const keywords = [
    personName,
    personNameAlt,
    `${personName} portfolio`,
    `${personNameAlt} portfolio`,
    `${personName} developer`,
    `${personNameAlt} developer`,
    "Alexis Jiménez website",
    "Alexis Jimenez website",
  ];

  return {
    metadataBase: new URL(siteOrigin),
    title: {
      default: siteTitle,
      template: `%s | ${personName}`,
    },
    description,
    keywords,
    authors: [{ name: personName, url: siteOrigin }],
    creator: personName,
    publisher: personName,
    applicationName: personName,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: localeDefault,
      alternateLocale: [...localeAlternates],
      url: "/",
      siteName: personName,
      title: siteTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description,
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "portfolio",
    ...(googleVerification ? { verification: { google: googleVerification } } : {}),
  };
}
