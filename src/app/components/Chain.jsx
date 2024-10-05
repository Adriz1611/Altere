import React from 'react';
import { Truck, PenSquare, Check, X, Leaf, HandCoins } from 'lucide-react';

const StaticFoodRecyclingInfographic = () => {
  const items = [
    { icon: Truck, title: '100 %', subtitle: 'Diversion From Landfill', position: 'top' },
    { icon: HandCoins, title: 'Save on', subtitle: 'Disposal Cost', position: 'top-left' },
    { icon: PenSquare, title: 'Full Traceability', subtitle: '', position: 'top-right' },
    { icon: X, title: 'Zero Leakage', subtitle: '', position: 'bottom-left' },
    { icon: Leaf, title: 'Environmental', subtitle: 'Saving', position: 'bottom-right' },
    { icon: Check, title: 'Impact', subtitle: '', position: 'bottom' },
  ];

  const getPosition = (position) => {
    switch(position) {
      case 'top': return 'top-0 left-1/2 -translate-x-1/2 -translate-y-full';
      case 'top-left': return 'top-1/4 left-0 -translate-x-full -translate-y-1/2';
      case 'top-right': return 'top-1/4 right-0 translate-x-full -translate-y-1/2';
      case 'bottom-left': return 'bottom-1/4 left-0 -translate-x-full translate-y-1/2';
      case 'bottom-right': return 'bottom-1/4 right-0 translate-x-full translate-y-1/2';
      case 'bottom': return 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full';
      default: return '';
    }
  };

  return (
    <div className="bg-blue-300 p-8 w-full min-h-screen ">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-green-700 mt-12 md:mt-24">FOOD RECYCLING</h2>
      
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto mt-32 md:mt-56">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute ${getPosition(item.position)} flex flex-col items-center text-center`}
          >
            <div className="bg-green-700 p-3 md:p-5 rounded-full mb-2 md:mb-3">
              <item.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
            </div>
            <p className="font-bold text-sm md:text-lg mb-1">{item.title}</p>
            {item.subtitle && <p className="font-bold text-sm md:text-lg">{item.subtitle}</p>}
          </div>
        ))}
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-xl md:text-3xl font-bold text-green-700">AlteRe</p>
        </div>
      </div>
    </div>
  );
};

export default StaticFoodRecyclingInfographic;
