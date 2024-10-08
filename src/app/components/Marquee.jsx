import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const logos = [
    '/client-1.png',
    '/client-2.png',
    '/client-3.png',
    '/client-4.png',
    '/client-5.png',
    '/client-6.png',
    '/client-7.png',
    '/client-8.png',
    '/client-9.png',
];

const MarqueeSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [isClient]);

    if (!isClient) {
        return null; 
    }

    return (
        <div className="w-full flex justify-center bg-white py-10 md:py-16">
            <div className="w-4/5 md:w-2/3 overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-extrabold text-colors-green-main text-center mb-6 md:mb-8">
                    IMPACT
                </h2>
                <div className="flex justify-center items-center h-24 md:h-32 relative">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className={`transition-opacity duration-500 absolute ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <Image
                                src={logo}
                                alt={`Client ${index + 1}`}
                                width={200}
                                height={80}
                                className="h-20 md:h-24 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4 md:mt-6">
                    {logos.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 md:h-3 md:w-3 rounded-full mx-1 md:mx-1.5 ${
                                index === currentIndex ? 'bg-black' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarqueeSection;
