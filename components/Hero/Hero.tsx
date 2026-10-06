import Image from "next/image";
import LogoChip from "@/components/ui/LogoChip";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { heroStack } from "@/data/tech";
import Blob from "./Blob";
import CertBadge from "./CertBadge";
import HireBadge from "./HireBadge";
import MobileBubble from "./MobileBubble";
import ScrollCue from "./ScrollCue";
import SocialTab from "./SocialTab";
import SpeechBubble from "./SpeechBubble";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[max(100vh,760px)] flex-wrap justify-between gap-8 overflow-x-clip px-[clamp(20px,4vw,56px)] pt-[110px] pb-10"
    >
      {/* Background: blob + portrait */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Blob />
        <div className="absolute bottom-0 left-1/2 aspect-[3/4] h-[48%] max-w-[90vw] -translate-x-1/2 md:h-[80%]">
          <Image
            src="/images/sylvia-portrait.png"
            alt="Portrait of Sylvia Kemo"
            fill
            priority
            sizes="(min-width: 768px) 60vh, 90vw"
            className="object-contain object-bottom"
          />
          <MobileBubble />
        </div>
      </div>

      {/* Left column: intro */}
      <div className="relative z-10 flex flex-[1_1_360px] flex-col items-center justify-start gap-5 text-center md:items-start md:justify-between md:gap-12 md:text-left">
        <Reveal>
          <h1 className="text-[clamp(48px,4.2vw,104px)] leading-none font-light tracking-[-0.025em] text-accent">
            Hey there,
            <br />
            <span className="text-ink">I&apos;m Sylvia!</span>
          </h1>
        </Reveal>

        <Reveal className="flex max-w-[300px] flex-col items-center gap-4 md:items-start">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em]">{profile.role}</h2>
          <p className="text-[15px] leading-[1.55] text-pretty text-ink2">
            Building products around data, fintech, AI, and the web.
          </p>
          <div className="flex gap-2">
            {heroStack.map((item) => (
              <LogoChip key={item.name} tech={item} iconSize="22px" />
            ))}
          </div>
        </Reveal>

        <ScrollCue />
      </div>

      {/* Right column: desktop only */}
      <div className="relative z-10 -mt-10 hidden flex-[1_1_360px] flex-col items-end justify-between gap-8 md:flex">
        <Reveal>
          <SocialTab />
        </Reveal>
        <Reveal className="w-full max-w-[400px]">
          <SpeechBubble />
        </Reveal>
        <Reveal>
          <CertBadge />
        </Reveal>
        <HireBadge />
      </div>
    </section>
  );
}
