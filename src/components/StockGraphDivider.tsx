"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StockData {
  prices: number[];
  symbol: string;
}

// Convert price data to SVG path
function pricesToPath(
  prices: number[],
  width: number,
  height: number,
  padding: number = 40
): string {
  if (prices.length === 0) return "";

  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;

  const points = prices.map((price, i) => {
    const x = (i / (prices.length - 1)) * width;
    const y = padding + ((max - price) / range) * (height - padding * 2);
    return { x, y };
  });

  // Sharp edges - use L (line to)
  return points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    return `${acc} L ${point.x} ${point.y}`;
  }, "");
}

// Generate fallback stock-like path
function generateFallbackPath(
  width: number,
  height: number,
  volatility: number,
  trend: number,
  seed: number
): string {
  const points: { x: number; y: number }[] = [];
  const segments = 80;
  let y = height * 0.6;

  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * width;
    const noise =
      Math.sin(i * 0.5 + seed) * volatility +
      Math.cos(i * 0.3 + seed * 2) * volatility * 0.5;
    y = y - trend + noise;
    y = Math.max(height * 0.15, Math.min(height * 0.85, y));
    points.push({ x, y });
  }

  return points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    return `${acc} L ${point.x} ${point.y}`;
  }, "");
}

// Generate candlestick data from prices
function generateCandlesticks(
  prices: number[],
  width: number,
  height: number,
  padding: number = 40
) {
  if (prices.length < 20) return [];

  const candlesticks = [];
  const count = 30;
  const step = Math.floor(prices.length / count);
  const candleWidth = (width / count) * 0.5;
  const gap = width / count;

  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;

  for (let i = 0; i < count; i++) {
    const startIdx = i * step;
    const endIdx = Math.min(startIdx + step, prices.length - 1);

    const open = prices[startIdx];
    const close = prices[endIdx];
    const segmentPrices = prices.slice(startIdx, endIdx + 1);
    const high = Math.max(...segmentPrices);
    const low = Math.min(...segmentPrices);

    const x = i * gap + gap * 0.25;
    const openY = padding + ((max - open) / range) * (height - padding * 2);
    const closeY = padding + ((max - close) / range) * (height - padding * 2);
    const highY = padding + ((max - high) / range) * (height - padding * 2);
    const lowY = padding + ((max - low) / range) * (height - padding * 2);

    candlesticks.push({
      x,
      open: openY,
      close: closeY,
      high: highY,
      low: lowY,
      width: candleWidth,
      isUp: close > open,
    });
  }

  return candlesticks;
}

