"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import AsiaMap from "./AsiaMap";

const offices = [
  { city: "Hong Kong", label: "HQ", address: "Nan Fung Tower, Central" },
  {
    city: "Singapore",
    label: "Office",
    address: "Marina Bay Financial Centre",
  },
  { city: "Malaysia", label: "Office", address: "Q Sentral, Kuala Lumpur" },
  { city: "Taiwan", label: "Office", address: "Zhongxiao East Road, Taipei" },
  { city: "Australia", label: "Office", address: "Sydney" },
  { city: "Vietnam", label: "Office", address: "Ho Chi Minh City" },
];

export default function GlobalPresence() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      id='presence'
      className='relative min-h-screen snap-start py-32 lg:py-40 lg:pb-10 bg-transparent overflow-hidden'
    >
      {/* Dotted World Map Background */}
      <div className='absolute -top-[10%] right-[20%] w-[750px] h-[750px] opacity-30 pointer-events-none hidden lg:block'>
        <AsiaMap hoveredRegion={hoveredRegion} />
      </div>

      <div className='relative z-10 max-w-[1920px] mx-auto px-8 lg:px-12 xl:pl-24 xl:pr-56'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='max-w-2xl mb-24'
        >
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-12 h-px bg-[#BFA054]' />
            <span className='text-[11px] text-[#BFA054] uppercase tracking-[0.3em]'>
              Global Presence
            </span>
          </div>

          <h2 className='font-[family-name:var(--font-playfair)] text-[2.125rem] lg:text-[2.875rem] xl:text-[3.5rem] font-medium text-[#F8F8FA] leading-[1.1]'>
            Across Asia
            <br />
            <span className='text-[#6B6F78]'>& Beyond</span>
          </h2>
        </motion.div>

        {/* Offices Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
              className='group p-10 lg:p-12 cursor-pointer glass-card rounded-2xl'
              onMouseEnter={() => setHoveredRegion(office.city)}
              onMouseLeave={() => setHoveredRegion(null)}
            >
              <div className='flex items-start justify-between mb-8'>
                <span className='text-[10px] text-[#BFA054] uppercase tracking-[0.2em]'>
                  {office.label}
                </span>
              </div>
              <h3 className='text-2xl font-medium text-[#F8F8FA] group-hover:text-[#BFA054] transition-colors'>
                {office.city}
              </h3>
              <p className='mt-3 text-sm text-[#6B6F78]'>{office.address}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
