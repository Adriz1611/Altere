import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const AltereFeedComponent = () => {
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
    <div className="relative w-full py-20 flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="relative z-10 w-full max-w-5xl mx-auto mb-20 p-4 sm:p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-green-800 drop-shadow-lg"
        >
          AlteRe Feed: Revolutionizing Feed Formulation
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* First set of overlapping circles */}
        <div className="relative h-64">
          <div className="absolute left-0 top-0 w-32 h-32 rounded-full overflow-hidden border-4 border-green-600">
            <img
              src="/FM1.jpeg"
              alt="AlteRe Bakery Meal"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute left-16 top-8 w-48 h-48 rounded-full border-4 border-green-600 flex items-center justify-center text-green-800 bg-white/80 backdrop-blur-sm">
            very palatable
          </div>
        </div>
        
        {/* First content box */}
        <div className="border-4 border-green-600 rounded-lg h-64 flex items-center justify-center text-green-800 p-4 bg-white/80">
          <ul className="list-none">
            {products[0].benefits.map((benefit, index) => (
              <li key={index} className="flex items-center mb-2">
                <CheckCircle2 className="mr-2 text-green-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Second content box */}
        <div className="border-4 border-green-600 rounded-lg h-64 flex items-center justify-center text-green-800 p-4 bg-white/80">
          <ul className="list-none">
            {products[1].benefits.map((benefit, index) => (
              <li key={index} className="flex items-center mb-2">
                <CheckCircle2 className="mr-2 text-green-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Second set of overlapping circles */}
        <div className="relative h-64">
          <div className="absolute right-0 bottom-0 w-32 h-32 rounded-full overflow-hidden border-4 border-green-600">
            <img
              src="/FM2.jpeg"
              alt="AlteRe Savory Meal"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute right-16 bottom-8 w-48 h-48 rounded-full border-4 border-green-600 flex items-center justify-center text-green-800 bg-white/80 backdrop-blur-sm">
            very palatable
          </div>
        </div>

        {/* Third set of overlapping circles */}
        <div className="relative h-64">
          <div className="absolute left-0 top-0 w-32 h-32 rounded-full overflow-hidden border-4 border-green-600">
            <img
              src="/FM1.jpeg"
              alt="AlteRe Bakery Meal"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute left-16 top-8 w-48 h-48 rounded-full border-4 border-green-600 flex items-center justify-center text-green-800 bg-white/80 backdrop-blur-sm">
            very palatable
          </div>
        </div>

        {/* Third content box */}
        <div className="border-4 border-green-600 rounded-lg h-64 flex items-center justify-center text-green-800 p-4 bg-white/80">
          Content already exist
        </div>
      </div>
    </div>
  )
}

export default AltereFeedComponent