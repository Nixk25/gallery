"use client";

import React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

type ArtworkProps = {
  artwork: {
    artist: string;
    title: string;
    description: string;
  };
  idx: number;
};
const Artwork = ({ idx, artwork }: ArtworkProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const updateMousePosition = (e: React.MouseEvent, index: number) => {
    const rect = cardRefs.current[index]?.getBoundingClientRect();
    if (rect) {
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      setMousePosition({ x: mouseX, y: mouseY });
      setHoveredCard(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div
      key={idx}
      //@ts-ignore
      ref={(el) => (cardRefs.current[idx] = el)}
      className="relative  flex flex-col border-b last:border-b-0 w-full p-4 border-black "
      onMouseMove={(e) => updateMousePosition(e, idx)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-500">{artwork.artist}</span>
            <span className="text-2xl">{artwork.title}</span>
          </div>

          <p className="text-sm max-w-[300px]">{artwork.description}</p>
        </div>

        <AnimatePresence>
          {hoveredCard === idx && (
            <motion.div
              className="absolute size-20 flex items-center justify-center rounded-full bg-primary text-white"
              initial={{ opacity: 0 }}
              animate={{
                x: mousePosition.x - 80,
                y: mousePosition.y - 80,
                opacity: 1,
              }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 1,
              }}
            >
              <motion.div
                initial={{ rotate: "20deg" }}
                animate={{ rotate: "-20deg" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <FaArrowRight className="text-xl" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Artwork;
