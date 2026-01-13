"use client";

import { motion } from "framer-motion";

// Dense world map dots with uniform size - each row represents latitude
// Format: [startX, endX, y, region] - draws dots from startX to endX at y coordinate
const continentRows: [number, number, number, string | null][] = [
  // North America - Alaska
  [8, 12, 12, null],
  [6, 14, 14, null],
  [4, 8, 16, null],
  [10, 16, 16, null],
  // Canada
  [8, 28, 18, null],
  [6, 30, 20, null],
  [8, 28, 22, null],
  [10, 26, 24, null],
  // USA
  [8, 12, 26, "U.S."],
  [10, 26, 26, null],
  [12, 28, 28, null],
  [14, 28, 30, null],
  [16, 26, 32, null],
  [18, 24, 34, null],
  // Mexico & Central America
  [18, 24, 36, null],
  [20, 26, 38, null],
  [22, 28, 40, null],
  [24, 28, 42, null],
  // Caribbean
  [28, 32, 36, null],
  [30, 34, 38, null],

  // South America
  [28, 38, 44, null],
  [26, 40, 46, null],
  [26, 42, 48, null],
  [24, 42, 50, null],
  [24, 40, 52, null],
  [26, 40, 54, null],
  [28, 38, 56, null],
  [28, 36, 58, null],
  [28, 34, 60, null],
  [28, 34, 62, null],
  [26, 32, 64, null],
  [26, 30, 66, null],
  [26, 30, 68, null],
  [28, 30, 70, null],

  // Europe - Scandinavia & UK
  [44, 48, 14, null],
  [50, 56, 14, null],
  [42, 46, 16, null],
  [48, 60, 16, null],
  [42, 44, 18, null],
  [46, 62, 18, null],
  // Europe main
  [44, 60, 20, null],
  [44, 58, 22, null],
  [44, 56, 24, null],
  [44, 54, 26, null],
  [44, 50, 28, null],
  [46, 48, 30, null],

  // Africa - North
  [44, 58, 32, null],
  [42, 58, 34, null],
  [40, 58, 36, null],
  [40, 60, 38, null],
  [42, 60, 40, null],
  [44, 58, 42, null],
  [44, 58, 44, null],
  [46, 58, 46, null],
  [48, 58, 48, null],
  [48, 56, 50, null],
  [50, 56, 52, null],
  [50, 54, 54, null],
  [52, 54, 56, null],
  // Madagascar
  [58, 60, 50, null],
  [58, 60, 52, null],
  [58, 60, 54, null],

  // Russia - Siberia
  [56, 90, 12, null],
  [54, 92, 14, null],
  [56, 94, 16, null],
  [58, 92, 18, null],
  [60, 88, 20, null],

  // Middle East
  [58, 66, 28, null],
  [56, 68, 30, null],
  [56, 66, 32, null],
  [58, 64, 34, null],
  [60, 66, 36, null],

  // India & SE Asia
  [64, 74, 32, null],
  [66, 76, 34, null],
  [66, 78, 36, null],
  [68, 78, 38, null],
  [70, 78, 40, null],
  [72, 76, 42, null],
  [72, 74, 44, null],

  // China
  [70, 86, 22, "China"],
  [68, 86, 24, "China"],
  [70, 84, 26, "China"],
  [72, 84, 28, "China"],
  [74, 84, 30, "China"],
  [76, 84, 32, "China"],

  // Japan
  [88, 92, 24, "Japan"],
  [88, 92, 26, "Japan"],
  [88, 94, 28, "Japan"],
  [90, 94, 30, "Japan"],
  [90, 92, 32, "Japan"],

  // Korea
  [84, 88, 26, null],
  [84, 88, 28, null],
  [84, 86, 30, null],

  // Taiwan
  [86, 88, 34, "Taiwan"],
  [86, 88, 36, "Taiwan"],

  // Hong Kong region
  [82, 86, 34, "Hong Kong"],

  // Vietnam
  [76, 80, 38, "Vietnam"],
  [76, 78, 40, "Vietnam"],
  [76, 80, 42, "Vietnam"],
  [78, 80, 44, "Vietnam"],
  [78, 82, 46, "Vietnam"],

  // Thailand/Myanmar
  [72, 78, 38, null],
  [74, 78, 40, null],
  [74, 78, 42, null],

  // Malaysia
  [72, 80, 48, "Malaysia"],
  [74, 82, 50, "Malaysia"],

  // Singapore
  [78, 80, 52, "Singapore"],

  // Indonesia
  [80, 92, 50, null],
  [78, 94, 52, null],
  [80, 92, 54, null],
  [82, 90, 56, null],

  // Philippines
  [86, 90, 38, null],
  [86, 92, 40, null],
  [88, 92, 42, null],
  [88, 90, 44, null],

  // Australia
  [78, 92, 58, "Australia"],
  [76, 94, 60, "Australia"],
  [76, 96, 62, "Australia"],
  [78, 96, 64, "Australia"],
  [80, 94, 66, "Australia"],
  [82, 92, 68, "Australia"],
  [84, 90, 70, "Australia"],

  // New Zealand
  [96, 98, 68, null],
  [96, 100, 70, null],
  [98, 100, 72, null],
];

