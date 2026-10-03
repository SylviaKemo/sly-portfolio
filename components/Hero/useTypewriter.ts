"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED = 55;
const DELETE_SPEED = 28;
const PAUSE = 1800;
const REDUCED_MOTION_HOLD = 3000;

/**
 * Types each line, pauses, deletes it, then moves to the next — forever.
 * With reduced motion it shows each full line instead of typing it.
 */
export function useTypewriter(lines: string[]) {
  const [text, setText] = useState("");

  useEffect(() => {
    let lineIndex = 0;
    let charCount = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const showLine = () => {
        setText(lines[lineIndex]);
        lineIndex = (lineIndex + 1) % lines.length;
        timer = setTimeout(showLine, REDUCED_MOTION_HOLD);
      };
      showLine();
      return () => clearTimeout(timer);
    }

    const step = () => {
      const line = Array.from(lines[lineIndex]);

      if (!deleting) {
        charCount++;
        if (charCount === line.length) {
          deleting = true;
          setText(line.join(""));
          timer = setTimeout(step, PAUSE);
          return;
        }
      } else {
        charCount--;
        if (charCount === 0) {
          deleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
        }
      }

      setText(line.slice(0, charCount).join(""));
      timer = setTimeout(step, deleting ? DELETE_SPEED : TYPE_SPEED);
    };

    step();
    return () => clearTimeout(timer);
  }, [lines]);

  return text;
}
