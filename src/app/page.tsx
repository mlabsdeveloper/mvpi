import About from "@/components/About";
import Contact from "@/components/Contact";
import Ecosystem from "@/components/Ecosystem";
import Expertise from "@/components/Expertise";
import FlyingPhotos from "@/components/FlyingPhotos";
import Footer from "@/components/Footer";
import GlobalPresence from "@/components/GlobalPresence";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeProjects from "@/components/HomeProjects";
import NewsHighlights from "@/components/NewsHighlights";
import Partners from "@/components/Partners";
import StockGraphDivider from "@/components/StockGraphDivider";
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
        <Ecosystem />
        <NewsHighlights />
        <HomeProjects />
        <StockGraphDivider />
        <Contact />
        <Partners />
        <Footer />
      </main>
    </>
  );
}
