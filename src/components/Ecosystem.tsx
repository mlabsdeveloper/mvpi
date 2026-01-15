"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ecosystemPartners = [
  {
    name: "IIFLE",
    tag: "Education",
    description:
      "The International Institute for Financing & Listing for Entrepreneurs provides training and development programs for business leaders navigating the path to public markets.",
    href: "https://iifle.org",
  },
  {
    name: "M-Labs",
    tag: "Digital Assets",
    description:
      "For companies exploring tokenization and Web3 integration, M-Labs provides institutional-grade tokenomics advisory and digital asset structuring services.",
    href: "https://mlabscapital.com",
  },
];

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative pt-8 pb-20 lg:pt-12 lg:pb-24 bg-[#08080C]"
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24 lg:pr-48 xl:pr-64">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#BFA054]" />
            <span className="text-[10px] text-[#BFA054] uppercase tracking-[0.3em]">
              Ecosystem
            </span>
          </div>
          <p className="text-sm text-[#6B6F78] leading-relaxed">
            Specialized capabilities through our network
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {ecosystemPartners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group block p-6 lg:p-8 border border-[#222226] rounded-xl hover:border-[#BFA054]/30 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg lg:text-xl font-medium text-[#F8F8FA] group-hover:text-[#BFA054] transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-[10px] text-[#6B6F78] uppercase tracking-wider px-2 py-1 border border-[#222226] rounded">
                      {partner.tag}
                    </span>
                  </div>
                  <p className="text-sm text-[#A0A4AC] leading-relaxed">
                    {partner.description}
                  </p>
                </div>
                <FiArrowUpRight className="w-5 h-5 text-[#6B6F78] group-hover:text-[#BFA054] transition-colors flex-shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
