import Nav from "@/components/Nav";
import BentoGrid from "@/components/BentoGrid";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-[60px]">
        <BentoGrid />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
