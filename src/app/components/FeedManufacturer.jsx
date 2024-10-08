import Image from "next/image";

export default function FeedManufacturer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-emerald-700">
        AlteRe Feed: Ideal replacement of traditional grains in feed formulation
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* AlteRe Bakery Meal Card */}
        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-lg">
          <div className="bg-emerald-100 p-4">
            <h2 className="text-emerald-700 text-2xl md:text-2xl font-bold">AlteRe Bakery Meal</h2>
            <p className="text-xl md:text-xl text-black">High-energy cooked feed for cereal grain replacement</p>
          </div>
          <div className="p-4 md:p-6">
            <div className="w-24 h-24 relative mb-4">
              <Image
                src="/FM1.jpeg"
                alt="AlteRe Bakery Meal"
                width={200}
                height={80}
                className="rounded-md"
              />
            </div>
            <p className="text-xl md:text-xl mb-4">
              Bakery Meal is a high-energy cooked feed that is an ideal replacement for cereal grain suitable for feeding cattle. It will increase the energy density of all diets when included making it an excellent feed for high-yielding dairy, fattening pigs.
            </p>
            <p className="text-xl md:text-xl mb-4">
              Bakery Meal has an appreciable sugar content that will enrich the fermentable energy supply of most diets lacking in this source of energy.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-xl md:text-base">Feeding Advice:</h3>
              <span className="inline-block bg-gray-200 text-black text-xl px-2 py-1 rounded-full">Up to 15% inclusion of DM intake</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-xl md:text-base">Benefits:</h3>
              <ul className="list-disc list-inside text-xl md:text-xl">
                <li>Very Palatable</li>
                <li>High Fermentable Energy</li>
                <li>Excellent Digestibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AlteRe Savory Meal Card */}
        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-lg">
          <div className="bg-amber-100 p-4">
            <h2 className="text-amber-700 text-2xl md:text-2xl font-bold">AlteRe Savory Meal</h2>
            <p className="text-xl md:text-xl text-black">High-energy content for enhanced diet density</p>
          </div>
          <div className="p-4 md:p-6">
            <div className="w-24 h-24 relative mb-4">
              <Image
                src="/FM2.jpeg"
                alt="AlteRe Savory Meal"
                width={200}
                height={80}
                className="rounded-md"
              />
            </div>
            <p className="text-xl md:text-xl mb-4">
              Cooked Chips/snacks have a very high energy content that will enhance the energy density of all diets they are included in. They have a high starch content and their cooking gives them excellent digestibility for pigs. This makes them an excellent feed for finishing diets for pigs.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-xl md:text-base">Feeding Advice:</h3>
              <span className="inline-block bg-gray-200 text-black text-xl px-2 py-1 rounded-full">Up to 15% inclusion of DM intake</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-xl md:text-base">Benefits:</h3>
              <ul className="list-disc list-inside text-xl md:text-xl">
                <li>Enhances the energy density of diets</li>
                <li>Very high energy content</li>
                <li>High in starch</li>
                <li>Excellent digestibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
