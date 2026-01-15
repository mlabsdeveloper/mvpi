"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface Project {
  id: number;
  ticker: string;
  name: string;
  exchange: string;
  ipoDate: string;
  raised: string;
  industry: string;
  headquarters: string;
  description: string;
  image: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [isInSection, setIsInSection] = useState(false);

  const activeProject = projects[activeIndex];

  // Handle wheel to change projects and lock scrolling
  useEffect(() => {
    let wheelTimeout: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;
    let canWheel = true;
    let accumulatedDelta = 0;
    const threshold = 150; // Amount of scroll needed to change project

    const handleWheel = (e: WheelEvent) => {
      if (!ref.current) return;

      // Disable scroll navigation on mobile (below lg breakpoint)
      if (window.innerWidth < 1024) return;

      const rect = ref.current.getBoundingClientRect();
      // Check if section is in view (top near viewport top, bottom below viewport)
      const inSection = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;
      setIsInSection(inSection);

      if (!inSection) return;

      // Accumulate scroll delta
      accumulatedDelta += e.deltaY;

      // Reset accumulated delta after a pause in scrolling
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => {
        accumulatedDelta = 0;
      }, 200);

      // Scrolling down
      if (accumulatedDelta > threshold && canWheel) {
        if (activeIndex < projects.length - 1) {
          // Not at last project - prevent scroll and go to next
          e.preventDefault();
          canWheel = false;
          accumulatedDelta = 0;
          setActiveIndex((prev) => prev + 1);
          clearTimeout(wheelTimeout);
          wheelTimeout = setTimeout(() => {
            canWheel = true;
          }, 600);
        }
        // At last project - allow normal scroll to continue
      }
      // Scrolling up
      else if (accumulatedDelta < -threshold && canWheel) {
        if (activeIndex > 0) {
          // Not at first project - prevent scroll and go to prev
          e.preventDefault();
          canWheel = false;
          accumulatedDelta = 0;
          setActiveIndex((prev) => prev - 1);
          clearTimeout(wheelTimeout);
          wheelTimeout = setTimeout(() => {
            canWheel = true;
          }, 600);
        }
        // At first project - allow normal scroll to continue
      }
      // Prevent scroll while accumulating
      else if ((activeIndex < projects.length - 1 && e.deltaY > 0) ||
               (activeIndex > 0 && e.deltaY < 0)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimeout);
      clearTimeout(resetTimeout);
    };
  }, [activeIndex, projects.length]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen"
    >
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeProject.image})` }}
            />
            {/* Radial gradient - transparent at bottom-left, dark outward */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 80% 80% at 0% 100%, transparent 0%, rgba(8,8,12,0.4) 30%, rgba(8,8,12,0.8) 60%, rgba(8,8,12,0.95) 100%)"
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24">
          <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
            {/* Left Side - Title */}
            <div className="lg:w-[35%] xl:w-[30%] mb-12 lg:mb-0">
              <div className="lg:sticky lg:top-32">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-px bg-[#BFA054]" />
                    <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                      Portfolio
                    </span>
                  </div>

                  <h1 className="font-[family-name:var(--font-playfair)] text-[2.5rem] lg:text-[3rem] xl:text-[4rem] font-medium text-[#F8F8FA] leading-[1.1]">
                    IPO/Post-IPO
                  </h1>
                  <h2 className="font-[family-name:var(--font-playfair)] text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] text-[#6B6F78] leading-[1.1] mt-1">
                    Clients
                  </h2>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Table */}
            <div className="lg:w-[65%] xl:w-[70%]">
              <div className="border-t border-[#F8F8FA]/20">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="border-b border-[#F8F8FA]/20"
                  >
                    {/* Row Header */}
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`w-full py-5 cursor-pointer group text-left transition-all ${
                        activeIndex === index ? "bg-[#F8F8FA]/5 pl-4" : "hover:pl-2"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Ticker */}
                        <span className={`text-sm font-mono w-14 flex-shrink-0 transition-colors ${
                          activeIndex === index ? "text-[#BFA054]" : "text-[#BFA054]/60"
                        }`}>
                          {project.ticker}
                        </span>

                        {/* Company Name */}
                        <span className={`flex-1 text-sm lg:text-base transition-colors ${
                          activeIndex === index ? "text-[#BFA054]" : "text-[#F8F8FA] group-hover:text-[#BFA054]"
                        }`}>
                          {project.name}
                        </span>

                        {/* Industry - Hidden on mobile */}
                        <span className={`hidden lg:block text-xs uppercase tracking-wider w-40 text-right transition-colors ${
                          activeIndex === index ? "text-[#A0A4AC]" : "text-[#6B6F78]"
                        }`}>
                          {project.industry}
                        </span>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pt-2 pl-[4.5rem]">
                            {/* Description */}
                            <p className="text-sm text-[#A0A4AC] leading-relaxed mb-6 max-w-xl">
                              {project.description}
                            </p>

                            {/* Meta */}
                            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                              <div>
                                <span className="text-[10px] text-[#6B6F78] uppercase tracking-wider block mb-1">
                                  Exchange
                                </span>
                                <span className="text-xs text-[#F8F8FA]">
                                  {project.exchange}
                                </span>
                              </div>
                              <div>
                                <span className="text-[10px] text-[#6B6F78] uppercase tracking-wider block mb-1">
                                  IPO Date
                                </span>
                                <span className="text-xs text-[#F8F8FA]">
                                  {project.ipoDate}
                                </span>
                              </div>
                              <div>
                                <span className="text-[10px] text-[#6B6F78] uppercase tracking-wider block mb-1">
                                  Headquarters
                                </span>
                                <span className="text-xs text-[#F8F8FA]">
                                  {project.headquarters}
                                </span>
                              </div>
                              <div>
                                <span className="text-[10px] text-[#6B6F78] uppercase tracking-wider block mb-1">
                                  Raised
                                </span>
                                <span className="text-xs text-[#BFA054]">
                                  {project.raised || "—"}
                                </span>
                              </div>
                            </div>

                            {/* Link */}
                            <a
                              href={`https://www.nasdaq.com/market-activity/stocks/${project.ticker.toLowerCase()}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs text-[#BFA054] hover:gap-3 transition-all cursor-pointer"
                            >
                              <span>View on NASDAQ</span>
                              <FiArrowUpRight className="w-3 h-3" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xs text-[#6B6F78]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-[#222226]">
                  <div
                    className="h-full bg-[#BFA054] transition-all duration-300"
                    style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
