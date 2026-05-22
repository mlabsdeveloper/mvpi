"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { FiMenu, FiX, FiGlobe, FiCheck } from "react-icons/fi";

const navItems = [
  { key: "home", id: "hero" },
  { key: "about", id: "about" },
  { key: "expertise", id: "expertise" },
  { key: "whyUs", id: "why-mvpi" },
  { key: "presence", id: "presence" },
  { key: "nasdaqIpo", id: "nasdaq" },
  { key: "news", id: "news" },
  { key: "clients", id: "clients" },
  { key: "contact", id: "contact" },
] as const;

const mobileNavItems = [
  { key: "mobileHome", href: "/" },
  { key: "mobileExpertise", href: "/expertise" },
  { key: "mobileNews", href: "/news" },
  { key: "mobileProjects", href: "/projects" },
] as const;

const localeLabels: Record<string, string> = {
  en: "English",
  zh: "简体中文",
  ja: "日本語",
};

const visibleLocales = routing.locales.filter((loc) => loc !== "zh");

export default function Header() {
  const t = useTranslations("nav");
  const currentLocale = useLocale();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

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
        <Link href="/#hero" className="cursor-pointer group">
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
              {t("strategicPartners")}
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

      {/* Language Switcher - top right (desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 right-8 lg:right-12 xl:right-16 z-50 hidden lg:block"
      >
        <button
          onClick={() => setIsLangOpen((v) => !v)}
          className="flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-[0.15em] text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
          aria-label={t("language")}
        >
          <FiGlobe className="w-4 h-4" />
          <span>{localeLabels[currentLocale]}</span>
        </button>
        <AnimatePresence>
          {isLangOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 min-w-[140px] rounded-lg border border-[#222226] bg-[#0C0C10] py-1 shadow-xl"
            >
              {visibleLocales.map((loc) => (
                <Link
                  key={loc}
                  href={pathname}
                  locale={loc}
                  onClick={() => setIsLangOpen(false)}
                  className={`flex items-center justify-between gap-3 px-4 py-2 text-sm transition-colors cursor-pointer ${
                    loc === currentLocale
                      ? "text-[#BFA054]"
                      : "text-[#A0A4AC] hover:text-[#F8F8FA] hover:bg-[#F8F8FA]/5"
                  }`}
                >
                  <span>{localeLabels[loc]}</span>
                  {loc === currentLocale && <FiCheck className="w-3.5 h-3.5" />}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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

          {navItems.map((item) => (
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
                {t(item.key)}
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

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-5 right-5 z-50 lg:hidden p-2 cursor-pointer"
      >
        <FiMenu className="w-6 h-6 text-[#F8F8FA]" />
      </motion.button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0C0C10] z-50 lg:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-5 right-5 p-2 cursor-pointer"
              >
                <FiX className="w-6 h-6 text-[#F8F8FA]" />
              </button>

              {/* Nav Items */}
              <nav className="flex flex-col pt-20 px-8">
                {mobileNavItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 border-b border-[#222226] text-[#F8F8FA] hover:text-[#BFA054] transition-colors cursor-pointer"
                    >
                      <span className="text-lg font-medium">{t(item.key)}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Language Switcher (mobile) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: mobileNavItems.length * 0.1 }}
                  className="mt-6"
                >
                  <span className="block text-[10px] text-[#6B6F78] uppercase tracking-[0.3em] mb-3">
                    {t("language")}
                  </span>
                  <div className="flex flex-col gap-2">
                    {visibleLocales.map((loc) => (
                      <Link
                        key={loc}
                        href={pathname}
                        locale={loc}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-2 text-sm transition-colors cursor-pointer ${
                          loc === currentLocale
                            ? "text-[#BFA054]"
                            : "text-[#A0A4AC] hover:text-[#F8F8FA]"
                        }`}
                      >
                        <span>{localeLabels[loc]}</span>
                        {loc === currentLocale && <FiCheck className="w-3.5 h-3.5" />}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-3 px-6 bg-gradient-to-r from-[#3A62A3] via-[#4A7CC9] to-[#6B9ADB] text-white text-sm font-medium tracking-wide uppercase text-center cursor-pointer"
                  >
                    {t("contactUs")}
                  </Link>
                </motion.div>
              </nav>

              {/* Logo at bottom */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.avif"
                    alt="MVPI Capital"
                    width={32}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                  <div>
                    <span className="font-[family-name:var(--font-playfair)] text-sm font-semibold text-[#F8F8FA] block">
                      MVPI Capital
                    </span>
                    <span className="text-[9px] text-[#6B6F78] uppercase tracking-wider">
                      {t("strategicPartners")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
