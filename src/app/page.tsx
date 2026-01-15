import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import FlyingPhotos from "@/components/FlyingPhotos";
import Footer from "@/components/Footer";
import GlobalPresence from "@/components/GlobalPresence";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsHighlights from "@/components/NewsHighlights";
import VideoBackground from "@/components/VideoBackground";
import WhyMVPI from "@/components/WhyMVPI";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Header />
      <main className='relative z-10'>
        <Hero />
        <About />
        <Expertise />
        <WhyMVPI />
        <FlyingPhotos />
        <GlobalPresence />
        <NewsHighlights />
        {/* <StockGraphDivider /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
