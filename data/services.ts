import type { Tech } from "./types";
import { tech } from "./tech";

export type Service = {
  title: string;
  description: string;
  items: string[];
  logos: Tech[];
};

export const services: Service[] = [
  {
    title: "Web applications",
    description:
      "Complete web apps built from start to finish, including the database, APIs, secure logins and a fast, easy-to-use interface.",
    items: ["React / Next.js", "Node.js & Python APIs", "Authentication"],
    logos: [tech.nextjs, tech.node, tech.python, tech.postgres, tech.mysql],
  },
  {
    title: "Websites & online stores",
    description:
      "Modern, responsive websites and eCommerce stores that load quickly, look great on any device and are easy for your customers to use.",
    items: ["Business websites", "eCommerce stores", "Mobile-friendly design"],
    logos: [tech.react, tech.nextjs, tech.tailwind],
  },
  {
    title: "Data & dashboards",
    description:
      "Dashboards and reporting tools that turn your raw data into clear charts and insights your team can act on.",
    items: ["Real-time dashboards", "Data visualization", "Reporting tools"],
    logos: [tech.react, tech.chartjs, tech.mysql, tech.mongodb],
  },
  {
    title: "AI integration",
    description:
      "Adding practical AI features to your existing product, such as automatically sorting requests, summarizing content or answering customer questions.",
    items: ["AI features", "Smart automation", "LLM integration"],
    logos: [tech.python, tech.fastapi, tech.gemini, tech.openai],
  },
  {
    title: "Payments & fintech",
    description:
      "Secure payment integrations and financial tools that make it simple for your users to pay, get paid and track their money.",
    items: ["Payment integrations", "Secure transactions", "Financial dashboards"],
    logos: [tech.stripe, tech.mpesa, tech.node],
  },
];
