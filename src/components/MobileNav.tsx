"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { FiMenu, FiX, FiCheck } from "react-icons/fi";

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

export default function MobileNav() {
  const t = useTranslations("nav");
  const currentLocale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 cursor-pointer lg:hidden"
      >
        <FiMenu className="w-6 h-6 text-[#F8F8FA]" />
      </button>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0C0C10] z-[100] lg:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
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
                      onClick={() => setIsOpen(false)}
                      className="block py-4 border-b border-[#222226] text-[#F8F8FA] hover:text-[#BFA054] transition-colors cursor-pointer"
                    >
                      <span className="text-lg font-medium">{t(item.key)}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Language Switcher */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="mt-6"
                >
                  <span className="block text-[10px] text-[#6B6F78] uppercase tracking-[0.3em] mb-3">
                    {t("language")}
                  </span>
                  <div className="flex flex-col gap-2">
                    {routing.locales.map((loc) => (
                      <Link
                        key={loc}
                        href={pathname}
                        locale={loc}
                        onClick={() => setIsOpen(false)}
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
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="mt-8"
                >
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
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
