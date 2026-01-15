"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    ticker: "HKPD",
    name: "Hong Kong Pharma Digital Technology",
    exchange: "NASDAQ Capital Market",
    ipoDate: "January 2025",
    raised: "$5.6M",
    industry: "Pharma / E-commerce",
    headquarters: "Hong Kong",
    description: "A leading OTC pharmaceutical cross-border e-commerce supply chain services provider in Hong Kong, offering procurement, distribution, customs clearance, and logistics services.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=80",
  },
  {
    id: 2,
    ticker: "ENGS",
    name: "Energys Group Limited",
    exchange: "NASDAQ Capital Market",
    ipoDate: "April 2025",
    raised: "$10.1M",
    industry: "Clean Energy",
    headquarters: "United Kingdom",
    description: "UK-based vertically integrated energy efficiency and decarbonization solutions provider for the built environment, serving schools, universities, hospitals, and offices.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
  },
  {
    id: 3,
    ticker: "WLGS",
    name: "WANG & LEE GROUP",
    exchange: "NASDAQ Capital Market",
    ipoDate: "April 2023",
    raised: "$8.0M",
    industry: "Construction",
    headquarters: "Hong Kong",
    description: "A Hong Kong-based construction prime and subcontractor specializing in Electrical & Mechanical Systems installation for public and private sectors.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  },
  {
    id: 4,
    ticker: "VSME",
    name: "VS MEDIA Holdings",
    exchange: "NASDAQ Capital Market",
    ipoDate: "September 2023",
    raised: "$10.0M",
    industry: "Digital Media",
    headquarters: "Hong Kong",
    description: "Hong Kong-based digital creator network operating across YouTube, Facebook, Instagram, and TikTok.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1920&q=80",
  },
  {
    id: 5,
    ticker: "WCT",
    name: "Wellchange Holdings",
    exchange: "NASDAQ Capital Market",
    ipoDate: "October 2024",
    raised: "$5.1M",
    industry: "Enterprise Software",
    headquarters: "Hong Kong",
    description: "Hong Kong-based enterprise software solution provider offering tailor-made software and cloud-based SaaS solutions for SMBs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  },
  {
    id: 6,
    ticker: "GLXG",
    name: "Galaxy Payroll Group",
    exchange: "NASDAQ Capital Market",
    ipoDate: "September 2024",
    raised: "$8.05M",
    industry: "HR Services",
    headquarters: "Hong Kong",
    description: "Leading Asia-Pacific payroll outsourcing and employer of record (EOR) services provider across 15 countries.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
  },
  {
    id: 7,
    ticker: "ZDAI",
    name: "DirectBooking Technology",
    exchange: "NASDAQ Capital Market",
    ipoDate: "July 2024",
    raised: "$7.0M",
    industry: "Technology",
    headquarters: "Hong Kong",
    description: "Technology company focusing on hotel marketing software development and digitalized supply chain platforms.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
  },
  {
    id: 8,
    ticker: "DTCK",
    name: "Davis Commodities",
    exchange: "NASDAQ",
    ipoDate: "September 2023",
    raised: "$5.0M",
    industry: "Agricultural Commodities",
    headquarters: "Singapore",
    description: "Singapore-based agricultural commodity trading company specializing in sugar, rice, and oil products.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
  },
  {
    id: 9,
    ticker: "CETY",
    name: "Clean Energy Technologies",
    exchange: "NASDAQ Capital Market",
    ipoDate: "March 2023",
    raised: "$3.9M",
    industry: "Clean Energy",
    headquarters: "USA",
    description: "Clean energy technology company offering eco-friendly green energy solutions and waste heat recovery systems.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80",
  },
  {
    id: 10,
    ticker: "WETH",
    name: "Wetouch Technology",
    exchange: "NASDAQ",
    ipoDate: "Uplisting",
    raised: "",
    industry: "Hardware Manufacturing",
    headquarters: "China",
    description: "One of China's leading manufacturers of touchscreen solutions, serving Siemens, Delta, Canon, and Sharp.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    // Immediate scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Fallback after browser scroll restoration
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  }, []);

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

      {/* Projects Showcase */}
      <ProjectShowcase projects={projects} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
