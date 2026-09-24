import type { WorkProps } from "@/src/components/Work";

export const homeWork: WorkProps = {
  heading: "Recent Work",
  subtitle: "Selected work focused on performance, user experience, and business growth.",
  projects: [
    {
      title: "Sazonova — E-Commerce Funnel & Brand Landing page",
      description:
        "A high-converting site designed to showcase a digital product, highlight premium seasoning products, and drive B2B supplier acquisition.",
      tags: ["Next.js", "React", "Shopify", "Figma"],
      image: "/Work/sazonova-web.webp",
      imageBg: "#7D030A",
      url: "https://mysazonova.com",
    },
    {
      title: "La Casa de los Condimentos — E-Commerce",
      description:
        "An online store built to make buying spices feel simple and premium—clear catalog, fast search, and a checkout path that keeps people buying.",
      tags: ["Shopify", "Liquid", "React", "Figma"],
      image: "/Work/condimentos-web.webp",
      imageBg: "#F78812",
      url: "https://casacondimentos.com",
    },
    {
      title: "Condominios Ya — Dashboard & Landing",
      description:
        "A complete product for building management: a marketing landing and a clear dashboard so admins can track payments, residents, and day-to-day operations.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
      image: "/Work/condominios-web.webp",
      imageBg: "#4AB7AD",
      url: "https://condominios-ya.com",
    },
    {
      title: "Athlix — Product Design",
      description:
        "UX/UI for a sports platform: athlete profiles, training flows, and a visual system that feels fast, competitive, and easy to scan on any screen.",
      tags: ["Figma", "UI/UX", "Prototyping"],
      image: "/Work/athlix Hero.webp",
      imageBg: "#48B000",
    },
    {
      title: "Kung Fu Sushi — Product Design",
      description:
        "End-to-end design for a sushi brand: ordering flows, menu browsing, and a look that feels bold in the kitchen and calm at checkout.",
      tags: ["Figma", "UI/UX", "Mobile"],
      image: "/Work/Kung Fu sushi Hero.webp",
      imageBg: "#9B352E",
    },
    {
      title: "Traveza — Product Design",
      description:
        "A travel product designed around planning and booking: destinations, itineraries, and a clean interface that makes the next trip feel obvious.",
      tags: ["Figma", "UI/UX", "Web App"],
      image: "/Work/traveza Hero.webp",
      imageBg: "#31A296",
    },
  ],
};
