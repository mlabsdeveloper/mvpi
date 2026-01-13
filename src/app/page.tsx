import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import WhyMVPI from "@/components/WhyMVPI";
import GlobalPresence from "@/components/GlobalPresence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Header />
      <main className="relative z-10">
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
