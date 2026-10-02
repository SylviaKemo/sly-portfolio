import ArrowButton from "@/components/ui/ArrowButton";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";
import Carousel from "./Carousel";

export default function Work() {
  return (
    <Section id="work">
      <Carousel />
      <Reveal className="mt-16 flex justify-center">
        <ArrowButton href={profile.github} variant="soft">
          More on GitHub
        </ArrowButton>
      </Reveal>
    </Section>
  );
}
