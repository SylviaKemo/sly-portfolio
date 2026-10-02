"use client";

import { useRef } from "react";
import CircleButton from "@/components/ui/CircleButton";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { MoreProjectsCard, ProjectCard } from "./ProjectCard";

const GAP = 16;

/** Horizontal scroll-snap carousel. Arrows move one card and wrap at the ends. */
export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = (track.firstElementChild?.clientWidth ?? 300) + GAP;
    const atStart = track.scrollLeft <= 4;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;

    if (direction === 1 && atEnd) track.scrollTo({ left: 0 });
    else if (direction === -1 && atStart) track.scrollTo({ left: track.scrollWidth });
    else track.scrollBy({ left: direction * cardWidth });
  };

  return (
    <>
      <Reveal>
        <SectionTitle accent="Featured" title="Projects">
          <div className="flex gap-2.5">
            <CircleButton label="Previous projects" onClick={() => scroll(-1)}>
              ←
            </CircleButton>
            <CircleButton label="Next projects" onClick={() => scroll(1)}>
              →
            </CircleButton>
          </div>
        </SectionTitle>
      </Reveal>

      <div
        ref={trackRef}
        className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-1.5 pt-[15px] pb-6 [scrollbar-width:none]"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} number={index + 1} />
        ))}
        <MoreProjectsCard href={profile.github} />
      </div>
    </>
  );
}
