import type { Tech } from "./types";

export type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  /** Optional hover card on the company name. Leave out to show plain text. */
  details?: {
    location: string;
    highlight: string;
    stack: Tech[];
  };
};

/** Timeline entries, shown top to bottom, alternating left and right. */
export const experience: Experience[] = [
  {
    period: "May 2025 – June 2026",
    role: "Fullstack Developer",
    company: "NexusWaveAI",
    description:
      "Built a real-time analytics dashboard for a customer support platform, plus an AI tool that automatically sorts incoming tickets, cutting managers' reporting time by 40%.",
  },
  {
    period: "Jan 2024 – Feb 2025",
    role: "Frontend Developer",
    company: "GroupWork Kenya",
    description:
      "Built the frontend for a school management platform used by 1,000+ teachers and students, including dashboards, class scheduling, and Zoom and Google Meet integration.",
  },
  {
    period: "Aug 2023 – Jan 2024",
    role: "Frontend Developer Intern",
    company: "VellTech Group",
    description:
      "Led the development of websites and online stores from start to finish, working closely with designers and project managers to deliver them.",
  },
  {
    period: "Jun 2022 – Feb 2023",
    role: "Software Developer Intern",
    company: "Mastruck",
    description:
      "Built full-stack features for web apps, from secure logins and APIs to cloud deployments on AWS.",
  },
];
