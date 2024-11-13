"use client"

import { useEffect, useState } from 'react'
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

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

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/cow-background.jpg')" }}
      ></div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto p-4 sm:p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-green-800 drop-shadow-lg"
        >
          AlteRe Feed: Revolutionizing Feed Formulation
        </motion.h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-green-200"
          >
            <div className="p-4 sm:p-8 bg-gradient-to-br from-green-50 via-white to-blue-50">
              <div className="pb-4 sm:pb-6">
                <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm font-semibold text-green-800 bg-green-100 rounded-full mx-auto mb-3 sm:mb-4 block w-fit shadow-md">Premium Product</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-2">
                  {products[currentIndex].name}
                </h2>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={products[currentIndex].image}
                    alt={products[currentIndex].name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <ul className="space-y-3 sm:space-y-4 w-full max-w-md">
                  {products[currentIndex].benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg border border-green-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: benefitIndex * 0.1 }}
                    >
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base font-medium text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-6 sm:mt-8 space-x-4">
          <button onClick={prevSlide} className="p-2 rounded-full bg-green-800 text-white hover:bg-green-700 transition-colors shadow-lg">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full bg-green-800 text-white hover:bg-green-700 transition-colors shadow-lg">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}