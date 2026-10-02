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
      "Fullstack products built end to end — data model, API, auth, payments and a fast, accessible interface.",
    items: ["React / Next.js", "Node.js APIs", "Payments & auth"],
    logos: [tech.nextjs, tech.node, tech.postgres, tech.stripe],
  },
  {
    title: "Frontend & UI",
    description:
      "Pixel-careful interfaces with considered motion that feel calm, quick and clear on every screen size.",
    items: ["Design systems", "Motion & interaction", "Performance"],
    logos: [tech.react, tech.typescript, tech.tailwind, tech.figma],
  },
  {
    title: "APIs & backend",
    description:
      "Reliable services and integrations that scale with your product and are easy for your team to maintain.",
    items: ["REST / GraphQL", "Databases", "Docker & deploys"],
    logos: [tech.express, tech.graphql, tech.mongodb, tech.docker],
  },
];
