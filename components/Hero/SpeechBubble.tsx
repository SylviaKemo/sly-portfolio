import Image from "next/image";
import TypingText from "./TypingText";

/** Desktop chat bubble with avatar (right column of the hero). */
export default function SpeechBubble() {
  return (
    <div className="flex w-[min(100%,400px)] items-end gap-2.5">
      <p
        aria-live="polite"
        className="min-h-[100px] flex-1 rounded-[20px_20px_0_20px] bg-ink p-6 text-lg leading-[1.4] text-bg"
      >
        <TypingText />
      </p>
      <Image
        src="/images/sylvia-profile.jpg"
        alt="Sylvia"
        width={50}
        height={50}
        className="size-[50px] flex-none rounded-full border-2 border-accent object-cover object-[center_30%]"
      />
    </div>
  );
}
