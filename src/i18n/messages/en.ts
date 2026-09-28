import type { Messages } from "./types";

export const en: Messages = {
  nav: {
    howIHelp: "How I help",
    experience: "Experience",
    services: "Services",
    work: "Work",
    stack: "Stack",
    contactMe: "Contact me",
    mainAria: "Main",
    mobileAria: "Mobile",
    closeMenu: "Close menu",
    menuDialog: "Menu",
    skipToContent: "Skip to main content",
    homeAria: "Home",
  },
  footer: {
    index: "Index",
    socialTitle: "Social",
    basedIn: "Based in",
    location: "Venezuela",
    rights: "All rights reserved",
    indexNavAria: "Footer index",
    socialNavAria: "Social links",
    languageAria: "Site language",
    socialLinks: {
      email: "Email",
      github: "Github",
      linkedin: "Linkedin",
      instagram: "Instagram",
    },
  },
  hero: {
    greeting: "Hello, I'm Alexis 👋",
    title: {
      before: "Crafting Modern",
      highlight: "Web Apps &",
      after: "Scalable Digital Stores",
    },
    description:
      "Specialized in building fast Next.js interfaces, custom Shopify storefronts, and pixel-perfect web applications tailored to elevate your brand and maximize sales.",
    primaryLabel: "My resume",
    secondaryLabel: "See my work",
  },
  techSliderAria: "Technologies",
  experience: {
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
      { text: "Working with global brands has allowed me to master multiple domains—from bespoke e-commerce platforms and visual CMS builders, to modern web apps built with " },
      { text: "React", emphasis: true },
      { text: " and " },
      { text: "Next.js", emphasis: true },
      { text: ". I focus on delivering scalable code crafted with " },
      { text: "accessibility", emphasis: true },
      { text: " standards and " },
      { text: "SEO", emphasis: true },
      { text: " best practices at its core." },
    ],
    sliderAria: "Companies and roles",
    externalLinkHint: "Opens company website in a new tab",
  },
  capability: {
    titleLine1: "Whatever You Need,",
    titleLine2: "Built Right",
    description:
      "From custom Shopify features to full-scale web applications—I leverage years of hands-on experience, clean architecture, and modern tech to build exactly what your business requires.",
    features: [
      {
        metric: "+100",
        label: "Storefronts & Logic",
        description: "Custom Shopify builds tailored to your specs",
      },
      {
        metric: "+6",
        label: "Teams & Agencies",
        description: "International team workflow & standards",
      },
      {
        metric: "100%",
        label: "SEO & Standards",
        description: "Accessible, search ready code by default",
      },
      {
        metric: "Full-Stack",
        label: "Bespoke Web Apps",
        description: "Built from scratch to meet your needs",
      },
      {
        metric: "Global",
        label: "Any Location",
        description: "Cross-border execution for any project scope",
      },
    ],
  },
  services: {
    heading: "Services & solutions",
    subtitle: "Have a specific project or platform in mind? Reach out to discuss scope, timelines, and custom quotes.",
    ctaLabel: "Start a Project",
    sliderAria: "Services offered",
    cards: [
      {
        title: "Custom Websites",
        description:
          "Landing pages, redesigns, and fully custom sites—made to feel like your brand and turn visitors into clients.",
        icon: "frontend" as const,
      },
      {
        title: "Custom Apps & Systems",
        description:
          "I build complete products around your business: dashboards, portals, and tools your team can actually use.",
        icon: "backend" as const,
      },
      {
        title: "Shopify & CMS",
        description:
          "I upgrade Shopify, WordPress, and Webflow sites—custom sections, apps, and themes that feel unique and sell more.",
        icon: "commerce" as const,
      },
      {
        title: "Product Design",
        description:
          "Landings, web apps, and mobile—designed to look premium, feel simple, and get people to take action.",
        icon: "design" as const,
      },
    ],
  },
  work: {
    heading: "Recent Work",
    subtitle: "Selected work focused on performance, user experience, and business growth.",
    visitSite: "Visit site",
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
        imageSecondary: "/Work/athlix complete.webp",
        heroPreviewTopInset: "clamp(1rem, 6%, 2.5rem)",
        imageBg: "#48B000",
      },
      {
        title: "Kung Fu Sushi — Product Design",
        description:
          "End-to-end design for a sushi brand: ordering flows, menu browsing, and a look that feels bold in the kitchen and calm at checkout.",
        tags: ["Figma", "UI/UX", "Mobile"],
        image: "/Work/Kung Fu sushi Hero.webp",
        imageSecondary: "/Work/Kung Fu sushi complete.webp",
        imageBg: "#9B352E",
      },
      {
        title: "Traveza — Product Design",
        description:
          "A travel product designed around planning and booking: destinations, itineraries, and a clean interface that makes the next trip feel obvious.",
        tags: ["Figma", "UI/UX", "Web App"],
        image: "/Work/traveza Hero.webp",
        imageSecondary: "/Work/traveza complete.webp",
        imageBg: "#31A296",
      },
    ],
  },
  workflow: {
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
  },
  stack: {
    heading: "My Stack",
    subtitle: "The tools I use to design, build, and ship products end to end.",
    sliderAriaLabel: "Tools and technologies",
    rows: [
      {
        size: "wide" as const,
        direction: "left" as const,
        duration: 54,
        cards: [
          { name: "ChatGPT", icon: "chatgpt" as const },
          { name: "Cursor", icon: "cursor" as const },
          { name: "Windows", icon: "windows" as const },
          { name: "Figma", icon: "figma" as const },
          { name: "GitHub", icon: "github" as const },
          { name: "Unity", icon: "unity" as const },
        ],
      },
      {
        size: "portrait" as const,
        direction: "right" as const,
        duration: 48,
        cards: [
          { name: "Next.js", icon: "nextjs" as const },
          { name: "React", icon: "react" as const },
          { name: "Tailwind CSS", icon: "tailwind" as const },
          { name: "Django", icon: "django" as const },
          { name: "Python", icon: "python" as const },
          { name: "PostgreSQL", icon: "postgres" as const },
        ],
      },
      {
        size: "portrait" as const,
        direction: "left" as const,
        duration: 36,
        cards: [
          { name: "JavaScript", icon: "js" as const },
          { name: "HTML", icon: "html" as const },
          { name: "CSS", icon: "css" as const },
          { name: "Shopify", icon: "shopify" as const },
          { name: "Webflow", icon: "webflow" as const },
          { name: "WordPress", icon: "wordpress" as const },
        ],
      },
    ],
  },
  contact: {
    headingLine1: "Let's build something",
    headingLine2: "great together",
    subtitle:
      "Have a new project in mind, need a custom Shopify theme, or want to scale your current web application? Fill out the form or reach out directly.",
    projectTypes: [
      { value: "custom-website", label: "Custom website" },
      { value: "shopify", label: "Shopify / E-commerce" },
      { value: "web-app", label: "Web application" },
      { value: "product-design", label: "Product design" },
      { value: "other", label: "Other" },
    ],
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      projectType: "Project Type",
      message: "Message",
      send: "Send",
      sending: "Sending…",
      success: "Thanks — your message was sent successfully.",
      errorGeneric: "Something went wrong. Please try again.",
      errorNetwork: "Network error. Check your connection and try again.",
    },
  },
  site: {
    authorName: "Alexis Jiménez",
    copyrightYear: 2026,
    resumePath: "/Docs/AJCV2026.pdf",
    resumeDownloadName: "Alexis-Jimenez-CV-2026.pdf",
    scrollToTopAria: "Scroll to top",
  },
};

export type { Messages } from "./types";
