import type { ExperienceSliderProps } from "@/src/components/ExperienceSlider";

export const homeExperience: ExperienceSliderProps = {
  heading: "My Experience",
  subtitle: [
    { text: "Total " },
    { text: "5 years", emphasis: true },
    { text: " of experience in different companies around the world" },
  ],
  cards: [
    { company: "QodeSpace", role: "Shopify & E-commerce Expert", logo: "/experience/qode.png", url: "https://qodespace.com" },
    { company: "Nativepath", role: "Shopify & React Developer", logo: "/experience/nativepath.png", url: "https://nativepath.com" },
    { company: "Colored Byte", role: "Shopify & React Specialist", logo: "/experience/colored.png", url: "https://coloredbyte.com" },
    { company: "The Indie Collab", role: "Shopify and UI Architect", logo: "/experience/the-indie.png", url: "https://theindiecollab.com" },
    { company: "Meraki Vision", role: "Shopify & React Developer", logo: "/experience/meraki.png", url: "https://merakivision.com" },
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
