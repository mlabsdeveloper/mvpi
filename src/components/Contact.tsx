"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const WEB3FORMS_ACCESS_KEY = "0d7cecfd-a956-4760-bc66-274cf754a973";

export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen snap-start py-32 lg:py-40 bg-transparent"
    >
      <div className="max-w-[1920px] mx-auto px-8 lg:px-12 xl:pl-24 xl:pr-56">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#BFA054]" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                {t("overline")}
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-[2.125rem] lg:text-[2.875rem] xl:text-[3.5rem] font-medium text-[#F8F8FA] leading-[1.1]">
              {t("headlineLine1")}
              <br />
              <span className="text-[#6B6F78]">{t("headlineLine2")}</span>
            </h2>

            <p className="mt-10 text-[#A0A4AC] leading-relaxed max-w-md">
              {t("intro")}
            </p>

            <div className="mt-16 space-y-8">
              <div>
                <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  {t("labelEmail")}
                </span>
                <a
                  href="mailto:enquiry@mvpicapital.com"
                  className="mt-2 block text-lg text-[#F8F8FA] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  enquiry@mvpicapital.com
                </a>
              </div>
              <div>
                <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  {t("labelPhone")}
                </span>
                <a
                  href="tel:+85237089434"
                  className="mt-2 block text-lg text-[#F8F8FA] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  +852 3708 9434
                </a>
              </div>
              <div>
                <span className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  {t("labelWhatsapp")}
                </span>
                <a
                  href="https://wa.me/85260605148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg text-[#F8F8FA] hover:text-[#BFA054] transition-colors cursor-pointer"
                >
                  +852 6060 5148
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="hidden" name="subject" value="New Contact Form Submission - MVPI Capital" />
              <input type="hidden" name="from_name" value="MVPI Capital Website" />

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                    {t("fieldFirstName")}
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="mt-3 w-full px-4 py-4 rounded-lg bg-[#111113] border border-[#222226] text-[#F8F8FA] placeholder-[#4a4a4a] focus:outline-none focus:border-[#BFA054]/50"
                    placeholder={t("placeholderFirstName")}
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                    {t("fieldLastName")}
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="mt-3 w-full px-4 py-4 rounded-lg bg-[#111113] border border-[#222226] text-[#F8F8FA] placeholder-[#4a4a4a] focus:outline-none focus:border-[#BFA054]/50"
                    placeholder={t("placeholderLastName")}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  {t("fieldEmail")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-3 w-full px-4 py-4 rounded-lg bg-[#111113] border border-[#222226] text-[#F8F8FA] placeholder-[#4a4a4a] focus:outline-none focus:border-[#BFA054]/50"
                  placeholder={t("placeholderEmail")}
                />
              </div>

              <div>
                <label className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  {t("fieldCompany")}
                </label>
                <input
                  type="text"
                  name="company"
                  className="mt-3 w-full px-4 py-4 rounded-lg bg-[#111113] border border-[#222226] text-[#F8F8FA] placeholder-[#4a4a4a] focus:outline-none focus:border-[#BFA054]/50"
                  placeholder={t("placeholderCompany")}
                />
              </div>

              <div>
                <label className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em]">
                  {t("fieldMessage")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-3 w-full px-4 py-4 rounded-lg bg-[#111113] border border-[#222226] text-[#F8F8FA] placeholder-[#4a4a4a] focus:outline-none focus:border-[#BFA054]/50 resize-none"
                  placeholder={t("placeholderMessage")}
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                  {t("successMessage")}
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                  {t("errorMessage")}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-3 mt-8 px-8 py-4 bg-gradient-to-r from-[#3A62A3] via-[#4A7CC9] to-[#6B9ADB] text-white text-sm font-medium tracking-wide uppercase hover:from-[#4A7CC9] hover:via-[#6B9ADB] hover:to-[#8BB4E8] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("sending") : t("submit")}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
