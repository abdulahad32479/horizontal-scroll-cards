"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? " backdrop-blur-md shadow-lg text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="max-w-[100px] w-full rounded-md">
          <Image src={logo} alt="logo" className=" rounded-md" />
        </div>

        {/* Links */}
        <div className="flex gap-6 font-medium">
          <h1 href="#home" className="hover:text-purple-500 transition">
            Home
          </h1>
          <h1 href="#explore" className="hover:text-purple-500 transition">
            Explore
          </h1>
          <h1 href="#about" className="hover:text-purple-500 transition">
            About
          </h1>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
