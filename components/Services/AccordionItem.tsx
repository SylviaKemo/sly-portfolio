import LogoChip from "@/components/ui/LogoChip";
import type { Service } from "@/data/services";

type AccordionItemProps = {
  service: Service;
  number: number;
  open: boolean;
  onToggle: () => void;
};

export default function AccordionItem({ service, number, open, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-6 py-[clamp(18px,2vw,26px)] text-left transition-colors hover:text-accent"
      >
        <span
          className={`flex items-baseline gap-[clamp(14px,2vw,28px)] transition-transform duration-400 ease-soft ${
            open ? "translate-x-3" : ""
          }`}
        >
          <span className="text-[13px] text-muted">{String(number).padStart(2, "0")}</span>
          <span
            className={`text-[clamp(22px,2.4vw,32px)] leading-[1.1] font-light tracking-[0.01em] uppercase transition-colors duration-400 ${
              open ? "text-accent" : ""
            }`}
          >
            {service.title}
          </span>
        </span>
        <span
          className={`grid size-10 flex-none place-items-center rounded-full border transition duration-450 ease-soft ${
            open ? "-rotate-90 border-accent bg-accent text-on-accent" : "border-line2"
          }`}
        >
          ↘
        </span>
      </button>

      {/* Animating grid rows from 0fr to 1fr gives a smooth height transition */}
      <div
        className={`grid transition-[grid-template-rows] duration-550 ease-soft ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`flex flex-wrap items-start justify-between gap-x-16 gap-y-8 pb-[clamp(28px,3.5vw,44px)] transition-opacity delay-100 duration-400 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex max-w-[720px] flex-[1_1_420px] flex-col gap-6">
              <p className="text-sm leading-[1.8] tracking-[0.06em] text-pretty text-ink2 uppercase">
                {service.description}
              </p>
              <div className="flex gap-2">
                {service.logos.map((logo) => (
                  <LogoChip key={logo.name} tech={logo} iconSize="22px" />
                ))}
              </div>
            </div>
            <ul className="flex min-w-[200px] flex-col gap-2.5">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-xs font-medium tracking-[0.06em] uppercase"
                >
                  <span className="size-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
