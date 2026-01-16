"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const differentiators = [
  {
    number: "01",
    title: "Strategy-Led",
    subtitle: "Execution-Driven",
    description:
      "Structured frameworks and data-driven thinking translated into systematic execution.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Asia-Pacific",
    subtitle: "Presence",
    description:
      "Offices across Hong Kong, Singapore, Australia, Vietnam, Malaysia, and Taiwan.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Multi-Disciplinary",
    subtitle: "Expertise",
    description:
      "Experience spanning consulting, cross-border projects, and multi-country coordination.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Super Connector",
    subtitle: "Network",
    description:
      "Deep relationships with legal, audit, corporate, and institutional partners globally.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

export default function WhyMVPI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animated line progress
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="why-mvpi"
      className="relative min-h-screen py-32 lg:py-40 bg-transparent overflow-hidden"
    >
      {/* Large background numbers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {differentiators.map((item, index) => (
          <motion.span
            key={item.number}
            className="absolute font-[family-name:var(--font-playfair)] text-[20rem] lg:text-[30rem] font-bold text-[#0a0a0c] select-none"
            style={{
              top: `${index * 25}%`,
              left: index % 2 === 0 ? "-5%" : "auto",
              right: index % 2 !== 0 ? "-5%" : "auto",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {item.number}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-8 lg:px-12 xl:pl-24 xl:pr-56">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-[#BFA054]" />
            <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
              Why Choose Us
            </span>
            <div className="w-12 h-px bg-[#BFA054]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] font-medium text-[#F8F8FA] leading-[1.05]"
          >
            The MVPI
            <br />
            <span className="text-[#BFA054]">Advantage</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg text-[#A0A4AC] max-w-2xl mx-auto leading-relaxed"
          >
            Connected by a global ecosystem of professionals and institutions,
            we deliver institutional-grade support for complex corporate journey.
          </motion.p>
        </div>

        {/* Vertical timeline with cards */}
        <div className="relative">
          {/* Animated connecting line - center */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
            {/* Base line */}
            <div className="absolute inset-0 bg-[#1a1a1c]" />
            {/* Fill line on scroll */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#BFA054]/40"
              style={{ height: "100%", scaleY: lineProgress, transformOrigin: "top" }}
            />
            {/* Pulse effect traveling down */}
            <motion.div
              className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#4A7CC9] to-transparent"
              animate={{
                top: ["-10%", "110%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ opacity: 0.8 }}
            />
            {/* Secondary pulse */}
            <motion.div
              className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-[#6B9ADB]/60 to-transparent"
              animate={{
                top: ["-10%", "110%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
              style={{ opacity: 0.5 }}
            />
          </div>

          {/* Cards - negative margin for overlap */}
          <div className="space-y-8 lg:space-y-0">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`relative lg:w-[42%] ${
                  index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                } ${index !== 0 ? "lg:-mt-20" : ""}`}
              >
                {/* Connector line and dot - using absolute positioning relative to full container */}
                <div
                  className={`hidden lg:flex items-center absolute top-1/2 -translate-y-1/2 ${
                    index % 2 === 0
                      ? "left-full"
                      : "right-full flex-row-reverse"
                  }`}
                  style={{
                    width: "calc((100% / 0.42) * 0.08 + 8px)", // 8% of parent container + dot radius
                  }}
                >
                  {/* Line */}
                  <div className="flex-1 h-px bg-[#BFA054]/30 relative overflow-hidden">
                    {/* Pulse effect - blue */}
                    <motion.div
                      className={`absolute top-0 h-full bg-[#4A7CC9] ${
                        index % 2 === 0 ? "left-0" : "right-0"
                      }`}
                      animate={{
                        width: ["0%", "100%"],
                        opacity: [0.8, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: index * 0.4,
                      }}
                    />
                  </div>
                  {/* Dot - gold with blue pulse glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-[#BFA054] bg-[#05070a] flex items-center justify-center">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-[#BFA054]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Card */}
                <div className="group relative p-6 lg:p-10 rounded-2xl bg-gradient-to-br from-[#0f1012] to-[#0a0a0c] border border-[#1a1a1c] hover:border-[#BFA054]/30 transition-all duration-500 overflow-hidden cursor-pointer">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#BFA054]/5 to-transparent" />
                  </div>

                  {/* Large number background */}
                  <span className="absolute -right-4 -top-8 font-[family-name:var(--font-playfair)] text-[8rem] lg:text-[10rem] font-bold text-[#111113] group-hover:text-[#151517] transition-colors select-none">
                    {item.number}
                  </span>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-[#BFA054] mb-6 group-hover:text-[#d4b86a] transition-colors">
                      {item.icon}
                    </div>

                    {/* Number badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="text-xs text-[#BFA054] font-medium tracking-wider">
                        {item.number}
                      </span>
                      <div className="w-8 h-px bg-[#BFA054]/50" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-medium text-[#F8F8FA] leading-tight group-hover:text-[#BFA054] transition-colors">
                      {item.title}
                      <br />
                      <span className="text-[#6B6F78] group-hover:text-[#F8F8FA]/80 transition-colors">
                        {item.subtitle}
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-[#6B6F78] leading-relaxed group-hover:text-[#A0A4AC] transition-colors">
                      {item.description}
                    </p>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
