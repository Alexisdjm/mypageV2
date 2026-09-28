import { seo, getSeoSiteOrigin } from "@/src/config/seo";

export default function PersonJsonLd() {
  const url = getSeoSiteOrigin();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}/#person`,
    name: seo.personName,
    alternateName: seo.personNameAlt,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      name: seo.siteTitle,
      description: seo.description,
      url,
      inLanguage: ["en", "es"],
    },
    jobTitle: seo.jobTitle,
    sameAs: [...seo.sameAs],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
