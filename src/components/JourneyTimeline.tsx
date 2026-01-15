"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const phases = [
  {
    period: "2000s",
    title: "Foundation",
    subtitle: "Building Expertise",
    items: [
      "Hong Kong HQ Established",
      "IPO Advisory",
      "Capital Markets",
      "Strategic Consulting",
    ],
  },
  {
    period: "2020-2024",
    title: "Growth",
    subtitle: "Regional Expansion",
    items: [
      "~50 Nasdaq Listings",
      "$1.5B+ Fundraising",
      "Malaysia Office",
      "Singapore Entity",
    ],
    highlight: true,
  },
  {
    period: "2025+",
    title: "Future",
    subtitle: "ASEAN Dominance",
    items: [
      "30 IPOs Target",
      "Regional Network",
      "Cross-border Deals",
      "Industry Leadership",
    ],
  },
];

export default function JourneyTimeline() {
  return (
    <div className="relative">
      {/* Desktop - Show image */}
      <div className="hidden lg:block">
        <Image
          src="/milestone.png"
          alt="MVPI Journey - Foundation, Growth, Future"
          width={1920}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Mobile - Vertical timeline */}
      <div className="lg:hidden">
        <div className="relative pl-8 border-l border-[#3A3A3E]">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative pb-12 ${index === phases.length - 1 ? "pb-0" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+4px)] w-2 h-2 rounded-full bg-[#BFA054]" />

              {/* Period */}
              <span className="text-[#BFA054] text-xs tracking-wider block mb-2">
                {phase.period}
              </span>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#F8F8FA] mb-1">
                {phase.title}
              </h3>

              {/* Subtitle */}
              <span className="text-[#6B6F78] text-sm block mb-4">
                {phase.subtitle}
              </span>

              {/* Items */}
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-[#A0A4AC]">
                    {phase.highlight && itemIndex === 0 ? (
                      <span className="inline-block bg-[#BFA054] text-[#08080C] px-3 py-1 font-medium">
                        {item}
                      </span>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