// Generate dots from continent rows
const generateDots = () => {
  const dots: { x: number; y: number; region: string | null }[] = [];
  const spacing = 2; // Dot spacing

  continentRows.forEach(([startX, endX, y, region]) => {
    for (let x = startX; x <= endX; x += spacing) {
      dots.push({ x, y, region });
    }
  });

  return dots;
};

const worldDots = generateDots();

// Region center points for markers (only MVPI office locations)
const regionMarkers: { [key: string]: { x: number; y: number } } = {
  "Hong Kong": { x: 84, y: 34 },
  "Singapore": { x: 79, y: 51 },
  "Malaysia": { x: 77, y: 49 },
  "Taiwan": { x: 87, y: 35 },
  "Australia": { x: 86, y: 64 },
  "Vietnam": { x: 78, y: 42 },
};

interface AsiaMapProps {
  hoveredRegion: string | null;
}

export default function AsiaMap({ hoveredRegion }: AsiaMapProps) {
  return (
    <svg
      viewBox="0 0 100 80"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Base dots */}
      {worldDots.map((dot, index) => {
        const isHighlighted = dot.region && hoveredRegion === dot.region;
        const isRegionDot = dot.region !== null;

        return (
          <motion.circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r={0.5}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHighlighted ? 0.9 : isRegionDot ? 0.5 : 0.35,
            }}
            transition={{ duration: 0.3 }}
            fill={isHighlighted ? "#BFA054" : isRegionDot ? "#4a4a4a" : "#2a2a2a"}
          />
        );
      })}

      {/* Region markers - circular highlights with breathing animation */}
      {Object.entries(regionMarkers).map(([region, pos], index) => {
        const isActive = hoveredRegion === region;
        return (
          <motion.g key={region}>
            {/* Breathing outer ring */}
            <motion.circle
              cx={pos.x}
              cy={pos.y}
              fill="none"
              stroke={isActive ? "#BFA054" : "#3A62A3"}
              strokeWidth={0.3}
              initial={{ opacity: 0, r: 2.5 }}
              animate={{
                opacity: isActive ? 0.9 : [0.3, 0.6, 0.3],
                r: isActive ? 4 : [2.5, 3.2, 2.5],
              }}
              transition={
                isActive
                  ? { duration: 0.3 }
                  : {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }
              }
            />
            {/* Secondary pulse ring (only when not active) */}
            {!isActive && (
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                fill="none"
                stroke="#3A62A3"
                strokeWidth={0.15}
                initial={{ opacity: 0, r: 1.5 }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  r: [1.5, 2.2, 1.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3 + 0.5,
                }}
              />
            )}
            {/* Inner dot */}
            <motion.circle
              cx={pos.x}
              cy={pos.y}
              r={isActive ? 1.2 : 0.8}
              fill={isActive ? "#BFA054" : "#3A62A3"}
              initial={{ opacity: 0 }}
              animate={{
                opacity: isActive ? 1 : [0.5, 0.8, 0.5],
              }}
              transition={
                isActive
                  ? { duration: 0.3 }
                  : {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }
              }
            />
          </motion.g>
        );
      })}
    </svg>
  );
}
