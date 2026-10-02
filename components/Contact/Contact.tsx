import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionTitle accent="Let's" title="Talk" />
      </Reveal>
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[clamp(40px,6vw,96px)]">
        <Reveal>
          <ContactInfo />
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
