"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const differentiators = [
  {
    title: "Strategy-Led, Execution-Driven",
    description:
      "Structured frameworks and data-driven thinking translated into systematic execution.",
  },
  {
    title: "Trusted Asia-Pacific Presence",
    description:
      "Offices across Hong Kong, Singapore, Australia, Vietnam, Malaysia, and Taiwan.",
  },
  {
    title: "Multi-Disciplinary Expertise",
    description:
      "Experience spanning consulting, cross-border projects, and multi-country coordination.",
  },
  {
    title: "Super Connector Network",
    description:
      "Deep relationships with legal, audit, corporate, and institutional partners globally.",
  },
];

export default function WhyMVPI() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      id="why-mvpi"
      className="relative min-h-screen snap-start py-32 lg:py-40 bg-[#08080C]"
    >
      <div className="max-w-[1920px] mx-auto px-8 lg:px-12 xl:pl-24 xl:pr-56">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#BFA054]" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                Why MVPI
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-[2.125rem] lg:text-[2.875rem] xl:text-[3.5rem] font-medium text-[#F8F8FA] leading-[1.1]">
              Strategy, Structure
              <br />
              <span className="text-[#6B6F78]">& Execution</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-[#A0A4AC] leading-relaxed max-w-md">
              Connected by a global ecosystem of professionals and institutions,
              we deliver institutional-grade support for complex corporate journeys.
            </p>
          </motion.div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#1A1A1E]">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group bg-[#08080C] p-10 lg:p-16 cursor-pointer"
            >
              <span className="text-[10px] text-[#333] uppercase tracking-[0.2em] group-hover:text-[#BFA054] transition-colors">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl lg:text-2xl font-medium text-[#F8F8FA] group-hover:text-[#BFA054] transition-colors">
                {item.title}
              </h3>
              <p className="mt-4 text-[#6B6F78] leading-relaxed group-hover:text-[#A0A4AC] transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Network Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 pt-24 border-t border-[#1A1A1E]"
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24 mb-12">
            <div className="lg:min-w-[280px]">
              <span className="text-[10px] text-[#BFA054] uppercase tracking-[0.3em]">
                Our Ecosystem
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl text-[#F8F8FA]">
                Global Network
              </h3>
              <p className="mt-4 text-sm text-[#6B6F78] leading-relaxed max-w-xs">
                A trusted network of partners enabling seamless cross-border collaboration.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Professional Firms", desc: "Legal, audit & advisory" },
                { name: "Corporate Groups", desc: "Strategic alliances" },
                { name: "Institutional Partners", desc: "Banks & funds" },
                { name: "Leadership Networks", desc: "C-suite connections" },
                { name: "Technology Communities", desc: "Innovation partners" },
                { name: "Entrepreneur Alliances", desc: "Founder ecosystems" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  className="group p-5 bg-[#0C0C10] border border-[#1A1A1E] hover:border-[#BFA054]/30 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-[#BFA054] rounded-full" />
                    <span className="text-sm text-[#F8F8FA] group-hover:text-[#BFA054] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6F78] pl-3.5">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
