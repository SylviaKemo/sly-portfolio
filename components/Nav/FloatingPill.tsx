"use client";

import { useEffect, useState } from "react";
import { navSections } from "@/data/navigation";
import { useActiveSection } from "./useActiveSection";

const sectionIds = navSections.map((section) => section.id);

// On phones the pill waits until the visitor scrolls this far, so it doesn't
// cover the hero's chat bubble at the bottom of the first screen.
const MOBILE_SHOW_AFTER = 160;

/**
 * Bottom-centre pill. Collapsed it shows the current section;
 * on hover (or tap) it expands to every section link.
 * On phones it stays hidden at the very top of the page.
 */
export default function FloatingPill() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > MOBILE_SHOW_AFTER);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const activeIndex = Math.max(0, sectionIds.indexOf(active));
  const activeNumber = String(activeIndex).padStart(2, "0");

  return (
    <nav
      aria-label="Sections"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`fixed bottom-6 left-1/2 z-60 flex max-w-[calc(100vw-32px)] -translate-x-1/2 items-center gap-1 overflow-x-auto rounded-full border border-line2 bg-bg/82 p-1.5 text-xs tracking-[0.06em] whitespace-nowrap uppercase shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-[14px] transition-[opacity,translate,visibility] duration-300 [scrollbar-width:none] ${
        scrolled ? "" : "max-md:invisible max-md:translate-y-4 max-md:opacity-0"
      }`}
    >
      {open ? (
        navSections.slice(1).map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={() => setOpen(false)}
            className={`rounded-full px-4 py-2.5 transition-colors duration-200 ${
              section.id === active ? "bg-accent text-on-accent" : "hover:bg-s3"
            }`}
          >
            {section.label}
          </a>
        ))
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="flex cursor-pointer items-center gap-3.5 rounded-full py-2.5 pr-2.5 pl-[18px] uppercase"
        >
          <span className="text-muted">{activeNumber}</span>
          <span>{navSections[activeIndex].label}</span>
          <span className="grid size-7 place-items-center rounded-full bg-accent text-[15px] text-on-accent">
            +
          </span>
        </button>
      )}
    </nav>
  );
}
