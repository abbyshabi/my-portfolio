export type Role = {
  title: string;
  company: string;
  timeframe: string; // e.g., "Jul 2025 — Present · Remote"
  bullets: string[];
  location?: string;
  kind?: string; // e.g., "Full-time", "Contract"
  tech: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Frontend Engineer (Volunteer Project)",
    company: "Probound.ai",
    timeframe: "Jul 2025 — Present · Remote",
    bullets: [
      "Built AI-powered call-center platform in Next.js 13 + React (knowledge groups, hiring flows, file uploads).",
      "Automated Figma→code pipelines; cut design-to-build time by ~40% and improved UI consistency.",
      "Created reusable patterns with Tailwind + shadcn/ui; modular, testable components adopted across the app.",
      "Integrated Supabase/Postgres APIs with strong client–server contracts (Zod + query hooks).",
      "Shipped agentic workflows: LLM-driven knowledge-base flows in intuitive React UIs.",
    ],
    tech: ["React", "Next.js 13", "TypeScript", "Tailwind", "shadcn/ui", "Zustand", "Zod", "SWR/React Query", "Supabase/Postgres", "Jest", "RTL"],
  },
  {
    title: "Software Engineer (Contract)",
    company: "Cisco",
    timeframe: "Nov 2023 — Mar 2024 · Remote",
    bullets: [
      "Optimized backend APIs powering enterprise dashboards; ~30% lower latency → snappier FE.",
      "Implemented feature flags so UI teams could test flows without redeploys.",
      "Tuned PostgreSQL queries and strengthened observability (Datadog) with pragmatic error handling.",
      "Partnered closely with FE to debug and ship fixes using Postman collections + automated API tests.",
    ],
    tech: ["Node.js", "PostgreSQL", "Datadog", "GitHub Actions/Jenkins", "Postman", "Jest"],
  },
  {
    title: "Acting Team Lead",
    company: "Indicina Technologies",
    timeframe: "Jan 2023 — Aug 2023 · Remote",
    bullets: [
      "Directed the FE team; launched a Storybook-based design system used across 4+ fintech products.",
      "Migrated a large React codebase to TypeScript; fewer runtime bugs and higher maintainability.",
      "Designed dashboards + SDKs (Node.js + Python) to integrate credit scoring infrastructure.",
      "Simplified complex credit workflows into intuitive React UIs; improved usability and delivery speed.",
    ],
    tech: ["React", "TypeScript", "Storybook", "Node.js", "Python", "Testing Library", "Jest"],
  },
  {
    title: "Software Developer",
    company: "Indicina Technologies",
    timeframe: "Jul 2019 — Dec 2022 · Remote",
    bullets: [
      "Built React + GraphQL dashboards for credit scoring, reporting, and customer insights.",
      "Migrated backend services from Python to Go (~3× faster) while maintaining stable UIs.",
      "Improved FE performance by ~30% via code-splitting, lazy loading, and bundling optimizations.",
      "Designed Handlebars email templates and integrated Elasticsearch pipelines for real-time analytics.",
    ],
    tech: ["React", "GraphQL", "Go", "Python", "Elasticsearch", "Vite", "Lazy loading"],
  },
];
