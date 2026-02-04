"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  FiTrendingUp,
  FiUnlock,
  FiDroplet,
  FiAward,
  FiGlobe,
  FiBarChart2,
  FiHome,
  FiDollarSign,
  FiUsers,
  FiDatabase,
  FiTarget,
  FiBookOpen,
  FiMessageSquare,
  FiAlertTriangle,
  FiFileText,
  FiClock,
  FiCalendar,
  FiCheckCircle,
  FiMapPin,
  FiShield,
  FiRefreshCw,
  FiZap,
  FiLink,
  FiLayers,
  FiGrid,
  FiPieChart,
  FiActivity,
  FiStar,
  FiBriefcase,
  FiServer,
  FiSettings,
  FiClipboard,
  FiNavigation,
  FiCompass,
  FiHeart
} from "react-icons/fi";
import {
  HiOutlineOfficeBuilding,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineBadgeCheck,
  HiOutlineGlobeAlt
} from "react-icons/hi";

// ============================================
// SLIDE COMPONENT
// ============================================

function Slide({
  children,
  className = "",
  variant = "default"
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark" | "accent";
}) {
  const bgClasses = {
    default: "bg-[#08080C]",
    dark: "bg-[#050507]",
    accent: "bg-gradient-to-br from-[#0a0a0e] via-[#08080C] to-[#0c0c10]",
  };

  return (
    <section className={`slide relative w-full aspect-video overflow-hidden ${bgClasses[variant]} ${className}`}>
      {children}
    </section>
  );
}

// ============================================
// DECORATIVE ELEMENTS
// ============================================

