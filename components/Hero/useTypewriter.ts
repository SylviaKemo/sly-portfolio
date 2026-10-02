"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED = 55;
const DELETE_SPEED = 28;
const PAUSE = 1800;

/** Types each line, pauses, deletes it, then moves to the next — forever. */
export function useTypewriter(lines: string[]) {
  const [text, setText] = useState("");

  useEffect(() => {
    let lineIndex = 0;
    let charCount = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

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
