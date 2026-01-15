"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const offices = [
    { location: "Hong Kong", detail: "HQ, Nan Fung Tower" },
    { location: "Singapore", detail: "Marina Bay Financial Centre" },
    { location: "Malaysia", detail: "Q Sentral, Kuala Lumpur" },
    { location: "Taiwan", detail: "Zhongxiao East Road, Taipei" },
    { location: "Australia", detail: "Sydney" },
    { location: "Vietnam", detail: "Ho Chi Minh City" },
  ];

  return (
    <footer className="bg-[#08080C]">
      {/* Large Logo Section */}
      <div className="py-24 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logo.avif"
            alt="MVPI Capital"
            width={120}
            height={120}
            className="h-24 w-auto object-contain opacity-60 grayscale"
          />
        </motion.div>
      </div>

      <div className="max-w-[1920px] mx-auto px-8 lg:px-12 xl:px-24">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 pb-16 border-b border-[#1A1A1E]">
          {/* Left - Tagline */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-[#F8F8FA] font-medium">
              Strategic Excellence.
            </h3>
            <p className="mt-4 text-[#6B6F78] leading-relaxed max-w-md">
              MVPI Capital delivers institutional-grade strategy and project
              coordination for ambitious enterprises across Asia-Pacific.
              Powered by deep expertise and driven by execution.
            </p>
          </div>

          {/* Right - Office Locations */}
          <div>
            <div className="space-y-0">
              {offices.map((office, index) => (
                <motion.div
                  key={office.location}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group grid grid-cols-2 py-4 border-b border-[#1A1A1E] hover:border-[#BFA054]/30 transition-colors cursor-pointer"
                >
                  <span className="text-sm text-[#F8F8FA] group-hover:text-[#BFA054] transition-colors font-medium">
                    {office.location}
                  </span>
                  <span className="text-sm text-[#6B6F78] text-right">
                    {office.detail}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 border-b border-[#1A1A1E]">
          {/* Navigation */}
          <div>
            <ul className="space-y-3">
              {["About", "Expertise", "Why MVPI", "Presence", "Contact"].map((item) => (
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

          {/* Ecosystem */}
          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://iifle.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  IIFLE
                </a>
                <span className="block text-[10px] text-[#6B6F78] mt-0.5">
                  IPO Education
                </span>
              </li>
              <li>
                <a
                  href="https://mlabscapital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  M-Labs
                </a>
                <span className="block text-[10px] text-[#6B6F78] mt-0.5">
                  Digital Asset Advisory
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:enquiry@mvpicapital.com"
                  className="text-sm text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="tel:+85237089434"
                  className="text-sm text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  +852 3708 9434
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
            </ul>
          </div>

          {/* Social */}
          <div className="flex gap-4 items-start justify-end">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#222226] text-[#6B6F78] hover:border-[#BFA054] hover:text-[#BFA054] transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#222226] text-[#6B6F78] hover:border-[#BFA054] hover:text-[#BFA054] transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.avif"
              alt="MVPI"
              width={24}
              height={24}
              className="h-5 w-auto object-contain opacity-60 grayscale"
            />
            <p className="text-xs text-[#6B6F78]">
              © {currentYear} MVPI International Capital Limited
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-xs text-[#6B6F78] hover:text-[#A0A4AC] transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-[#6B6F78] hover:text-[#A0A4AC] transition-colors cursor-pointer"
            >
              Terms of Use
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
          <p className="text-[10px] text-[#333] leading-relaxed text-center max-w-2xl mx-auto">
            MVPI does not provide investment advice, securities brokerage services,
            or regulated activities. All services relate strictly to non-regulated
            consulting and organizational support.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
