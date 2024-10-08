'use client'

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Recycle, DollarSign, FileSearch, ShieldCheck, Leaf, BarChart3 } from 'lucide-react';

export default function InteractiveFoodRecyclingSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setIsVisible(isInView);
  }, [isInView]);

  const features = [
    { title: "Landfill Diversion", icon: Recycle, color: "text-emerald-500", bgColor: "bg-emerald-100" },
    { title: "Cost Savings", icon: DollarSign, color: "text-sky-500", bgColor: "bg-sky-100" },
    { title: "Full Traceability", icon: FileSearch, color: "text-violet-500", bgColor: "bg-violet-100" },
    { title: "Zero Leakage", icon: ShieldCheck, color: "text-rose-500", bgColor: "bg-rose-100" },
    { title: "Environmental Impact", icon: Leaf, color: "text-amber-500", bgColor: "bg-amber-100" },
    { title: "Measurable Results", icon: BarChart3, color: "text-indigo-500", bgColor: "bg-indigo-100" },
  ];

  return (
    <section ref={ref} className="w-full py-12 md:py-20 bg-white font-main">
      <div className="container mx-auto px-4 md:px-6 w-[95%] md:w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-colors-green-main mb-6">Revolutionizing Food Recycling</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover how AlteRe is transforming food waste management with cutting-edge solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-8 rounded-lg ${feature.bgColor} cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 group relative ${activeFeature === index ? "shadow-lg scale-105" : ""}`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className={`relative ${feature.color} mr-4 transition-all duration-300 group-hover:scale-110`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <feature.icon className="h-10 w-10" />
                  <motion.div
                    className={`absolute inset-0 ${feature.color} blur-lg opacity-0 group-hover:opacity-100`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.2 }}
                  >
                    <feature.icon className="h-10 w-10" />
                  </motion.div>
                </motion.div>
                <h3 className={`text-xl font-bold ${feature.color}`}>{feature.title}</h3>
              </div>
              <motion.p
                className="text-xl text-black"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {getFeatureDescription(feature.title)}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-black max-w-3xl mx-auto">
            Experience the future of food waste management with AlteRe&apos;s innovative solutions.
            Our comprehensive approach ensures maximum efficiency and environmental benefit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function getFeatureDescription(title) {
  switch (title) {
    case "Landfill Diversion":
      return "Ensure all your food waste is repurposed, keeping it out of landfills and reducing environmental impact.";
    case "Cost Savings":
      return "Significantly reduce your waste disposal costs while contributing to a more sustainable future.";
    case "Full Traceability":
      return "Track your waste from collection to recycling with our advanced monitoring system for complete transparency.";
    case "Zero Leakage":
      return "Our containment process guarantees no waste leakage, ensuring clean and safe operations throughout.";
    case "Environmental Impact":
      return "Measurably reduce your carbon footprint and actively contribute to local and global sustainability efforts.";
    case "Measurable Results":
      return "Receive detailed reports on your recycling impact, perfect for CSR initiatives and environmental audits.";
    default:
      return "";
  }
}
