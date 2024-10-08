import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const FeedCard = ({ title, subtitle, imageSrc, description, feedingAdvice, benefits, color }) => (
  <div className={`overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl ${color.bg}`}>
    <div className={`${color.header} p-6`}>
      <h2 className={`${color.title} text-2xl font-bold mb-2`}>{title}</h2>
      <p className="text-gray-700 text-lg">{subtitle}</p>
    </div>
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-6">
        <div className="w-32 h-32 relative flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="text-black text-xl flex-grow">{description}</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">Feeding Advice:</h3>
        <span className={`inline-block ${color.advice} text-white px-3 py-1 rounded-full text-xl`}>
          {feedingAdvice}
        </span>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">Benefits:</h3>
        <ul className="list-none space-y-2 text-xl">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className={`${color.icon} w-5 h-5 mr-2`} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function EnhancedFeedManufacturer() {
  const feedProducts = [
    {
      title: "AlteRe Bakery Meal",
      subtitle: "High-energy cooked feed for cereal grain replacement",
      imageSrc: "/FM1.jpeg",
      description: "Bakery Meal is a high-energy cooked feed that is an ideal replacement for cereal grain suitable for feeding cattle. It will increase the energy density of all diets when included making it an excellent feed for high-yielding dairy, fattening pigs.",
      feedingAdvice: "Up to 15% inclusion of DM intake",
      benefits: ["Very Palatable", "High Fermentable Energy", "Excellent Digestibility"],
      color: {
        bg: "bg-slate-50",
        header: "bg-slate-100",
        title: "text-slate-900 ",
        advice: "bg-slate-800",
        icon: "text-slate-800"
      }
    },
    {
      title: "AlteRe Savory Meal",
      subtitle: "High-energy content for enhanced diet density",
      imageSrc: "/FM2.jpeg",
      description: "Cooked Chips/snacks have a very high energy content that will enhance the energy density of all diets they are included in. They have a high starch content and their cooking gives them excellent digestibility for pigs. This makes them an excellent feed for finishing diets for pigs.",
      feedingAdvice: "Up to 15% inclusion of DM intake",
      benefits: ["Enhances the energy density of diets", "Very high energy content", "High in starch", "Excellent digestibility"],
      color: {
        bg: "bg-amber-50",
        header: "bg-amber-100",
        title: "text-amber-700",
        advice: "bg-amber-600",
        icon: "text-amber-600"
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold text-colors-green-main text-center mb-12">
        AlteRe Feed: <span className="text-colors-green-main">Revolutionizing Feed Formulation</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        {feedProducts.map((product, index) => (
          <FeedCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
