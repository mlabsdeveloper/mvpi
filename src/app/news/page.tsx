"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";

const newsItems = [
  {
    id: 1,
    date: "February 19, 2025",
    category: "Event",
    title: "MVPI Annual Appreciation Gala 2025",
    description:
      "MVP International Capital successfully hosted the MVPI Annual Appreciation Banquet & IIFLE 1st Anniversary in Malaysia at M Resort & Hotel Kuala Lumpur. This exclusive event brought together nearly 100 distinguished guests, including representatives from Malaysia-listed companies, Nasdaq-listed companies, U.S. listing professionals, local industry experts, pre-IPO companies, and VIPs.",
    highlights: [
      "Nasdaq IPO Advisory Initiation Engagement Signing Ceremony",
      "Smart Rental (IT subscription-based company) signed by CEO Mr. Joshua Chin",
      "Pine Hills International School signed by Vice President Mr. Jonathan Goh Shyh Yong",
      "Announced goal: 30 companies signed for Nasdaq IPO in 2025",
    ],
    location: "Kuala Lumpur, Malaysia",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
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
    highlights: [
      "Harry Ho from AOGB shared insights on audit requirements",
      "John Chan from Tiger Brokers (Hong Kong) discussed market dynamics",
      "Alfred Lee from Loeb & Loeb LLP provided legal perspectives",
      "Over 30 potential listing companies in attendance",
    ],
    location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
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
    highlights: [
      "Target: US$100 Million for Nasdaq Listing",
      "Expert financial advisory services provided",
      "Focus on facilitating Nasdaq listing process",
      "Strategic partnership for capital markets entry",
    ],
    location: "Malaysia",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
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
    highlights: [
      "Kohai Brand presence in Malaysia, Singapore, and Indonesia",
      "Target: $2 Million Series A funding",
      "Esports industry expansion into public markets",
      "MVPI providing strategic advisory services",
    ],
    location: "Malaysia / Singapore / Indonesia",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    link: "http://www.malaysian-business.com/index.php/mb-features/item/9434-kohai-nasdaq-ipo-advisory-initiation",
    source: "Malaysian Business",
  },
];

const milestones = [
  { year: "2024", achievement: "Singapore entity (MVP International Capital Pte. Ltd.) incorporated" },
  { year: "2024", achievement: "10 companies signed for Nasdaq IPO pathway in Malaysia" },
  { year: "2020-2024", achievement: "~50 companies guided through successful Nasdaq listings" },
  { year: "2020-2024", achievement: "$1.5B+ in fundraising facilitated" },
];

export default function NewsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "Event", "Seminar", "Partnership"];
  const filteredNews = filter === "all" ? newsItems : newsItems.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#08080C]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
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

            <Link
              href="/"
              className="flex items-center gap-2 text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-24"
      >
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#BFA054]" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                News & Events
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-[2.5rem] lg:text-[3.5rem] xl:text-[4.5rem] font-medium text-[#F8F8FA] leading-[1.1] mb-6">
              Latest Updates
            </h1>

            <p className="text-lg lg:text-xl text-[#A0A4AC] max-w-2xl">
              Stay informed about our recent activities, events, partnerships, and milestones in the capital markets advisory space.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2.5 text-sm rounded-full transition-all cursor-pointer ${
                  filter === category
                    ? "bg-[#BFA054] text-[#08080C] font-medium"
                    : "glass-button text-[#A0A4AC] hover:text-[#F8F8FA]"
                }`}
              >
                {category === "all" ? "All News" : category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-[#08080C]/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-[10px] uppercase tracking-wider bg-[#BFA054] text-[#08080C] rounded-full font-semibold">
                      {item.category}
                    </span>
                  </div>

                  {/* Source Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 text-[10px] uppercase tracking-wider glass-panel text-[#A0A4AC] rounded-full">
                      {item.source}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Date & Location */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-[#6B6F78]">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiMapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-[1.75rem] text-[#F8F8FA] mb-4 leading-tight">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[#A0A4AC] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.2em] block mb-3">
                      Key Highlights
                    </span>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#A0A4AC]">
                          <div className="w-1.5 h-1.5 mt-1.5 bg-[#BFA054] rounded-full flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Read More Link */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#BFA054] hover:text-[#D4B872] transition-colors cursor-pointer group/link"
                  >
                    <span className="text-sm font-medium">Read Full Article</span>
                    <FiExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 lg:py-32 border-t border-[#1A1A1E]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#BFA054]" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                Company Milestones
              </span>
              <div className="w-12 h-px bg-[#BFA054]" />
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] lg:text-[2.5rem] font-medium text-[#F8F8FA]">
              Our Journey
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-xl p-6 text-center"
              >
                <span className="text-[#BFA054] font-[family-name:var(--font-playfair)] text-2xl font-semibold block mb-3">
                  {milestone.year}
                </span>
                <p className="text-[#A0A4AC] text-sm leading-relaxed">
                  {milestone.achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-[#1A1A1E]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24 text-center">
          <p className="text-[#6B6F78] mb-6">
            Interested in learning more about our services?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#BFA054] hover:bg-[#D4B872] text-[#08080C] font-medium rounded-full transition-colors cursor-pointer"
          >
            <span>Get in Touch</span>
            <FiArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-[#1A1A1E]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#6B6F78]">
              &copy; {new Date().getFullYear()} MVPI Capital. All rights reserved.
            </p>
            <Link
              href="/"
              className="text-xs text-[#6B6F78] hover:text-[#BFA054] transition-colors cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
