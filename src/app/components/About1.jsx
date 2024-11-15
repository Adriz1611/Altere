import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });  // 'triggerOnce' ensures the animation only triggers once

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="flex items-center justify-center bg-white p-8 font-main">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}  // Trigger animation on scroll into view
        className="max-w-7xl w-full border border-gray-300 border-dashed p-12 flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="w-full mb-12">
          <Image
            src="/nav-log.png"
            alt="AlteRe Logo"
            width={200}
            height={67}
            className="mx-auto"
          />
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div variants={itemVariants} className="w-full lg:w-1/3">
            <Image
              src="/map.png"
              alt="Map"
              width={400}
              height={400}
              layout="responsive"
              className="saturate-10"
            />
          </motion.div>
          <div className="w-full lg:w-2/3 space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-semibold text-gray-800 mb-4"
            >
              Altere Innovations Pvt Ltd
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed"
            >
              AlteRe is a sustainability startup with a mission to revolutionize
              food loss and waste reduction through a circular solution. Our
              innovative approach aims to divert surplus food from landfills and
              reintegrate it into the food chain. By transforming food waste into
              alternative nutrition for animals, we create a sustainable and
              resourceful solution.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Our goal is to contribute to a more efficient and environmentally 
              sustainable food system while addressing the challenges of food 
              waste management and promoting the well-being of all individuals.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
