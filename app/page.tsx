import About from "@/components/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Journey from "@/components/Journey/Journey";
import FloatingPill from "@/components/Nav/FloatingPill";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <>
      <main className="pb-20">
        <Hero />
        <About />
        <Journey />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <FloatingPill />
    </>
  );
}
