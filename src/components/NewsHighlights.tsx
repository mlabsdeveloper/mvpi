"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const newsItems = [
  {
    id: 1,
    date: "February 19, 2025",
    category: "Event",
    title: "MVPI Annual Appreciation Gala 2025",
    description:
      "Successfully hosted the MVPI Annual Appreciation Banquet & IIFLE 1st Anniversary in Kuala Lumpur, bringing together nearly 100 distinguished guests including representatives from Malaysia-listed companies, Nasdaq-listed companies, and industry experts.",
    location: "Kuala Lumpur, Malaysia",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    link: "https://markets.financialcontent.com/stocks/article/marketersmedia-2025-3-3-mvpi-annual-appreciation-gala-2025-pioneering-nasdaq-success-and-regional-expansion-ahead",
  },
  {
    id: 2,
    date: "October 24-25, 2024",
    category: "Seminar",
    title: "Nasdaq IPO Conference",
    description:
      "Organized a comprehensive Nasdaq IPO Conference in Hong Kong, attracting over 30 potential listing company owners with industry expert speakers sharing insights on the path to going public.",
    location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&q=80",
    link: "https://www.accessnewswire.com/newsroom/en/banking-and-financial-services/mvp-international-capital-hosts-successful-nasdaq-ipo-seminar-939933",
  },
  {
    id: 3,
    date: "May 2024",
    category: "Partnership",
    title: "Monarch Equity Capital Collaboration",
    description:
      "Entered into a collaboration agreement to provide expert financial advisory services for Monarch Equity's US$100M Nasdaq listing process, marking another milestone in ASEAN expansion.",
    location: "Malaysia",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
    link: "https://finance.yahoo.com/news/monarch-equity-capital-berhad-targets-023200799.html",
  },
];

export default function NewsHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const activeNews = newsItems[activeIndex];
  const [scrollScale, setScrollScale] = useState(1);

  // Scroll-based zoom effect
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far through the section we've scrolled
      // When section top is at bottom of viewport: progress = 0
      // When section bottom is at top of viewport: progress = 1
      const progress = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));

      // Scale from 1 to 1.2 based on progress
      setScrollScale(1 + progress * 0.2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={ref}
      id="news"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with scroll zoom */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `scale(${scrollScale})` }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNews.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeNews.image})` }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/60 to-[#08080C]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-transparent to-[#08080C]/30" />

      {/* Content */}
      <div className="relative h-full max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24 flex flex-col justify-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#BFA054]" />
            <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
              News & Events
            </span>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <h2 className="font-[family-name:var(--font-playfair)] text-[2.125rem] lg:text-[2.875rem] xl:text-[3.5rem] font-medium text-[#F8F8FA] leading-[1.1]">
              Latest Updates
            </h2>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[#BFA054] hover:text-[#D4B872] transition-colors group cursor-pointer"
            >
              <span className="text-sm uppercase tracking-wider">View All News</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* News Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNews.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#BFA054] text-sm font-medium">
                {activeNews.category}
              </span>
              <span className="text-[#6B6F78] text-sm">•</span>
              <span className="text-[#6B6F78] text-sm">{activeNews.date}</span>
            </div>

            {/* Title */}
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl xl:text-5xl text-[#F8F8FA] font-medium leading-tight mb-6">
              {activeNews.title}
            </h3>

            {/* Description */}
            <p className="text-[#A0A4AC] text-lg leading-relaxed mb-8 line-clamp-3">
              {activeNews.description}
            </p>

            {/* Read Article Button */}
            <a
              href={activeNews.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              <span className="w-12 h-12 flex items-center justify-center border border-[#F8F8FA] rounded-lg group-hover:bg-[#F8F8FA] group-hover:text-[#08080C] transition-all">
                <FiArrowUpRight className="w-5 h-5" />
              </span>
              <span className="text-[#F8F8FA] font-medium group-hover:text-[#BFA054] transition-colors">
                Read Article
              </span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots - right side */}
      <div className="absolute right-6 lg:right-12 xl:right-24 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-1 rounded-full transition-all cursor-pointer ${
              index === activeIndex
                ? "h-8 bg-[#BFA054]"
                : "h-2 bg-[#6B6F78]/50 hover:bg-[#6B6F78]"
            }`}
          />
        ))}
      </div>

      {/* Progress bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1A1E]">
        <div
          key={activeIndex}
          className="h-full bg-[#BFA054] animate-progress"
        />
      </div>
    </section>
  );
}
