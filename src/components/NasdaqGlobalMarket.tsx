"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const highlights = [
  {
    stat: "$69T",
    label: "U.S. Market Cap",
    description: "Total U.S. stock market capitalization (Jan 2026)",
  },
  {
    stat: "58%",
    label: "Foreign IPOs",
    description: "Of U.S. IPOs in Q1 2025 were foreign issuers",
  },
  {
    stat: "871+",
    label: "International Companies",
    description: "Listed on Nasdaq from around the world",
  },
];

const qualificationStandards = [
  { name: "Income Standard", keyMetric: "Pre-tax income ≥ $1M", float: "$15M" },
  { name: "Equity Standard", keyMetric: "Stockholders' equity ≥ $30M", float: "$18M" },
  { name: "Market Value", keyMetric: "Market value ≥ $75M", float: "$20M" },
  { name: "Assets/Revenue", keyMetric: "Assets & revenue ≥ $75M each", float: "$20M" },
];

export default function NasdaqGlobalMarket() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="nasdaq"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#08080C] via-[#0a0a0e] to-[#08080C]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-[#BFA054]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-[#4A7CC9]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24 lg:pr-48 xl:pr-64">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#BFA054]" />
            <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
              IPO Advisory
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-medium text-[#F8F8FA] leading-[1.1]">
            Nasdaq Global Market
            <br />
            <span className="text-[#BFA054]">IPO Services</span>
          </h2>

          <p className="mt-6 text-lg text-[#A0A4AC] leading-relaxed max-w-2xl">
            Your gateway to U.S. institutional capital. We guide Asia-Pacific enterprises
            through the complete Nasdaq Global Market listing journey.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-xl p-6 lg:p-8"
            >
              <span className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-medium text-[#BFA054]">
                {item.stat}
              </span>
              <h4 className="mt-2 text-sm text-[#F8F8FA] uppercase tracking-wider">
                {item.label}
              </h4>
              <p className="mt-2 text-xs text-[#6B6F78]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Qualification Standards Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-sm text-[#A0A4AC] uppercase tracking-wider mb-6">
            Qualification Pathways — Choose One
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualificationStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                className="p-5 rounded-lg border border-[#222226] hover:border-[#BFA054]/30 transition-colors bg-[#0c0c10]"
              >
                <h4 className="text-sm font-medium text-[#F8F8FA] mb-2">
                  {standard.name}
                </h4>
                <p className="text-xs text-[#A0A4AC] mb-1">
                  {standard.keyMetric}
                </p>
                <p className="text-xs text-[#6B6F78]">
                  Public float: {standard.float}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            href="/nasdaq-global-market"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#BFA054] hover:bg-[#D4B872] text-[#08080C] text-sm font-medium rounded-lg transition-colors cursor-pointer"
          >
            <span>View Full Guide</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/nasdaq-global-market#download"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#222226] hover:border-[#BFA054]/50 text-[#F8F8FA] text-sm rounded-lg transition-colors cursor-pointer"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download PDF</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
