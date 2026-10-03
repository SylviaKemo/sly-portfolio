"use client";

import { useTypewriter } from "./useTypewriter";

const lines = [
  "Welcome to my website",
  "Building something in fintech, data or AI? I'd love to hear about it 👋",
  "Need a website or a smarter product? Let's talk.",
];

/** Typed message + blinking caret, shared by the desktop and mobile bubbles. */
export default function TypingText() {
  const text = useTypewriter(lines);

  return (
    <>
      {text}
      <span className="ml-0.5 inline-block h-[1.1em] w-0.5 animate-caret bg-bg align-[-0.2em] motion-reduce:hidden" />
    </>
  );
}
