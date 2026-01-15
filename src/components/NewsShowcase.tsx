"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  description: string;
  location: string;
  image: string;
  link: string;
  source: string;
}

interface NewsShowcaseProps {
  newsItems: NewsItem[];
}

export default function NewsShowcase({ newsItems }: NewsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeNews = newsItems[activeIndex];

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, newsItems.length]);

  const formatIndex = (num: number) => String(num + 1).padStart(2, "0");

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNews.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeNews.image})` }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/60 to-[#08080C]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-transparent to-[#08080C]/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24 flex">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center py-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNews.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              {/* Counter */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl text-[#F8F8FA]">
                  {formatIndex(activeIndex)}
                </span>
                <span className="text-2xl text-[#6B6F78]">/</span>
                <span className="text-2xl text-[#6B6F78]">
                  {formatIndex(newsItems.length - 1)}
                </span>
              </div>

              {/* Category & Date */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#BFA054] text-sm font-medium">
                  {activeNews.category}
                </span>
                <span className="text-[#6B6F78] text-sm">•</span>
                <span className="text-[#6B6F78] text-sm">{activeNews.date}</span>
              </div>

              {/* Title */}
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl xl:text-5xl text-[#F8F8FA] font-medium leading-tight mb-6">
                {activeNews.title}
              </h2>

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

        {/* Right Sidebar - News Thumbnails */}
        <div className="hidden lg:flex flex-col justify-center gap-4 w-[320px] xl:w-[380px] py-32">
          {newsItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex gap-4 p-3 rounded-xl text-left transition-all cursor-pointer ${
                index === activeIndex
                  ? "bg-[#F8F8FA]/10 backdrop-blur-sm"
                  : "hover:bg-[#F8F8FA]/5"
              }`}
            >
              {/* Thumbnail */}
              <div
                className="w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-[#A0A4AC]">{item.date}</span>
                  <span className="text-xs text-[#6B6F78]">•</span>
                  <span className="text-xs text-[#BFA054]">{item.category}</span>
                </div>
                <h4
                  className={`text-sm font-medium leading-snug line-clamp-2 ${
                    index === activeIndex ? "text-[#F8F8FA]" : "text-[#A0A4AC]"
                  }`}
                >
                  {item.title}
                </h4>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Progress indicator - dots (desktop) */}
      <div className="absolute right-6 lg:right-12 xl:right-24 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
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

      {/* Mobile Thumbnails - horizontal scroll at bottom */}
      <div className="absolute bottom-12 left-0 right-0 lg:hidden">
        <div className="flex gap-3 px-6 overflow-x-auto pb-4 scrollbar-hide">
          {newsItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg bg-cover bg-center cursor-pointer transition-all ${
                index === activeIndex
                  ? "ring-2 ring-[#BFA054] ring-offset-2 ring-offset-[#08080C]"
                  : "opacity-60"
              }`}
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}
        </div>
      </div>

      {/* Progress bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1A1E]">
        <div
          key={activeIndex}
          className={`h-full bg-[#BFA054] ${isPaused ? "animate-paused" : "animate-progress"}`}
        />
      </div>
    </div>
  );
}
