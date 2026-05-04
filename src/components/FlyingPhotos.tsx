"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Photos for each column - Iconic trading/financial buildings from covered regions
const leftColumnPhotos = [
  { src: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80", alt: "Hong Kong Skyline", aspectRatio: "4/5" },
  { src: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=800&q=80", alt: "Taipei 101", aspectRatio: "3/4" },
  { src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80", alt: "Singapore Marina Bay", aspectRatio: "4/5" },
  { src: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?w=800&q=80", alt: "Hong Kong Night", aspectRatio: "3/4" },
  { src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80", alt: "Kuala Lumpur Petronas", aspectRatio: "4/5" },
];

const middleColumnPhotos = [
  { src: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=800&q=80", alt: "Singapore Financial District", aspectRatio: "16/10" },
  { src: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80", alt: "Sydney Harbour", aspectRatio: "3/4" },
  { src: "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?w=800&q=80", alt: "Hong Kong Central", aspectRatio: "16/10" },
  { src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80", alt: "Ho Chi Minh City", aspectRatio: "3/4" },
  { src: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80", alt: "Singapore Night", aspectRatio: "16/10" },
];

const rightColumnPhotos = [
  { src: "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=800&q=80", alt: "Petronas Towers Malaysia", aspectRatio: "3/4" },
  { src: "https://images.unsplash.com/photo-1532364158125-02d75a0f7fb9?w=800&q=80", alt: "Hong Kong Buildings", aspectRatio: "4/5" },
  { src: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=800&q=80", alt: "Taipei Cityscape", aspectRatio: "3/4" },
  { src: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=800&q=80", alt: "Sydney CBD", aspectRatio: "4/5" },
  { src: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80", alt: "Singapore Business District", aspectRatio: "3/4" },
];

const partnerKeys = [
  "professionalFirms",
  "corporateGroups",
  "institutionalPartners",
  "leadershipNetworks",
  "technologyCommunities",
  "entrepreneurAlliances",
] as const;

export default function FlyingPhotos() {
  const t = useTranslations("flyingPhotos");
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: "-20%" });

  const networkPartners = partnerKeys.map((key) => ({
    name: t(`items.${key}.name`),
    desc: t(`items.${key}.desc`),
  }));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);
  const middleY = useTransform(scrollYProgress, [0, 1], ["-20%", "-35%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <section
      ref={containerRef}
      id="network"
      className="relative bg-black"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.35) 100%)" }}
        />

        <motion.div
          className="absolute inset-0 grid grid-cols-3 gap-4 px-4"
          style={{ scale }}
        >
          <motion.div className="flex flex-col gap-4 pt-40" style={{ y: leftY }}>
            {leftColumnPhotos.map((photo, index) => (
              <PhotoCard key={`left-${index}`} photo={photo} />
            ))}
          </motion.div>

          <motion.div className="flex flex-col gap-4 pt-80" style={{ y: middleY }}>
            {middleColumnPhotos.map((photo, index) => (
              <PhotoCard key={`middle-${index}`} photo={photo} />
            ))}
          </motion.div>

          <motion.div className="flex flex-col gap-4 pt-20" style={{ y: rightY }}>
            {rightColumnPhotos.map((photo, index) => (
              <PhotoCard key={`right-${index}`} photo={photo} />
            ))}
          </motion.div>
        </motion.div>

        <div
          ref={contentRef}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center max-w-6xl px-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-[11px] text-[#BFA054] uppercase tracking-[0.4em] mb-8"
            >
              {t("label")}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-medium text-[#F8F8FA] leading-[0.95] tracking-tight"
            >
              {t("title1")}
              <br />
              <span className="text-[#F8F8FA]/80">{t("title2")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-base md:text-lg text-[#A0A4AC] max-w-xl mx-auto leading-relaxed"
            >
              {t("subtitleLine1")}
              <br />
              {t("subtitleLine2")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 pointer-events-auto"
            >
              {networkPartners.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  className="group relative p-6 rounded-2xl cursor-pointer overflow-hidden transition-all hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
                  }} />

                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-[#BFA054] rounded-full" />
                      <span className="text-base font-medium text-[#F8F8FA] group-hover:text-[#BFA054] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-sm text-[#A0A4AC]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoCard({
  photo,
}: {
  photo: { src: string; alt: string; aspectRatio: string };
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-sm"
      style={{ aspectRatio: photo.aspectRatio }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover brightness-50 contrast-75"
        sizes="33vw"
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
