import type { Messages } from "./types";

export const es = {
  nav: {
    howIHelp: "Cómo ayudo",
    experience: "Experiencia",
    services: "Servicios",
    work: "Proyectos",
    stack: "Stack",
    contactMe: "Contáctame",
    mainAria: "Principal",
    mobileAria: "Móvil",
    closeMenu: "Cerrar menú",
    menuDialog: "Menú",
    skipToContent: "Saltar al contenido principal",
    homeAria: "Inicio",
  },
  footer: {
    index: "Índice",
    socialTitle: "Social",
    basedIn: "Ubicación",
    location: "Venezuela",
    rights: "Todos los derechos reservados",
    indexNavAria: "Índice del pie de página",
    socialNavAria: "Enlaces sociales",
    languageAria: "Idioma del sitio",
    socialLinks: {
      email: "Email",
      github: "Github",
      linkedin: "Linkedin",
      instagram: "Instagram",
    },
  },
  hero: {
    greeting: "Hola, soy Alexis 👋",
    title: {
      before: "Creando",
      highlight: "Web Apps modernas",
      after: "y tiendas digitales escalables",
    },
    description:
      "Especializado en interfaces rápidas con Next.js, storefronts Shopify a medida y aplicaciones web pixel-perfect para elevar tu marca y maximizar ventas.",
    primaryLabel: "Mi currículum",
    secondaryLabel: "Ver proyectos",
  },
  techSliderAria: "Tecnologías",
  experience: {
    heading: "Mi experiencia",
    subtitle: [
      { text: "Más de " },
      { text: "5 años", emphasis: true },
      { text: " de experiencia en empresas de distintas partes del mundo" },
    ],
    cards: [
      { company: "QodeSpace", role: "Experto Shopify y E-commerce", logo: "/experience/qode.png", url: "https://qodespace.com" },
      { company: "Nativepath", role: "Desarrollador Shopify y React", logo: "/experience/nativepath.png", url: "https://nativepath.com" },
      { company: "Colored Byte", role: "Especialista Shopify y React", logo: "/experience/colored.png", url: "https://coloredbyte.com" },
      { company: "The Indie Collab", role: "Arquitecto Shopify y UI", logo: "/experience/the-indie.png", url: "https://theindiecollab.com" },
      { company: "Meraki Vision", role: "Desarrollador Shopify y React", logo: "/experience/meraki.png", url: "https://merakivision.com" },
    ],
    summary: [
      { text: "Trabajar con marcas globales me permitió dominar varios ámbitos—desde e-commerce a medida y CMS visuales hasta apps modernas con " },
      { text: "React", emphasis: true },
      { text: " y " },
      { text: "Next.js", emphasis: true },
      { text: ". Me enfoco en código escalable con " },
      { text: "accesibilidad", emphasis: true },
      { text: " y buenas prácticas de " },
      { text: "SEO", emphasis: true },
      { text: " en el centro." },
    ],
    sliderAria: "Empresas y roles",
    externalLinkHint: "Abre el sitio de la empresa en una pestaña nueva",
  },
  capability: {
    titleLine1: "Lo que necesites,",
    titleLine2: "hecho bien",
    description:
      "Desde funciones personalizadas en Shopify hasta aplicaciones web a escala: aplico años de experiencia, arquitectura limpia y tecnología moderna para construir exactamente lo que tu negocio requiere.",
    features: [
      {
        metric: "+100",
        label: "Tiendas y lógica",
        description: "Desarrollos Shopify a medida según tus especificaciones",
      },
      {
        metric: "+6",
        label: "Equipos y agencias",
        description: "Flujo de trabajo internacional y estándares de equipo",
      },
      {
        metric: "100%",
        label: "SEO y estándares",
        description: "Código accesible y listo para buscadores por defecto",
      },
      {
        metric: "Full-Stack",
        label: "Apps web a medida",
        description: "Construidas desde cero según tus necesidades",
      },
      {
        metric: "Global",
        label: "Cualquier ubicación",
        description: "Ejecución transfronteriza para cualquier alcance de proyecto",
      },
    ],
  },
  services: {
    heading: "Servicios y soluciones",
    subtitle: "¿Tienes un proyecto o plataforma en mente? Escríbeme para hablar de alcance, tiempos y presupuesto.",
    ctaLabel: "Iniciar proyecto",
    sliderAria: "Servicios ofrecidos",
    cards: [
      {
        title: "Sitios web a medida",
        description:
          "Landings, rediseños y sitios completos—hechos para tu marca y para convertir visitas en clientes.",
        icon: "frontend",
      },
      {
        title: "Apps y sistemas",
        description:
          "Productos completos para tu negocio: dashboards, portales y herramientas que tu equipo usa de verdad.",
        icon: "backend",
      },
      {
        title: "Shopify y CMS",
        description:
          "Mejoro Shopify, WordPress y Webflow—secciones, apps y temas únicos que venden más.",
        icon: "commerce",
      },
      {
        title: "Diseño de producto",
        description:
          "Landings, web apps y mobile—premium, simples y orientados a la acción.",
        icon: "design",
      },
    ],
  },
  work: {
    heading: "Proyectos recientes",
    subtitle: "Trabajo seleccionado enfocado en rendimiento, experiencia de usuario y crecimiento del negocio.",
    visitSite: "Visitar sitio",
    projects: [
      {
        title: "Sazonova — Embudo e-commerce y landing de marca",
        description:
          "Sitio de alta conversión para mostrar el producto digital, destacar condimentos premium y captar proveedores B2B.",
        tags: ["Next.js", "React", "Shopify", "Figma"],
        image: "/Work/sazonova-web.webp",
        imageBg: "#7D030A",
        url: "https://mysazonova.com",
      },
      {
        title: "La Casa de los Condimentos — E-commerce",
        description:
          "Tienda online para comprar especias de forma simple y premium—catálogo claro, búsqueda rápida y checkout que invita a repetir.",
        tags: ["Shopify", "Liquid", "React", "Figma"],
        image: "/Work/condimentos-web.webp",
        imageBg: "#F78812",
        url: "https://casacondimentos.com",
      },
      {
        title: "Condominios Ya — Dashboard y landing",
        description:
          "Producto para administración de edificios: landing de marketing y dashboard para pagos, residentes y operación diaria.",
        tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
        image: "/Work/condominios-web.webp",
        imageBg: "#4AB7AD",
        url: "https://condominios-ya.com",
      },
      {
        title: "Athlix — Diseño de producto",
        description:
          "UX/UI para plataforma deportiva: perfiles, flujos de entrenamiento y un sistema visual rápido y competitivo.",
        tags: ["Figma", "UI/UX", "Prototyping"],
        image: "/Work/athlix Hero.webp",
        imageSecondary: "/Work/athlix complete.webp",
        heroPreviewTopInset: "clamp(1rem, 6%, 2.5rem)",
        imageBg: "#48B000",
      },
      {
        title: "Kung Fu Sushi — Diseño de producto",
        description:
          "Diseño integral para marca de sushi: pedidos, menú y una estética audaz en cocina y calmada en checkout.",
        tags: ["Figma", "UI/UX", "Mobile"],
        image: "/Work/Kung Fu sushi Hero.webp",
        imageSecondary: "/Work/Kung Fu sushi complete.webp",
        imageBg: "#9B352E",
      },
      {
        title: "Traveza — Diseño de producto",
        description:
          "Producto de viajes para planificar y reservar: destinos, itinerarios e interfaz clara para el próximo viaje.",
        tags: ["Figma", "UI/UX", "Web App"],
        image: "/Work/traveza Hero.webp",
        imageSecondary: "/Work/traveza complete.webp",
        imageBg: "#31A296",
      },
    ],
  },
  workflow: {
    heading: "Flujo de trabajo",
    subtitle:
      "De la auditoría y el diseño a la ejecución—un proceso flexible para proyectos nuevos, rediseños y mejoras de plataforma.",
    cards: [
      {
        title: "Descubrimiento estratégico",
        description: "Definir alcance o auditar sitios existentes para mejoras clave.",
        icon: "/Workflow/search-_5_.webp",
      },
      {
        title: "Arquitectura visual",
        description: "Prototipos Figma de alta fidelidad y recorridos intuitivos.",
        icon: "/Workflow/art.webp",
      },
      {
        title: "Desarrollo",
        description: "Apps y tiendas escalables con React, Next.js, Django y Shopify.",
        icon: "/Workflow/setting.webp",
      },
      {
        title: "QA y entrega",
        description: "Pruebas de rendimiento, SEO y accesibilidad antes del lanzamiento.",
        icon: "/Workflow/insect-_1_.webp",
      },
    ],
  },
  stack: {
    heading: "Mi stack",
    subtitle: "Herramientas que uso para diseñar, desarrollar y lanzar productos de punta a punta.",
    sliderAriaLabel: "Herramientas y tecnologías",
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
  },
  contact: {
    headingLine1: "Construyamos algo",
    headingLine2: "genial juntos",
    subtitle:
      "¿Nuevo proyecto, tema Shopify a medida o escalar tu app web? Completa el formulario o escríbeme directamente.",
    projectTypes: [
      { value: "custom-website", label: "Sitio web a medida" },
      { value: "shopify", label: "Shopify / E-commerce" },
      { value: "web-app", label: "Aplicación web" },
      { value: "product-design", label: "Diseño de producto" },
      { value: "other", label: "Otro" },
    ],
    form: {
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo electrónico",
      projectType: "Tipo de proyecto",
      message: "Mensaje",
      send: "Enviar",
      sending: "Enviando…",
      success: "Gracias — tu mensaje se envió correctamente.",
      errorGeneric: "Algo salió mal. Inténtalo de nuevo.",
      errorNetwork: "Error de red. Revisa tu conexión e inténtalo de nuevo.",
    },
  },
  site: {
    authorName: "Alexis Jiménez",
    copyrightYear: 2026,
    resumePath: "/Docs/AJCV2026_ES.pdf",
    resumeDownloadName: "Alexis-Jimenez-CV-2026-ES.pdf",
    scrollToTopAria: "Volver arriba",
    notFoundBackHome: "Volver al inicio",
    notFoundHeading: "No encontrado",
  },
} satisfies Messages;
