"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <></>
  //   <motion.div
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     transition={{ duration: 0.8 }}
  //     className="container mx-auto px-4 pt-20"
  //   >
  //     <div className="text-center mb-12">
  //       <motion.h1
  //         className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
  //         initial={{ y: -20 }}
  //         animate={{ y: 0 }}
  //         transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
  //       >
  //         <motion.span
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ delay: 0.5, duration: 0.5 }}
  //           className="block mb-2"
  //         >
  //           Green solutions
  //         </motion.span>
  //         <motion.span
  //           className="inline-block align-middle mx-2"
  //           initial={{ rotate: -180, opacity: 0 }}
  //           animate={{ rotate: 0, opacity: 1 }}
  //           transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
  //         >
  //           <img
  //             src="/green-bin-icon.png"
  //             alt="Green bin"
  //             className="w-16 h-16 inline"
  //           />
  //         </motion.span>
  //         <motion.span
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ delay: 0.9, duration: 0.5 }}
  //           className="block"
  //         >
  //           for
  //         </motion.span>
  //         <motion.span
  //           className="bg-[#536e59] text-white px-4 py-2 rounded-full inline-block mt-2"
  //           initial={{ scaleX: 0 }}
  //           animate={{ scaleX: 1 }}
  //           transition={{ delay: 1.1, duration: 0.5 }}
  //         >
  //           Urban Waste Challenges
  //         </motion.span>
  //       </motion.h1>
  //       <motion.p
  //         className="text-gray-600 text-center max-w-2xl mx-auto mb-8"
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ delay: 1.3, duration: 0.5 }}
  //       >
  //         Tailored solutions for efficient waste management. Consistent waste
  //         collection, responsible disposal ensuring sustainability. Join us in
  //         revolutionizing the way businesses manage their waste!
  //       </motion.p>
  //       <motion.div
  //         className="flex justify-center gap-4 mb-12"
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ delay: 1.5, duration: 0.5 }}
  //       >
  //         <motion.button
  //           className="bg-white text-black border border-[#536e59] px-6 py-2 rounded-full transition-colors duration-300 ease-in-out"
  //           whileHover={{
  //             scale: 1.05,
  //             backgroundColor: "#536e59",
  //             color: "white",
  //           }}
  //           whileTap={{ scale: 0.95 }}
  //         >
  //           Order Pickup
  //         </motion.button>
  //         <motion.button
  //           className="bg-white text-black border border-[#536e59] px-6 py-2 rounded-full transition-colors duration-300 ease-in-out"
  //           whileHover={{
  //             scale: 1.05,
  //             backgroundColor: "#536e59",
  //             color: "white",
  //           }}
  //           whileTap={{ scale: 0.95 }}
  //         >
  //           Call Now
  //         </motion.button>
  //       </motion.div>
  //     </div>

  //     <motion.div
  //       className="relative mx-auto mb-12 w-full h-[60vh] shadow-lg rounded-lg overflow-hidden"
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ delay: 2, duration: 0.5 }}
  //     >
  //       <motion.div
  //         animate={{ y: [0, -10, 0] }}
  //         transition={{
  //           delay: 2.5,
  //           duration: 3,
  //           repeat: Infinity,
  //           ease: "easeInOut",
  //         }}
  //         className="w-full h-full"
  //       >
  //         <Image
  //           src="/waste.jpg"
  //           alt="Floating image"
  //           layout="fill"
  //           objectFit="cover"
  //           className="rounded-lg"
  //         />
  //       </motion.div>
  //     </motion.div>

  //     <motion.div 
  //       className="flex bg-black text-white p-8 rounded-lg"
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ delay: 2.2, duration: 0.5 }}
  //     >
  //       <div className="flex flex-col justify-center w-1/4 pr-8">
  //         <h2 className="text-4xl font-bold transform -rotate-90 whitespace-nowrap origin-left">
  //           About us
  //         </h2>
  //       </div>
  //       <div className="w-3/4">
  //         <h2 className="text-4xl font-bold mb-4">What we do</h2>
  //         <p className="text-gray-300">
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
  //           mauris magna, congue vitae erat eu, semper iaculis augue.
  //           Suspendisse magna mi, scelerisque nec fermentum vel, lobortis non
  //           magna. Proin viverra
  //         </p>
  //       </div>
  //     </motion.div>
  //   </motion.div>
  );
}