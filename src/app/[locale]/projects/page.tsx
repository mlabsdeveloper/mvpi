"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FiArrowLeft } from "react-icons/fi";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const itemIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"] as const;

interface ProjectMeta {
  ticker: string;
  exchange: string;
  ipoDate: string;
  raised: string;
  image: string;
}

const projectMeta: Record<(typeof itemIds)[number], ProjectMeta> = {
  "1": { ticker: "HKPD", exchange: "NASDAQ Capital Market", ipoDate: "January 2025", raised: "$5.6M", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=80" },
  "2": { ticker: "TROO", exchange: "NASDAQ", ipoDate: "", raised: "", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80" },
  "3": { ticker: "RITR", exchange: "NASDAQ Capital Market", ipoDate: "August 2024", raised: "$9.0M", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80" },
  "4": { ticker: "TMDE", exchange: "NYSE American", ipoDate: "April 2025", raised: "$10.08M", image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&q=80" },
  "5": { ticker: "WLGS", exchange: "NASDAQ Capital Market", ipoDate: "April 2023", raised: "$8.0M", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" },
  "6": { ticker: "VSME", exchange: "NASDAQ Capital Market", ipoDate: "September 2023", raised: "$10.0M", image: "https://images.unsplash.com/photo-1758274252266-e8b2118cf147?w=1920&q=80" },
  "7": { ticker: "ZTG", exchange: "NASDAQ Capital Market", ipoDate: "September 2025", raised: "$6.0M", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80" },
  "8": { ticker: "ZDAI", exchange: "NASDAQ Capital Market", ipoDate: "July 2024", raised: "$7.0M", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" },
  "9": { ticker: "DTCK", exchange: "NASDAQ", ipoDate: "September 2023", raised: "$5.0M", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80" },
  "10": { ticker: "CETY", exchange: "NASDAQ Capital Market", ipoDate: "March 2023", raised: "$3.9M", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80" },
  "11": { ticker: "WETH", exchange: "NASDAQ", ipoDate: "Uplisting", raised: "", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" },
  "12": { ticker: "MPU", exchange: "NYSE American", ipoDate: "", raised: "", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80" },
  "13": { ticker: "DLXY", exchange: "NASDAQ Capital Market", ipoDate: "July 2025", raised: "$8.0M", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80" },
};

export default function ProjectsPage() {
  const t = useTranslations("projectsPage");
  const tNav = useTranslations("nav");

  // Special handling for items where ipoDate is translatable (item 11 = "Uplisting")
  const projects = itemIds.map((id) => {
    const meta = projectMeta[id];
    // For id "11", ipoDate is overridden by the translation
    let translatedIpoDate = meta.ipoDate;
    if (id === "11") {
      try {
        translatedIpoDate = t(`items.${id}.ipoDate`);
      } catch {
        translatedIpoDate = meta.ipoDate;
      }
    }
    return {
      id: parseInt(id),
      ticker: meta.ticker,
      name: t(`items.${id}.name`),
      exchange: meta.exchange,
      ipoDate: translatedIpoDate,
      raised: meta.raised,
      industry: t(`items.${id}.industry`),
      headquarters: t(`items.${id}.headquarters`),
      description: t(`items.${id}.description`),
      image: meta.image,
    };
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
              className="hidden lg:flex items-center gap-2 text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span className="text-sm">{tNav("backToHome")}</span>
            </Link>

            <MobileNav />
          </div>
        </div>
      </header>

      <ProjectShowcase projects={projects} />

      <Footer />
    </div>
  );
}
