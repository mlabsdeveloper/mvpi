"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Loeb", logo: "/partners/loeb.png" },
  { name: "Sutter", logo: "/partners/sutter.png" },
  { name: "Robinhood", logo: "/partners/robinhood.png" },
  { name: "Celestia", logo: "/partners/celestia.png" },
  { name: "AOGB", logo: "/partners/aogb.png" },
  { name: "A+ Boss", logo: "/partners/aplusboss.png" },
  { name: "Orion Mano", logo: "/partners/orionmano.avif" },
  { name: "M-Labs", logo: "/partners/mlabs.png" },
  { name: "XOX", logo: "/partners/xox.svg" },
  { name: "ED", logo: "/partners/ed.png" },
];

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-24 bg-[#08080C] overflow-hidden"
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:pl-24 xl:pr-56">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#BFA054]" />
            <span className="text-[10px] text-[#BFA054] uppercase tracking-[0.3em]">
              Trusted By
            </span>
            <div className="w-8 h-px bg-[#BFA054]" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-medium text-[#F8F8FA]">
            Our Partners
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group relative flex items-center justify-center w-full h-20 cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="object-contain max-h-14 lg:max-h-16 w-auto"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-[#222226] to-transparent"
        />
      </div>
    </section>
  );
}
