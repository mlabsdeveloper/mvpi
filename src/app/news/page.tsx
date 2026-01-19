"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import NewsShowcase from "@/components/NewsShowcase";
import JourneyTimeline from "@/components/JourneyTimeline";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

// Main slides
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

// Extra grid items
const extraNewsItems = [
  {
    id: 1,
    date: "March 2025",
    category: "Sponsorship",
    title: "MVPI Becomes Chun Lung Basketball Team Sponsor",
    description:
      "MVP International Capital is proud to officially become a sponsorship partner of Chun Lung, a Hong Kong Men's Division One basketball team.",
    image: "https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/544458836_122185009376350899_2201126660989425523_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y5crpl4sSEsQ7kNvwH0KBud&_nc_oc=AdnxMqfoAB00gCsR5j2NYEVINUpdiJRQXM7zq_BmvojN4vbYQZ81cxL-2fCYcx_6gG4&_nc_zt=23&_nc_ht=scontent.fkul15-1.fna&_nc_gid=mKRiD3blOiNFSm69vh4-_Q&oh=00_Afqq7w1jd8VYvOLX6gL1ss18fuEhSlUxsgt4j7yS8pCJtQ&oe=69742BF0",
    link: "https://www.facebook.com/mvpicapital/posts/mvp-international-capital-%E6%88%90%E7%82%BA%E6%99%89%E9%BE%8D%E7%B1%83%E7%90%83%E9%9A%8A%E8%B4%8A%E5%8A%A9%E5%95%86%E6%88%91%E5%80%91%E5%BE%88%E6%A6%AE%E5%B9%B8%E6%AD%A3%E5%BC%8F%E6%88%90%E7%82%BA-%E9%A6%99%E6%B8%AF%E7%94%B7%E5%AD%90%E7%94%B2%E4%B8%80%E7%B1%83%E7%90%83%E9%9A%8A%E6%99%89%E9%BE%8D-%E7%9A%84%E8%B4%8A%E5%8A%A9%E5%A4%A5%E4%BC%B4%E6%94%AF%E6%8C%81%E9%A6%99%E6%B8%AF%E7%B1%83%E7%90%83%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%9F%E9%AB%94%E8%82%B2%E8%88%87%E7%90%83%E5%93%A1%E5%80%91%E4%B8%A6/122185009520350899/",
    source: "Facebook",
  },
  {
    id: 2,
    date: "November 2024",
    category: "Seminar",
    title: "MVP International Capital Hosts Successful Nasdaq IPO Seminar",
    description:
      "Nasdaq IPO conference attracting over 30 potential listing company owners with notable speakers including Freeman Lau and Davis Tan.",
    image: "https://celestiair.com/wp-content/uploads/2025/04/截屏2025-04-09-下午3.42.43-1024x682.png",
    link: "https://celestiair.com/mvp-international-capital-hosts-successful-nasdaq-ipo-seminar/",
    source: "Celestia IR",
  },
  {
    id: 3,
    date: "June 2024",
    category: "Seminar",
    title: "MVPI Successfully Held Nasdaq IPO Seminar",
    description:
      "MVPI and Celestia IR co-hosted a Nasdaq IPO conference with industry experts including Tiger Brokers and Loeb & Loeb LLP.",
    image: "https://celestiair.com/wp-content/uploads/2024/07/MVPI_IPO_event_20240628_1-scaled.jpg",
    link: "https://celestiair.com/mvpi-successfully-held-nasdaq-ipo-seminar/",
    source: "Celestia IR",
  },
  {
    id: 4,
    date: "2025",
    category: "Event",
    title: "MVPI Capital Team Gathering",
    description:
      "MVPI Capital team members gathered for a memorable event, strengthening bonds and celebrating achievements together.",
    image: "https://instagram.fkul15-1.fna.fbcdn.net/v/t51.75761-15/481719185_18479147134005574_1305880169394310207_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzU3NTAxOTUwMzI0NzI4MzQ2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTYwLnNkci5DMyJ9&_nc_ohc=BSU7IMmRkiIQ7kNvwF6Lr0B&_nc_oc=Adm1VxSayex1pajAk9Hw2b5BE6uqvfhZHHNAbA_69oxkfRK_tHhEpBy9Xpg31KDt-zg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkul15-1.fna&_nc_gid=otOnbF_6vHy_QHEVX1c7jg&oh=00_AfqhXfQFCDMjyzxH1tMRbO3upeNusRRW1GB2yFPk7zxY5w&oe=69741038",
    link: "https://www.instagram.com/p/DGdBU6QpSao/",
    source: "Instagram",
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

      {/* Extra News Grid */}
      <section className="py-16 lg:py-24 border-t border-[#1A1A1E]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraNewsItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 text-[10px] uppercase tracking-wider font-medium rounded ${
                    item.category === "Sponsorship" ? "bg-[#4A90D9] text-white" :
                    item.category === "Seminar" ? "bg-[#9B59B6] text-white" :
                    item.category === "Event" ? "bg-[#E74C3C] text-white" :
                    "bg-[#BFA054] text-[#08080C]"
                  }`}>
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs text-[#A0A4AC] block mb-2">{item.date}</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl text-[#F8F8FA] group-hover:text-[#BFA054] transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A0A4AC] line-clamp-2">{item.description}</p>
                  <span className="text-xs text-[#BFA054] mt-3 block">{item.source}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

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
              15 Years of Excellence
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
