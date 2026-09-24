import type { ServicesProps } from "@/src/components/Services";

export const homeServices: ServicesProps = {
  heading: "Services & solutions",
  subtitle: "Have a specific project or platform in mind? Reach out to discuss scope, timelines, and custom quotes.",
  ctaLabel: "Start a Project",
  cards: [
    {
      title: "Custom Websites",
      description:
        "Landing pages, redesigns, and fully custom sites—made to feel like your brand and turn visitors into clients.",
      icon: "frontend",
    },
    {
      title: "Custom Apps & Systems",
      description:
        "I build complete products around your business: dashboards, portals, and tools your team can actually use.",
      icon: "backend",
    },
    {
      title: "Shopify & CMS",
      description:
        "I upgrade Shopify, WordPress, and Webflow sites—custom sections, apps, and themes that feel unique and sell more.",
      icon: "commerce",
    },
    {
      title: "Product Design",
      description:
        "Landings, web apps, and mobile—designed to look premium, feel simple, and get people to take action.",
      icon: "design",
    },
  ],
};
