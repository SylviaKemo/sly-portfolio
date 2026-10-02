import LogoChip from "@/components/ui/LogoChip";
import type { Experience } from "@/data/experience";

type CompanyCardProps = {
  item: Experience;
  /** Edge the popover lines up with on desktop (always left on mobile) */
  align: "left" | "right";
};

/** "@ Company" label that reveals a details card on hover or focus (when details exist). */
export default function CompanyCard({ item, align }: CompanyCardProps) {
  const { details } = item;

  if (!details) {
    return <span className="text-[15px] text-ink2">@ {item.company}</span>;
  }

  return (
    <span className="group relative inline-block">
      <span
        tabIndex={0}
        className="cursor-help border-b border-dashed border-ink/35 text-[15px] text-ink2"
      >
        @ {item.company}
      </span>

      <span
        role="tooltip"
        className={`pointer-events-none absolute top-[calc(100%+8px)] z-50 w-64 -translate-y-1.5 scale-95 rounded-lg border border-ink/14 bg-[color-mix(in_oklab,var(--bg)_85%,black)] p-4 text-left opacity-0 shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition duration-180 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100 group-focus-within:delay-250 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-250 ${
          align === "right" ? "left-0 md:right-0 md:left-auto" : "left-0"
        }`}
      >
        <span className="flex items-center gap-3">
          <span className="size-10 flex-none rounded-full bg-[repeating-linear-gradient(135deg,var(--s2)_0_4px,var(--s3)_4px_8px)]" />
          <span className="flex flex-col gap-0.5">
            <strong className="text-[15px] font-semibold">{item.company}</strong>
            <span className="text-xs text-muted">{details.location}</span>
          </span>
        </span>
        <span className="mt-3 block text-[13px] leading-normal text-ink2">{details.highlight}</span>
        <span className="mt-3 flex gap-1.5">
          {details.stack.map((stackItem) => (
            <LogoChip key={stackItem.name} tech={stackItem} size={26} iconSize="14px" />
          ))}
        </span>
      </span>
    </span>
  );
}
