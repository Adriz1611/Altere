"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { About } from "@/app/components/About";

export default function Home() {
    return (
        <main className="py-3">
            <section id="hero" className="flex flex-row justify-between items-center px-60 py-20 relative h-screen">
                <h1 className="text-[4rem] font-bold w-2/4 font-heading text-7xl leading-[89px] text-black  ">
                    Waste is a<br></br>Resource in <br></br> the wrong<br></br> place
                </h1>
                <Image
                    src="/hero-bg.jpg"
                    alt="Waste Management Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-[-1]"
                />
            </section>
            <section className="min-h-screen flex flex-col items-center w-full justify-center">
                <About />
            </section>
        </main>
    );
}
