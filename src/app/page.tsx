import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a href="#top" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
