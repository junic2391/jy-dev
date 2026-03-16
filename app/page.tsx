import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-[60px]">
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  );
}
