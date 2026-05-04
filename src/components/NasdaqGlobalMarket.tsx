"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const phaseIds = ["1", "2", "3"] as const;

export default function NasdaqGlobalMarket() {
  const t = useTranslations("nasdaqHome");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const phases = phaseIds.map((id) => ({
    phase: t(`phases.${id}.phase`),
    title: t(`phases.${id}.title`),
    description: t(`phases.${id}.description`),
  }));

  return (
    <section
      ref={ref}
      id="nasdaq"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#08080C] via-[#0a0a0e] to-[#08080C]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-[#BFA054]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-[#4A7CC9]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24 lg:pr-48 xl:pr-64">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#BFA054]" />
            <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
              {t("overline")}
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-medium text-[#F8F8FA] leading-[1.1]">
            {t("headlineLine1")}
            <br />
            <span className="text-[#BFA054]">{t("headlineLine2")}</span>
          </h2>

          <p className="mt-6 text-lg text-[#A0A4AC] leading-relaxed max-w-2xl">
            {t("intro")}
          </p>
        </motion.div>

        {/* Phased Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {phases.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative"
            >
              <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-[#BFA054] flex items-center justify-center">
                <span className="text-[#08080C] font-bold text-sm">{index + 1}</span>
              </div>
              <div className="pt-8 p-6 rounded-xl bg-[#0c0c10] border border-[#222226] h-full">
                <span className="text-[10px] text-[#BFA054] uppercase tracking-wider">
                  {item.phase}
                </span>
                <h4 className="mt-1 text-base font-medium text-[#F8F8FA]">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm text-[#A0A4AC] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 p-5 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/20"
        >
          <p className="text-sm text-[#A0A4AC] text-center">
            {t("footerNoteBefore")}<span className="text-[#BFA054] font-medium">{t("footerNoteHighlight")}</span>{t("footerNoteAfter")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
