import type { Tech } from "./types";

/** Every technology logo used on the site (Simple Icons slug + brand colour). */
export const tech = {
  react: { name: "React", slug: "react", color: "61DAFB" },
  nextjs: { name: "Next.js", slug: "nextdotjs", color: "000000" },
  typescript: { name: "TypeScript", slug: "typescript", color: "3178C6" },
  tailwind: { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  node: { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  express: { name: "Express", slug: "express", color: "000000" },
  python: { name: "Python", slug: "python", color: "3776AB" },
  postgres: { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  mongodb: { name: "MongoDB", slug: "mongodb", color: "47A248" },
  redis: { name: "Redis", slug: "redis", color: "FF4438" },
  docker: { name: "Docker", slug: "docker", color: "2496ED" },
  git: { name: "Git", slug: "git", color: "F05032" },
  vercel: { name: "Vercel", slug: "vercel", color: "000000" },
  stripe: { name: "Stripe", slug: "stripe", color: "635BFF" },
  figma: { name: "Figma", slug: "figma", color: "F24E1E" },
  graphql: { name: "GraphQL", slug: "graphql", color: "E10098" },
  github: { name: "GitHub", slug: "github", color: "181717" },
} satisfies Record<string, Tech>;

export const heroStack = [tech.react, tech.typescript, tech.node, tech.python];
