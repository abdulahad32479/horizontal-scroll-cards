"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StickyScrollCards: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const items = Array.from({ length: 8 });

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const CARD_WIDTH = 20 * 16; // w-80 = 320px
  const GAP = 16; // 1rem
  const TOTAL_CARDS_WIDTH = (CARD_WIDTH + GAP) * (items.length - 1);

  // Map scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -TOTAL_CARDS_WIDTH]);

  return (
    <section
      ref={wrapperRef}
      // Dynamic height: more cards = more scroll space
      style={{ height: `${items.length * 100}vh` }}
      className="relative bg-gradient-to-b from-purple-600 to-indigo-800"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col">
        {/* Header */}
        <div className="py-12 text-center text-white">
          <h2 className="text-4xl font-bold tracking-wide">
            Smooth Horizontal Scroll
          </h2>
          <p className="mt-2 text-lg opacity-80">
            A professional horizontal scrolling effect using Framer Motion
          </p>
        </div>

        {/* Cards row */}

        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div className=" max-w-[1000px] w-full ml-auto">
            <motion.div style={{ x }} className="flex gap-4">
              {items.map((_, index) => (
                <div
                  key={index}
                  className="flex-none w-80 h-80 bg-white text-gray-800 shadow-lg border-white/10 flex items-center justify-center rounded-xl border"
                >
                  <p className="text-lg font-semibold text-gray-700">
                    Item {index + 1}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-8 text-center text-white/80">
          <p> Powered by Abdul Ahad + Front end developer </p>
        </div>
      </div>
    </section>
  );
};

export default StickyScrollCards;
