type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

/** Page section with the shared top/side padding. */
export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-[clamp(20px,4vw,56px)] pt-[clamp(90px,12vw,160px)] ${className}`}
    >
      {children}
    </section>
  );
}
