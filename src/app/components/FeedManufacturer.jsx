"use client"

import { ArrowRightIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function Component() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10"
        style={{ color: 'rgb(78 109 82 / 1)' }}
      >
        AlteRe Feed: Revolutionizing Feed Formulation
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-12">
        <ProductCard
          title="AlteRe Bakery Meal"
          description="High-energy cooked feed for cereal grain replacement"
          imageSrc="/FM1.jpeg"
          imageAlt="AlteRe Bakery Meal"
          content="Bakery Meal is a high-energy cooked feed that is an ideal replacement for cereal grain suitable for feeding cattle. It will increase the energy density of all diets when included making it an excellent feed for high-yielding dairy, fattening pigs."
          feedingAdvice="Up to 15% inclusion of DM intake"
          benefits={[
            "Very Palatable",
            "High Fermentable Energy",
            "Excellent Digestibility"
          ]}
          color="blue"
        />
        <ProductCard
          title="AlteRe Savory Meal"
          description="High-energy content for enhanced diet density"
          imageSrc="/FM2.jpeg"
          imageAlt="AlteRe Savory Meal"
          content="Cooked Chips/snacks have a very high energy content that will enhance the energy density of all diets they are included in. They have a high starch content and their cooking gives them excellent digestibility for pigs. This makes them an excellent feed for finishing diets for pigs."
          feedingAdvice="Up to 15% inclusion of DM intake"
          benefits={[
            "Enhances the energy density of diets",
            "Very high energy content",
            "High in starch",
            "Excellent digestibility"
          ]}
          color="orange"
        />
      </div>
    </div>
  )
}

function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
  content,
  feedingAdvice,
  benefits,
  color
}) {
  const colorClasses = {
    blue: "from-blue-50 to-white border-blue-200",
    orange: "from-orange-50 to-white border-orange-200"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg overflow-hidden shadow-lg border ${colorClasses[color]} bg-gradient-to-br p-6 sm:p-8`}
    >
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-base sm:text-lg font-medium mb-4 text-gray-600"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 sm:gap-6 items-start mb-6"
        >
          <div className="sm:pr-4">
            <img src={imageSrc} alt={imageAlt} className="w-full sm:w-48 h-40 sm:h-36 object-cover rounded-md shadow-md mx-auto" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-gray-700">{content}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="mb-4"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Feeding Advice:</h3>
          <span className={`inline-block px-4 py-2 rounded-full text-sm sm:text-base font-medium ${color === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
            {feedingAdvice}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Benefits:</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                className="flex items-center text-sm sm:text-base text-gray-700"
              >
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-green-600" />
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}