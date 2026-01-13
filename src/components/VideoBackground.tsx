"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function VideoBackground() {
  const [blurValue, setBlurValue] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [vh, setVh] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVh(window.innerHeight);
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollY } = useScroll();

  // Calculate blur based on scroll position
  // Start blurring when scrolling begins, reach max blur by the time About section is fully visible
  const blur = useTransform(scrollY, [vh * 0.3, vh * 0.8], [0, 25]);
  const scale = useTransform(scrollY, [0, vh * 2], [1, 1.1]);
  // Add a darker overlay as blur increases for better text contrast
  const darkOverlay = useTransform(scrollY, [vh * 0.3, vh * 1], [0, 0.5]);
  // Fade out the entire video background after the About headline (around vh * 1.5 to vh * 2)
  const fadeOut = useTransform(scrollY, [vh * 1.3, vh * 1.8], [1, 0]);

  useMotionValueEvent(blur, "change", (latest) => {
    setBlurValue(latest);
  });

  useMotionValueEvent(darkOverlay, "change", (latest) => {
    setOverlayOpacity(latest);
  });

  useMotionValueEvent(fadeOut, "change", (latest) => {
    setVideoOpacity(latest);
  });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-screen z-0 overflow-hidden transition-opacity duration-150"
      style={{ opacity: videoOpacity }}
    >
      <motion.div
        style={{ scale }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: `blur(${blurValue}px)` }}
        >
          <source src="/footage.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Base gradient overlay - always present */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080C]/50 via-[#08080C]/30 to-[#08080C]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080C]/70 via-transparent to-[#08080C]/50" />

      {/* Dynamic dark overlay that increases with scroll/blur */}
      <div
        className="absolute inset-0 bg-[#08080C] transition-opacity duration-150"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
