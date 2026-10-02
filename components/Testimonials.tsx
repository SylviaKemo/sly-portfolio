"use client";

import { useState } from "react";
import CircleButton from "@/components/ui/CircleButton";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  return (
    <Section id="testimonials">
      <div className="grid grid-cols-1 gap-[clamp(32px,5vw,80px)] md:grid-cols-3">
        <Reveal className="flex flex-col justify-between gap-8">
          <span className="text-sm tracking-[0.08em] text-muted uppercase">( Kind words )</span>
          <div className="flex items-center gap-4">
            <CircleButton label="Previous testimonial" onClick={prev} size="lg">
              ←
            </CircleButton>
            <CircleButton label="Next testimonial" onClick={next} size="lg">
              →
            </CircleButton>
            <span className="ml-2 text-[13px] text-muted">
              {pad(index + 1)} / {pad(total)}
            </span>
          </div>
        </Reveal>

        <Reveal className="min-w-0 md:col-span-2">
          {/* All quotes share one grid cell, so the section keeps the height
              of the longest quote and doesn't jump when switching. */}
          <div aria-live="polite" className="grid">
            {testimonials.map((testimonial, i) => (
              <figure
                key={testimonial.name}
                aria-hidden={i !== index}
                className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                  i === index ? "opacity-100" : "invisible opacity-0"
                }`}
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
