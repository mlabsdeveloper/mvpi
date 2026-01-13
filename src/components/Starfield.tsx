"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  prevX: number;
  prevY: number;
}

export default function Starfield({ starCount = 150 }: { starCount?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const speed = 0.4;

    // Set canvas size
    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    // Initialize stars with 3D positions
    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push(createStar());
      }
    };

    const createStar = (): Star => {
      const star: Star = {
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * 1000 + 1,
        prevX: 0,
        prevY: 0,
      };
      return star;
    };

    // Animation loop - warp speed effect
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach((star, index) => {
        // Store previous position for trail
        star.prevX = (star.x / star.z) * 300 + centerX;
        star.prevY = (star.y / star.z) * 300 + centerY;

        // Move star towards viewer
        star.z -= speed * 2;

        // Reset star if it passes the viewer
        if (star.z <= 0) {
          starsRef.current[index] = createStar();
          starsRef.current[index].z = 1000;
          return;
        }

        // Project 3D to 2D
        const x = (star.x / star.z) * 300 + centerX;
        const y = (star.y / star.z) * 300 + centerY;

        // Skip if outside canvas
        if (x < 0 || x > width || y < 0 || y > height) {
          starsRef.current[index] = createStar();
          return;
        }

        // Calculate size and opacity based on depth
        const size = Math.max(0.1, (1 - star.z / 1000) * 2.5);
        const opacity = Math.min(1, (1 - star.z / 1000) * 1.5);

        // Draw star
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
