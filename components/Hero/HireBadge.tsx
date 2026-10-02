/** Spinning circular "Hire now" badge linking to the contact form. */
export default function HireBadge() {
  return (
    <a href="#contact" aria-label="Hire me — contact" className="relative block size-[150px]">
      <svg viewBox="0 0 200 200" className="block size-full animate-spin-slow">
        <circle cx="100" cy="100" r="92" fill="var(--accent)" />
        <path id="hire-path" fill="none" d="M 100,100 m -64,0 a 64,64 0 1,1 128,0 a 64,64 0 1,1 -128,0" />
        <text className="fill-on-accent text-[18px] tracking-[4.5px] uppercase">
          <textPath href="#hire-path">Hire now • Contact me • </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center text-[40px] text-on-accent">↗</span>
    </a>
  );
}
