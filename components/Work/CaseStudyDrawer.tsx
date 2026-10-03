"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { CaseStudy, Project } from "@/data/projects";

type CaseStudyDrawerProps = {
  project: Project & { caseStudy: CaseStudy };
  number: number;
  onClose: () => void;
};

const pad = (n: number) => String(n).padStart(2, "0");

/** Side panel with a project's case study. Closes on Escape or backdrop click. */
export default function CaseStudyDrawer({ project, number, onClose }: CaseStudyDrawerProps) {
  const { caseStudy } = project;
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Remember what had focus (the card) so we can return to it on close.
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    // Stop the page behind the drawer from scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      // Keep Tab focus inside the drawer.
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return createPortal(
    <>
      <div onClick={onClose} className="fixed inset-0 z-200 bg-[rgba(18,7,31,0.6)] backdrop-blur-[6px]" />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
        className="fixed top-0 right-0 bottom-0 z-201 flex w-[min(560px,100%)] animate-drawer-in flex-col overflow-y-auto border-l border-line2 bg-bg shadow-[-30px_0_80px_rgba(0,0,0,0.5)]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-bg px-6 py-[18px]">
          <span className="text-xs tracking-[0.08em] text-accent uppercase">Case study · {pad(number)}</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-line2 text-lg transition-colors hover:bg-accent hover:text-on-accent"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-7 px-6 pt-7 pb-10">
          {project.image && (
            <div className="relative aspect-video overflow-hidden rounded-[10px] shadow-[0_0_0_1px_var(--line2)]">
              <Image
                src={project.image}
                alt={`${project.title} homepage hero`}
                fill
                sizes="(min-width: 560px) 512px, 100vw"
                className="object-cover object-left-top"
              />
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            <h3 className="text-[44px] leading-none font-semibold tracking-[-0.025em]">{project.title}</h3>
            <span className="text-base text-muted">{caseStudy.subtitle}</span>
          </div>

          <p className="text-[17px] leading-[1.65] text-pretty text-ink2">{caseStudy.intro}</p>

          <div className="flex flex-col gap-[18px]">
            {caseStudy.sections.map((section, index) => (
              <div key={section.title} className="grid grid-cols-[36px_1fr] gap-3">
                <span className="text-[13px] text-accent">{pad(index + 1)}</span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-base font-semibold">{section.title}</span>
                  <span className="text-[15px] leading-[1.6] text-ink2">{section.body}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-xs tracking-[0.06em] text-muted uppercase">Built with</span>
            <div className="flex flex-wrap gap-2">
              {caseStudy.builtWith.map((item) => (
                <span key={item} className="rounded-full border border-line2 px-3 py-1.5 text-[13px]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-line pt-2">
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-[1_1_200px] items-center justify-between gap-2.5 rounded-full bg-accent px-[22px] py-3.5 text-[15px] font-medium text-on-accent"
            >
              Live site <span aria-hidden="true">→</span>
            </a>
            <a
              href={caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-[1_1_200px] items-center justify-between gap-2.5 rounded-full border border-line2 px-[22px] py-3.5 text-[15px] font-medium transition-colors hover:bg-ink hover:text-bg"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </aside>
    </>,
    document.body,
  );
}
