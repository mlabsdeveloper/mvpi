"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "Why Us", href: "#why-mvpi", id: "why-mvpi" },
  { label: "Presence", href: "#presence", id: "presence" },
  { label: "News", href: "#news", id: "news" },
  { label: "Clients", href: "#clients", id: "clients" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { scrollY } = useScroll();

  // Animation values based on scroll (animate over first 400px of scroll)
  const logoScale = useTransform(scrollY, [0, 400], [1.6, 1]);
  const logoY = useTransform(scrollY, [0, 400], [100, 0]);
  const subtitleOpacity = useTransform(scrollY, [250, 400], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });

      // Hide nav when footer is in view
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsNavVisible(footerTop > windowHeight * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeIndex = navItems.findIndex((item) => item.id === activeSection);

  return (
    <>
      {/* Top Bar - Animated Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 z-50 p-5 lg:p-6 xl:p-6 xl:pl-24"
      >
        <Link href="#hero" className="cursor-pointer group">
          {/* Desktop - animated logo */}
          <motion.div
            style={{ scale: logoScale, y: logoY }}
            className="origin-top-left items-center gap-3 relative hidden lg:flex"
          >
            <Image
              src="/logo.avif"
              alt="MVPI Capital"
              width={48}
              height={48}
              className="h-12 w-auto object-contain flex-shrink-0"
            />
            <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#F8F8FA] group-hover:text-[#BFA054] transition-colors leading-none">
              MVPI Capital
            </span>
            <motion.p
              style={{ opacity: subtitleOpacity }}
              className="text-[10px] text-[#6B6F78] uppercase tracking-[0.2em] absolute left-[4.5rem] top-[2.2rem] whitespace-nowrap"
            >
              Strategic Partners
            </motion.p>
          </motion.div>
          {/* Mobile - static logo with company name */}
          <div className="flex items-center gap-2 lg:hidden">
            <Image
              src="/logo.avif"
              alt="MVPI Capital"
              width={36}
              height={36}
              className="h-9 w-auto object-contain flex-shrink-0"
            />
            <span className="font-[family-name:var(--font-playfair)] text-base font-semibold text-[#F8F8FA] leading-none">
              MVPI Capital
            </span>
          </div>
        </Link>
      </motion.div>

      {/* Right Side Navigation - Desktop only */}
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isNavVisible ? 1 : 0, x: isNavVisible ? 0 : 50 }}
        transition={{ duration: 0.4 }}
        className="fixed right-8 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="relative flex flex-col items-end gap-6">
          {/* Animated Line Indicator */}
          <motion.div
            className="absolute right-0 w-0.5 bg-[#BFA054]"
            initial={{ height: 24, top: 0 }}
            animate={{
              top: activeIndex * 48,
              height: 24,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center gap-4 cursor-pointer h-6"
            >
              <span
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#BFA054] translate-x-0"
                    : "text-[#6B6F78] translate-x-2 group-hover:translate-x-0 group-hover:text-[#A0A4AC]"
                }`}
              >
                {item.label}
              </span>
              <div
                className={`w-8 h-px transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-[#BFA054] w-12"
                    : "bg-[#222226] group-hover:bg-[#6B6F78] group-hover:w-10"
                }`}
              />
            </button>
          ))}
        </div>
      </motion.nav>

    </>
  );
}
