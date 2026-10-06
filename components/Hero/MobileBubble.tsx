import TypingText from "./TypingText";

/**
 * Mobile-only bubble placed just below the portrait's mouth. The square
 * top-left corner is the "tail" pointing up at her. No avatar needed.
 */
export default function MobileBubble() {
  return (
    <p className="absolute top-[66%] left-[47%] min-h-16 w-[min(190px,48vw)] rounded-[0_16px_16px_16px] bg-ink px-4 py-3.5 text-left text-sm leading-[1.4] text-bg shadow-[0_8px_24px_rgba(0,0,0,0.18)] md:hidden">
      <TypingText />
    </p>
  );
}
