"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import NewsShowcase from "@/components/NewsShowcase";
import JourneyTimeline from "@/components/JourneyTimeline";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const newsItems = [
  {
    id: 1,
    date: "February 19, 2025",
    category: "Event",
    title: "MVPI Annual Appreciation Gala 2025",
    description:
      "MVP International Capital successfully hosted the MVPI Annual Appreciation Banquet & IIFLE 1st Anniversary in Malaysia at M Resort & Hotel Kuala Lumpur. This exclusive event brought together nearly 100 distinguished guests, including representatives from Malaysia-listed companies, Nasdaq-listed companies, U.S. listing professionals, local industry experts, pre-IPO companies, and VIPs.",
    location: "Kuala Lumpur, Malaysia",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    link: "https://markets.financialcontent.com/stocks/article/marketersmedia-2025-3-3-mvpi-annual-appreciation-gala-2025-pioneering-nasdaq-success-and-regional-expansion-ahead",
    source: "FinancialContent",
  },
  {
    id: 2,
    date: "October 24-25, 2024",
    category: "Seminar",
    title: "Nasdaq IPO Conference",
    description:
      "MVP International Capital organized the Nasdaq IPO Conference, attracting over 30 potential listing company owners. The event featured industry experts sharing valuable insights on Nasdaq IPO listings and the path to going public.",
    location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&q=80",
    link: "https://www.accessnewswire.com/newsroom/en/banking-and-financial-services/mvp-international-capital-hosts-successful-nasdaq-ipo-seminar-939933",
    source: "AccessNewswire",
  },
  {
    id: 3,
    date: "May 2024",
    category: "Partnership",
    title: "Monarch Equity Capital Collaboration",
    description:
      "Monarch Equity Capital Berhad entered into a collaboration agreement with MVP International Capital (MVPI). Under this partnership, MVPI will provide expert financial advisory services with a specific focus on facilitating Monarch Equity's Nasdaq listing process.",
    location: "Malaysia",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
    link: "https://finance.yahoo.com/news/monarch-equity-capital-berhad-targets-023200799.html",
    source: "Yahoo Finance",
  },
  {
    id: 4,
    date: "2024",
    category: "Partnership",
    title: "Kohai (IWG Esports) IPO Advisory Initiation",
    description:
      "IWG Esports, the esports organisation behind the Kohai Brand in Malaysia, Singapore, and Indonesia, initiated its Nasdaq IPO advisory with MVPI Capital. The company aims to raise funding through a Series A round.",
    location: "Malaysia / Singapore / Indonesia",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80",
    link: "http://www.malaysian-business.com/index.php/mb-features/item/9434-kohai-nasdaq-ipo-advisory-initiation",
    source: "Malaysian Business",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#08080C]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <Image
                src="/logo.avif"
                alt="MVPI Capital"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#F8F8FA] group-hover:text-[#BFA054] transition-colors">
                MVPI Capital
              </span>
            </Link>

            {/* Desktop: Back to Home */}
            <Link
              href="/"
              className="hidden lg:flex items-center gap-2 text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>

            {/* Mobile: Drawer Nav */}
            <MobileNav />
          </div>
        </div>
      </header>

      {/* News Showcase - Full Screen */}
      <NewsShowcase newsItems={newsItems} />

      {/* Journey Section - Arc Timeline */}
      <section className="py-24 lg:py-32 border-t border-[#1A1A1E] overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 lg:mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#BFA054]" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                Our Journey
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-[2.125rem] lg:text-[2.875rem] xl:text-[3.5rem] font-medium text-[#F8F8FA] leading-[1.1] mb-6">
              Two Decades of Excellence
            </h2>

            <p className="text-lg lg:text-xl text-[#A0A4AC] max-w-3xl leading-relaxed">
              MVPI Capital has guided nearly 50 companies through successful Nasdaq listings,
              facilitating over <span className="text-[#BFA054]">$1.5 billion</span> in fundraising.
            </p>
          </motion.div>

          {/* Arc Timeline */}
          <JourneyTimeline />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
