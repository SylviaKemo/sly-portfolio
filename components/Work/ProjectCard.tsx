import Image from "next/image";
import type { Project } from "@/data/projects";

const cardSize =
  "flex-none snap-start basis-full min-[600px]:basis-[calc((100%-16px)/2)] min-[1180px]:basis-[calc((100%-32px)/3)]";

type ProjectCardProps = {
  project: Project;
  number: number;
  /** Called instead of following the link when the project has a case study */
  onOpenCaseStudy?: () => void;
};

/** Screenshot card with title and stack overlaid at the bottom. */
export function ProjectCard({ project, number, onOpenCaseStudy }: ProjectCardProps) {
  const opensDrawer = Boolean(project.caseStudy && onOpenCaseStudy);

  const handleClick = (event: React.MouseEvent) => {
    if (!opensDrawer) return;
    event.preventDefault();
    onOpenCaseStudy?.();
  };

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-haspopup={opensDrawer ? "dialog" : undefined}
      className={`${cardSize} transition-transform duration-300 hover:scale-[1.03]`}
    >
      <div className="relative flex h-[270px] items-end overflow-hidden rounded-lg bg-[repeating-linear-gradient(135deg,var(--s1)_0_10px,var(--s2)_10px_20px)]">
        {project.image ? (
          <div className="absolute inset-0 bg-[#12301f]">
            {/* 28% keeps the left-aligned headline of the screenshot in frame on phones */}
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1180px) 33vw, (min-width: 600px) 50vw, 100vw"
              className="object-cover object-[28%_top] min-[600px]:object-top"
            />
          </div>
        ) : (
          <span className="absolute top-4 left-4 text-xs text-muted">
            [ project {String(number).padStart(2, "0")} — screenshot ]
          </span>
        )}
        <div className="relative flex w-full flex-col gap-1.5 bg-[linear-gradient(to_top,var(--bg)_0%,color-mix(in_oklab,var(--bg)_92%,transparent)_45%,transparent)] px-5 pt-[70px] pb-[18px]">
          <span className="text-lg font-medium">{project.title}</span>
          <span className="text-[13px] text-muted">{project.stack}</span>
        </div>
      </div>
    </a>
  );
}

/** Last card in the carousel, pointing to GitHub. */
export function MoreProjectsCard({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardSize} flex h-[270px] animate-work-pulse flex-col items-center justify-center gap-2.5 rounded-lg border-2 border-dashed border-line2 bg-s1/50 p-6 text-center transition duration-300 hover:scale-[1.03] hover:animate-none hover:border-accent hover:bg-s2`}
    >
      <span className="mb-2 size-[60px] rounded-full bg-white bg-[url(https://cdn.simpleicons.org/github/181717)] bg-size-[30px] bg-center bg-no-repeat" />
      <span className="text-[22px]">View more projects</span>
      <span className="text-[15px] text-muted">Check out my GitHub repository</span>
    </a>
  );
}
