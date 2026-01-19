"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const offices = [
    { location: "British Virgin Islands", detail: "HQ, Ellen Skelton Building" },
    { location: "Hong Kong", detail: "Nan Fung Tower, Central" },
    { location: "Singapore", detail: "Marina Bay Financial Centre" },
    { location: "Malaysia", detail: "Q Sentral, Kuala Lumpur" },
    { location: "Taiwan", detail: "Zhongxiao East Road, Taipei" },
    { location: "Australia", detail: "208c Chandos Street, St Leonard, Sydney" },
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

          {/* Right - Company Info & Office Locations */}
          <div>
            {/* Company Registration */}
            <div className="mb-8">
              <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[#F8F8FA] font-medium">
                MVP International Capital Group Holdings Limited
              </h4>
              <p className="mt-2 text-sm text-[#6B6F78]">
                BC Number: 2183389
              </p>
              <p className="mt-1 text-sm text-[#6B6F78] leading-relaxed">
                1st Floor, Ellen Skelton Building, 3076 Sir Francis Drake&apos;s Highway,<br />
                Road Town, Tortola, VG1110, British Virgin Islands
              </p>
            </div>

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
                  href="https://celestiair.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  Celestia IR
                </a>
                <span className="block text-[10px] text-[#6B6F78] mt-0.5">
                  Investor Relations
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
              <li>
                <a
                  href="https://www.omassurance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  Orionmano
                </a>
                <span className="block text-[10px] text-[#6B6F78] mt-0.5">
                  Assurance Services
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
              href="https://www.facebook.com/mvpicapital"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#222226] text-[#6B6F78] hover:border-[#BFA054] hover:text-[#BFA054] transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mvpicapital"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#222226] text-[#6B6F78] hover:border-[#BFA054] hover:text-[#BFA054] transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex justify-center items-center">
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
