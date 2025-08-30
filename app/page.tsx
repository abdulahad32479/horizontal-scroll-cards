"use client";
import React from "react";
import StickyScrollCards from "./(home)/horizontal";
import Hero from "./(home)/hero";
import Navbar from "@/src/components/navbar";

const Home: React.FC = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <StickyScrollCards />
    </main>
  );
};

export default Home;
