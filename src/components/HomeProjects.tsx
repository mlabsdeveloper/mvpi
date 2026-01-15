"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    ticker: "HKPD",
    name: "Hong Kong Pharma Digital Technology",
    exchange: "NASDAQ Capital Market",
    ipoDate: "January 2025",
    raised: "$5.6M",
    industry: "Pharma / E-commerce",
    headquarters: "Hong Kong",
    description: "A leading OTC pharmaceutical cross-border e-commerce supply chain services provider in Hong Kong.",
  },
  {
    id: 2,
    ticker: "ENGS",
    name: "Energys Group Limited",
    exchange: "NASDAQ Capital Market",
    ipoDate: "April 2025",
    raised: "$10.1M",
    industry: "Clean Energy",
    headquarters: "United Kingdom",
    description: "UK-based vertically integrated energy efficiency and decarbonization solutions provider.",
  },
  {
    id: 3,
    ticker: "WLGS",
    name: "WANG & LEE GROUP",
    exchange: "NASDAQ Capital Market",
    ipoDate: "April 2023",
    raised: "$8.0M",
    industry: "Construction",
    headquarters: "Hong Kong",
    description: "A Hong Kong-based construction prime and subcontractor specializing in E&M Systems installation.",
  },
];

export default function HomeProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="clients"
      className="relative py-24 lg:py-32 bg-[#08080C]"
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24 lg:pr-48 xl:pr-64">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
          {/* Left Side - Title */}
          <div className="lg:w-[35%] xl:w-[30%] mb-12 lg:mb-0">
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

              <h2 className="font-[family-name:var(--font-playfair)] text-[2.5rem] lg:text-[3rem] xl:text-[4rem] font-medium text-[#F8F8FA] leading-[1.1]">
                IPO/Post-IPO
              </h2>
              <h3 className="font-[family-name:var(--font-playfair)] text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] text-[#6B6F78] leading-[1.1] mt-1">
                Clients
              </h3>
            </motion.div>
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
                                {project.raised}
                              </span>
                            </div>
                          </div>

                          {/* Link */}
                          <a
                            href={`https://www.nasdaq.com/market-activity/stocks/${project.ticker.toLowerCase()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs text-[#4A7CC9] hover:text-[#6B9ADB] hover:gap-3 transition-all cursor-pointer"
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

            {/* View More Link */}
            <Link
              href="/projects"
              scroll={true}
              className="inline-flex items-center gap-2 mt-8 text-[#BFA054] hover:text-[#D4B872] transition-colors group cursor-pointer"
            >
              <span className="text-sm uppercase tracking-wider">View more projects</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
