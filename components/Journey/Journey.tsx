import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Timeline from "./Timeline";
import ToolBubbles from "./ToolBubbles";

export default function Journey() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionTitle accent="My" title="Journey" />
      </Reveal>
      <Timeline />

      <Reveal className="mt-[clamp(64px,8vw,110px)] flex flex-col items-center gap-3 text-center">
        <span className="text-sm tracking-[0.08em] text-accent uppercase">Toolkit</span>
        <h3 className="text-[clamp(28px,3vw,40px)] font-normal">
          <span className="font-serif italic">The tools</span> I reach for
        </h3>
      </Reveal>
      <ToolBubbles />
    </Section>
  );
}
