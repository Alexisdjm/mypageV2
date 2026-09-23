import type { ExperienceSliderProps } from "@/src/components/ExperienceSlider";

export const homeExperience: ExperienceSliderProps = {
  heading: "My Experience",
  subtitle: "Total 5 years of experience in different companies around the world",
  cards: [
    { company: "QodeSpace", role: "Shopify & E-commerce Expert", logo: "/experience/qode.png" },
    { company: "Nativepath", role: "Shopify & React Developer", logo: "/experience/nativepath.png" },
    { company: "Colored Byte", role: "Shopify & React Specialist", logo: "/experience/colored.png" },
    { company: "The Indie Collab", role: "Shopify and UI Architect", logo: "/experience/the-indie.png" },
    { company: "Meraki Vision", role: "Shopify & React Developer", logo: "/experience/meraki.png" },
  ],
  summary: [
    {
      text: "Working with global brands has allowed me to master multiple domains—from bespoke e-commerce platforms and visual CMS builders, to modern web apps built with ",
    },
    { text: "React", emphasis: true },
    { text: " and " },
    { text: "Next.js", emphasis: true },
    { text: ". I focus on delivering scalable code crafted with " },
    { text: "accessibility", emphasis: true },
    { text: " standards and " },
    { text: "SEO", emphasis: true },
    { text: " best practices at its core." },
  ],
};
