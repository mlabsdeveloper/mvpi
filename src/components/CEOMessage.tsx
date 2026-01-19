"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiX } from "react-icons/fi";

const messageParagraphs = [
  "To our valued partners, investors, and friends,",
  "Welcome to MVP International Capital.",
  "As the Group CEO, I am honored to share with you the principles that guide our firm and the commitments we uphold in serving ambitious enterprises across Asia.",
  "Since our founding, we have focused on one core mission: to be the most trusted bridge connecting Asia's most innovative companies with the global capital markets, particularly through listings on Nasdaq and other U.S. exchanges. Over the years, we have built a dedicated team, a robust international network, and a disciplined execution framework to navigate the complexities of cross-border IPOs.",
  "What truly defines MVP International Capital is not only our ability to execute in favorable market conditions, but our resilience, experience, and judgment across every economic cycle. We understand that market environments change, regulations evolve, and challenges are inevitable. Our role is to provide clarity, structure, and strategic solutions that enable our clients to move forward with confidence, regardless of external conditions.",
  "At the heart of everything we do lies an unwavering commitment to professionalism, governance, and long-term partnership. We believe that sustainable success in the capital markets is built on trust — trust earned through disciplined risk management, transparent communication, regulatory rigor, and the highest ethical standards. Our team operates with a stewardship mindset, treating every mandate with precision, accountability, and strategic foresight.",
  "As we look ahead, we remain firmly committed to strengthening our leadership in cross-border IPO advisory and capital markets solutions. We are more than an advisor; we are a long-term partner dedicated to supporting our clients' growth, credibility, and global ambitions.",
  "Thank you for considering MVP International Capital. I invite you to explore our website to learn more about our services, our team, and the success stories we have built alongside our clients.",
];

const signature = {
  closing: "Warm regards,",
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
          <div className="relative h-[50vh] lg:h-auto lg:min-h-screen">
            <Image
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80"
              alt="Dana Burrows - Group CEO"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#08080C]" />
          </div>

          {/* Right - Content */}
          <div className="relative z-10 flex items-center px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
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
                  As the Group CEO, I am honored to share with you the principles that guide our firm and the commitments we uphold in serving ambitious enterprises across Asia.
                </p>
                <p className="text-base text-[#A0A4AC] leading-relaxed mb-8">
                  Since our founding, we have focused on one core mission: to be the most trusted bridge connecting Asia&apos;s most innovative companies with the global capital markets, particularly through listings on Nasdaq and other U.S. exchanges...
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
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80"
                      alt="Dana Burrows"
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
