"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Strategy",
    description: "Structured insights and frameworks for decisive leadership",
  },
  {
    number: "02",
    title: "Execution",
    description: "Multi-workstream coordination and disciplined project management",
  },
  {
    number: "03",
    title: "Connectivity",
    description: "Access to a trusted global ecosystem of professionals",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen snap-start py-32 lg:py-40 bg-[#08080C]"
    >
      <div className="max-w-[1920px] mx-auto px-8 lg:px-12 xl:pl-24 xl:pr-56">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-40 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#BFA054]" />
                <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                  About Us
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-[2.125rem] lg:text-[2.875rem] xl:text-[3.5rem] font-medium text-[#F8F8FA] leading-[1.1]">
                A Strategic Partner
                <br />
                <span className="text-[#6B6F78]">for Complex</span>
                <br />
                Corporate Journeys
              </h2>

              <p className="mt-10 text-[#A0A4AC] leading-relaxed max-w-md">
                MVPI Capital combines structured strategic thinking with hands-on
                execution to help companies operate with institutional discipline
                and global readiness.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-20">
            {/* Value Statement */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-8 border-l border-[#222226]"
            >
              <div className="absolute left-0 top-0 w-px h-16 bg-[#BFA054]" />
              <p className="text-xl lg:text-2xl text-[#F8F8FA] leading-relaxed font-light">
                &ldquo;We bring clarity, coordination, and global connectivity
                to complex corporate journeys.&rdquo;
              </p>
            </motion.div>

            {/* Three Pillars */}
            <div className="space-y-12">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-8">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl text-[#222226] group-hover:text-[#7A6A3A] transition-colors">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium text-[#F8F8FA] group-hover:text-[#BFA054] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-[#6B6F78] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid gap-12 pt-12 border-t border-[#1A1A1E]"
            >
              <div>
                <span className="text-[10px] text-[#BFA054] uppercase tracking-[0.3em]">
                  Mission
                </span>
                <p className="mt-4 text-[#A0A4AC] leading-relaxed">
                  To empower enterprises with strategic insight, robust
                  organizational systems, and coordinated execution frameworks.
                </p>
              </div>
              <div>
                <span className="text-[10px] text-[#BFA054] uppercase tracking-[0.3em]">
                  Vision
                </span>
                <p className="mt-4 text-[#A0A4AC] leading-relaxed">
                  To shape Asia&apos;s next generation of globally connected,
                  institutionally disciplined enterprises.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
