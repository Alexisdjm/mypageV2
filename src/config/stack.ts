import type { StackProps } from "@/src/components/Stack/Stack";

export const homeStack: StackProps = {
  heading: "My Stack",
  subtitle: "The tools I use to design, build, and ship products end to end.",
  rows: [
    {
      size: "wide",
      direction: "left",
      duration: 54,
      cards: [
        { name: "ChatGPT", icon: "chatgpt" },
        { name: "Cursor", icon: "cursor" },
        { name: "Windows", icon: "windows" },
        { name: "Figma", icon: "figma" },
        { name: "GitHub", icon: "github" },
        { name: "Unity", icon: "unity" },
      ],
    },
    {
      size: "portrait",
      direction: "right",
      duration: 48,
      cards: [
        { name: "Next.js", icon: "nextjs" },
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Django", icon: "django" },
        { name: "Python", icon: "python" },
        { name: "PostgreSQL", icon: "postgres" },
      ],
    },
    {
      size: "portrait",
      direction: "left",
      duration: 36,
      cards: [
        { name: "JavaScript", icon: "js" },
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "Shopify", icon: "shopify" },
        { name: "Webflow", icon: "webflow" },
        { name: "WordPress", icon: "wordpress" },
      ],
    },
  ],
};
