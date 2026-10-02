"use client";

import { useEffect, useRef, useState } from "react";

/** Wavy path: alternates between x=2 and x=22 every 40 units, down 1000 units. */
function buildPath() {
  let path = "M12 0";
  for (let y = 0, step = 0; y < 1000; y += 40, step++) {
    const x = step % 2 ? 2 : 22;
    path += ` Q${x} ${y + 20} 12 ${y + 40}`;
  }
  return path;
}

const squigglePath = buildPath();

/** Hand-drawn line that draws itself as the timeline scrolls into view. */
export default function Squiggle() {
  const ref = useRef<SVGSVGElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const svg = ref.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const drawn = (window.innerHeight * 0.6 - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, drawn)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      viewBox="0 0 24 1000"
      preserveAspectRatio="none"
      className="absolute top-0 left-5 -ml-3 h-full w-6 overflow-visible md:left-1/2"
    >
      <path
        d={squigglePath}
        pathLength={1}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2.5}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray={1}
        strokeDashoffset={1 - progress}
      />
    </svg>
  );
}
