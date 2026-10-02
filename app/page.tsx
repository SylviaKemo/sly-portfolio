import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import Journey from "@/components/Journey/Journey";
import FloatingPill from "@/components/Nav/FloatingPill";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <>
      <main className="pb-20">
        <Hero />
        <About />
        <Journey />
        <Work />
      </main>
      <FloatingPill />
    </>
  );
}
