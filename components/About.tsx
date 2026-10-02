import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { details, profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-[1100px]">
        <Reveal>
          <SectionTitle accent="My" title="Biography" />
        </Reveal>

        <Reveal>
          <p className="max-w-[1020px] text-[clamp(18px,1.6vw,22px)] leading-[1.55] text-pretty text-muted">
            I&apos;m a fullstack developer based in Nairobi, Kenya, with a love for building products
            that feel as good as they work. I enjoy collaborating with new people and finding ideas in
            different perspectives. Let&apos;s build your next product — from the database up to the
            last pixel.
          </p>
        </Reveal>

        <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-x-[clamp(40px,8vw,140px)] gap-y-12">
          <dl className="grid flex-[1_1_420px] grid-cols-[minmax(110px,auto)_minmax(0,1fr)] items-baseline gap-x-[clamp(32px,8vw,140px)] gap-y-4">
            {details.map((row) => (
              <div key={row.label} className="contents">
                <dt className="text-[17px] tracking-[0.02em] text-muted uppercase">{row.label}</dt>
                <dd className="text-[15px]">
                  <a
                    href={row.href}
                    className="border-b border-line2 pb-1 transition-colors duration-250 hover:border-accent hover:text-accent"
                  >
                    {row.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={profile.cvUrl}
            className="flex min-h-[200px] flex-[0_1_300px] flex-col items-center justify-center gap-[22px] border border-line2 transition-colors duration-300 hover:border-accent hover:bg-s1"
          >
            <span className="grid size-[72px] place-items-center rounded-full border-[1.5px] border-ink text-[30px] leading-none">
              ↓
            </span>
            <span className="text-[19px] tracking-[0.04em] text-muted uppercase">Download CV</span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
