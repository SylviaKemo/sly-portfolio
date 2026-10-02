import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import FloatingPill from "@/components/Nav/FloatingPill";

export default function Home() {
  return (
    <>
      <main className="pb-20">
        <Hero />
        <About />
      </main>
      <FloatingPill />
    </>
  );
}
