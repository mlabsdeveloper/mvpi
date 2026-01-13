"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08080C] border-t border-[#1A1A1E]">
      <div className="max-w-[1920px] mx-auto px-8 lg:px-12 xl:pl-24 xl:pr-56">
        {/* Main Footer */}
        <div className="py-20 grid lg:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="#hero" className="flex items-center gap-3 cursor-pointer">
              <Image
                src="/logo.avif"
                alt="MVPI Capital"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#F8F8FA]">
                MVPI Capital
              </span>
            </Link>
            <p className="mt-6 text-sm text-[#6B6F78] leading-relaxed max-w-sm">
              Corporate strategy and project orchestration for Asia-Pacific enterprises.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-3 gap-12">
              <div>
                <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  Company
                </span>
                <ul className="mt-6 space-y-4">
                  {["About", "Expertise", "Why MVPI", "Presence"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-sm text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  Regions
                </span>
                <ul className="mt-6 space-y-4">
                  {["Hong Kong", "Singapore", "Malaysia", "Taiwan"].map((item) => (
                    <li key={item}>
                      <span className="text-sm text-[#6B6F78]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  Connect
                </span>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="mailto:enquiry@mvpicapital.com"
                      className="text-sm text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/85260605148"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1A1A1E]" />

        {/* Bottom */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6B6F78]">
            &copy; {currentYear} MVPI International Capital Limited
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-xs text-[#6B6F78] hover:text-[#A0A4AC] transition-colors cursor-pointer"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-[#6B6F78] hover:text-[#A0A4AC] transition-colors cursor-pointer"
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-[10px] text-[#333] leading-relaxed">
            MVPI does not provide investment advice, securities brokerage services,
            or regulated activities. All services relate strictly to non-regulated
            consulting and organizational support.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
