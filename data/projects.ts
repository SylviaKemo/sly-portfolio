export type Project = {
  title: string;
  stack: string;
  href: string;
  /** Screenshot path in /public, e.g. "/images/projects/one.jpg" */
  image?: string;
};

// TODO: replace placeholders with real projects and screenshots.
export const projects: Project[] = [
  { title: "Project One", stack: "React · Node", href: "#" },
  { title: "Project Two", stack: "Next.js · Postgres", href: "#" },
  { title: "Project Three", stack: "Node · Redis · Docker", href: "#" },
  { title: "Project Four", stack: "React · Tailwind", href: "#" },
];
