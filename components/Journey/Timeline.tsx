import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/experience";
import CompanyCard from "./CompanyCard";
import Squiggle from "./Squiggle";

/**
 * Vertical timeline. On mobile every card sits right of the line;
 * from md up the cards alternate sides of a centred line.
 */
export default function Timeline() {
  return (
    <div className="relative flex flex-col gap-10 py-2">
      <Squiggle />
      {experience.map((item, index) => {
        const onRight = index % 2 === 1;

        return (
          <Reveal
            key={item.period}
            className="grid grid-cols-[40px_minmax(0,1fr)] items-center md:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)]"
          >
            <span className="relative z-10 col-start-1 row-start-1 size-3 justify-self-center rounded-full bg-accent md:col-start-2" />

            <div
              className={`col-start-2 row-start-1 rounded-2xl bg-ink/14 p-px ${
                onRight ? "md:col-start-3" : "md:col-start-1 md:text-right"
              }`}
            >
              <div className="rounded-[15px] bg-[color-mix(in_oklab,var(--bg)_92%,black)] px-8 py-7">
                <span className="text-[13px] text-accent">{item.period}</span>
                <h3 className="mt-2.5 mb-1 text-[clamp(22px,2vw,28px)] leading-[1.2] font-medium">
                  {item.role}
                </h3>
                <CompanyCard item={item} align={onRight ? "left" : "right"} />
                <p className="mt-3.5 text-[15px] leading-[1.6] text-pretty text-ink2">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
