import type { Project, Role, SkillGroup } from "./types";

export const projects: Project[] = [
  {
    slug: "dar-al-asalah",
    name: "Dar Al-Asalah",
    tagline: "Arabic (RTL) storefront for coffee, oud and perfume",
    summary:
      "A full-stack Arabic storefront built right-to-left from the ground up — not a translated LTR layout. Customers browse, register, order and track; the owner manages catalogue and orders from an admin dashboard.",
    highlights: [
      "Checkout recomputes every order total server-side from the database, so a tampered client price never reaches an order.",
      "JWT + bcrypt auth with role-based access gating the admin dashboard.",
      "Express 5 REST API over MongoDB/Mongoose, deployed serverless.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/projects/dar-al-asalah.webp",
    liveUrl: "https://dar-al-asalah.vercel.app",
    repoUrl: "https://github.com/ziadfissal9-arch/dar-al-asalah",
  },
  {
    slug: "nexacommerce",
    name: "NexaCommerce",
    tagline: "Full-stack marketplace, storefront plus operations dashboard",
    summary:
      "A production-style marketplace in one TypeScript monorepo: a Next.js 16 storefront, an Express REST API and MongoDB Atlas, deployed end to end on Vercel Functions.",
    highlights: [
      "Hardened for production — rate limiting, security headers, CORS and cookie policy, each covered by its own test suite.",
      "Checkout, reviews and ratings, image handling and an analytics dashboard.",
      "Redux Toolkit for client state against a fully typed API layer.",
    ],
    tech: ["Next.js", "Node.js", "Express", "MongoDB Atlas", "Redux Toolkit"],
    image: "/images/projects/nexacommerce.webp",
    liveUrl: "https://nexacommerce-alpha.vercel.app",
    repoUrl: "https://github.com/ziadfissal9-arch/NexaCommerce",
  },
  {
    slug: "industryos-dashboard",
    name: "IndustryOS",
    tagline: "Operations analytics dashboard",
    summary:
      "An eight-view industrial monitoring dashboard: KPIs, device tables, alerts and maintenance schedules, all searchable and filterable, with interactive charts across every view.",
    highlights: [
      "Area, radar, bar and donut visualisations built with Recharts.",
      "Stateful interactions — acknowledge alerts, filter by status, severity and type.",
      "Route-based code splitting; layout holds from desktop down to mobile.",
    ],
    tech: ["React", "Recharts", "React Router", "Vite"],
    image: "/images/projects/industryos.webp",
    liveUrl: "https://industryos-dashboard.vercel.app",
    repoUrl: "https://github.com/ziadfissal9-arch/industryos-dashboard",
  },
  {
    slug: "auratech-store",
    name: "Auratech",
    tagline: "Postgres-backed storefront for audio hardware",
    summary:
      "A storefront where a Drizzle ORM schema is the single source of truth. Products, users and orders are served from Postgres through serverless functions — never from static JSON.",
    highlights: [
      "Search, category filtering and sorting resolved server-side as shareable query params.",
      "httpOnly-cookie JWT sessions; cart state survives reloads.",
      "Covered by a Vitest + Testing Library suite; every route lazily loaded.",
    ],
    tech: ["React 19", "TypeScript", "PostgreSQL", "Drizzle", "Vitest"],
    image: "/images/projects/auratech-store.webp",
    liveUrl: "https://auratech-store.vercel.app",
    repoUrl: "https://github.com/ziadfissal9-arch/auratech-store",
  },
  {
    slug: "luminous",
    name: "Luminous",
    tagline: "Fintech marketing site",
    summary:
      "A marketing site with a deliberately distinct visual identity — neo-brutalist, hard shadows, a single high-contrast accent — plus working auth screens.",
    highlights: [
      "Vitest suite covering the sign-up and login flows, so the funnel cannot silently break.",
      "Scroll-reveal sections and stat counters driven by IntersectionObserver.",
      "Strict TypeScript throughout, with route-based code splitting.",
    ],
    tech: ["React 19", "TypeScript", "Vitest"],
    image: "/images/projects/luminous.webp",
    liveUrl: "https://luminous-landing.vercel.app",
    repoUrl: "https://github.com/ziadfissal9-arch/luminous-landing",
  },
];

export const roles: Role[] = [
  {
    title: "Freelance Web Developer",
    org: "Self-employed · Remote",
    period: "Sep 2025 — Feb 2026",
    points: [
      "Delivered 5 client websites end to end — business sites, landing pages and an online store — from the initial brief through build, deployment and handover.",
      "Built responsive, mobile-first interfaces with React and Next.js, including Arabic (RTL) layouts alongside English.",
      "Worked directly with non-technical clients to turn informal briefs into clear scope, and shipped on the agreed deadline.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
  },
  {
    label: "Front End",
    items: [
      "React 19",
      "Next.js 16",
      "React Router",
      "Redux Toolkit",
      "Context API",
    ],
  },
  {
    label: "Back End",
    items: [
      "Node.js",
      "Express 5",
      "REST API design",
      "JWT & bcrypt",
      "Role-based access",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Drizzle ORM", "MongoDB", "Mongoose", "Schema design"],
  },
  {
    label: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS Modules", "Bootstrap", "RTL layouts"],
  },
  {
    label: "Testing & Tools",
    items: [
      "Vitest",
      "Testing Library",
      "Git & GitHub",
      "Vite",
      "Vercel",
      "Serverless",
    ],
  },
];

export const education = [
  {
    title: "B.Sc. in Computer Science",
    org: "Sinai University",
    period: "Graduated 2026",
  },
  {
    title: "Front-End Web Development",
    org: "Information Technology Institute (ITI)",
    period: "May 2025",
  },
];
