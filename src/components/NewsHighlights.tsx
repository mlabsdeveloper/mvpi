"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiMapPin } from "react-icons/fi";

const newsItems = [
  {
    id: 1,
    date: "February 19, 2025",
    category: "Event",
    title: "MVPI Annual Appreciation Gala 2025",
    description:
      "Successfully hosted the MVPI Annual Appreciation Banquet & IIFLE 1st Anniversary in Kuala Lumpur, bringing together nearly 100 distinguished guests.",
    location: "Kuala Lumpur, Malaysia",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    link: "https://markets.financialcontent.com/stocks/article/marketersmedia-2025-3-3-mvpi-annual-appreciation-gala-2025-pioneering-nasdaq-success-and-regional-expansion-ahead",
  },
  {
    id: 2,
    date: "October 24-25, 2024",
    category: "Seminar",
    title: "Nasdaq IPO Conference",
    description:
      "Organized a comprehensive Nasdaq IPO Conference attracting over 30 potential listing company owners with industry expert speakers.",
    location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    link: "https://www.accessnewswire.com/newsroom/en/banking-and-financial-services/mvp-international-capital-hosts-successful-nasdaq-ipo-seminar-939933",
  },
  {
    id: 3,
    date: "May 2024",
    category: "Partnership",
    title: "Monarch Equity Capital Collaboration",
    description:
      "Entered into a collaboration agreement to provide expert financial advisory services for Monarch Equity's US$100M Nasdaq listing.",
    location: "Malaysia",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    link: "https://finance.yahoo.com/news/monarch-equity-capital-berhad-targets-023200799.html",
  },
];

export default function NewsHighlights() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="news"
      className="relative py-24 lg:py-32 bg-transparent"
    >
      <div className="max-w-[1920px] mx-auto px-8 lg:px-12 xl:pl-24 xl:pr-56">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#BFA054]" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                News & Events
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-[2.125rem] lg:text-[2.875rem] xl:text-[3.5rem] font-medium text-[#F8F8FA] leading-[1.1]">
              Latest Updates
            </h2>
            <p className="mt-4 text-[#A0A4AC] text-lg">
              Stay informed about our recent activities, events, and partnerships.
            </p>
          </div>

          <Link
            href="/news"
            className="mt-8 lg:mt-0 inline-flex items-center gap-2 text-[#BFA054] hover:text-[#D4B872] transition-colors group cursor-pointer"
          >
            <span className="text-sm uppercase tracking-wider">View All News</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-wider bg-[#BFA054]/90 text-[#08080C] rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
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
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#F8F8FA] mb-3 group-hover:text-[#BFA054] transition-colors leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A0A4AC] line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Read More */}
                <div className="mt-4 flex items-center gap-2 text-[#BFA054] text-sm">
                  <span>Read More</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
