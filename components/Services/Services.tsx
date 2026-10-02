import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Accordion from "./Accordion";

export default function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionTitle accent="What I" title="Offer" />
      </Reveal>
      <Accordion />
    </Section>
  );
}
