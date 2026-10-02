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
  const current = testimonials[index];

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
          <figure aria-live="polite">
            <blockquote className="text-[clamp(26px,3.2vw,46px)] leading-[1.18] tracking-[-0.02em] text-pretty">
              “{current.quote}”
            </blockquote>
            <figcaption className="mt-9 flex items-center gap-4">
              <span className="size-12 rounded-full bg-[repeating-linear-gradient(135deg,var(--s2)_0_5px,var(--s3)_5px_10px)]" />
              <span>
                <span className="block text-[17px] font-semibold">{current.name}</span>
                <span className="mt-1 block text-xs tracking-[0.08em] text-muted uppercase">
                  {current.role}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
