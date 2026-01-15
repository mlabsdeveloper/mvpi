"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";

function CountingNumber({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 300, suffix: "+", label: "Projects" },
  { value: 6, suffix: "", label: "Offices" },
  { value: 60, suffix: "+", label: "U.S. Engagements" },
  { value: 80, suffix: "+", label: "HK Projects" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen snap-start overflow-hidden bg-transparent"
    >
      {/* Mobile Layout - flex column */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col min-h-screen lg:hidden"
      >
        {/* Content */}
        <div className="flex-1 flex items-center pt-20 pb-8 px-6">
          <div className="max-w-3xl">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-2"
            >
              <div className="w-8 h-px bg-[#BFA054]" />
              <span className="text-[10px] text-[#BFA054] uppercase tracking-[0.25em]">
                Asia-Pacific Corporate Strategy
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-[family-name:var(--font-playfair)] text-[2.5rem] sm:text-[3rem] font-medium text-[#F8F8FA] leading-[1.08] tracking-tight"
            >
              Transforming
              <br />
              <span className="text-gold-gradient-animated">Ambition</span> Into
              <br />
              Global Enterprises
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-4 text-sm text-[#A0A4AC] max-w-md leading-relaxed"
            >
              We bring clarity, coordination, and global connectivity to complex
              corporate journeys — helping leaders scale with confidence.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-6 flex items-center gap-6"
            >
              <Link
                href="/projects"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3A62A3] via-[#4A7CC9] to-[#6B9ADB] text-white text-xs font-medium tracking-wide uppercase rounded-none hover:from-[#4A7CC9] hover:via-[#6B9ADB] hover:to-[#8BB4E8] transition-all cursor-pointer"
              >
                Explore Our Work
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-xs text-[#A0A4AC] uppercase tracking-[0.15em] hover:text-[#BFA054] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stats - part of flow on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="border-t border-[#222226]/50 mb-4 px-4 bg-[#05070a]/80"
        >
          <div className="grid grid-cols-4 divide-x divide-[#222226]/50">
            {stats.map((stat, index) => (
              <div key={index} className="py-6 px-2 text-center">
                <div className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-[#F8F8FA]">
                  <CountingNumber value={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="mt-1 text-[8px] text-[#6B6F78] uppercase tracking-[0.1em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Desktop Layout - absolute positioning */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-screen hidden lg:flex items-center pt-8"
      >
        <div className="w-full max-w-[1920px] mx-auto px-12 xl:pl-24 xl:pr-56">
          <div className="max-w-3xl">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-2"
            >
              <div className="w-12 h-px bg-[#BFA054]" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                Asia-Pacific Corporate Strategy
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-[family-name:var(--font-playfair)] text-[4.25rem] xl:text-[5.5rem] font-medium text-[#F8F8FA] leading-[1.05] tracking-tight"
            >
              Transforming
              <br />
              <span className="text-gold-gradient-animated">Ambition</span> Into
              <br />
              Global Enterprises
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-5 text-lg text-[#A0A4AC] max-w-xl leading-relaxed"
            >
              We bring clarity, coordination, and global connectivity to complex
              corporate journeys — helping leaders scale with confidence.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-6 flex items-center gap-8"
            >
              <Link
                href="/projects"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3A62A3] via-[#4A7CC9] to-[#6B9ADB] text-white text-sm font-medium tracking-wide uppercase rounded-none hover:from-[#4A7CC9] hover:via-[#6B9ADB] hover:to-[#8BB4E8] transition-all cursor-pointer"
              >
                Explore Our Work
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-[#A0A4AC] uppercase tracking-[0.2em] hover:text-[#BFA054] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Desktop Stats Bar - absolute */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#222226]/50 hidden lg:block"
      >
        <div className="max-w-[1920px] mx-auto px-12 xl:pl-24 xl:pr-56">
          <div className="grid grid-cols-4 divide-x divide-[#222226]/50">
            {stats.map((stat, index) => (
              <div key={index} className="py-10 px-8 first:pl-0 last:pr-0">
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-[#F8F8FA]">
                  <CountingNumber value={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="mt-1 text-[10px] text-[#6B6F78] uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-40 right-12 xl:right-24 z-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#BFA054] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
