"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="md:min-h-screen max-md:py-[100px] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-purple-600 to-indigo-800 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Interactive Horizontal Scroll
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl text-lg md:text-xl opacity-90"
      >
        A modern scrolling animation built with{" "}
        <span className="font-semibold">Framer Motion</span> &{" "}
        <span className="font-semibold">Tailwind CSS</span>. Perfect for
        storytelling, product showcases, or portfolio highlights.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-purple-100 transition"
      >
        Explore the Effect ↓
      </motion.button>
    </section>
  );
};

export default Hero;
