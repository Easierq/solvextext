"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroImageSlideProps {
  images?: string[];
  cycleMs?: number;
  height?: number;
  className?: string;
}

// const DEFAULT_IMAGES: string[] = [
//   "https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=800&q=80",
//   "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
//   "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&q=80",
//   "https://images.unsplash.com/photo-1635335874521-7987db781153?w=800&q=80",
//   "https://images.unsplash.com/photo-1572211281255-bb9fd6f3ca0e?w=800&q=80",
// ];

const DEFAULT_IMAGES: string[] = [
  // Lit rooms & interiors
  "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80", // living room with woven pendant lights
  "https://images.unsplash.com/photo-1656402887556-e727ffe1f6d7?w=800&q=80", // kitchen with pendant lighting
  "https://images.unsplash.com/photo-1679485734032-1e2b82a6999c?w=800&q=80", // living and dining room, ceiling lights
];

export default function HeroImageSlide({
  images = DEFAULT_IMAGES,
  cycleMs = 3200,
  height = 500,
  className = "",
}: HeroImageSlideProps) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, cycleMs);
    return () => clearInterval(interval);
  }, [images.length, cycleMs]);

  return (
    <div
      className={`relative w-full overflow-hidden rounded ${className}`}
      style={{
        height,
        // boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt=""
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Sliding Indicator Bar Container */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 px-3 py-2 bg-black/30 backdrop-blur-md rounded-full">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setIndex(i)}
            className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
            style={{
              width: i === index ? 32 : 12,
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === index && (
              <motion.div
                key={`progress-${index}`}
                className="absolute inset-0 bg-white rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: cycleMs / 1000,
                  ease: "linear",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
