import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Timeline from "./Timeline";

export default function Journey() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionTitle accent="My" title="Journey" />
      </Reveal>
      <Timeline />
    </Section>
  );
}
