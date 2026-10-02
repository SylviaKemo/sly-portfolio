"use client";

import { useEffect, useState } from "react";
import CircleButton from "@/components/ui/CircleButton";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";

const TOTAL = testimonials.length;
const AUTOPLAY_MS = 7000;

const pad = (n: number) => String(n).padStart(2, "0");

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const show = (step: 1 | -1) => {
    setPrevious(index);
    setDirection(step);
    setIndex((index + step + TOTAL) % TOTAL);
  };

  // Auto-advance unless the visitor is hovering/focused or prefers reduced motion.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reducedMotion) return;

    const timer = setTimeout(() => {
      setPrevious(index);
      setDirection(1);
      setIndex((index + 1) % TOTAL);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused]);

  // The new quote slides in from one side while the old one slides out the other.
  const enterFrom = direction === 1 ? "translate-x-12" : "-translate-x-12";
  const exitTo = direction === 1 ? "-translate-x-12" : "translate-x-12";

  const slideClass = (i: number) => {
    if (i === index) return "translate-x-0 opacity-100 delay-150";
    if (i === previous) return `invisible opacity-0 ${exitTo}`;
    return `invisible opacity-0 ${enterFrom}`;
  };

  return (
    <Section id="testimonials">
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="grid grid-cols-1 gap-[clamp(32px,5vw,80px)] md:grid-cols-3"
      >
        <Reveal className="flex flex-col justify-between gap-8">
          <span className="text-sm tracking-[0.08em] text-muted uppercase">( Kind words )</span>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <CircleButton label="Previous testimonial" onClick={() => show(-1)} size="lg">
                ←
              </CircleButton>
              <CircleButton label="Next testimonial" onClick={() => show(1)} size="lg">
                →
              </CircleButton>
              <span className="ml-2 text-[13px] text-muted">
                {pad(index + 1)} / {pad(TOTAL)}
              </span>
            </div>
            {/* Fills up until the next quote; restarts on every change (key). */}
            <div className="h-px w-full max-w-[200px] bg-line2 motion-reduce:hidden">
              <div
                key={index}
                className={`h-full origin-left animate-progress bg-accent ${
                  paused ? "[animation-play-state:paused]" : ""
                }`}
                style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="min-w-0 md:col-span-2">
          {/* All quotes share one grid cell, so the section keeps the height
              of the longest quote and doesn't jump when switching. */}
          <div aria-live={paused ? "polite" : "off"} className="grid overflow-hidden">
            {testimonials.map((testimonial, i) => (
              <figure
                key={testimonial.name}
                aria-hidden={i !== index}
                className={`col-start-1 row-start-1 transition-[opacity,translate,visibility] duration-600 ease-soft ${slideClass(i)}`}
              >
                <blockquote className="text-[clamp(22px,2.4vw,34px)] leading-[1.3] tracking-[-0.015em] text-pretty">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <span className="block text-[17px] font-semibold">{testimonial.name}</span>
                  <span className="mt-1 block text-xs tracking-[0.08em] text-muted uppercase">
                    {testimonial.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
