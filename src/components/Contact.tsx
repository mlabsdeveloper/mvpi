"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen snap-start py-32 lg:py-40 bg-transparent"
    >
      <div className="max-w-[1920px] mx-auto px-8 lg:px-12 xl:pl-24 xl:pr-56">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#BFA054]" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                Contact
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-[2.125rem] lg:text-[2.875rem] xl:text-[3.5rem] font-medium text-[#F8F8FA] leading-[1.1]">
              Let&apos;s Start
              <br />
              <span className="text-[#6B6F78]">a Conversation</span>
            </h2>

            <p className="mt-10 text-[#A0A4AC] leading-relaxed max-w-md">
              Whether you&apos;re planning a transformation, developing a cross-border
              strategy, or seeking project coordination, we&apos;re ready to support.
            </p>

            {/* Contact Info */}
            <div className="mt-16 space-y-8">
              <div>
                <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  Email
                </span>
                <a
                  href="mailto:enquiry@mvpicapital.com"
                  className="mt-2 block text-lg text-[#F8F8FA] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  enquiry@mvpicapital.com
                </a>
              </div>
              <div>
                <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  Phone
                </span>
                <a
                  href="tel:+85237089434"
                  className="mt-2 block text-lg text-[#F8F8FA] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  +852 3708 9434
                </a>
              </div>
              <div>
                <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/85260605148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg text-[#F8F8FA] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  +852 6060 5148
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-3 w-full px-4 py-4 rounded-lg bg-[#111113] border border-[#222226] text-[#F8F8FA] placeholder-[#4a4a4a] focus:outline-none focus:border-[#BFA054]/50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-3 w-full px-4 py-4 rounded-lg bg-[#111113] border border-[#222226] text-[#F8F8FA] placeholder-[#4a4a4a] focus:outline-none focus:border-[#BFA054]/50"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-3 w-full px-4 py-4 rounded-lg bg-[#111113] border border-[#222226] text-[#F8F8FA] placeholder-[#4a4a4a] focus:outline-none focus:border-[#BFA054]/50"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  Company
                </label>
                <input
                  type="text"
                  className="mt-3 w-full px-4 py-4 rounded-lg bg-[#111113] border border-[#222226] text-[#F8F8FA] placeholder-[#4a4a4a] focus:outline-none focus:border-[#BFA054]/50"
                  placeholder="Company Ltd."
                />
              </div>

              <div>
                <label className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-3 w-full px-4 py-4 rounded-lg bg-[#111113] border border-[#222226] text-[#F8F8FA] placeholder-[#4a4a4a] focus:outline-none focus:border-[#BFA054]/50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 mt-8 px-8 py-4 bg-gradient-to-r from-[#3A62A3] via-[#4A7CC9] to-[#6B9ADB] text-white text-sm font-medium tracking-wide uppercase hover:from-[#4A7CC9] hover:via-[#6B9ADB] hover:to-[#8BB4E8] transition-all cursor-pointer"
              >
                Send Message
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
