export type CaseStudy = {
  subtitle: string;
  intro: string;
  /** Numbered rows: 01, 02, 03… */
  sections: { title: string; body: string }[];
  builtWith: string[];
  liveUrl: string;
  githubUrl: string;
};

export type Project = {
  title: string;
  year: string;
  stack: string;
  tags: string[];
  href: string;
  /** Screenshot path in /public, e.g. "/images/projects/one.webp" */
  image?: string;
  /** When set, clicking the card opens a case-study drawer instead of the link. */
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    title: "Pamoja",
    year: "2026",
    stack: "Next.js · TypeScript · Tailwind",
    tags: ["SaaS", "Frontend"],
    href: "https://pamoja-one.vercel.app/",
    image: "/images/projects/pamoja-hero.webp",
    caseStudy: {
      subtitle: "Shared Customer Inbox — SaaS Website",
      intro:
        "Pamoja is a self-initiated project I built to demonstrate how I approach turning a design concept into a complete, responsive product website.",
      sections: [
        {
          title: "The starting point",
          body: "An existing Figma design as the visual foundation, reworked around a new product concept: a shared inbox that helps small teams manage customer conversations from email, WhatsApp, live chat and social channels in one place.",
        },
        {
          title: "What I did",
          body: "Created the product direction, rewrote the content, developed a new visual identity, and built the website from scratch.",
        },
        {
          title: "Why it exists",
          body: "The goal wasn't to reproduce the Figma design, but to make it feel like a real product — clear, responsive, easy to understand, and consistent across screen sizes.",
        },
      ],
      builtWith: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      liveUrl: "https://pamoja-one.vercel.app/",
      githubUrl: "https://github.com/SylviaKemo/Pamoja-Saas-Product",
    },
  },
  // TODO: replace placeholders with real projects and screenshots.
  { title: "Project Two", year: "2025", stack: "Next.js · Postgres", tags: ["SaaS", "Frontend"], href: "#" },
  { title: "Project Three", year: "2025", stack: "Node · Redis · Docker", tags: ["API", "Backend"], href: "#" },
  { title: "Project Four", year: "2024", stack: "React · Tailwind", tags: ["Landing", "Motion"], href: "#" },
];
