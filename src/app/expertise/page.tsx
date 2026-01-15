"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Footer from "@/components/Footer";

const expertiseAreas = [
  {
    id: "01",
    title: "Corporate Strategy",
    subtitle: "& Transformation",
    tagline: "Shaping Vision into Actionable Roadmaps",
    description:
      "We help leadership teams clarify their strategic direction and translate ambitions into structured, executable plans. From market positioning to business model evolution, we bring analytical rigor and cross-industry perspective to guide transformational journeys.",
    capabilities: [
      {
        title: "Strategic Planning & Business Model Refinement",
        description:
          "Comprehensive assessment of current business models with recommendations for optimization, diversification, or pivoting based on market dynamics.",
      },
      {
        title: "Market & Competitive Intelligence",
        description:
          "Deep-dive analysis of industry landscapes, competitor positioning, and emerging opportunities to inform strategic decision-making.",
      },
      {
        title: "Corporate Restructuring Design",
        description:
          "Architecture of organizational changes including group restructuring, entity rationalization, and operational consolidation frameworks.",
      },
      {
        title: "Cross-Border Expansion Strategy",
        description:
          "Strategic roadmaps for international growth including market entry analysis, partnership frameworks, and localization strategies.",
      },
    ],
    outcomes: [
      "Clear strategic roadmap aligned with stakeholder expectations",
      "Data-driven insights for informed decision-making",
      "Structured approach to organizational transformation",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
  },
  {
    id: "02",
    title: "Organizational Systems",
    subtitle: "& Corporate Readiness",
    tagline: "Building Institutional Strength from Within",
    description:
      "Strong organizations require robust internal systems. We work alongside management to establish governance frameworks, streamline processes, and ensure documentation readiness — creating the institutional backbone necessary for sustainable growth and external scrutiny.",
    capabilities: [
      {
        title: "Corporate Governance Framework Structuring",
        description:
          "Design and implementation of board structures, committee charters, policies, and procedures aligned with best practices and regulatory expectations.",
      },
      {
        title: "Internal Process Mapping & Optimization",
        description:
          "Systematic review and enhancement of operational workflows, approval hierarchies, and cross-functional processes for efficiency and compliance.",
      },
      {
        title: "Documentation Architecture & Control",
        description:
          "Establishment of document management systems, version control protocols, and information governance frameworks.",
      },
      {
        title: "Corporate Information Readiness",
        description:
          "Preparation and organization of corporate records, historical documentation, and institutional knowledge for due diligence and disclosure requirements.",
      },
    ],
    outcomes: [
      "Institutional-grade governance infrastructure",
      "Streamlined operations with clear accountability",
      "Documentation systems ready for external review",
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80",
  },
  {
    id: "03",
    title: "Project Orchestration",
    subtitle: "& Coordination",
    tagline: "Harmonizing Complexity into Coordinated Execution",
    description:
      "Complex corporate initiatives involve multiple stakeholders, jurisdictions, and workstreams. We serve as the central coordination hub — managing timelines, aligning parties, and ensuring seamless integration across all project dimensions.",
    capabilities: [
      {
        title: "Project Planning & Milestone Management",
        description:
          "Development of comprehensive project plans with clear milestones, dependencies, and accountability structures for complex initiatives.",
      },
      {
        title: "Cross-Department Coordination",
        description:
          "Facilitation of collaboration between internal teams including finance, legal, operations, and communications to ensure aligned execution.",
      },
      {
        title: "Multi-Jurisdictional Documentation",
        description:
          "Coordination of documentation requirements across different regulatory environments and legal frameworks.",
      },
      {
        title: "Workstream Integration",
        description:
          "Synthesis of parallel workstreams into cohesive project delivery, managing interdependencies and ensuring consistent progress.",
      },
    ],
    outcomes: [
      "Synchronized execution across all stakeholders",
      "Proactive risk identification and mitigation",
      "Efficient resource utilization and timeline management",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
  },
  {
    id: "04",
    title: "Cross-Border",
    subtitle: "Development",
    tagline: "Navigating Global Opportunities with Local Insight",
    description:
      "International expansion requires understanding of diverse markets, regulatory environments, and business practices. We provide the research, analysis, and coordination support needed to navigate cross-border opportunities with confidence.",
    capabilities: [
      {
        title: "Overseas Market Corporate Readiness",
        description:
          "Assessment and preparation of corporate structures, documentation, and compliance frameworks for international market entry.",
      },
      {
        title: "International Documentation Structuring",
        description:
          "Development of cross-border documentation packages meeting multiple jurisdictional requirements and international standards.",
      },
      {
        title: "Industry & Benchmarking Studies",
        description:
          "Comprehensive research on industry trends, peer company analysis, and market benchmarks across global markets.",
      },
      {
        title: "Corporate Research & Analytics",
        description:
          "In-depth analysis of corporate information, market data, and industry intelligence to support strategic initiatives.",
      },
    ],
    outcomes: [
      "Market-ready positioning for international expansion",
      "Comprehensive understanding of target market dynamics",
      "Robust documentation for cross-border transactions",
    ],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920&q=80",
  },
];

export default function ExpertisePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const activeExpertise = expertiseAreas[activeIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#08080C]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#08080C] to-transparent">
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
              className="flex items-center gap-2 text-[#A0A4AC] hover:text-[#BFA054] transition-colors cursor-pointer"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner with Full Width Background */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${activeExpertise.image})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/70 to-[#08080C]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-transparent to-[#08080C]/30" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#BFA054]" />
                <span className="text-[11px] text-[#BFA054] uppercase tracking-[0.3em]">
                  Our Expertise
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-playfair)] text-[2.5rem] lg:text-[3.5rem] xl:text-[4.5rem] font-medium text-[#F8F8FA] leading-[1.1] max-w-3xl">
                Integrated Strategy
                <br />
                <span className="text-[#6B6F78]">&</span> Project Orchestration
              </h1>

              <p className="mt-6 text-lg text-[#A0A4AC] max-w-xl leading-relaxed">
                Strategic coordination and organizational support for complex corporate initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="relative pt-6 pb-16 lg:pt-8 lg:pb-24 bg-[#08080C]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left - Navigation */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                {/* Navigation */}
                <div className="space-y-2">
                {expertiseAreas.map((area, index) => (
                  <motion.button
                    key={area.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setActiveIndex(index)}
                    className={`group w-full text-left py-5 px-4 border-l-2 cursor-pointer transition-all ${
                      activeIndex === index
                        ? "border-[#BFA054] bg-[#F8F8FA]/5"
                        : "border-transparent hover:border-[#333] hover:bg-[#F8F8FA]/[0.02]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`font-[family-name:var(--font-playfair)] text-sm transition-colors ${
                          activeIndex === index ? "text-[#BFA054]" : "text-[#333]"
                        }`}
                      >
                        {area.id}
                      </span>
                      <div>
                        <h3
                          className={`text-lg lg:text-xl font-medium transition-colors ${
                            activeIndex === index
                              ? "text-[#F8F8FA]"
                              : "text-[#6B6F78] group-hover:text-[#A0A4AC]"
                          }`}
                        >
                          {area.title}
                        </h3>
                        <span
                          className={`text-sm transition-colors ${
                            activeIndex === index
                              ? "text-[#A0A4AC]"
                              : "text-[#333] group-hover:text-[#6B6F78]"
                          }`}
                        >
                          {area.subtitle}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}

                <p className="mt-8 px-4 text-xs text-[#6B6F78] italic">
                  We do not provide financial advice or regulated activities;
                  our role is strictly coordination and organizational support.
                </p>
              </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Tagline */}
                  <p className="text-[#BFA054] text-sm uppercase tracking-wider mb-4">
                    {activeExpertise.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-lg lg:text-xl text-[#A0A4AC] leading-relaxed mb-12">
                    {activeExpertise.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mb-12">
                    <h4 className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em] mb-6">
                      Capabilities
                    </h4>
                    <div className="space-y-6">
                      {activeExpertise.capabilities.map((capability, index) => (
                        <motion.div
                          key={capability.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.08 }}
                          className="border-l-2 border-[#222226] pl-6 hover:border-[#BFA054] transition-colors"
                        >
                          <h5 className="text-[#F8F8FA] font-medium mb-2">
                            {capability.title}
                          </h5>
                          <p className="text-sm text-[#6B6F78] leading-relaxed">
                            {capability.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="p-8 glass-panel rounded-2xl">
                    <h4 className="text-[10px] text-[#6B6F78] uppercase tracking-[0.3em] mb-6">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-4">
                      {activeExpertise.outcomes.map((outcome, index) => (
                        <motion.li
                          key={outcome}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                          className="flex items-start gap-4"
                        >
                          <div className="w-1.5 h-1.5 mt-2 bg-[#BFA054] rounded-full flex-shrink-0" />
                          <span className="text-[#A0A4AC] leading-relaxed">
                            {outcome}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#222226]">
                    <button
                      onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                      disabled={activeIndex === 0}
                      className={`flex items-center gap-2 text-sm cursor-pointer transition-colors ${
                        activeIndex === 0
                          ? "text-[#333] cursor-not-allowed"
                          : "text-[#A0A4AC] hover:text-[#BFA054]"
                      }`}
                    >
                      <FiArrowLeft className="w-4 h-4" />
                      Previous
                    </button>

                    <span className="text-xs text-[#6B6F78]">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(expertiseAreas.length).padStart(2, "0")}
                    </span>

                    <button
                      onClick={() => setActiveIndex((prev) => Math.min(expertiseAreas.length - 1, prev + 1))}
                      disabled={activeIndex === expertiseAreas.length - 1}
                      className={`flex items-center gap-2 text-sm cursor-pointer transition-colors ${
                        activeIndex === expertiseAreas.length - 1
                          ? "text-[#333] cursor-not-allowed"
                          : "text-[#A0A4AC] hover:text-[#BFA054]"
                      }`}
                    >
                      Next
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 border-t border-[#222226]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-24 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-[#F8F8FA] mb-6">
            Ready to discuss your project?
          </h2>
          <p className="text-[#6B6F78] mb-8 max-w-xl mx-auto">
            Let&apos;s explore how we can support your corporate initiatives with
            strategic coordination and organizational expertise.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3A62A3] via-[#4A7CC9] to-[#6B9ADB] text-white text-sm font-medium tracking-wide uppercase hover:from-[#4A7CC9] hover:via-[#6B9ADB] hover:to-[#8BB4E8] transition-all cursor-pointer"
          >
            Get in Touch
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
