import type { WorkflowProps } from "@/src/components/Workflow/Workflow";

export const homeWorkflow: WorkflowProps = {
  heading: "Workflow & Process",
  subtitle:
    "From audit and design to execution—a flexible process tailored for new builds, redesigns, and platform upgrades.",
  cards: [
    {
      title: "Strategic Discovery",
      description: "Defining project scope or auditing existing sites for key improvements.",
      icon: "/Workflow/search-_5_.webp",
    },
    {
      title: "Visual Architecture",
      description: "Crafting high-fidelity Figma prototypes and intuitive user journeys.",
      icon: "/Workflow/art.webp",
    },
    {
      title: "Development",
      description: "Building scalable apps and stores with React, Next.js, Django, and Shopify.",
      icon: "/Workflow/setting.webp",
    },
    {
      title: "QA and Handover",
      description: "Testing performance, SEO, and accessibility before deployment.",
      icon: "/Workflow/insect-_1_.webp",
    },
  ],
};
