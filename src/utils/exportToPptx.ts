"use client";

import PptxGenJS from "pptxgenjs";

// Brand colors
const COLORS = {
  gold: "BFA054",
  white: "F8F8FA",
  gray: "A0A4AC",
  darkGray: "6B6F78",
  dark: "08080C",
  cardBg: "0c0c10",
};

export async function exportNasdaqDeckToPptx() {
  const pptx = new PptxGenJS();

  // Set presentation properties
  pptx.author = "MVPI International Capital";
  pptx.title = "NASDAQ Global Market Listing Guide";
  pptx.subject = "IPO Advisory";
  pptx.company = "MVPI International Capital Limited";

  // Define master slide
  pptx.defineSlideMaster({
    title: "MVPI_MASTER",
    background: { color: COLORS.dark },
  });

  // Slide 1: Title
  let slide = pptx.addSlide({ masterName: "MVPI_MASTER" });
  slide.addText("NASDAQ Global Market", {
    x: 0.5, y: 2.5, w: 9, h: 1,
    fontSize: 44, fontFace: "Georgia", color: COLORS.white, bold: true
  });
  slide.addText("Listing Guide for International Companies", {
    x: 0.5, y: 3.5, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Arial", color: COLORS.gold
  });
  slide.addText("MVPI International Capital Limited", {
    x: 0.5, y: 5, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Arial", color: COLORS.gray
  });

  // Slide 2: Why U.S. Capital Markets
  slide = pptx.addSlide({ masterName: "MVPI_MASTER" });
  addSectionHeader(slide, "Market Overview", "Why U.S. Capital Markets?");
  const usMarketStats = [
    { stat: "$69T", label: "Total U.S. Equity Market Cap" },
    { stat: "$62T", label: "U.S. Institutional AUM" },
    { stat: "871+", label: "International Companies on Nasdaq" },
    { stat: "58%", label: "Foreign IPOs (Q1 2025)" },
  ];
  usMarketStats.forEach((item, i) => {
    slide.addText(item.stat, {
      x: 0.5 + (i * 2.3), y: 2.5, w: 2, h: 0.8,
      fontSize: 32, fontFace: "Georgia", color: COLORS.gold, bold: true, align: "center"
    });
    slide.addText(item.label, {
      x: 0.5 + (i * 2.3), y: 3.3, w: 2, h: 0.5,
      fontSize: 11, fontFace: "Arial", color: COLORS.gray, align: "center"
    });
  });

  // Slide 3: Benefits
  slide = pptx.addSlide({ masterName: "MVPI_MASTER" });
  addSectionHeader(slide, "Benefits", "Why List on NASDAQ?");
  const benefits = [
    "Access to deep U.S. capital markets ($69T+ market cap)",
    "Higher valuation multiples for growth companies",
    "Global brand recognition and credibility",
    "USD-denominated trading eliminates FX risk",
    "Extensive analyst coverage and liquidity",
    "Platform for M&A and strategic partnerships",
  ];
  benefits.forEach((benefit, i) => {
    slide.addText(`${i + 1}. ${benefit}`, {
      x: 0.5, y: 2 + (i * 0.6), w: 9, h: 0.5,
      fontSize: 16, fontFace: "Arial", color: COLORS.white
    });
  });

  // Slide 4: Qualification Standards Overview
  slide = pptx.addSlide({ masterName: "MVPI_MASTER" });
  addSectionHeader(slide, "Requirements", "NASDAQ Global Market Standards");
  slide.addText("Four Qualification Pathways", {
    x: 0.5, y: 2, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Arial", color: COLORS.gold
  });
  const standards = [
    { name: "Income Standard", req: "Pretax income $1M+" },
    { name: "Equity Standard", req: "Stockholders' equity $30M+" },
    { name: "Market Value Standard", req: "Market value $75M+" },
    { name: "Assets/Revenue Standard", req: "Total assets & revenue $75M+ each" },
  ];
  standards.forEach((std, i) => {
    slide.addText(std.name, {
      x: 0.5 + (i * 2.3), y: 2.8, w: 2.1, h: 0.4,
      fontSize: 14, fontFace: "Arial", color: COLORS.gold, bold: true, align: "center"
    });
    slide.addText(std.req, {
      x: 0.5 + (i * 2.3), y: 3.2, w: 2.1, h: 0.6,
      fontSize: 11, fontFace: "Arial", color: COLORS.gray, align: "center"
    });
  });
  slide.addText("All standards require: $4+ share price, 1.1M+ public shares, 400+ shareholders, 3-4 market makers", {
    x: 0.5, y: 4.2, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Arial", color: COLORS.darkGray, italic: true
  });

  // Slide 5: Asian IPO Cycles Overview
  slide = pptx.addSlide({ masterName: "MVPI_MASTER" });
  addSectionHeader(slide, "Market Analysis", "Asian IPOs on NASDAQ Global Market");
  slide.addText("NASDAQ Global Market is not the \"default exit\" for Asian companies.", {
    x: 0.5, y: 2.2, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Arial", color: COLORS.white
  });
  slide.addText("It is a precision tool available only during specific industry windows.", {
    x: 0.5, y: 2.8, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Arial", color: COLORS.gray
  });
  const trends = [
    "Traffic & Platforms → Content → Hard Tech → Supply Chain",
    "Industry narrative matters more than country of origin",
    "Companies not large enough for Global Select, but mature for U.S. institutions",
  ];
  trends.forEach((trend, i) => {
    slide.addText(`${i + 1}. ${trend}`, {
      x: 0.5, y: 3.6 + (i * 0.5), w: 9, h: 0.4,
      fontSize: 14, fontFace: "Arial", color: COLORS.white
    });
  });

  // Slide 6: Industry Cycles Timeline
  slide = pptx.addSlide({ masterName: "MVPI_MASTER" });
  addSectionHeader(slide, "Industry Cycles", "IPO Cycles (2015-2025)");
  const phases = [
    { phase: "Phase 1", years: "2015-2018", title: "Platform Models", example: "" },
    { phase: "Phase 2", years: "2018-2019", title: "Social Commerce", example: "Pinduoduo" },
    { phase: "Phase 3", years: "2018-2020", title: "Content & Media", example: "iQIYI" },
    { phase: "Phase 4", years: "2020-2022", title: "Hard Technology", example: "Hesai" },
    { phase: "Phase 5", years: "2023-2024", title: "Global Brands", example: "Super Hi" },
    { phase: "Phase 6", years: "2024-2025", title: "Supply Chain", example: "Proficient Auto" },
  ];
  phases.forEach((p, i) => {
    const x = 0.3 + (i * 1.6);
    slide.addShape(pptx.ShapeType.rect, {
      x, y: 2, w: 1.5, h: 2.2, fill: { color: COLORS.cardBg }, line: { color: "1a1a1e", pt: 1 }
    });
    slide.addText(p.phase, { x, y: 2.1, w: 1.5, h: 0.3, fontSize: 9, color: COLORS.darkGray, align: "center" });
    slide.addText(p.years, { x, y: 2.35, w: 1.5, h: 0.25, fontSize: 9, color: COLORS.gold, align: "center" });
    slide.addText(p.title, { x, y: 2.7, w: 1.5, h: 0.4, fontSize: 11, color: COLORS.white, align: "center", bold: true });
    if (p.example) {
      slide.addText(p.example, { x, y: 3.8, w: 1.5, h: 0.25, fontSize: 9, color: COLORS.gold, align: "center" });
    }
  });

  // Slide 7: Case Studies
  slide = pptx.addSlide({ masterName: "MVPI_MASTER" });
  addSectionHeader(slide, "Track Record", "Recent NASDAQ Global Market IPOs (2025)");
  const cases = [
    { company: "Anbio Biotechnology", ticker: "NNNN", country: "Germany", proceeds: "$8M", sector: "Healthcare" },
    { company: "Yuanbao Inc.", ticker: "YB", country: "China", proceeds: "$30M", sector: "Insurance" },
    { company: "Antalpha Platform", ticker: "ANTA", country: "Singapore", proceeds: "$49.3M", sector: "FinTech" },
  ];
  // Table header
  slide.addText("Company", { x: 0.5, y: 2, w: 2.5, h: 0.4, fontSize: 11, color: COLORS.darkGray, bold: true });
  slide.addText("Ticker", { x: 3, y: 2, w: 1, h: 0.4, fontSize: 11, color: COLORS.darkGray, bold: true });
  slide.addText("Country", { x: 4, y: 2, w: 1.5, h: 0.4, fontSize: 11, color: COLORS.darkGray, bold: true });
  slide.addText("Proceeds", { x: 5.5, y: 2, w: 1.2, h: 0.4, fontSize: 11, color: COLORS.darkGray, bold: true });
  slide.addText("Sector", { x: 6.7, y: 2, w: 1.5, h: 0.4, fontSize: 11, color: COLORS.darkGray, bold: true });
  cases.forEach((c, i) => {
    const y = 2.5 + (i * 0.5);
    slide.addText(c.company, { x: 0.5, y, w: 2.5, h: 0.4, fontSize: 12, color: COLORS.white });
    slide.addText(c.ticker, { x: 3, y, w: 1, h: 0.4, fontSize: 12, color: COLORS.gold });
    slide.addText(c.country, { x: 4, y, w: 1.5, h: 0.4, fontSize: 12, color: COLORS.gray });
    slide.addText(c.proceeds, { x: 5.5, y, w: 1.2, h: 0.4, fontSize: 12, color: COLORS.gold });
    slide.addText(c.sector, { x: 6.7, y, w: 1.5, h: 0.4, fontSize: 12, color: COLORS.gray });
  });

  // Slide 8: Introducing MVPI
  slide = pptx.addSlide({ masterName: "MVPI_MASTER" });
  addSectionHeader(slide, "Your Partner", "Introducing MVPI International Capital");
  slide.addText("A strategic advisory firm specializing in:", {
    x: 0.5, y: 2.2, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Arial", color: COLORS.gray
  });
  const services = [
    "NASDAQ Global Market IPO Advisory",
    "Asia-to-U.S. Cross-Border Capital Markets",
    "Corporate Readiness & Governance",
    "Underwriter & Advisor Coordination",
    "Post-IPO Strategy & Compliance",
  ];
  services.forEach((svc, i) => {
    slide.addText(`• ${svc}`, {
      x: 0.7, y: 2.8 + (i * 0.45), w: 8.5, h: 0.4,
      fontSize: 14, fontFace: "Arial", color: COLORS.white
    });
  });

  // Slide 9: Why Partner with MVPI
  slide = pptx.addSlide({ masterName: "MVPI_MASTER" });
  addSectionHeader(slide, "Partnership", "Why Partner with MVPI");
  const reasons = [
    { title: "NASDAQ Specialization", desc: "Deep expertise in Global Market requirements" },
    { title: "Asia-Pacific Focus", desc: "Understanding of regional business practices" },
    { title: "End-to-End Capability", desc: "From assessment through post-IPO compliance" },
    { title: "Execution Discipline", desc: "Timeline management and coordination" },
    { title: "Relationship Network", desc: "Connections to underwriters and advisors" },
    { title: "Client Alignment", desc: "Success-oriented engagement structure" },
  ];
  reasons.forEach((r, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    slide.addText(r.title, {
      x: 0.5 + (col * 3.1), y: 2 + (row * 1.3), w: 2.9, h: 0.4,
      fontSize: 13, fontFace: "Arial", color: COLORS.gold, bold: true
    });
    slide.addText(r.desc, {
      x: 0.5 + (col * 3.1), y: 2.4 + (row * 1.3), w: 2.9, h: 0.5,
      fontSize: 11, fontFace: "Arial", color: COLORS.gray
    });
  });

  // Slide 10: Contact / Thank You
  slide = pptx.addSlide({ masterName: "MVPI_MASTER" });
  slide.addText("Thank You", {
    x: 0.5, y: 2, w: 9, h: 1,
    fontSize: 48, fontFace: "Georgia", color: COLORS.white, bold: true, align: "center"
  });
  slide.addText("Ready to explore your NASDAQ listing opportunity?", {
    x: 0.5, y: 3.2, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Arial", color: COLORS.gray, align: "center"
  });
  slide.addText("MVPI International Capital Limited", {
    x: 0.5, y: 4.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Arial", color: COLORS.gold, align: "center"
  });
  slide.addText("info@mvpi-capital.com", {
    x: 0.5, y: 4.6, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Arial", color: COLORS.gray, align: "center"
  });
  slide.addText("Confidential - For Discussion Purposes Only", {
    x: 0.5, y: 5.2, w: 9, h: 0.25,
    fontSize: 10, fontFace: "Arial", color: COLORS.darkGray, align: "center", italic: true
  });

  // Save the file
  await pptx.writeFile({ fileName: "MVPI_NASDAQ_Global_Market_Deck.pptx" });
}

function addSectionHeader(slide: PptxGenJS.Slide, label: string, title: string) {
  slide.addText(label.toUpperCase(), {
    x: 0.5, y: 0.5, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial", color: COLORS.gold, bold: true
  });
  slide.addText(title, {
    x: 0.5, y: 0.9, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Georgia", color: COLORS.white, bold: true
  });
}
