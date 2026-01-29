"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiX } from "react-icons/fi";

const messageParagraphs = [
  "To our partners and investors,",
  "Welcome to MVP International Capital.",
  "MVP International Capital was built with one simple idea in mind: great companies in Asia deserve direct access to the U.S. capital markets—and they deserve advisors who know how those markets really work.",
  "We focus on helping high-quality Asian businesses make the jump to U.S. public markets, particularly Nasdaq. That means rolling up our sleeves and doing the hard work: structuring the right deal, getting companies truly ready for U.S. regulatory standards, positioning the story correctly, and executing with discipline. There are no shortcuts in this market, and we don't believe in selling hype.",
  "What sets us apart is experience and judgment. We've worked through strong markets, tough markets, and everything in between. We understand how U.S. investors think, how regulators operate, and what it takes for a foreign issuer to earn credibility over time. Our approach is practical, market-driven, and grounded in reality—not optimism for optimism's sake.",
  "Governance, transparency, and risk management aren't buzzwords for us—they're table stakes. U.S. public markets demand a higher bar, and we hold ourselves and our clients to that standard from day one. Every mandate we take on is treated with institutional rigor and a long-term mindset.",
  "Looking forward, MVP International Capital will continue to do what we do best: act as a trusted bridge between Asia's next generation of public companies and the U.S. investment community. We're not here for one-off transactions. We're here to build companies that can stand up to public market scrutiny and grow with investor confidence.",
  "Thanks for taking the time to learn about MVP International Capital. We invite you to explore our platform, meet our team, and see how we work.",
];

const signature = {
  closing: "Best regards,",
  name: "Dana Burrows",
  title: "Group CEO",
  company: "MVP International Capital",
};

export default function CEOMessage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#08080C]">
        <div className="max-w-[1920px] mx-auto min-h-screen grid lg:grid-cols-2">
          {/* Left - CEO Image */}
          <div className="relative h-[45vh] lg:h-auto lg:min-h-screen">
            <Image
              src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&q=80"
              alt="Abstract Art"
              fill
              className="object-cover object-top lg:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#08080C]" />
          </div>

          {/* Right - Content */}
          <div className="relative z-10 flex items-center px-8 lg:px-12 xl:px-16 py-8 lg:py-24 -mt-8 lg:mt-0">
            <div className="max-w-xl">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-[#BFA054]" />
                  <span className="text-[10px] text-[#BFA054] uppercase tracking-[0.3em]">
                    Leadership
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium text-[#F8F8FA]">
                  Message from the CEO
                </h2>
              </motion.div>

              {/* Message Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-6xl text-[#BFA054]/30 font-serif leading-none mb-4">
                  &ldquo;
                </div>
                <p className="text-lg lg:text-xl text-[#F8F8FA] leading-relaxed mb-6">
                  MVP International Capital was built with one simple idea in mind: great companies in Asia deserve direct access to the U.S. capital markets—and they deserve advisors who know how those markets really work.
                </p>
                <p className="text-base text-[#A0A4AC] leading-relaxed mb-8">
                  We focus on helping high-quality Asian businesses make the jump to U.S. public markets, particularly Nasdaq. That means rolling up our sleeves and doing the hard work...
                </p>

                {/* CEO Info */}
                <div className="mb-8">
                  <p className="font-[family-name:var(--font-playfair)] text-xl text-[#F8F8FA] font-medium">
                    Dana Burrows
                  </p>
                  <p className="text-[#BFA054] text-sm mt-1">Group CEO, MVP International Capital</p>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#BFA054] text-[#08080C] font-medium rounded-lg hover:bg-[#D4B668] transition-colors cursor-pointer"
                >
                  Read Full Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-[#0C0C10] border border-[#222226] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#0C0C10] border-b border-[#222226]">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=200&q=80"
                      alt="Abstract Art"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#F8F8FA] font-medium">
                      Dana Burrows
                    </h3>
                    <p className="text-[#BFA054] text-xs">Group CEO, MVP International Capital</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1E] text-[#A0A4AC] hover:text-[#F8F8FA] hover:bg-[#222226] transition-colors cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(85vh-88px)]">
                <div className="max-w-none">
                  {/* All paragraphs */}
                  {messageParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-[#A0A4AC] leading-relaxed mb-5">
                      {paragraph}
                    </p>
                  ))}

                  {/* Signature */}
                  <div className="mt-8">
                    <p className="text-[#A0A4AC] mb-4">{signature.closing}</p>
                    <p className="text-[#A0A4AC]">{signature.name}</p>
                    <p className="text-[#A0A4AC]">{signature.title}</p>
                    <p className="text-[#A0A4AC]">{signature.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
