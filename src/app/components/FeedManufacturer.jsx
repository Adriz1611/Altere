"use client"

import {useEffect, useState} from 'react'
import {CheckCircle2, ChevronLeft, ChevronRight} from "lucide-react"
import Image from "next/image"
import {motion, AnimatePresence} from "framer-motion"

export default function Component() {
    const products = [
        {
            name: "AlteRe Bakery Meal",
            image: "/FM1.jpeg",
            benefits: [
                "Very Palatable",
                "High Fermentable Energy",
                "Excellent Digestibility"
            ]
        },
        {
            name: "AlteRe Savory Meal",
            image: "/FM2.jpeg",
            benefits: [
                "Enhances the energy density of diets",
                "Very high energy content",
                "High in starch",
                "Excellent digestibility"
            ]
        }
    ]


    return (
        <div
            className="relative w-full py-20 flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-blue-50">
            <div className="relative z-10 w-full max-w-5xl mx-auto mb-20 p-4 sm:p-8">
                <motion.h1
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-green-800 drop-shadow-lg"
                >
                    AlteRe Feed: Revolutionizing Feed Formulation
                </motion.h1>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 ">
                <div><Image src="/FM1.jpeg" alt={"Sera"} width={400} height={400} className="rounded-full aspect-square object-cover border-8 border-colors-green-main" /></div>
                <div>2</div>
                <div>3</div>
                <div><Image src="/FM2.jpeg" alt={"Sera"} width={400} height={400} className="rounded-full aspect-square object-cover border-8 border-colors-green-main" /></div>
                <div><Image src="/FM1.jpeg" alt={"Sera"} width={400} height={400} className="rounded-full aspect-square object-cover border-8 border-colors-green-main" /></div>
                <div>6</div>
            </div>


        </div>
    )
}