/** Animated mouse icon linking to the About section. */
export default function ScrollCue() {
  return (
    <a href="#about" aria-label="Scroll down" className="mt-auto block w-max md:mt-0">
      <span className="relative mx-auto block h-12 w-[30px] rounded-2xl border-[1.5px] border-ink md:mx-0">
        <span className="absolute top-[9px] left-1/2 -ml-0.5 h-2 w-1 animate-hero-scroll rounded-xs bg-ink" />
      </span>
    </a>
  );
}
