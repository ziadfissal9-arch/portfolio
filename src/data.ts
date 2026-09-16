import type { Project, SkillGroup } from "./types";

export const projects: Project[] = [
  {
    slug: "dar-al-asalah",
    name: "Dar Al-Asalah",
    tagline: "Arabic (RTL) e-commerce for coffee, oud & perfume",
    description:
      "Full-stack RTL storefront with real authentication, MongoDB-backed orders, and an admin dashboard for managing products and orders.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://dar-al-asalah.vercel.app",
    repoUrl: "https://github.com/ziadfissal9-arch/dar-al-asalah",
    featured: true,
  },
  {
    slug: "auratech-store",
    name: "Auratech Store",
    tagline: "Premium audio e-commerce storefront",
    description:
      "A hand-crafted Apple-style storefront with a real Postgres backend, bcrypt + JWT auth, and server-verified checkout — not a static mockup.",
    tech: ["React 19", "TypeScript", "Postgres", "Drizzle", "Vitest"],
    liveUrl: "https://auratech-store.vercel.app",
    repoUrl: "https://github.com/ziadfissal9-arch/auratech-store",
  },
  {
    slug: "nexacommerce",
    name: "NexaCommerce",
    tagline: "Full-stack MERN marketplace",
    description:
      "A complete marketplace with a Node.js/Express API and MongoDB Atlas database, deployed end-to-end as Vercel Functions.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://nexacommerce-alpha.vercel.app",
    repoUrl: "https://github.com/ziadfissal9-arch/NexaCommerce",
  },
  {
    slug: "industryos-dashboard",
    name: "IndustryOS Dashboard",
    tagline: "Real-time industrial analytics dashboard",
    description:
      "A production-metrics dashboard with animated Recharts visualizations, code-split routes, and a responsive layout.",
    tech: ["React", "Recharts", "Data Viz"],
    liveUrl: "https://industryos-dashboard.vercel.app",
    repoUrl: "https://github.com/ziadfissal9-arch/industryos-dashboard",
  },
  {
    slug: "luminous",
    name: "Luminous",
    tagline: "Bold neo-brutalist fintech landing page",
    description:
      "A distinctive, strongly-typed marketing site with route-based code splitting and a full Vitest test suite.",
    tech: ["React 19", "TypeScript", "Vitest"],
    liveUrl: "https://luminous-landing.vercel.app",
    repoUrl: "https://github.com/ziadfissal9-arch/luminous-landing",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Router",
      "Redux",
      "Context API",
    ],
  },
  {
    label: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "Sass"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    label: "Database & Tools",
    items: ["MongoDB", "PostgreSQL", "Git", "Vitest", "Vercel"],
  },
];
