import type { Tech } from "./types";
import { tech } from "./tech";

export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  /** Shown in the company hover card */
  highlight: string;
  stack: Tech[];
};

// TODO: replace placeholders with real roles and companies. Newest first.
export const experience: Experience[] = [
  {
    period: "2025 — Present",
    role: "Fullstack Developer",
    company: "Company name",
    location: "Nairobi · Hybrid",
    description:
      "Building product features across the stack — REST APIs in Node.js and React interfaces used daily.",
    highlight: "Leads features end to end across API and UI for a product used daily.",
    stack: [tech.nextjs, tech.node, tech.postgres],
  },
  {
    period: "2024 — 2025",
    role: "Software Engineer",
    company: "Company name",
    location: "Remote · Full-time",
    description:
      "Designed scalable service architecture and shipped features with product and design teams.",
    highlight: "Designed a service architecture handling 3× traffic with no added infra cost.",
    stack: [tech.typescript, tech.postgres, tech.docker],
  },
  {
    period: "2023 — 2024",
    role: "Backend Developer",
    company: "Company name",
    location: "Nairobi · Full-time",
    description:
      "Developed Express and MongoDB services, payment integrations, and automated tests for core endpoints.",
    highlight: "Shipped payment integrations and grew endpoint test coverage to 85%.",
    stack: [tech.node, tech.express, tech.mongodb],
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer — Intern",
    company: "Company name",
    location: "Nairobi · Internship",
    description:
      "Implemented responsive designs and improved performance and accessibility across the marketing site.",
    highlight: "Rebuilt the marketing site for speed — Lighthouse performance from 62 to 95.",
    stack: [tech.react, tech.tailwind, tech.git],
  },
];
