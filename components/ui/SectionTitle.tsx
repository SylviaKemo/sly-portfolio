type SectionTitleProps = {
  /** Word(s) set in italic Instrument Serif, e.g. "My" */
  accent: string;
  /** Rest of the heading in Jost bold, e.g. "Biography" */
  title: string;
  /** Optional controls shown on the right (e.g. carousel arrows) */
  children?: React.ReactNode;
};

/** "Split serif" section heading. */
export default function SectionTitle({ accent, title, children }: SectionTitleProps) {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
      <h2 className="flex flex-wrap items-baseline gap-x-[0.28em] text-[clamp(40px,5vw,72px)] leading-none font-bold tracking-[-0.025em]">
        <span className="font-serif font-normal italic">{accent}</span>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
}
