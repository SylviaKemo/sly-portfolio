type ArrowButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "accent" | "soft";
  className?: string;
};

const variants = {
  accent: "bg-accent text-on-accent",
  soft: "bg-s3 text-ink",
};

/**
 * Pill + arrow circle. On hover both invert, the circle slides right
 * and the arrow rotates. Renders a link when `href` is given.
 */
export default function ArrowButton({
  children,
  href,
  type = "button",
  variant = "accent",
  className = "",
}: ArrowButtonProps) {
  const colors = `${variants[variant]} transition-[background-color,color,transform] duration-450 ease-soft group-hover:bg-ink group-hover:text-bg`;

  const content = (
    <>
      <span
        className={`inline-flex h-[46px] items-center rounded-full px-6 text-xs font-semibold tracking-[0.16em] whitespace-nowrap uppercase group-active:scale-[0.97] ${colors}`}
      >
        {children}
      </span>
      <span
        className={`-ml-0.5 grid size-[46px] flex-none place-items-center rounded-full text-[15px] group-hover:translate-x-2 ${colors}`}
      >
        <span className="inline-block transition-transform duration-450 ease-soft group-hover:rotate-45">
          ↗
        </span>
      </span>
    </>
  );

  const classes = `group inline-flex cursor-pointer items-center ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
