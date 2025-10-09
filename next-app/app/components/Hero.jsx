// next-app/app/components/Hero.jsx (Optimized with Next.js Image)

import React from 'react';
import Image from 'next/image';

export default function Hero({ data }) {
  const { title, subtitle, ctaText, backgroundImage } = data;

  if (!backgroundImage) {
    return (
      <div className="bg-gray-800 text-white p-20 text-center">
        <h1>{title}</h1>
        <p>Error: Hero image path missing.</p>
      </div>
    );
  }

  return (
    <div className="relative h-[600px] md:h-[80vh] w-full flex items-center justify-center">
      
      <Image
        src={backgroundImage}
        alt="Cornerstone on Arum Hero Background"
        fill 
        style={{ objectFit: 'cover' }}
        priority
        sizes="(max-width: 768px) 100vw, 50vw" 
        className="brightness-50"
      />

      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
          {subtitle}
        </p>
        <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-xl">
          {ctaText}
        </button>
      </div>
    </div>
  );
}