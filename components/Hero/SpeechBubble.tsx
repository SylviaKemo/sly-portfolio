"use client";

import Image from "next/image";
import { useTypewriter } from "./useTypewriter";

const lines = [
  "Welcome to my website",
  "I am a Fullstack Developer",
  "I build APIs that never flinch",
  "and interfaces people enjoy",
];

/** Chat-style bubble that cycles through typed messages. */
export default function SpeechBubble() {
  const text = useTypewriter(lines);

  return (
    <div className="flex w-[min(100%,400px)] items-end gap-2.5">
      <p
        aria-live="polite"
        className="min-h-[100px] flex-1 rounded-[20px_20px_0_20px] bg-ink p-6 text-lg leading-[1.4] text-bg"
      >
        {text}
        <span className="ml-0.5 inline-block h-[1.1em] w-0.5 animate-caret bg-bg align-[-0.2em]" />
      </p>
      <Image
        src="/images/sylvia-avatar.jpg"
        alt="Sylvia"
        width={50}
        height={50}
        className="size-[50px] flex-none rounded-full border-2 border-accent object-cover object-[center_30%]"
      />
    </div>
  );
}
