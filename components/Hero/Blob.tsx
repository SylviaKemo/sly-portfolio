/** Morphing pink blob behind the portrait. */
export default function Blob() {
  return (
    <div
      className="absolute top-[68%] left-1/2 aspect-square w-[86vw] animate-hero-blob opacity-90 saturate-[0.95] md:top-[52%] md:w-[min(46vw,620px)]"
      style={{
        background:
          "radial-gradient(circle at 35% 30%, color-mix(in oklab, var(--accent) 55%, white), var(--accent) 45%, color-mix(in oklab, var(--accent) 55%, var(--bg)) 100%)",
      }}
    />
  );
}
