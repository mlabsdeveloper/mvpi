import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import WhyMVPI from "@/components/WhyMVPI";
import GlobalPresence from "@/components/GlobalPresence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#08080C]">
        <Hero />
        <About />
        <Expertise />
        <WhyMVPI />
        <GlobalPresence />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
