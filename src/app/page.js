"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { About } from "@/app/components/About";
import FoodRecyclingSlider from "@/app/components/Chain";
import Cursor from "./components/Cursor";

// Define motion variants for animations
const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 200 }, // Start off-screen to the right
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="py-3 overflow-hidden">
      <Cursor />
      <section
        id="hero"
        className="flex flex-row justify-between items-center px-60 py-20 relative h-screen "
      >
        {/* Apply motion to text */}
        <motion.h1
          className="text-[4rem] font-bold w-2/4 font-heading text-7xl leading-[89px] text-black"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Waste is a<br />
          Resource in <br /> the wrong
          <br /> place
        </motion.h1>

        {/* Animate the background image to enter from the right */}
        <motion.div
          className="absolute inset-0 z-[-1]"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src="/hero-bg.jpg"
            alt="Waste Management Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </motion.div>
      </section>

      <motion.section className="min-h-screen flex flex-col items-center w-full justify-center">
        <About />
      </motion.section>
      <FoodRecyclingSlider />
    </main>
  );
}