function GoldLine({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-gradient-to-r from-[#BFA054] via-[#D4B872] to-transparent ${className}`} />;
}

function DecorativeCircle({ size = "lg", position = "top-right" }: { size?: "sm" | "md" | "lg"; position?: string }) {
  const sizes = { sm: "w-32 h-32", md: "w-64 h-64", lg: "w-96 h-96" };
  return (
    <div className={`absolute ${position} ${sizes[size]} rounded-full bg-[#BFA054]/5 blur-3xl pointer-events-none`} />
  );
}

// Photo background with overlay
function PhotoBackground({
  src,
  opacity = 0.15,
  position = "right"
}: {
  src: string;
  opacity?: number;
  position?: "left" | "right" | "center" | "full";
}) {
  const positionClasses = {
    left: "left-0 w-1/2",
    right: "right-0 w-1/2",
    center: "left-1/4 w-1/2",
    full: "inset-0"
  };

  return (
    <div className={`absolute top-0 bottom-0 ${positionClasses[position]} pointer-events-none overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${src})`,
          opacity,
          filter: "grayscale(30%)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/80 to-transparent" />
    </div>
  );
}

// Split layout with full image on left or right
function SplitImage({ src, side = "left" }: { src: string; side?: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div className={`absolute ${isLeft ? "left-0" : "right-0"} top-0 bottom-0 w-[45%] overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      {/* Gradient fade */}
      <div className={`absolute inset-0 ${isLeft ? "bg-gradient-to-r from-transparent via-transparent to-[#08080C]" : "bg-gradient-to-l from-transparent via-transparent to-[#08080C]"}`} />
      {/* Subtle dark overlay for consistency */}
      <div className="absolute inset-0 bg-[#08080C]/20" />
    </div>
  );
}

// Nasdaq-style stock chart decoration
function StockChartDecoration({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute opacity-10 pointer-events-none ${className}`} width="400" height="200" viewBox="0 0 400 200">
      <path
        d="M0 150 L50 120 L100 140 L150 80 L200 100 L250 60 L300 90 L350 40 L400 70"
        fill="none"
        stroke="#BFA054"
        strokeWidth="2"
      />
      <path
        d="M0 150 L50 120 L100 140 L150 80 L200 100 L250 60 L300 90 L350 40 L400 70 L400 200 L0 200 Z"
        fill="url(#goldGradient)"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#BFA054" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#BFA054" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// World map decoration
function WorldMapDecoration({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="600" height="300" viewBox="0 0 600 300" className="opacity-5">
        <ellipse cx="300" cy="150" rx="280" ry="140" fill="none" stroke="#BFA054" strokeWidth="1" strokeDasharray="4 4" />
        <ellipse cx="300" cy="150" rx="200" ry="100" fill="none" stroke="#BFA054" strokeWidth="1" strokeDasharray="4 4" />
        <ellipse cx="300" cy="150" rx="120" ry="60" fill="none" stroke="#BFA054" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="20" y1="150" x2="580" y2="150" stroke="#BFA054" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="300" y1="10" x2="300" y2="290" stroke="#BFA054" strokeWidth="1" strokeDasharray="4 4" />
        {/* Dots for cities */}
        <circle cx="450" cy="100" r="4" fill="#BFA054" opacity="0.5" />
        <circle cx="480" cy="130" r="4" fill="#BFA054" opacity="0.5" />
        <circle cx="150" cy="120" r="4" fill="#BFA054" opacity="0.5" />
        <circle cx="200" cy="140" r="4" fill="#BFA054" opacity="0.5" />
        <circle cx="350" cy="160" r="4" fill="#BFA054" opacity="0.5" />
      </svg>
    </div>
  );
}

function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
      <div className="w-full h-full" style={{
        backgroundImage: `linear-gradient(#BFA054 1px, transparent 1px), linear-gradient(90deg, #BFA054 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
    </div>
  );
}

function SlideNumber({ number }: { number: number }) {
  return (
    <div className="absolute bottom-8 right-12 text-xs text-[#3a3a3e] font-medium tracking-wider">
      {String(number).padStart(2, '0')}
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute top-8 left-12 flex items-center gap-3">
      <Image src="/logo.avif" alt="MVPI" width={228} height={183} className="h-8 w-auto" />
      <span className="text-sm font-semibold text-[#F8F8FA]/60">MVPI Capital</span>
    </div>
  );
}

// ============================================
// CHART COMPONENTS
// ============================================

function BarChart({ data }: { data: { label: string; value: number; color?: string }[] }) {
  const maxValue = Math.max(...data.map(d => d.value));
  return (
    <div className="flex items-end gap-4 h-48">
      {data.map((item, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2">
          <div
            className="w-full rounded-t-lg transition-all"
            style={{
              height: `${(item.value / maxValue) * 100}%`,
              background: item.color || 'linear-gradient(to top, #BFA054, #D4B872)'
            }}
          />
          <span className="text-[10px] text-[#6B6F78] text-center">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ percentage, label }: { percentage: number; label: string }) {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full -rotate-90">
        <circle cx="64" cy="64" r="45" fill="none" stroke="#1a1a1e" strokeWidth="8" />
        <circle
          cx="64" cy="64" r="45" fill="none" stroke="#BFA054" strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-[#BFA054]">{percentage}%</span>
        <span className="text-[9px] text-[#6B6F78] uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function NasdaqGlobalMarketPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="deck-container bg-[#08080C]">
      {/* Download Button - Only visible on screen */}
      <button
        onClick={() => window.print()}
        className="print-hidden fixed top-6 right-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-[#BFA054] hover:bg-[#D4B872] text-[#08080C] text-sm font-medium rounded-lg transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download PDF
      </button>

      {/* Back Button - Only visible on screen */}
      <a
        href="/"
        className="print-hidden fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 text-[#A0A4AC] hover:text-[#BFA054] text-sm transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </a>

      {/* ==================== SLIDE 1: COVER ==================== */}
      <Slide variant="accent" className="print-cover-slide">
        <PhotoBackground src="/images/deck/nyc-skyline.jpg" opacity={0.25} position="full" />
        <DecorativeCircle position="-top-48 -right-48" size="lg" />
        <DecorativeCircle position="-bottom-32 -left-32" size="md" />
        <GridPattern />
        <StockChartDecoration className="bottom-0 right-0 w-[600px]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="print-preserve text-center max-w-4xl px-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Image src="/logo.avif" alt="MVPI Capital" width={228} height={183} className="h-16 w-auto" />
            </div>

            <p className="text-[#BFA054] text-sm uppercase tracking-[0.3em] mb-6">
              MVPI International Capital
            </p>

            <h1 className="font-[family-name:var(--font-playfair)] text-6xl lg:text-7xl font-medium text-[#F8F8FA] leading-[1.1] mb-6 whitespace-nowrap">
              Nasdaq Global Market
              <br />
              <span className="text-[#BFA054]">IPO</span>
            </h1>

            <p className="text-xl text-[#A0A4AC] max-w-2xl mx-auto mb-12">
              Your Gateway to Global Capital & Institutional Investors
            </p>

            <GoldLine className="w-32 mx-auto" />
          </div>
        </div>

        <SlideNumber number={1} />
      </Slide>

      {/* ==================== SLIDE 2: STRATEGIC IMPERATIVE ==================== */}
      <Slide variant="dark">
        <Logo />
        {/* Background glows */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#BFA054]/8 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#4A7CC9]/6 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#9B59B6]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center">
          {/* Left side - Title */}
          <div className="print-preserve absolute left-16 top-1/2 -translate-y-1/2 max-w-[340px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Strategic Vision</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-medium text-[#F8F8FA] leading-[1.1] mb-6">
              The Strategic
              <br />
              <span className="text-[#BFA054]">Imperative</span>
            </h2>
            <p className="text-lg text-[#A0A4AC] leading-relaxed">
              A Nasdaq listing is not a transaction. It is a <span className="text-[#BFA054] font-medium">strategic transformation</span>.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-3 h-3 rounded-sm bg-[#BFA054]/30 border border-[#BFA054]/50" />
              <span className="text-sm text-[#6B6F78]">5 pillars of transformation</span>
            </div>
          </div>

          {/* Pentagon Infographic - Central */}
          <div className="print-preserve relative w-[580px] h-[520px] ml-[260px]">
            {/* Main SVG with all decorative elements */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 580 520">
              <defs>
                {/* Gradients */}
                <radialGradient id="centerGlowNew" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#BFA054" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#BFA054" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#BFA054" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="pentagonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BFA054" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#D4B872" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#BFA054" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#BFA054" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#BFA054" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#BFA054" stopOpacity="0.1" />
                </linearGradient>
                {/* Filter for glow effect */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Outer decorative rings */}
              <circle cx="290" cy="260" r="240" fill="none" stroke="#1a1a1e" strokeWidth="1" />
              <circle cx="290" cy="260" r="235" fill="none" stroke="#BFA054" strokeWidth="0.5" opacity="0.1" strokeDasharray="2 8" />
              <circle cx="290" cy="260" r="200" fill="none" stroke="#BFA054" strokeWidth="1" opacity="0.15" />
              <circle cx="290" cy="260" r="195" fill="none" stroke="#BFA054" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 6" />

              {/* Decorative dots on outer ring */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <circle
                  key={`dot-${i}`}
                  cx={290 + 240 * Math.cos((angle - 90) * Math.PI / 180)}
                  cy={260 + 240 * Math.sin((angle - 90) * Math.PI / 180)}
                  r="3"
                  fill="#BFA054"
                  opacity="0.3"
                />
              ))}

              {/* Pentagon - subtle shape */}
              <polygon
                points="290,55 495,185 435,435 145,435 85,185"
                fill="none"
                stroke="#BFA054"
                strokeWidth="1"
                opacity="0.15"
              />

              {/* Inner lines to center with gradient */}
              <line x1="290" y1="55" x2="290" y2="260" stroke="url(#lineGrad)" strokeWidth="1.5" />
              <line x1="495" y1="185" x2="290" y2="260" stroke="url(#lineGrad)" strokeWidth="1.5" />
              <line x1="435" y1="435" x2="290" y2="260" stroke="url(#lineGrad)" strokeWidth="1.5" />
              <line x1="145" y1="435" x2="290" y2="260" stroke="url(#lineGrad)" strokeWidth="1.5" />
              <line x1="85" y1="185" x2="290" y2="260" stroke="url(#lineGrad)" strokeWidth="1.5" />

              {/* Small dots at line midpoints */}
              <circle cx="290" cy="157" r="2" fill="#BFA054" opacity="0.5" />
              <circle cx="392" cy="222" r="2" fill="#BFA054" opacity="0.5" />
              <circle cx="362" cy="347" r="2" fill="#BFA054" opacity="0.5" />
              <circle cx="217" cy="347" r="2" fill="#BFA054" opacity="0.5" />
              <circle cx="187" cy="222" r="2" fill="#BFA054" opacity="0.5" />

              {/* Center - multiple layers */}
              <circle cx="290" cy="260" r="80" fill="url(#centerGlowNew)" />
              <circle cx="290" cy="260" r="58" fill="none" stroke="#BFA054" strokeWidth="1" opacity="0.3" />
              <circle cx="290" cy="260" r="52" fill="#08080C" />
              <circle cx="290" cy="260" r="52" fill="none" stroke="#BFA054" strokeWidth="2.5" />
              <circle cx="290" cy="260" r="48" fill="none" stroke="#BFA054" strokeWidth="0.5" opacity="0.5" />
            </svg>

            {/* Center - IPO text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center" style={{ marginTop: '5px', marginLeft: '5px' }}>
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#BFA054] tracking-wide">IPO</p>
              <p className="text-[10px] text-[#6B6F78] uppercase tracking-[0.2em] mt-1">Transformation</p>
            </div>

            {/* Point 1 - Top - Elevating */}
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-center" style={{ marginLeft: '5px' }}>
              <div className="relative w-36 h-36 mx-auto mb-1">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 144">
                  <defs>
                    <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#5A9B6A" stopOpacity="0.5" />
                      <stop offset="60%" stopColor="#5A9B6A" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#5A9B6A" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="72" cy="72" r="70" fill="url(#glow1)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiTrendingUp className="w-10 h-10 text-[#5A9B6A]" />
                </div>
              </div>
              <p className="text-base font-semibold text-[#F8F8FA]">Elevating</p>
              <p className="text-xs text-[#6B6F78] mt-0.5">To global standards</p>
            </div>

            {/* Point 2 - Right top - Unlocking */}
            <div className="absolute top-[110px] right-[-30px] text-center">
              <div className="relative w-36 h-36 mx-auto mb-1">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 144">
                  <defs>
                    <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#4A7CC9" stopOpacity="0.5" />
                      <stop offset="60%" stopColor="#4A7CC9" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#4A7CC9" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="72" cy="72" r="70" fill="url(#glow2)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiUnlock className="w-10 h-10 text-[#4A7CC9]" />
                </div>
              </div>
              <p className="text-base font-semibold text-[#F8F8FA]">Unlocking</p>
              <p className="text-xs text-[#6B6F78] mt-0.5">$61.7T+ capital</p>
            </div>

            {/* Point 3 - Right bottom - Creating */}
            <div className="absolute bottom-[10px] right-[30px] text-center">
              <div className="relative w-36 h-36 mx-auto mb-1">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 144">
                  <defs>
                    <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#9B59B6" stopOpacity="0.5" />
                      <stop offset="60%" stopColor="#9B59B6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#9B59B6" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="72" cy="72" r="70" fill="url(#glow3)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiDroplet className="w-10 h-10 text-[#9B59B6]" />
                </div>
              </div>
              <p className="text-base font-semibold text-[#F8F8FA]">Creating</p>
              <p className="text-xs text-[#6B6F78] mt-0.5">Permanent liquidity</p>
            </div>

            {/* Point 4 - Left bottom - Establishing */}
            <div className="absolute bottom-[10px] left-[30px] text-center">
              <div className="relative w-36 h-36 mx-auto mb-1">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 144">
                  <defs>
                    <radialGradient id="glow4" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#E67E22" stopOpacity="0.5" />
                      <stop offset="60%" stopColor="#E67E22" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#E67E22" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="72" cy="72" r="70" fill="url(#glow4)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiAward className="w-10 h-10 text-[#E67E22]" />
                </div>
              </div>
              <p className="text-base font-semibold text-[#F8F8FA]">Establishing</p>
              <p className="text-xs text-[#6B6F78] mt-0.5">Global credibility</p>
            </div>

            {/* Point 5 - Left top - Building */}
            <div className="absolute top-[110px] left-[-30px] text-center">
              <div className="relative w-36 h-36 mx-auto mb-1">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 144">
                  <defs>
                    <radialGradient id="glow5" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#E74C3C" stopOpacity="0.5" />
                      <stop offset="60%" stopColor="#E74C3C" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#E74C3C" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="72" cy="72" r="70" fill="url(#glow5)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiGlobe className="w-10 h-10 text-[#E74C3C]" />
                </div>
              </div>
              <p className="text-base font-semibold text-[#F8F8FA]">Building</p>
              <p className="text-xs text-[#6B6F78] mt-0.5">M&A platform</p>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="print-preserve absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#BFA054]/50" />
              <p className="text-lg text-[#A0A4AC] font-[family-name:var(--font-playfair)]">
                A milestone that defines your company's <span className="text-[#BFA054] font-medium">next chapter</span>.
              </p>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#BFA054]/50" />
            </div>
          </div>
        </div>

        <SlideNumber number={2} />
      </Slide>

      {/* ==================== SLIDE 3: WHY U.S. CAPITAL MARKETS ==================== */}
      <Slide>
        <PhotoBackground src="/images/deck/wall-street.jpg" opacity={0.2} position="right" />
        <Logo />
        <GridPattern />
        <WorldMapDecoration className="top-1/2 -translate-y-1/2 right-0" />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">The Opportunity</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-medium text-[#F8F8FA] leading-[1.1] mb-10">
              Why U.S. Capital Markets
            </h2>

            <div className="grid grid-cols-5 gap-4 mb-10">
              {[
                { value: "$69T", label: "U.S. Market Cap", sub: "Jan 2026" },
                { value: "$61.7T", label: "Total U.S. AUM", sub: "Institutional" },
                { value: "58%", label: "Foreign IPOs", sub: "Q1 2025" },
                { value: "871", label: "Int'l on Nasdaq", sub: "Companies" },
                { value: "530+", label: "Int'l on NYSE", sub: "48 countries" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-5 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-[#BFA054]">
                    {stat.value}
                  </span>
                  <p className="text-sm text-[#F8F8FA] mt-2">{stat.label}</p>
                  <p className="text-[10px] text-[#6B6F78] mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-4">
              {[
                { icon: FiDroplet, text: "Deepest liquidity pool — added $7T in 2025" },
                { icon: FiTrendingUp, text: "Premium valuations — 31.5x P/E on Nasdaq" },
                { icon: FiDollarSign, text: "USD-denominated — eliminates FX volatility" },
                { icon: HiOutlineOfficeBuilding, text: "SEC gold standard regulatory framework" },
                { icon: FiGlobe, text: "Global visibility — major indices & news" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-lg bg-[#08080C] border border-[#1a1a1e] text-center">
                  <item.icon className="w-5 h-5 text-[#BFA054]" />
                  <span className="text-xs text-[#A0A4AC]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SlideNumber number={3} />
      </Slide>

      {/* ==================== SLIDE 4: NASDAQ TIERS ==================== */}
      <Slide variant="dark">
        <SplitImage src="/images/deck/office-building.jpg" />
        <Logo />

        <div className="absolute right-0 top-0 bottom-0 w-[55%] flex items-center pr-16 lg:pr-24 pl-8">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Market Structure</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-6">
              Why Nasdaq Global Market
            </h2>

            <p className="text-base text-[#A0A4AC] mb-6">
              Nasdaq has three tiers. Nasdaq Global Market is the preferred tier for Asia companies because it:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Signals institutional quality",
                "Has achievable listing standards",
                "Attracts global investors",
                "Supports future capital raises",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base text-[#F8F8FA]">
                  <div className="w-2 h-2 rounded-full bg-[#BFA054] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg text-[#BFA054] font-medium">
              It is the most practical and respected path.
            </p>
          </div>
        </div>

        <SlideNumber number={4} />
      </Slide>

      {/* ==================== SLIDE 5: IDEAL CANDIDATE ==================== */}
      <Slide variant="dark">
        <Logo />

        <div className="absolute inset-0 flex items-center justify-center">
          {/* Giant central infographic */}
          <div className="print-preserve relative">
            {/* Outer ring with sectors */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-[500px] h-[500px]" viewBox="0 0 500 500">
                {/* Outer decorative ring */}
                <circle cx="250" cy="250" r="240" fill="none" stroke="#1a1a1e" strokeWidth="1" strokeDasharray="8 4" />
                <circle cx="250" cy="250" r="200" fill="none" stroke="#BFA054" strokeWidth="2" opacity="0.3" />
                <circle cx="250" cy="250" r="160" fill="none" stroke="#BFA054" strokeWidth="1" opacity="0.2" />
              </svg>
            </div>

            {/* Center content */}
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
              {/* Center circle with capital - using SVG for PDF compatibility */}
              <div className="absolute w-64 h-64 flex flex-col items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
                  <defs>
                    <linearGradient id="centerGradS5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#BFA054" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#BFA054" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <circle cx="128" cy="128" r="126" fill="url(#centerGradS5)" stroke="#BFA054" strokeWidth="2" strokeOpacity="0.4" />
                </svg>
                <p className="text-sm text-[#BFA054] uppercase tracking-widest mb-2 relative z-10">Capital Target</p>
                <p className="font-[family-name:var(--font-playfair)] text-6xl font-bold text-[#BFA054] relative z-10">$25M</p>
                <p className="text-2xl text-[#D4B872] relative z-10">to $80M</p>
                <p className="text-sm text-[#6B6F78] mt-2 relative z-10">Growth Capital</p>
              </div>

              {/* Criteria positioned around the circle */}
              {/* Top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="30" fill="#5A9B6A" fillOpacity="0.2" stroke="#5A9B6A" strokeWidth="1" strokeOpacity="0.4" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HiOutlineOfficeBuilding className="w-8 h-8 text-[#5A9B6A]" />
                  </div>
                </div>
                <p className="text-lg font-medium text-[#F8F8FA]">Real Operations</p>
                <p className="text-sm text-[#6B6F78]">Established revenue</p>
              </div>

              {/* Right */}
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="30" fill="#4A7CC9" fillOpacity="0.2" stroke="#4A7CC9" strokeWidth="1" strokeOpacity="0.4" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiTrendingUp className="w-8 h-8 text-[#4A7CC9]" />
                  </div>
                </div>
                <p className="text-lg font-medium text-[#F8F8FA]">Growth Path</p>
                <p className="text-sm text-[#6B6F78]">Expansion plans</p>
              </div>

              {/* Bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="30" fill="#9B59B6" fillOpacity="0.2" stroke="#9B59B6" strokeWidth="1" strokeOpacity="0.4" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiGlobe className="w-8 h-8 text-[#9B59B6]" />
                  </div>
                </div>
                <p className="text-lg font-medium text-[#F8F8FA]">Global Ambition</p>
                <p className="text-sm text-[#6B6F78]">International reach</p>
              </div>

              {/* Left */}
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="30" fill="#E67E22" fillOpacity="0.2" stroke="#E67E22" strokeWidth="1" strokeOpacity="0.4" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HiOutlineScale className="w-8 h-8 text-[#E67E22]" />
                  </div>
                </div>
                <p className="text-lg font-medium text-[#F8F8FA]">IPO Ready</p>
                <p className="text-sm text-[#6B6F78]">Governance standards</p>
              </div>
            </div>
          </div>

          {/* Title - top left */}
          <div className="absolute top-24 left-16">
            <div className="print-preserve flex items-center gap-4 mb-2">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Target Profile</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-medium text-[#F8F8FA] leading-[1.1]">
              Ideal Candidate
            </h2>
          </div>

          {/* Sectors - bottom right */}
          <div className="absolute bottom-20 right-16">
            <p className="text-sm text-[#BFA054] uppercase tracking-wider mb-3">Target Sectors</p>
            <div className="flex flex-wrap gap-2 max-w-md justify-end">
              {["Technology", "Healthcare", "Consumer", "Clean Energy", "Finance", "Industrial"].map((sector, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-[#0a0a0e] text-base text-[#A0A4AC] border border-[#1a1a1e]">{sector}</span>
              ))}
            </div>
          </div>
        </div>

        <SlideNumber number={5} />
      </Slide>

      {/* ==================== SLIDE 6: WHAT A NASDAQ LISTING DELIVERS ==================== */}
      <Slide variant="accent">
        <PhotoBackground src="/images/deck/nasdaq-tower.jpg" opacity={0.22} position="right" />
        <Logo />
        <DecorativeCircle position="-top-32 -left-32" size="lg" />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Value Proposition</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-medium text-[#F8F8FA] leading-[1.1] mb-10">
              What a Nasdaq Listing Delivers
            </h2>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-[#08080C]/50 border border-[#1a1a1e]">
                <h3 className="text-lg font-medium text-[#BFA054] mb-4">Immediate Benefits</h3>
                <div className="space-y-3">
                  {[
                    { title: "Global brand credibility", desc: "Nasdaq listing signals quality to customers, partners, and talent" },
                    { title: "Institutional investor access", desc: "Direct access to the world's largest asset managers" },
                    { title: "Liquidity creation", desc: "Tradeable shares for founders, early investors, and employees" },
                    { title: "USD-denominated valuation", desc: "Stable currency, simplified cross-border transactions" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#BFA054]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#BFA054]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div><p className="text-sm text-[#F8F8FA]">{item.title}</p><p className="text-xs text-[#6B6F78]">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#08080C]/50 border border-[#1a1a1e]">
                <h3 className="text-lg font-medium text-[#BFA054] mb-4">Long-Term Strategic Value</h3>
                <div className="space-y-3">
                  {[
                    { title: "M&A currency", desc: "Use stock for acquisitions and strategic partnerships" },
                    { title: "Follow-on capital", desc: "Easier secondary offerings and convertible debt" },
                    { title: "Talent acquisition", desc: "Stock-based compensation attracts global talent" },
                    { title: "Market visibility", desc: "Analyst coverage and media attention" },
                    { title: "Future optionality", desc: "Upgrade to Global Select, pursue dual listings" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#BFA054]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#BFA054]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div><p className="text-sm text-[#F8F8FA]">{item.title}</p><p className="text-xs text-[#6B6F78]">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={6} />
      </Slide>

      {/* ==================== SLIDE 7: NASDAQ VS ALTERNATIVES ==================== */}
      <Slide variant="dark">
        <Logo />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Comparison</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              Nasdaq Global Market vs. Alternatives
            </h2>

            <div className="grid grid-cols-2 gap-8">
              {/* vs. Regional Exchanges */}
              <div>
                <h3 className="text-sm text-[#6B6F78] uppercase tracking-wider mb-4">vs. Regional Exchanges (HKEX, SGX, ASX)</h3>
                <div className="grid grid-cols-2 gap-3">
                  {/* NASDAQ Box */}
                  <div className="p-4 rounded-xl bg-[#BFA054]/20 border-2 border-[#BFA054]">
                    <h4 className="text-sm font-bold text-[#BFA054] uppercase tracking-wider mb-3 text-center">NASDAQ</h4>
                    <div className="space-y-2">
                      {[
                        { label: "Liquidity", value: "Higher daily volumes" },
                        { label: "Investor Base", value: "Global institutional" },
                        { label: "Valuation", value: "Premium for growth" },
                        { label: "Currency", value: "USD (stable)" },
                        { label: "Coverage", value: "Extensive" },
                      ].map((item, i) => (
                        <div key={i} className="text-xs">
                          <span className="text-[#BFA054]">{item.label}:</span>
                          <span className="text-[#F8F8FA] ml-1">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Regional Box */}
                  <div className="p-4 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
                    <h4 className="text-sm font-medium text-[#6B6F78] uppercase tracking-wider mb-3 text-center">Regional</h4>
                    <div className="space-y-2">
                      {[
                        { label: "Liquidity", value: "Variable" },
                        { label: "Investor Base", value: "Primarily regional" },
                        { label: "Valuation", value: "Market-dependent" },
                        { label: "Currency", value: "Local currency exposure" },
                        { label: "Coverage", value: "Limited for smaller caps" },
                      ].map((item, i) => (
                        <div key={i} className="text-xs">
                          <span className="text-[#6B6F78]">{item.label}:</span>
                          <span className="text-[#A0A4AC] ml-1">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* vs. NYSE */}
              <div>
                <h3 className="text-sm text-[#6B6F78] uppercase tracking-wider mb-4">vs. NYSE</h3>
                <div className="grid grid-cols-2 gap-3">
                  {/* NASDAQ Box */}
                  <div className="p-4 rounded-xl bg-[#BFA054]/20 border-2 border-[#BFA054]">
                    <h4 className="text-sm font-bold text-[#BFA054] uppercase tracking-wider mb-3 text-center">NASDAQ</h4>
                    <div className="space-y-2">
                      {[
                        { label: "Focus", value: "Growth & technology" },
                        { label: "Asia Experience", value: "Strong track record" },
                        { label: "Flexibility", value: "Multiple paths" },
                        { label: "Cost", value: "Competitive" },
                        { label: "Culture", value: "Innovation-focused" },
                      ].map((item, i) => (
                        <div key={i} className="text-xs">
                          <span className="text-[#BFA054]">{item.label}:</span>
                          <span className="text-[#F8F8FA] ml-1">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* NYSE Box */}
                  <div className="p-4 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
                    <h4 className="text-sm font-medium text-[#6B6F78] uppercase tracking-wider mb-3 text-center">NYSE</h4>
                    <div className="space-y-2">
                      {[
                        { label: "Focus", value: "Traditional blue chips" },
                        { label: "Asia Experience", value: "Less specialized" },
                        { label: "Flexibility", value: "More rigid" },
                        { label: "Cost", value: "Generally higher" },
                        { label: "Culture", value: "Established corporates" },
                      ].map((item, i) => (
                        <div key={i} className="text-xs">
                          <span className="text-[#6B6F78]">{item.label}:</span>
                          <span className="text-[#A0A4AC] ml-1">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={7} />
      </Slide>

      {/* ==================== SLIDE 8: QUALIFICATION FRAMEWORK OVERVIEW ==================== */}
      <Slide>
        <PhotoBackground src="/images/deck/finance-data.jpg" opacity={0.2} position="right" />
        <Logo />
        <GridPattern />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Listing Requirements</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-medium text-[#F8F8FA] leading-[1.1] mb-4">
              Qualification Framework
            </h2>
            <p className="text-lg text-[#A0A4AC] mb-8">Companies need to meet only <span className="text-[#BFA054] font-medium">ONE</span> of four financial standards</p>

            <div className="grid grid-cols-2 gap-5 mb-6">
              {[
                { name: "Income Standard", icon: FiBarChart2, best: "Profitable operating companies", color: "from-green-500/20" },
                { name: "Equity Standard", icon: HiOutlineScale, best: "Balance-sheet-strong companies", color: "from-blue-500/20" },
                { name: "Market Value Standard", icon: FiTrendingUp, best: "Growth and technology companies", color: "from-purple-500/20" },
                { name: "Assets/Revenue Standard", icon: HiOutlineOfficeBuilding, best: "Scale-stage enterprises", color: "from-orange-500/20" },
              ].map((std, i) => (
                <div key={i} className={`p-5 rounded-xl bg-gradient-to-br ${std.color} to-transparent border border-[#1a1a1e]`}>
                  <std.icon className="w-8 h-8 text-[#BFA054] mb-3" />
                  <h3 className="text-lg font-medium text-[#F8F8FA] mb-2">{std.name}</h3>
                  <p className="text-xs text-[#A0A4AC]">{std.best}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
              <p className="text-sm text-[#A0A4AC] text-center">
                <span className="text-[#BFA054]">Plus:</span> All companies must meet liquidity and governance requirements
              </p>
            </div>
          </div>
        </div>

        <SlideNumber number={8} />
      </Slide>

      {/* ==================== SLIDE 9: INCOME STANDARD ==================== */}
      <Slide variant="dark">
        <Logo />
        {/* Large decorative number */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 font-[family-name:var(--font-playfair)] text-[28rem] font-bold text-[#5A9B6A]/[0.03] leading-none select-none pointer-events-none">
          01
        </div>
        {/* Accent glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5A9B6A]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-16 lg:px-24">
            {/* Header row */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#5A9B6A] text-6xl font-[family-name:var(--font-playfair)] font-bold">01</span>
                  <div className="h-16 w-px bg-[#5A9B6A]/30" />
                  <div>
                    <p className="text-[10px] text-[#5A9B6A] uppercase tracking-[0.3em] mb-1">Qualification Standard</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA]">Income Standard</h2>
                  </div>
                </div>
                <p className="text-base text-[#A0A4AC] max-w-md">For profitable companies with consistent earnings history</p>
              </div>
              {/* Hero metric */}
              <div className="text-right p-6 rounded-2xl bg-gradient-to-br from-[#5A9B6A]/20 to-transparent border border-[#5A9B6A]/30">
                <p className="text-xs text-[#5A9B6A] uppercase tracking-wider mb-1">Key Requirement</p>
                <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#5A9B6A]">$1M+</p>
                <p className="text-sm text-[#A0A4AC]">Pre-tax Income</p>
              </div>
            </div>

            {/* Requirements grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Pre-tax Income", value: "≥ $1M", sub: "Latest FY or 2 of 3 years" },
                { label: "Public Float", value: "$15M", sub: "Minimum required" },
                { label: "Public Shares", value: "1.1M", sub: "Unrestricted" },
                { label: "Market Makers", value: "3", sub: "Required" },
              ].map((req, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#0a0a0e]/80 border border-[#1a1a1e] hover:border-[#5A9B6A]/30 transition-colors">
                  <p className="text-sm text-[#6B6F78] uppercase tracking-wider mb-3">{req.label}</p>
                  <p className="text-4xl font-bold text-[#F8F8FA] mb-2">{req.value}</p>
                  <p className="text-sm text-[#6B6F78]">{req.sub}</p>
                </div>
              ))}
            </div>

            {/* Ideal for tag */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs text-[#6B6F78] uppercase tracking-wider">Ideal for:</span>
              <div className="flex gap-2">
                {["Established Businesses", "Profitable Operations", "Growth Capital Seekers"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-[#5A9B6A]/10 text-[10px] text-[#5A9B6A] border border-[#5A9B6A]/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={9} />
      </Slide>

      {/* ==================== SLIDE 10: EQUITY STANDARD ==================== */}
      <Slide>
        <Logo />
        {/* Large decorative number */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 font-[family-name:var(--font-playfair)] text-[28rem] font-bold text-[#4A7CC9]/[0.03] leading-none select-none pointer-events-none">
          02
        </div>
        {/* Accent glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4A7CC9]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-16 lg:px-24">
            {/* Header row */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#4A7CC9] text-6xl font-[family-name:var(--font-playfair)] font-bold">02</span>
                  <div className="h-16 w-px bg-[#4A7CC9]/30" />
                  <div>
                    <p className="text-[10px] text-[#4A7CC9] uppercase tracking-[0.3em] mb-1">Qualification Standard</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA]">Equity Standard</h2>
                  </div>
                </div>
                <p className="text-base text-[#A0A4AC] max-w-md">For companies with strong balance sheets and established operations</p>
              </div>
              {/* Hero metric */}
              <div className="text-right p-6 rounded-2xl bg-gradient-to-br from-[#4A7CC9]/20 to-transparent border border-[#4A7CC9]/30">
                <p className="text-xs text-[#4A7CC9] uppercase tracking-wider mb-1">Key Requirement</p>
                <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#4A7CC9]">$30M+</p>
                <p className="text-sm text-[#A0A4AC]">Stockholders' Equity</p>
              </div>
            </div>

            {/* Requirements grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Stockholders' Equity", value: "≥ $30M", sub: "Balance sheet strength" },
                { label: "Public Float", value: "$18M", sub: "Minimum required" },
                { label: "Operating History", value: "2 yrs", sub: "Required" },
                { label: "Market Makers", value: "3", sub: "Required" },
              ].map((req, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#0a0a0e]/80 border border-[#1a1a1e] hover:border-[#4A7CC9]/30 transition-colors">
                  <p className="text-sm text-[#6B6F78] uppercase tracking-wider mb-3">{req.label}</p>
                  <p className="text-4xl font-bold text-[#F8F8FA] mb-2">{req.value}</p>
                  <p className="text-sm text-[#6B6F78]">{req.sub}</p>
                </div>
              ))}
            </div>

            {/* Ideal for tag */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs text-[#6B6F78] uppercase tracking-wider">Ideal for:</span>
              <div className="flex gap-2">
                {["Asset-Rich Companies", "Financial Services", "Real Estate", "Infrastructure"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-[#4A7CC9]/10 text-[10px] text-[#4A7CC9] border border-[#4A7CC9]/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={10} />
      </Slide>

      {/* ==================== SLIDE 11: MARKET VALUE STANDARD ==================== */}
      <Slide variant="dark">
        <Logo />
        {/* Large decorative number */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 font-[family-name:var(--font-playfair)] text-[28rem] font-bold text-[#9B59B6]/[0.03] leading-none select-none pointer-events-none">
          03
        </div>
        {/* Accent glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#9B59B6]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-16 lg:px-24">
            {/* Header row */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#9B59B6] text-6xl font-[family-name:var(--font-playfair)] font-bold">03</span>
                  <div className="h-16 w-px bg-[#9B59B6]/30" />
                  <div>
                    <p className="text-[10px] text-[#9B59B6] uppercase tracking-[0.3em] mb-1">Qualification Standard</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA]">Market Value Standard</h2>
                  </div>
                </div>
                <p className="text-base text-[#A0A4AC] max-w-md">For high-growth companies with strong market valuations</p>
              </div>
              {/* Hero metric */}
              <div className="text-right p-6 rounded-2xl bg-gradient-to-br from-[#9B59B6]/20 to-transparent border border-[#9B59B6]/30">
                <p className="text-xs text-[#9B59B6] uppercase tracking-wider mb-1">Key Requirement</p>
                <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#9B59B6]">$75M+</p>
                <p className="text-sm text-[#A0A4AC]">Market Value</p>
              </div>
            </div>

            {/* Requirements grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Market Value", value: "≥ $75M", sub: "Listed securities" },
                { label: "Public Float", value: "$20M", sub: "Minimum required" },
                { label: "Operating History", value: "Any", sub: "No minimum" },
                { label: "Market Makers", value: "4", sub: "Required" },
              ].map((req, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#0a0a0e]/80 border border-[#1a1a1e] hover:border-[#9B59B6]/30 transition-colors">
                  <p className="text-sm text-[#6B6F78] uppercase tracking-wider mb-3">{req.label}</p>
                  <p className="text-4xl font-bold text-[#F8F8FA] mb-2">{req.value}</p>
                  <p className="text-sm text-[#6B6F78]">{req.sub}</p>
                </div>
              ))}
            </div>

            {/* Ideal for tag */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs text-[#6B6F78] uppercase tracking-wider">Ideal for:</span>
              <div className="flex gap-2">
                {["Technology", "Biotech", "High-Growth", "VC-Backed"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-[#9B59B6]/10 text-[10px] text-[#9B59B6] border border-[#9B59B6]/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={11} />
      </Slide>

      {/* ==================== SLIDE 12: ASSETS/REVENUE STANDARD ==================== */}
      <Slide>
        <Logo />
        {/* Large decorative number */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 font-[family-name:var(--font-playfair)] text-[28rem] font-bold text-[#E67E22]/[0.03] leading-none select-none pointer-events-none">
          04
        </div>
        {/* Accent glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E67E22]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-16 lg:px-24">
            {/* Header row */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#E67E22] text-6xl font-[family-name:var(--font-playfair)] font-bold">04</span>
                  <div className="h-16 w-px bg-[#E67E22]/30" />
                  <div>
                    <p className="text-[10px] text-[#E67E22] uppercase tracking-[0.3em] mb-1">Qualification Standard</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA]">Assets/Revenue Standard</h2>
                  </div>
                </div>
                <p className="text-base text-[#A0A4AC] max-w-md">For scale-stage enterprises with significant operations</p>
              </div>
              {/* Hero metric - dual */}
              <div className="text-right p-6 rounded-2xl bg-gradient-to-br from-[#E67E22]/20 to-transparent border border-[#E67E22]/30">
                <p className="text-xs text-[#E67E22] uppercase tracking-wider mb-1">Key Requirements</p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#E67E22]">$75M+</p>
                    <p className="text-xs text-[#A0A4AC]">Assets</p>
                  </div>
                  <span className="text-2xl text-[#E67E22]/50">+</span>
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#E67E22]">$75M+</p>
                    <p className="text-xs text-[#A0A4AC]">Revenue</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Total Assets", value: "≥ $75M", sub: "On balance sheet" },
                { label: "Total Revenue", value: "≥ $75M", sub: "Annual revenue" },
                { label: "Public Float", value: "$20M", sub: "Minimum required" },
                { label: "Market Makers", value: "4", sub: "Required" },
              ].map((req, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#0a0a0e]/80 border border-[#1a1a1e] hover:border-[#E67E22]/30 transition-colors">
                  <p className="text-sm text-[#6B6F78] uppercase tracking-wider mb-3">{req.label}</p>
                  <p className="text-4xl font-bold text-[#F8F8FA] mb-2">{req.value}</p>
                  <p className="text-sm text-[#6B6F78]">{req.sub}</p>
                </div>
              ))}
            </div>

            {/* Ideal for tag */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs text-[#6B6F78] uppercase tracking-wider">Ideal for:</span>
              <div className="flex gap-2">
                {["Industrial", "Manufacturing", "Logistics", "Consumer at Scale"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-[#E67E22]/10 text-[10px] text-[#E67E22] border border-[#E67E22]/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={12} />
      </Slide>

      {/* ==================== SLIDE 13: LIQUIDITY REQUIREMENTS ==================== */}
      <Slide variant="dark">
        <Logo />
        <DecorativeCircle position="-top-32 -right-32" size="md" />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Universal Requirements</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              Liquidity Requirements <span className="text-[#6B6F78] text-2xl">(All Standards)</span>
            </h2>

            <div className="grid grid-cols-2 gap-5 mb-8">
              {[
                { label: "Minimum Share Price", value: "$4.00", note: "At listing", icon: HiOutlineCurrencyDollar },
                { label: "Public Float", value: "$15M", note: "Minimum value", icon: FiBarChart2 },
                { label: "Shareholders", value: "400", note: "≥50% holding ≥$2,500", icon: HiOutlineUserGroup },
                { label: "Market Makers", value: "3-4", note: "Registered market makers", icon: HiOutlineOfficeBuilding },
              ].map((req, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-[#0a0a0e] border border-[#1a1a1e]">
                  <req.icon className="w-6 h-6 text-[#BFA054] mx-auto" />
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-[#BFA054] mt-3">{req.value}</p>
                  <p className="text-sm text-[#F8F8FA] mt-2">{req.label}</p>
                  <p className="text-[10px] text-[#6B6F78] mt-1">{req.note}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30">
              <p className="text-sm text-[#A0A4AC] text-center">
                <span className="text-[#BFA054] font-medium">For IPOs:</span> Public float must be achieved through offering proceeds only (not existing shareholder shares)
              </p>
            </div>
          </div>
        </div>

        <SlideNumber number={13} />
      </Slide>

      {/* ==================== SLIDE 14: CORPORATE GOVERNANCE ==================== */}
      <Slide>
        <PhotoBackground src="/images/deck/boardroom.jpg" opacity={0.2} position="right" />
        <Logo />
        <GridPattern />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Governance</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              Corporate Governance Requirements
            </h2>

            <div className="grid grid-cols-2 gap-5 mb-6">
              {[
                { title: "Board Independence", desc: "Majority independent directors" },
                { title: "Audit Committee", desc: "100% independent, financially literate members" },
                { title: "Compensation Committee", desc: "100% independent members" },
                { title: "Nominating Committee", desc: "100% independent members" },
                { title: "Code of Conduct", desc: "Written code for directors, officers, employees" },
                { title: "Shareholder Meetings", desc: "Annual meetings required" },
                { title: "Related-Party Transactions", desc: "Independent director oversight" },
                { title: "Voting Rights", desc: "No disparate restrictions" },
              ].map((req, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
                  <div className="w-8 h-8 rounded-full bg-[#BFA054]/20 flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-[#BFA054]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-sm font-medium text-[#F8F8FA] mb-1">{req.title}</h3>
                  <p className="text-xs text-[#6B6F78]">{req.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30 text-center">
              <p className="text-sm text-[#F8F8FA]">Governance is not optional — it directly impacts <span className="text-[#BFA054]">valuation and investor confidence</span>.</p>
            </div>
          </div>
        </div>

        <SlideNumber number={14} />
      </Slide>

      {/* ==================== SLIDE 15: CHINA REQUIREMENTS ==================== */}
      <Slide variant="accent">
        <PhotoBackground src="/images/deck/shanghai-skyline.jpg" opacity={0.25} position="right" />
        <Logo />
        <DecorativeCircle position="-bottom-32 -right-32" size="lg" />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Special Requirements</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-6">
              China-Based Companies <span className="text-[#6B6F78] text-2xl">(Restrictive Markets)</span>
            </h2>
            <p className="text-lg text-[#A0A4AC] mb-8">Companies operating primarily in China, Hong Kong, or Macau face additional requirements</p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                {[
                  { label: "Minimum IPO Size", value: "$25M OR 25% of post-IPO market cap", note: "Whichever is lower" },
                  { label: "Underwriter Requirement", value: "Nasdaq-approved underwriters only", note: "" },
                  { label: "Audit Compliance", value: "PCAOB-accessible audits required", note: "" },
                  { label: "Regulatory Scrutiny", value: "Enhanced review of ownership structure", note: "" },
                ].map((req, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#08080C]/50 border border-[#1a1a1e]">
                    <div><span className="text-sm text-[#A0A4AC]">{req.label}</span>{req.note && <p className="text-[10px] text-[#6B6F78]">{req.note}</p>}</div>
                    <span className="text-sm font-medium text-[#BFA054] text-right max-w-[200px]">{req.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-[#08080C]/50 border border-[#1a1a1e]">
                <h3 className="text-sm text-[#BFA054] uppercase tracking-wider mb-4">What This Means in Practice</h3>
                <ul className="space-y-3">
                  {[
                    "Careful structuring of VIE arrangements (if applicable)",
                    "Audit firm selection is critical — must be PCAOB-registered with China access",
                    "Underwriter selection from approved list",
                    "Higher documentation standards for PRC regulatory compliance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#A0A4AC]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#BFA054] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-[#5A9B6A] italic">These requirements are manageable with experienced advisors.</p>
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={15} />
      </Slide>

      {/* ==================== SLIDE 16: INVESTOR EXPECTATIONS ==================== */}
      <Slide variant="dark">
        <SplitImage src="/images/deck/business-handshake.jpg" />
        <Logo />

        <div className="absolute right-0 top-0 bottom-0 w-[55%] flex items-center pr-16 lg:pr-24 pl-8">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Investor Relations</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-4">
              What U.S. Institutional Investors Expect
            </h2>
            <p className="text-base text-[#A0A4AC] mb-6">Beyond meeting listing requirements, successful IPOs demonstrate:</p>

            <div className="space-y-3 mb-6">
              {[
                { icon: FiBookOpen, title: "Clear Equity Story", desc: "Compelling narrative connecting business to growth" },
                { icon: HiOutlineChartBar, title: "Predictable Reporting", desc: "Consistent, timely financial disclosure" },
                { icon: HiOutlineScale, title: "Professional Governance", desc: "Board that understands fiduciary duties" },
                { icon: FiTarget, title: "Credible Strategy", desc: "Long-term vision with executable milestones" },
                { icon: FiMessageSquare, title: "Transparent Communication", desc: "Regular investor engagement" },
                { icon: FiHeart, title: "ESG Awareness", desc: "Environmental, social, governance considerations" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-[#BFA054] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-[#F8F8FA]">{item.title}</span>
                    <span className="text-sm text-[#6B6F78]"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-base text-[#BFA054] font-medium">
              IPO success is fundamentally about building investor confidence.
            </p>
          </div>
        </div>

        <SlideNumber number={16} />
      </Slide>

      {/* ==================== SLIDE 17: COMMON IPO PITFALLS ==================== */}
      <Slide>
        <Logo />
        <GridPattern />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Risk Awareness</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              Common IPO Pitfalls
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { icon: FiAlertTriangle, pitfall: "Weak Positioning", consequence: "Unclear equity story fails to differentiate from peers" },
                { icon: FiClipboard, pitfall: "Inadequate Preparation", consequence: "Governance and reporting gaps delay listing or reduce valuation" },
                { icon: FiDollarSign, pitfall: "Unrealistic Valuation", consequence: "Overpriced IPOs fail to generate demand or trade down post-listing" },
                { icon: FiClock, pitfall: "Inexperienced Execution", consequence: "Poor advisor coordination leads to timeline delays and cost overruns" },
                { icon: FiCalendar, pitfall: "No Post-IPO Plan", consequence: "Companies unprepared for public company obligations struggle after listing" },
                { icon: FiUsers, pitfall: "Wrong Underwriter Fit", consequence: "Misaligned underwriter selection leads to weak investor targeting" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
                  <item.icon className="w-6 h-6 text-[#BFA054]" />
                  <h3 className="text-sm font-medium text-[#F8F8FA] mt-3 mb-2">{item.pitfall}</h3>
                  <p className="text-xs text-[#6B6F78]">{item.consequence}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#5A9B6A]/10 border border-[#5A9B6A]/30 text-center">
              <p className="text-sm text-[#5A9B6A]">Most of these issues are identifiable and correctable with proper planning.</p>
            </div>
          </div>
        </div>

        <SlideNumber number={17} />
      </Slide>

      {/* ==================== SLIDE 18: TRANSFORMATION REQUIRED ==================== */}
      <Slide variant="dark">
        <Logo />
        <DecorativeCircle position="-top-32 -left-32" size="md" />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Organizational Change</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              The Transformation Required
            </h2>

            <div className="overflow-hidden rounded-xl border border-[#1a1a1e]">
              <div className="grid grid-cols-3 bg-[#0c0c10] text-sm">
                <div className="p-4 text-[#6B6F78] border-r border-[#1a1a1e]">Dimension</div>
                <div className="p-4 text-[#6B6F78] border-r border-[#1a1a1e]">Private Company</div>
                <div className="p-4 text-[#BFA054]">Public Company</div>
              </div>
              {[
                { dim: "Mindset", private: "Founder/owner-driven", public: "Fiduciary to shareholders" },
                { dim: "Governance", private: "Informal board", public: "Independent, structured board" },
                { dim: "Reporting", private: "Internal focus", public: "Quarterly/annual public disclosure" },
                { dim: "Communication", private: "Ad hoc", public: "Systematic investor relations" },
                { dim: "Compliance", private: "Local requirements", public: "SEC + Nasdaq + SOX" },
                { dim: "Controls", private: "Flexible", public: "Documented internal controls" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-[#0a0a0e]' : 'bg-[#08080C]'}`}>
                  <div className="p-4 text-[#F8F8FA] font-medium border-r border-[#1a1a1e]">{row.dim}</div>
                  <div className="p-4 text-[#6B6F78] border-r border-[#1a1a1e]">{row.private}</div>
                  <div className="p-4 text-[#A0A4AC]">{row.public}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30 text-center">
              <p className="text-sm text-[#F8F8FA]">Companies that embrace this transformation achieve <span className="text-[#BFA054]">higher valuations and better long-term outcomes</span>.</p>
            </div>
          </div>
        </div>

        <SlideNumber number={18} />
      </Slide>

      {/* ==================== SLIDE 19: CASE STUDY - ANBIO ==================== */}
      <Slide variant="accent">
        <PhotoBackground src="/images/deck/hong-kong-skyline.jpg" opacity={0.22} position="right" />
        <Logo />
        <DecorativeCircle position="-top-32 -right-32" size="lg" />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Case Study 1</span>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#BFA054] text-[#08080C] text-sm font-mono font-medium rounded">NNNN</span>
                  <span className="text-sm text-[#6B6F78]">Nasdaq Global Market • February 2025</span>
                </div>

                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-4">Anbio Biotechnology</h2>
                <p className="text-lg text-[#A0A4AC] mb-6">In-vitro diagnostics company • Germany</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-[#08080C]/50 border border-[#1a1a1e]">
                    <span className="text-[10px] text-[#6B6F78] uppercase">Focus</span>
                    <p className="text-sm text-[#F8F8FA] mt-1">IVD diagnostics & medical devices</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#08080C]/50 border border-[#1a1a1e]">
                    <span className="text-[10px] text-[#6B6F78] uppercase">Market Position</span>
                    <p className="text-sm text-[#F8F8FA] mt-1">Global healthcare leader</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#08080C]/50 border border-[#1a1a1e]">
                  <span className="text-[10px] text-[#6B6F78] uppercase">Lead Underwriter</span>
                  <p className="text-sm text-[#A0A4AC] mt-1">AC Sunshine Securities LLC</p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-5 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#BFA054]">$8M</span>
                    <p className="text-sm text-[#A0A4AC] mt-2">Gross Proceeds</p>
                  </div>
                  <div className="text-center p-5 rounded-xl bg-[#08080C]/50 border border-[#1a1a1e]">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA]">$3.26B</span>
                    <p className="text-sm text-[#A0A4AC] mt-2">Market Capitalization</p>
                  </div>
                </div>
                <div className="text-center p-5 rounded-xl bg-[#5A9B6A]/10 border border-[#5A9B6A]/30">
                  <span className="text-3xl font-bold text-[#5A9B6A]">#1</span>
                  <p className="text-sm text-[#A0A4AC] mt-1">Highest Market Cap among 2025 NASDAQ Global Market IPOs</p>
                </div>
                <p className="mt-4 text-xs text-[#6B6F78] text-center italic">Key Success: Strong diagnostics portfolio, established European market presence</p>
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={19} />
      </Slide>

      {/* ==================== SLIDE 20: CASE STUDY - YUANBAO ==================== */}
      <Slide variant="dark">
        <PhotoBackground src="/images/deck/singapore-skyline.jpg" opacity={0.2} position="right" />
        <Logo />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Case Study 2</span>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#BFA054] text-[#08080C] text-sm font-mono font-medium rounded">YB</span>
                  <span className="text-sm text-[#6B6F78]">Nasdaq Global Market • April 2025</span>
                </div>

                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-4">Yuanbao Inc.</h2>
                <p className="text-lg text-[#A0A4AC] mb-6">Specialty insurance platform • China</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-[#0a0a0e] border border-[#1a1a1e]">
                    <span className="text-[10px] text-[#6B6F78] uppercase">Focus</span>
                    <p className="text-sm text-[#F8F8FA] mt-1">Digital insurance distribution</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0a0a0e] border border-[#1a1a1e]">
                    <span className="text-[10px] text-[#6B6F78] uppercase">Sector</span>
                    <p className="text-sm text-[#F8F8FA] mt-1">InsurTech / Financial Services</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0a0a0e] border border-[#1a1a1e]">
                  <span className="text-[10px] text-[#6B6F78] uppercase">Lead Underwriters</span>
                  <p className="text-sm text-[#A0A4AC] mt-1">Goldman Sachs (Asia) • Citigroup • CICC</p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-5 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#BFA054]">$30M</span>
                    <p className="text-sm text-[#A0A4AC] mt-2">Gross Proceeds</p>
                  </div>
                  <div className="text-center p-5 rounded-xl bg-[#0a0a0e] border border-[#1a1a1e]">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA]">$895M</span>
                    <p className="text-sm text-[#A0A4AC] mt-2">Market Capitalization</p>
                  </div>
                </div>
                <div className="text-center p-5 rounded-xl bg-[#4A7CC9]/10 border border-[#4A7CC9]/30">
                  <p className="text-sm text-[#4A7CC9] font-medium">Top-Tier Backing</p>
                  <p className="text-sm text-[#A0A4AC] mt-2">Goldman Sachs-led IPO demonstrates strong institutional confidence in China InsurTech sector</p>
                </div>
                <p className="mt-4 text-xs text-[#6B6F78] text-center italic">Key Success: Digital-first insurance model, blue-chip underwriter syndicate</p>
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={20} />
      </Slide>

      {/* ==================== SLIDE 21: CASE STUDY - ANTALPHA ==================== */}
      <Slide>
        <Logo />
        <GridPattern />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Case Study 3</span>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#BFA054] text-[#08080C] text-sm font-mono font-medium rounded">ANTA</span>
                  <span className="text-sm text-[#6B6F78]">Nasdaq Global Market • May 2025</span>
                </div>

                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-4">Antalpha Platform</h2>
                <p className="text-lg text-[#A0A4AC] mb-6">Digital asset financial services • Singapore</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-[#0c0c10] border border-[#1a1a1e]">
                    <span className="text-[10px] text-[#6B6F78] uppercase">Focus</span>
                    <p className="text-sm text-[#F8F8FA] mt-1">Crypto-backed financial services</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0c0c10] border border-[#1a1a1e]">
                    <span className="text-[10px] text-[#6B6F78] uppercase">Sector</span>
                    <p className="text-sm text-[#F8F8FA] mt-1">FinTech / Investment Banking</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0c0c10] border border-[#1a1a1e] mb-3">
                  <span className="text-[10px] text-[#6B6F78] uppercase">Headquarters</span>
                  <p className="text-sm text-[#A0A4AC] mt-1">Singapore (Asia-Pacific hub)</p>
                </div>

                <div className="p-3 rounded-lg bg-[#0c0c10] border border-[#1a1a1e]">
                  <span className="text-[10px] text-[#6B6F78] uppercase">Lead Underwriters</span>
                  <p className="text-sm text-[#A0A4AC] mt-1">Roth Capital Partners • Compass Point</p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-5 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#BFA054]">$49.3M</span>
                    <p className="text-sm text-[#A0A4AC] mt-2">Gross Proceeds</p>
                  </div>
                  <div className="text-center p-5 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA]">$223M</span>
                    <p className="text-sm text-[#A0A4AC] mt-2">Market Capitalization</p>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-[#4A7CC9]/10 border border-[#4A7CC9]/30 text-center">
                  <p className="text-sm text-[#4A7CC9] font-medium">Key Achievement</p>
                  <p className="text-sm text-[#A0A4AC] mt-2">Singapore-based FinTech achieving U.S. listing — demonstrating Southeast Asia to NASDAQ pathway</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={21} />
      </Slide>

      {/* ==================== SLIDE 22: CASE STUDIES SUMMARY ==================== */}
      <Slide variant="dark">
        <PhotoBackground src="/images/deck/stock-exchange.jpg" opacity={0.22} position="full" />
        <Logo />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Track Record</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              Recent Nasdaq Global Market Listings (2025)
            </h2>

            <div className="overflow-hidden rounded-xl border border-[#1a1a1e] mb-8">
              <div className="grid grid-cols-6 bg-[#0c0c10] text-xs text-[#6B6F78] uppercase tracking-wider">
                <div className="p-3 border-r border-[#1a1a1e]">Company</div>
                <div className="p-3 border-r border-[#1a1a1e]">Ticker</div>
                <div className="p-3 border-r border-[#1a1a1e]">Country</div>
                <div className="p-3 border-r border-[#1a1a1e]">Date</div>
                <div className="p-3 border-r border-[#1a1a1e]">Proceeds</div>
                <div className="p-3">Sector</div>
              </div>
              {[
                { company: "Anbio Biotechnology", ticker: "NNNN", country: "Germany", date: "Feb 2025", proceeds: "$8M", sector: "Healthcare/Diagnostics" },
                { company: "Yuanbao Inc.", ticker: "YB", country: "China", date: "Apr 2025", proceeds: "$30M", sector: "Insurance" },
                { company: "Antalpha Platform", ticker: "ANTA", country: "Singapore", date: "May 2025", proceeds: "$49.3M", sector: "Financial Services" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-6 text-sm ${i % 2 === 0 ? 'bg-[#0a0a0e]' : 'bg-[#08080C]'}`}>
                  <div className="p-3 text-[#F8F8FA] border-r border-[#1a1a1e]">{row.company}</div>
                  <div className="p-3 text-[#BFA054] font-mono border-r border-[#1a1a1e]">{row.ticker}</div>
                  <div className="p-3 text-[#A0A4AC] border-r border-[#1a1a1e]">{row.country}</div>
                  <div className="p-3 text-[#6B6F78] border-r border-[#1a1a1e]">{row.date}</div>
                  <div className="p-3 text-[#BFA054] font-medium border-r border-[#1a1a1e]">{row.proceeds}</div>
                  <div className="p-3 text-[#A0A4AC]">{row.sector}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="text-center p-4 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30">
                <span className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-[#BFA054]">$87M+</span>
                <p className="text-xs text-[#6B6F78] mt-1">Combined Capital Raised</p>
              </div>
              {[
                { title: "Diverse sectors: Healthcare, Insurance, FinTech", icon: FiActivity },
                { title: "Multi-region: Germany, China, Singapore", icon: FiAward },
                { title: "Strong market cap performance post-IPO", icon: FiLink },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#0a0a0e] border border-[#1a1a1e]">
                  <item.icon className="w-5 h-5 text-[#BFA054]" />
                  <p className="text-xs text-[#A0A4AC] mt-2">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SlideNumber number={22} />
      </Slide>

      {/* ==================== SLIDE 23: INTRODUCING MVPI ==================== */}
      <Slide variant="accent">
        <PhotoBackground src="/images/deck/business-handshake.jpg" opacity={0.22} position="right" />
        <Logo />
        <DecorativeCircle position="-top-32 -right-32" size="lg" />
        <DecorativeCircle position="-bottom-32 -left-32" size="md" />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Your Partner</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-medium text-[#F8F8FA] leading-[1.1] mb-6">
              Introducing MVPI International Capital
            </h2>

            <p className="text-xl text-[#A0A4AC] mb-10 max-w-3xl">
              A strategic advisory firm specializing in Nasdaq Global Market IPO advisory, Asia-to-U.S. cross-border capital markets, and corporate readiness
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: FiTarget, title: "Nasdaq Specialization", desc: "Deep expertise in Global Market requirements and pathways" },
                { icon: HiOutlineGlobeAlt, title: "Asia-Pacific Focus", desc: "Understanding of regional business practices and regulatory environments" },
                { icon: FiRefreshCw, title: "End-to-End Capability", desc: "From initial assessment through post-IPO compliance" },
                { icon: FiZap, title: "Execution Discipline", desc: "Timeline management and advisor coordination" },
                { icon: FiUsers, title: "Relationship Network", desc: "Connections to underwriters, auditors, and legal counsel" },
                { icon: FiTrendingUp, title: "Client Alignment", desc: "Success-oriented engagement structure" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-[#08080C]/50 border border-[#1a1a1e]">
                  <item.icon className="w-6 h-6 text-[#BFA054]" />
                  <h3 className="text-sm font-medium text-[#BFA054] mt-3 mb-2">{item.title}</h3>
                  <p className="text-xs text-[#A0A4AC]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30 text-center">
              <p className="text-sm text-[#F8F8FA]">We simplify complexity and protect management focus so <span className="text-[#BFA054]">you can run your business</span>.</p>
            </div>
          </div>
        </div>

        <SlideNumber number={23} />
      </Slide>

      {/* ==================== SLIDE 24: OUR ROLE ==================== */}
      <Slide variant="dark">
        <SplitImage src="/images/deck/nyc-skyline.jpg" side="right" />
        <Logo />

        <div className="absolute left-0 top-0 bottom-0 w-[55%] flex items-center pl-16 lg:pl-24 pr-8">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Our Role</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-6">
              Our Role in Your Nasdaq IPO
            </h2>

            <h3 className="text-sm text-[#BFA054] uppercase tracking-wider mb-4">What We Do</h3>
            <div className="space-y-3 mb-6">
              {[
                { title: "Strategic Architect", desc: "Define optimal qualification pathway and positioning" },
                { title: "Readiness Leader", desc: "Identify and close governance, compliance, and operational gaps" },
                { title: "Execution Coordinator", desc: "Manage timelines, advisors, and workstreams" },
                { title: "Management Partner", desc: "Protect executive focus; handle complexity on your behalf" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#BFA054] mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-[#F8F8FA]">{item.title}</span>
                    <span className="text-sm text-[#6B6F78]"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#0a0a0e]/80 border border-[#1a1a1e]">
              <p className="text-xs text-[#6B6F78] mb-2">✕ We are not your underwriter, auditor, or legal counsel</p>
              <p className="text-sm text-[#A0A4AC]">We coordinate and optimize these relationships on your behalf.</p>
            </div>
          </div>
        </div>

        <SlideNumber number={24} />
      </Slide>

      {/* ==================== SLIDE 25: HOW MVPI ADDS VALUE ==================== */}
      <Slide>
        <Logo />
        <GridPattern />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Our Services</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              How MVPI Adds Value
            </h2>

            <div className="grid grid-cols-2 gap-5">
              {[
                { num: "01", title: "Strategic Planning", items: ["Determine optimal Nasdaq qualification standard", "Design corporate structure for U.S. listing", "Develop compelling equity story and positioning"] },
                { num: "02", title: "Readiness Assessment", items: ["Identify governance and compliance gaps", "Assess financial reporting readiness", "Evaluate management team preparedness"] },
                { num: "03", title: "Execution Coordination", items: ["Manage underwriter selection and relationship", "Coordinate legal, audit, and IR advisors", "Oversee SEC filing and Nasdaq application"] },
                { num: "04", title: "Post-IPO Strategy", items: ["Investor relations program design", "Compliance calendar management", "Follow-on capital planning"] },
              ].map((service, i) => (
                <div key={i} className="p-5 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
                  <span className="text-2xl font-[family-name:var(--font-playfair)] text-[#3a3a3e]">{service.num}</span>
                  <h3 className="text-base font-medium text-[#BFA054] mt-2 mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#A0A4AC]">
                        <div className="w-1 h-1 rounded-full bg-[#BFA054] mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30 text-center">
              <p className="text-sm text-[#F8F8FA]">Execution quality directly impacts valuation. <span className="text-[#BFA054]">We ensure nothing falls through the cracks.</span></p>
            </div>
          </div>
        </div>

        <SlideNumber number={25} />
      </Slide>

      {/* ==================== SLIDE 26: MVPI PHASED APPROACH ==================== */}
      <Slide variant="dark">
        <PhotoBackground src="/images/deck/global-network.jpg" opacity={0.2} position="full" />
        <Logo />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Our Approach</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-10">
              MVPI&apos;s Phased Approach
            </h2>

            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  phase: "Phase 1",
                  title: "Strategic Design & Valuation Enhancement",
                  description: "We partner with selected large-scale companies to design comprehensive valuation and growth plans. Leveraging our industry insights and technology expertise, we integrate innovative elements—such as AI applications or emerging-sector strategies—into the business model to strengthen market positioning and growth outlook.",
                  highlight: "Enhance valuation potential and investment appeal"
                },
                {
                  phase: "Phase 2",
                  title: "Advisory & Ecosystem Integration",
                  description: "Acting as the company's financial advisor, MVPI connects clients with high-caliber professional partners including legal counsel, auditors, and underwriters. Through our established ecosystem network, we ensure coordination of all key parties throughout the process.",
                  highlight: "Support readiness and compliance to SEC approval"
                },
                {
                  phase: "Phase 3",
                  title: "Fundraising & Institutional Outreach",
                  description: "Upon achieving regulatory milestones, we collaborate with reputable investment banks to structure and execute the fundraising process. This includes pitching to institutional investors, pension funds, family offices, and other qualified entities.",
                  highlight: "Drive successful capital raising and market performance"
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -top-3 left-0 w-10 h-10 rounded-full bg-[#BFA054] flex items-center justify-center">
                    <span className="text-[#08080C] font-bold text-sm">{i + 1}</span>
                  </div>
                  <div className="pt-10 p-5 rounded-xl bg-[#0a0a0e]/80 border border-[#1a1a1e] h-full">
                    <span className="text-[10px] text-[#BFA054] uppercase tracking-wider">{item.phase}</span>
                    <h3 className="text-base font-medium text-[#F8F8FA] mt-1 mb-3">{item.title}</h3>
                    <p className="text-xs text-[#A0A4AC] leading-relaxed mb-4">{item.description}</p>
                    <div className="pt-3 border-t border-[#222226]">
                      <p className="text-xs text-[#BFA054] italic">{item.highlight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30 text-center">
              <p className="text-sm text-[#A0A4AC]">
                This phased approach positions MVPI as a <span className="text-[#BFA054] font-medium">strategic partner</span>, guiding clients from business enhancement and compliance preparation through to successful fundraising and listing outcomes.
              </p>
            </div>
          </div>
        </div>

        <SlideNumber number={26} />
      </Slide>

      {/* ==================== SLIDE 27: IPO JOURNEY ==================== */}
      <Slide variant="dark">
        <PhotoBackground src="/images/deck/global-network.jpg" opacity={0.25} position="full" />
        <Logo />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Process</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-10">
              Typical IPO Journey with MVPI
            </h2>

            <div className="relative">
              <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-[#BFA054] via-[#BFA054] to-[#BFA054]/30" />
              <div className="grid grid-cols-2 gap-5">
                {[
                  { phase: "Phase 1", title: "Assessment & Strategy", tasks: ["Nasdaq eligibility evaluation", "Gap analysis (governance, compliance, reporting)", "IPO feasibility determination", "Strategic positioning development"] },
                  { phase: "Phase 2", title: "Preparation & Structuring", tasks: ["Corporate restructuring (if required)", "Governance framework implementation", "Financial audit preparation", "Underwriter and advisor selection"] },
                  { phase: "Phase 3", title: "Execution", tasks: ["SEC registration and review", "Nasdaq application and approval", "Roadshow preparation and execution", "Pricing and listing"] },
                  { phase: "Phase 4", title: "Post-IPO", tasks: ["Public company compliance setup", "Investor relations program launch", "Ongoing strategic advisory", "Follow-on capital planning"] },
                ].map((phase, i) => (
                  <div key={i} className="relative pt-12">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#BFA054] border-4 border-[#08080C]" />
                    <div className="p-4 rounded-xl bg-[#0a0a0e] border border-[#1a1a1e]">
                      <span className="text-[10px] text-[#BFA054] uppercase tracking-wider">{phase.phase}</span>
                      <h3 className="text-base font-medium text-[#F8F8FA] mt-1 mb-3">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-[#A0A4AC]">
                            <div className="w-1 h-1 rounded-full bg-[#BFA054]/50 mt-1.5 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={27} />
      </Slide>

      {/* ==================== SLIDE 28: IPO COST STRUCTURE ==================== */}
      <Slide>
        <Logo />
        <GridPattern />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Investment</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              IPO Cost Structure Overview
            </h2>

            <div className="grid grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-xl border border-[#1a1a1e]">
                <div className="grid grid-cols-3 bg-[#0c0c10] text-xs text-[#6B6F78] uppercase tracking-wider">
                  <div className="p-3 border-r border-[#1a1a1e]">Category</div>
                  <div className="p-3 border-r border-[#1a1a1e]">Typical Range</div>
                  <div className="p-3">Notes</div>
                </div>
                {[
                  { category: "Underwriting Fees", range: "5–7% of proceeds", note: "Varies by deal size" },
                  { category: "Legal Counsel", range: "$1.5–3M+", note: "U.S. and local counsel" },
                  { category: "Audit & Accounting", range: "$1–2.5M+", note: "PCAOB audit, SOX" },
                  { category: "Nasdaq Fees", range: "$150–300K", note: "Application + annual" },
                  { category: "Printing & Filing", range: "$200–500K", note: "SEC filings, prospectus" },
                  { category: "Roadshow & IR", range: "$200–500K", note: "Travel, materials" },
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-[#0a0a0e]' : 'bg-[#08080C]'}`}>
                    <div className="p-3 text-[#F8F8FA] border-r border-[#1a1a1e]">{row.category}</div>
                    <div className="p-3 text-[#BFA054] border-r border-[#1a1a1e]">{row.range}</div>
                    <div className="p-3 text-[#6B6F78]">{row.note}</div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-sm text-[#BFA054] uppercase tracking-wider mb-4">Cost Optimization</h3>
                <div className="space-y-3">
                  {[
                    "MVPI helps optimize advisor selection and scope",
                    "Proper preparation reduces legal and accounting overruns",
                    "Clear timeline management prevents cost creep",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
                      <div className="w-5 h-5 rounded-full bg-[#BFA054]/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#BFA054]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#A0A4AC]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={28} />
      </Slide>

      {/* ==================== SLIDE 29: IS YOUR COMPANY READY ==================== */}
      <Slide variant="dark">
        <Logo />
        <DecorativeCircle position="-top-32 -right-32" size="md" />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Self-Assessment</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              Is Your Company Ready?
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { question: "Do you meet at least one Nasdaq financial standard (or will within 12 months)?", indicator: "Financial qualification" },
                { question: "Is your board prepared to add independent directors?", indicator: "Governance readiness" },
                { question: "Can your finance team produce PCAOB-compliant audited financials?", indicator: "Reporting readiness" },
                { question: "Is your equity story compelling to U.S. institutional investors?", indicator: "Positioning" },
                { question: "Is management prepared for public company obligations?", indicator: "Organizational readiness" },
                { question: "Do you have a clear use of proceeds that drives growth?", indicator: "Strategic clarity" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a0e] border border-[#1a1a1e]">
                  <div className="w-6 h-6 rounded border border-[#3a3a3e] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[#F8F8FA]">{item.question}</p>
                    <p className="text-xs text-[#BFA054] mt-1">{item.indicator}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#5A9B6A]/10 border border-[#5A9B6A]/30 text-center">
              <p className="text-sm text-[#5A9B6A]">If you answered "no" or "unsure" to any question — that's normal. These are gaps we help identify and close.</p>
            </div>
          </div>
        </div>

        <SlideNumber number={29} />
      </Slide>

      {/* ==================== SLIDE 30: ENGAGEMENT PROCESS ==================== */}
      <Slide>
        <Logo />
        <GridPattern />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Getting Started</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-10">
              Our Engagement Process
            </h2>

            <div className="grid grid-cols-2 gap-5">
              {[
                { step: "Step 1", title: "Confidential Discussion", items: ["Understand your business, goals, and timeline", "Preliminary assessment of Nasdaq fit", "No commitment required"] },
                { step: "Step 2", title: "IPO Readiness Review", items: ["Detailed eligibility analysis", "Gap identification across all dimensions", "Feasibility recommendation"] },
                { step: "Step 3", title: "Customized Roadmap", items: ["Tailored IPO strategy and timeline", "Advisor selection guidance", "Budget framework"] },
                { step: "Step 4", title: "Advisory Engagement", items: ["Formal engagement for IPO preparation", "Clear scope, deliverables, milestones", "Success-oriented structure"] },
              ].map((phase, i) => (
                <div key={i} className="p-5 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
                  <div className="w-10 h-10 rounded-full bg-[#BFA054]/20 flex items-center justify-center mb-4">
                    <span className="text-sm font-medium text-[#BFA054]">{i + 1}</span>
                  </div>
                  <span className="text-[10px] text-[#6B6F78] uppercase tracking-wider">{phase.step}</span>
                  <h3 className="text-base font-medium text-[#F8F8FA] mt-1 mb-3">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#A0A4AC]">
                        <div className="w-1 h-1 rounded-full bg-[#BFA054]/50 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30 text-center">
              <p className="text-sm text-[#F8F8FA]">Preparation starts before paperwork. <span className="text-[#BFA054]">Early engagement improves outcomes.</span></p>
            </div>
          </div>
        </div>

        <SlideNumber number={30} />
      </Slide>

      {/* ==================== SLIDE 31: UNDERWRITERS ==================== */}
      <Slide variant="dark">
        <Logo />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Partner Network</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              Nasdaq-Approved Underwriters Directory
            </h2>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm text-[#BFA054] uppercase tracking-wider mb-3">Bulge Bracket (Large Deals: $100M+)</h3>
                <div className="space-y-2">
                  {[
                    { name: "Goldman Sachs & Co. LLC", location: "200 West Street, New York" },
                    { name: "Morgan Stanley & Co. LLC", location: "1585 Broadway, New York" },
                    { name: "J.P. Morgan Chase & Co.", location: "383 Madison Avenue, New York" },
                    { name: "Citigroup Global Markets Inc.", location: "388 Greenwich Street, New York" },
                    { name: "Deutsche Bank Securities Inc.", location: "60 Wall Street, New York" },
                    { name: "BofA Securities", location: "One Bryant Park, New York" },
                  ].map((uw, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0e] border border-[#1a1a1e]">
                      <span className="text-sm text-[#F8F8FA]">{uw.name}</span>
                      <span className="text-[10px] text-[#6B6F78]">{uw.location}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm text-[#BFA054] uppercase tracking-wider mb-3">Mid-Market & Specialized ($25M–$150M)</h3>
                <div className="space-y-2">
                  {[
                    { name: "Jefferies LLC", spec: "Healthcare, Technology, Growth" },
                    { name: "Leerink Partners", spec: "Healthcare, Life Sciences" },
                    { name: "LifeSci Capital", spec: "Life Sciences" },
                    { name: "China Renaissance", spec: "China cross-border" },
                    { name: "CICC", spec: "China issuers" },
                  ].map((uw, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0e] border border-[#1a1a1e]">
                      <span className="text-sm text-[#F8F8FA]">{uw.name}</span>
                      <span className="text-[10px] text-[#6B6F78]">{uw.spec}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-sm text-[#BFA054] uppercase tracking-wider mt-4 mb-3">Boutique ($10M–$50M)</h3>
                <div className="space-y-2">
                  {[
                    { name: "R.F. Lafferty & Co.", spec: "40 Wall Street, New York" },
                    { name: "Tiger Brokers (NZ) Limited", spec: "Asia-Pacific" },
                  ].map((uw, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0e] border border-[#1a1a1e]">
                      <span className="text-sm text-[#F8F8FA]">{uw.name}</span>
                      <span className="text-[10px] text-[#6B6F78]">{uw.spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={31} />
      </Slide>

      {/* ==================== SLIDE 32: KEY UNDERWRITING PARTNERS ==================== */}
      <Slide>
        <Logo />
        <GridPattern />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Regional Access</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              Key Underwriting Partners
            </h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                "Goldman Sachs",
                "Morgan Stanley",
                "Citigroup",
                "J.P. Morgan",
                "CICC",
                "Jefferies",
                "Roth Capital Partners",
                "Seaport Global Securities",
                "Cantor Fitzgerald",
                "Oppenheimer & Co.",
              ].map((name, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#0c0c10] border border-[#1a1a1e]">
                  <h3 className="text-sm font-medium text-[#F8F8FA] text-center">{name}</h3>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30">
              <p className="text-sm text-[#A0A4AC] text-center">
                <span className="text-[#BFA054] font-medium">Note:</span> For companies with operations primarily in China, Hong Kong, or Macau, underwriters must be Nasdaq-approved for Restrictive Market issuers.
              </p>
            </div>
          </div>
        </div>

        <SlideNumber number={32} />
      </Slide>

      {/* ==================== SLIDE 33: STANDARDS SUMMARY ==================== */}
      <Slide variant="dark">
        <Logo />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="w-full">
            <div className="print-preserve flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Summary</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              Nasdaq Global Market Financial Standards
            </h2>

            <div className="overflow-hidden rounded-xl border border-[#1a1a1e] mb-6">
              <div className="grid grid-cols-5 bg-[#0c0c10] text-xs text-[#6B6F78] uppercase tracking-wider">
                <div className="p-3 border-r border-[#1a1a1e]">Standard</div>
                <div className="p-3 border-r border-[#1a1a1e]">Key Metric</div>
                <div className="p-3 border-r border-[#1a1a1e]">Public Float</div>
                <div className="p-3 border-r border-[#1a1a1e]">Shares</div>
                <div className="p-3">History</div>
              </div>
              {[
                { std: "Income", metric: "Pre-tax income ≥ $1M", float: "≥ $15M", shares: "≥ 1.1M", history: "Any" },
                { std: "Equity", metric: "Stockholders' equity ≥ $30M", float: "≥ $18M", shares: "≥ 1.1M", history: "2 years" },
                { std: "Market Value", metric: "Market value ≥ $75M", float: "≥ $20M", shares: "≥ 1.1M", history: "Any" },
                { std: "Assets/Revenue", metric: "Assets & revenue ≥ $75M each", float: "≥ $20M", shares: "≥ 1.1M", history: "Any" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-5 text-sm ${i % 2 === 0 ? 'bg-[#0a0a0e]' : 'bg-[#08080C]'}`}>
                  <div className="p-3 text-[#BFA054] font-medium border-r border-[#1a1a1e]">{row.std}</div>
                  <div className="p-3 text-[#F8F8FA] border-r border-[#1a1a1e]">{row.metric}</div>
                  <div className="p-3 text-[#A0A4AC] border-r border-[#1a1a1e]">{row.float}</div>
                  <div className="p-3 text-[#A0A4AC] border-r border-[#1a1a1e]">{row.shares}</div>
                  <div className="p-3 text-[#A0A4AC]">{row.history}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#0a0a0e] border border-[#1a1a1e]">
              <h3 className="text-sm text-[#BFA054] uppercase tracking-wider mb-3">Universal Requirements (All Standards)</h3>
              <div className="grid grid-cols-2 gap-5 text-sm">
                <div><span className="text-[#6B6F78]">Min Share Price:</span> <span className="text-[#F8F8FA]">$4.00</span></div>
                <div><span className="text-[#6B6F78]">Shareholders:</span> <span className="text-[#F8F8FA]">400 (≥50% holding ≥$2,500)</span></div>
                <div><span className="text-[#6B6F78]">Market Makers:</span> <span className="text-[#F8F8FA]">3 or 4</span></div>
                <div><span className="text-[#6B6F78]">Governance:</span> <span className="text-[#F8F8FA]">Independent board majority</span></div>
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={33} />
      </Slide>

      {/* ==================== SLIDE 34: NEXT STEPS ==================== */}
      <Slide variant="dark">
        <PhotoBackground src="/images/deck/financial-district.jpg" opacity={0.22} position="right" />
        <Logo />

        <div className="absolute inset-0 flex items-center px-16 lg:px-24">
          <div className="grid grid-cols-2 gap-16 w-full">
            <div>
              <div className="print-preserve flex items-center gap-4 mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
                <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Action Items</span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
                Next Steps
              </h2>

              <div className="space-y-4">
                <h3 className="text-sm text-[#BFA054] uppercase tracking-wider">Immediate Actions</h3>
                {[
                  { num: "1", text: "Schedule confidential discussion — No commitment required" },
                  { num: "2", text: "Preliminary eligibility review — Understand your Nasdaq pathway" },
                  { num: "3", text: "Gap analysis — Identify preparation requirements" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0e] border border-[#1a1a1e]">
                    <div className="w-8 h-8 rounded-full bg-[#BFA054]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-[#BFA054]">{item.num}</span>
                    </div>
                    <span className="text-sm text-[#A0A4AC]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-[#BFA054] uppercase tracking-wider mb-4 mt-16">What to Prepare</h3>
              <div className="space-y-3">
                {[
                  "Recent audited financials (2–3 years)",
                  "Corporate structure overview",
                  "Shareholder cap table",
                  "Business plan / growth strategy",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[#0a0a0e] border border-[#1a1a1e]">
                    <div className="w-5 h-5 rounded-full bg-[#BFA054]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#BFA054]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm text-[#A0A4AC]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-xl bg-[#BFA054]/10 border border-[#BFA054]/30 text-center">
                <p className="text-lg text-[#F8F8FA] font-[family-name:var(--font-playfair)]">MVPI International Capital Limited</p>
                <p className="text-sm text-[#BFA054] mt-2 italic">Your Gateway to Global Capital</p>
              </div>
            </div>
          </div>
        </div>

        <SlideNumber number={34} />
      </Slide>

      {/* ==================== SLIDE 35: CONFIDENTIALITY ==================== */}
      <Slide>
        <Logo />
        <GridPattern />

        <div className="absolute inset-0 flex items-center justify-center px-16 lg:px-24">
          <div className="text-center max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
              <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em] font-medium">Notice</span>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#BFA054] to-transparent" />
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-[#F8F8FA] leading-[1.1] mb-8">
              Confidentiality Notice
            </h2>

            <p className="text-lg text-[#A0A4AC] mb-8">
              This presentation is <span className="text-[#BFA054]">confidential</span> and intended solely for the recipient for discussion purposes.
            </p>

            <div className="space-y-4 text-left max-w-xl mx-auto">
              {[
                "Is proprietary to MVPI International Capital Limited",
                "Should not be reproduced or distributed without written consent",
                "Does not constitute an offer to sell or solicitation of securities",
                "Is subject to change without notice",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#A0A4AC]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BFA054] mt-2 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs text-[#6B6F78] max-w-xl mx-auto">
              All information regarding Nasdaq requirements is based on publicly available Nasdaq listing rules and may be subject to change. Companies should consult with their legal and financial advisors regarding specific requirements.
            </p>
          </div>
        </div>

        <SlideNumber number={35} />
      </Slide>

      {/* ==================== SLIDE 36: THANK YOU ==================== */}
      <Slide variant="accent">
        <PhotoBackground src="/images/deck/times-square-night.jpg" opacity={0.25} position="full" />
        <DecorativeCircle position="-top-48 -right-48" size="lg" />
        <DecorativeCircle position="-bottom-32 -left-32" size="md" />
        <GridPattern />
        <StockChartDecoration className="bottom-0 left-0 w-[500px] opacity-5" />
        <StockChartDecoration className="bottom-0 right-0 w-[500px] opacity-5 scale-x-[-1]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Image src="/logo.avif" alt="MVPI Capital" width={228} height={183} className="h-20 w-auto" />
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-medium text-[#F8F8FA] leading-[1.1] mb-6">
              Thank You
            </h2>

            <p className="text-2xl text-[#BFA054] mb-4">
              Nasdaq Global Market IPO
            </p>

            <p className="text-xl text-[#A0A4AC] mb-12">
              Your Gateway to Global Capital & Institutional Investors
            </p>

            <GoldLine className="w-32 mx-auto mb-12" />

            <p className="text-lg text-[#F8F8FA] font-[family-name:var(--font-playfair)]">
              MVPI International Capital Limited
            </p>
          </div>
        </div>

        <SlideNumber number={36} />

        <div className="absolute bottom-8 left-12 right-12 flex justify-between text-xs text-[#3a3a3e]">
          <span>MVPI International Capital Limited</span>
          <span>Confidential — For Discussion Purposes Only</span>
        </div>
      </Slide>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: 1920px 1080px landscape;
            margin: 0;
          }

          html, body {
            width: 1920px !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .deck-container {
            width: 1920px !important;
          }

          .slide {
            width: 1920px !important;
            height: 1080px !important;
            page-break-after: always;
            page-break-inside: avoid;
            break-after: page;
            break-inside: avoid;
          }

          .print-hidden {
            display: none !important;
          }
        }

        @media screen {
          .slide {
            max-width: 100%;
            height: auto;
            min-height: 100vh;
          }

          @media (min-width: 1024px) {
            .slide {
              aspect-ratio: 16 / 9;
              min-height: auto;
            }
          }
        }
      `}</style>
    </div>
  );
}
