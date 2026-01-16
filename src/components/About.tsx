"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TbBulb, TbTargetArrow, TbNetwork } from "react-icons/tb";
import Starfield from "./Starfield";

const pillars = [
  {
    title: "Strategy",
    description: "Structured insights and frameworks for decisive leadership. We help organizations develop clear strategic direction through rigorous analysis and proven methodologies.",
  },
  {
    title: "Execution",
    description: "Multi-workstream coordination and disciplined project management. Our hands-on approach ensures strategies translate into measurable outcomes.",
  },
  {
    title: "Connectivity",
    description: "Access to a trusted global ecosystem of professionals. We bridge organizations with the right partners, advisors, and institutions worldwide.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pillarsContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the pillars section
  const { scrollYProgress } = useScroll({
    target: pillarsContainerRef,
    offset: ["start start", "end end"],
  });

  // Circle rotation follows scroll continuously (0 to 240 degrees for 3 items)
  const circleRotation = useTransform(scrollYProgress, [0, 1], [0, 240]);

  // Crossfade opacity - one fades out as the next fades in (tighter transitions)
  const pillar0Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const pillar1Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const pillar2Opacity = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);

  // Y position for smooth entrance/exit of content
  const pillar0Y = useTransform(scrollYProgress, [0, 0.25, 0.33], [0, 0, -20]);
  const pillar1Y = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [20, 0, 0, -20]);
  const pillar2Y = useTransform(scrollYProgress, [0.58, 0.66, 1], [20, 0, 0]);

  return (
    <section ref={sectionRef} id="about" className="relative bg-transparent">
      {/* Screen 1: Headline */}
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-12 xl:px-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#BFA054]" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                About Us
              </span>
              <div className="w-12 h-px bg-[#BFA054]" />
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-medium text-[#F8F8FA] leading-[1.05]">
              A Strategic Partner
              <br />
              for Complex
              <br />
              <span className="text-[#BFA054]">Corporate Journey</span>
            </h2>

            <p className="mt-10 text-lg lg:text-xl text-[#A0A4AC] leading-relaxed max-w-2xl mx-auto">
              MVPI Capital combines structured strategic thinking with hands-on
              execution to help companies operate with institutional discipline
              and global readiness.
            </p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-3"
              >
                <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.2em]">
                  Scroll to explore
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-[#BFA054] to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Screen 2: Pillars with scroll-driven animation */}
      <div
        ref={pillarsContainerRef}
        className="relative"
        style={{ height: "390vh" }} // Extended scroll distance for slower transitions
      >
        {/* Sticky container */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Full-width Ellipse - height matches circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="absolute w-[200vw]"
              style={{ height: "min(72vh, 540px)" }}
              viewBox="0 0 400 100"
              preserveAspectRatio="none"
            >
              <ellipse
                cx="200"
                cy="50"
                rx="198"
                ry="48"
                fill="none"
                stroke="rgba(191, 160, 84, 0.5)"
                strokeWidth="0.15"
                strokeDasharray="0.4 0.4"
              />
            </svg>

            {/* Inner circle container - rotates with scroll */}
            <motion.div
              className="relative"
              style={{
                width: "min(72vh, 540px)",
                height: "min(72vh, 540px)",
                rotate: circleRotation,
              }}
            >
              {/* Dotted circle */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgba(191, 160, 84, 0.25)"
                  strokeWidth="0.3"
                  strokeDasharray="1.2 1.2"
                />
              </svg>

              {/* Triangle markers on the circle - 3 markers at 120° intervals */}
              {[0, 120, 240].map((angle, index) => {
                const rad = ((angle - 90) * Math.PI) / 180; // Start from top
                const x = 50 + 48 * Math.cos(rad);
                const y = 50 + 48 * Math.sin(rad);
                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" className="fill-[#BFA054]">
                      <polygon points="6,0 12,10 0,10" />
                    </svg>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Content in center - transitions between pillars following scroll */}
          <div className="relative z-10 max-w-lg mx-auto px-8 text-center">
            {/* Pillar 0 - Strategy */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-8"
              style={{ opacity: pillar0Opacity, y: pillar0Y }}
            >
              <TbBulb className="w-8 h-8 text-[#BFA054] mb-6" />
              <h3 className="font-[family-name:var(--font-playfair)] text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-medium text-[#F8F8FA] leading-tight">
                {pillars[0].title}
              </h3>
              <p className="mt-6 text-sm sm:text-base text-[#A0A4AC] leading-relaxed">
                {pillars[0].description}
              </p>
            </motion.div>

            {/* Pillar 1 - Execution */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-8"
              style={{ opacity: pillar1Opacity, y: pillar1Y }}
            >
              <TbTargetArrow className="w-8 h-8 text-[#BFA054] mb-6" />
              <h3 className="font-[family-name:var(--font-playfair)] text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-medium text-[#F8F8FA] leading-tight">
                {pillars[1].title}
              </h3>
              <p className="mt-6 text-sm sm:text-base text-[#A0A4AC] leading-relaxed">
                {pillars[1].description}
              </p>
            </motion.div>

            {/* Pillar 2 - Connectivity */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-8"
              style={{ opacity: pillar2Opacity, y: pillar2Y }}
            >
              <TbNetwork className="w-8 h-8 text-[#BFA054] mb-6" />
              <h3 className="font-[family-name:var(--font-playfair)] text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-medium text-[#F8F8FA] leading-tight">
                {pillars[2].title}
              </h3>
              <p className="mt-6 text-sm sm:text-base text-[#A0A4AC] leading-relaxed">
                {pillars[2].description}
              </p>
            </motion.div>

            {/* Invisible spacer for layout */}
            <div className="invisible">
              <div className="w-8 h-8 mb-6" />
              <h3 className="font-[family-name:var(--font-playfair)] text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-medium leading-tight">
                {pillars[0].title}
              </h3>
              <p className="mt-6 text-sm sm:text-base leading-relaxed">
                {pillars[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Screen 3: Quote & Mission/Vision */}
      <div className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
        {/* Starfield background */}
        <Starfield starCount={80} />
        <div className="relative z-10 max-w-[1920px] mx-auto px-8 lg:px-12 xl:px-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Main Quote */}
            <div className="mb-20">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#BFA054] to-transparent" />
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] text-[#F8F8FA] leading-[1.3] font-light">
                &ldquo;We bring <span className="text-[#BFA054]">clarity</span>, <span className="text-[#BFA054]">coordination</span>, and <span className="text-[#BFA054]">global connectivity</span>{" "}
                to complex corporate journey.&rdquo;
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card rounded-2xl p-8 lg:p-10 text-left"
              >
                <span className="text-[10px] text-[#BFA054] uppercase tracking-[0.3em]">
                  Mission
                </span>
                <p className="mt-4 text-[#A0A4AC] leading-relaxed">
                  To empower enterprises with strategic insight, robust
                  organizational systems, and coordinated execution frameworks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card rounded-2xl p-8 lg:p-10 text-left"
              >
                <span className="text-[10px] text-[#BFA054] uppercase tracking-[0.3em]">
                  Vision
                </span>
                <p className="mt-4 text-[#A0A4AC] leading-relaxed">
                  To shape Asia&apos;s next generation of globally connected,
                  institutionally disciplined enterprises.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
