export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Shopify",
  "Liquid",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "HTML",
  "CSS",
  "Git",
  "Jenkins",
  "Docker",
  "GraphQL",
  "Figma",
] as const;

export type TechName = (typeof techStack)[number];
