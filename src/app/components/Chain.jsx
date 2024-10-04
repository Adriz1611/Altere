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
    <div className="bg-white p-8 w-full min-h-screen mt-20">
      <h2 className="text-3xl font-bold text-center text-green-700 pb-36">FOOD RECYCLING</h2>
      
      <div className="relative w-80 h-80 mx-auto mb-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute ${getPosition(item.position)} flex flex-col items-center text-center`}
          >
            <div className="bg-green-700 p-3 rounded-full mb-2">
              <item.icon className="w-8 h-8 text-white" />
            </div>
            <p className="font-bold text-sm mb-1">{item.title}</p>
            {item.subtitle && <p className="font-bold text-sm">{item.subtitle}</p>}
          </div>
        ))}
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-2xl font-bold text-green-700">AlteRe</p>
        </div>
      </div>
    </div>
  );
};

export default StaticFoodRecyclingInfographic;