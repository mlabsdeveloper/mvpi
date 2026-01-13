"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const expertiseAreas = [
  {
    id: "01",
    title: "Corporate Strategy",
    subtitle: "& Transformation",
    capabilities: [
      "Strategic planning & business model refinement",
      "Market and competitive intelligence",
      "Corporate restructuring design",
      "Cross-border expansion strategy",
    ],
  },
  {
    id: "02",
    title: "Organizational Systems",
    subtitle: "& Corporate Readiness",
    capabilities: [
      "Corporate governance framework structuring",
      "Internal process mapping & optimization",
      "Documentation architecture and control",
      "Corporate information readiness",
    ],
  },
  {
    id: "03",
    title: "Project Orchestration",
    subtitle: "& Coordination",
    capabilities: [
      "Project planning & milestone management",
      "Cross-department coordination",
      "Multi-jurisdictional documentation",
      "Workstream integration",
    ],
  },
  {
    id: "04",
    title: "Cross-Border",
    subtitle: "Development",
    capabilities: [
      "Overseas market corporate readiness",
      "International documentation structuring",
      "Industry and benchmarking studies",
      "Corporate research & analytics",
    ],
  },
];

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [activeId, setActiveId] = useState("01");

  const activeExpertise = expertiseAreas.find((e) => e.id === activeId);

  return (
    <section
      ref={ref}
      id="expertise"
      className="relative min-h-screen snap-start py-32 lg:py-40 bg-[#0A0A0E]"
    >
      <div className="max-w-[1920px] mx-auto px-8 lg:px-12 xl:pl-24 xl:pr-56">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#BFA054]" />
            <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
              Our Expertise
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-[2.125rem] lg:text-[2.875rem] xl:text-[3.5rem] font-medium text-[#F8F8FA] leading-[1.1]">
            Integrated Strategy
            <br />
            <span className="text-[#6B6F78]">&</span> Project Orchestration
          </h2>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left - Navigation */}
          <div className="lg:col-span-5">
            <div className="space-y-1">
              {expertiseAreas.map((area, index) => (
                <motion.button
                  key={area.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  onClick={() => setActiveId(area.id)}
                  className={`group w-full text-left py-6 border-b border-[#1A1A1E] cursor-pointer transition-all ${
                    activeId === area.id ? "border-[#BFA054]" : ""
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span
                      className={`font-[family-name:var(--font-playfair)] text-sm transition-colors ${
                        activeId === area.id ? "text-[#BFA054]" : "text-[#333]"
                      }`}
                    >
                      {area.id}
                    </span>
                    <div>
                      <h3
                        className={`text-xl lg:text-2xl font-medium transition-colors ${
                          activeId === area.id
                            ? "text-[#F8F8FA]"
                            : "text-[#6B6F78] group-hover:text-[#A0A4AC]"
                        }`}
                      >
                        {area.title}
                      </h3>
                      <span
                        className={`text-sm transition-colors ${
                          activeId === area.id
                            ? "text-[#A0A4AC]"
                            : "text-[#333] group-hover:text-[#6B6F78]"
                        }`}
                      >
                        {area.subtitle}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7 lg:pl-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="lg:sticky lg:top-40"
              >
                <div className="p-8 lg:p-12 bg-[#0C0C10] border border-[#1A1A1E]">
                  <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                    Capabilities
                  </span>
                  <ul className="mt-8 space-y-6">
                    {activeExpertise?.capabilities.map((capability, index) => (
                      <motion.li
                        key={capability}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.08 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-1.5 h-1.5 mt-2 bg-[#BFA054] rounded-full flex-shrink-0" />
                        <span className="text-[#A0A4AC] leading-relaxed">
                          {capability}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <p className="mt-8 text-xs text-[#6B6F78] italic">
                  We do not provide financial advice or regulated activities;
                  our role is strictly coordination and organizational support.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
