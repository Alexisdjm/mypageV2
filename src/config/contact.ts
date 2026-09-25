export const contactSection = {
  headingLine1: "Let's build something",
  headingLine2: "great together",
  subtitle:
    "Have a new project in mind, need a custom Shopify theme, or want to scale your current web application? Fill out the form or reach out directly.",
} as const;

export const contactProjectTypes = [
  "Custom website",
  "Shopify / E-commerce",
  "Web application",
  "Product design",
  "Other",
] as const;

export type ContactProjectType = (typeof contactProjectTypes)[number];