export default function StockGraphDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [stockData, setStockData] = useState<{
    nasdaq: number[];
    sp500: number[];
    dow: number[];
  }>({ nasdaq: [], sp500: [], dow: [] });

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Fetch real stock data
  useEffect(() => {
    async function fetchStockData() {
      try {
        // Using Yahoo Finance API via a proxy-friendly endpoint
        const symbols = [
          { key: "nasdaq", symbol: "^IXIC" },
          { key: "sp500", symbol: "^GSPC" },
          { key: "dow", symbol: "^DJI" },
        ];

        const results: { [key: string]: number[] } = {};

        for (const { key, symbol } of symbols) {
          try {
            const response = await fetch(
              `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=5m&range=1d`,
              { next: { revalidate: 300 } } // Cache for 5 minutes
            );

            if (response.ok) {
              const data = await response.json();
              const prices =
                data?.chart?.result?.[0]?.indicators?.quote?.[0]?.close?.filter(
                  (p: number | null) => p !== null
                ) || [];
              results[key] = prices;
            }
          } catch {
            // Individual fetch failed, continue with others
          }
        }

        if (
          results.nasdaq?.length > 0 ||
          results.sp500?.length > 0 ||
          results.dow?.length > 0
        ) {
          setStockData({
            nasdaq: results.nasdaq || [],
            sp500: results.sp500 || [],
            dow: results.dow || [],
          });
        }
      } catch {
        // Fetch failed, will use fallback
      }
    }

    fetchStockData();
  }, []);

  // Animate stroke drawing based on scroll - different speeds
  const pathLength1 = useTransform(scrollYProgress, [0, 0.4], [0, 1]); // Fastest
  const pathLength2 = useTransform(scrollYProgress, [0, 0.6], [0, 1]); // Medium
  const pathLength3 = useTransform(scrollYProgress, [0, 0.8], [0, 1]); // Slowest

  // Candlestick opacity
  const candleOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const width = 1920;
  const height = 400;

  // Generate paths - use real data if available, otherwise fallback
  const path1 =
    stockData.nasdaq.length > 0
      ? pricesToPath(stockData.nasdaq, width, height)
      : generateFallbackPath(width, height, 25, 1.5, 1);

  const path2 =
    stockData.sp500.length > 0
      ? pricesToPath(stockData.sp500, width, height)
      : generateFallbackPath(width, height, 35, 2, 2);

  const path3 =
    stockData.dow.length > 0
      ? pricesToPath(stockData.dow, width, height)
      : generateFallbackPath(width, height, 20, 1, 3);

  // Generate candlesticks from NASDAQ data
  const candlesticks =
    stockData.nasdaq.length > 0
      ? generateCandlesticks(stockData.nasdaq, width, height)
      : [];

  return (
    <section
      ref={containerRef}
      className="relative h-[50vh] min-h-[400px] bg-[#05070a] overflow-hidden"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Fine grid */}
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#1a3a5a"
                strokeWidth="0.3"
                opacity="0.3"
              />
            </pattern>
            {/* Major grid */}
            <pattern
              id="largeGrid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="#1a3a5a"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#largeGrid)" />
        </svg>
      </div>

      {/* Animated Stock Lines - only render after mount to prevent hydration mismatch */}
      {mounted && (
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Glow filters */}
          <defs>
          <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-red" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Candlesticks */}
        {candlesticks.length > 0 && (
          <motion.g style={{ opacity: candleOpacity }}>
            {candlesticks.map((candle, i) => (
              <g key={i}>
                {/* Wick */}
                <line
                  x1={candle.x + candle.width / 2}
                  y1={candle.high}
                  x2={candle.x + candle.width / 2}
                  y2={candle.low}
                  stroke={candle.isUp ? "#2a5a4a" : "#5a3a4a"}
                  strokeWidth="1"
                  opacity="0.4"
                />
                {/* Body */}
                <rect
                  x={candle.x}
                  y={Math.min(candle.open, candle.close)}
                  width={candle.width}
                  height={Math.abs(candle.close - candle.open) || 2}
                  fill={candle.isUp ? "#2a5a4a" : "#5a3a4a"}
                  opacity="0.5"
                />
              </g>
            ))}
          </motion.g>
        )}

        {/* Line 1 - Muted Gold */}
        <motion.path
          d={path1}
          fill="none"
          stroke="#8a7a4a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow-gold)"
          style={{ pathLength: pathLength1 }}
          strokeDasharray="1"
          strokeDashoffset="0"
          opacity="0.7"
        />

        {/* Line 2 - Muted Cyan */}
        <motion.path
          d={path2}
          fill="none"
          stroke="#3a6a7a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow-cyan)"
          style={{ pathLength: pathLength2 }}
          strokeDasharray="1"
          strokeDashoffset="0"
          opacity="0.6"
        />

        {/* Line 3 - Muted Red */}
        <motion.path
          d={path3}
          fill="none"
          stroke="#6a4a5a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow-red)"
          style={{ pathLength: pathLength3 }}
          strokeDasharray="1"
          strokeDashoffset="0"
          opacity="0.6"
        />
        </svg>
      )}

      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05070a] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05070a] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#05070a] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#05070a] to-transparent pointer-events-none" />
    </section>
  );
}
