"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { About } from "@/app/components/About2";
import About1 from "./components/About1";
import FoodRecyclingSlider from "@/app/components/Chain";
import Cursor from "./components/Cursor";
import MarqueeSection from "@/app/components/Marquee";
import ContactUs from "./components/ContactUS";
import FeedManufacturer from "./components/FeedManufacturer";
import BorderedTeamCardComponent from "./components/Team"; // Import the Team component

// Define motion variants for animations
const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="py-3 overflow-hidden">
      <Cursor />
      <section
        id="home"
        className="pt-20 flex flex-col lg:flex-row justify-between items-center px-8 md:px-20 lg:px-60 py-20 relative h-screen mt-4 md:mt-8"
      >
        <div className="w-full md:w-3/4 lg:w-2/4">
          {/* Apply motion to main heading */}
          <motion.h1
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold font-heading font-xl md:leading-[75px] lg:leading-[89px] text-black mb-4"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            It&apos;s all about
            <br />
            Circularity
          </motion.h1>

          {/* Add the smaller paragraph below */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-4"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            We make the agri-industry more sustainable by <br></br> maximising
            resource use
          </motion.p>
        </div>

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
            className="object-cover"
          />
        </motion.div>
      </section>

      <section id="about" className="pt-10 md:pt-20">
        <About1 />
      </section>

      <section id="about" className="pt-10 md:pt-20">
        <About />
      </section>

      <section id="food-recycling" className="pt-20 md:pt-10">
        <FoodRecyclingSlider />
      </section>

      <section id="feed-manufacturing" className="pt-20 md:pt-10">
        <FeedManufacturer />
      </section>

      <section id="impact" className="pt-20 md:pt-10">
        <MarqueeSection />
      </section>

      {/* Add the Team section here */}
      <section id="team" className="pt-20 md:pt-10">
        <BorderedTeamCardComponent />
      </section>

      <section id="contact" className="pt-20 md:pt-10">
        <ContactUs />
      </section>
    </main>
  );
}
