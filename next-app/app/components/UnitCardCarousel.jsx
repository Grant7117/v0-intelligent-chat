// next-app/app/components/UnitCardCarousel.jsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, BedDouble, Bath } from 'lucide-react';

const unitsData = [
  {
    unitName: "Unit 101",
    beds: 2,
    baths: 1,
    sqft: 750,
    price: "$250,000",
    images: ["/images/units/101-a.png", "/images/units/101-b.png", "/images/units/101-c.png", "/images/units/101-d.png", "/images/units/101-Kitchen.jpeg"]
  },
  {
    unitName: "Unit 102",
    beds: 3,
    baths: 2,
    sqft: 1000,
    price: "$350,000",
    images: ["/images/units/102-a.png", "/images/units/102-b.png", "/images/units/102-c.png", "/images/units/102-d.png"]
  },
  {
    unitName: "Unit 201",
    beds: 2,
    baths: 1,
    sqft: 780,
    price: "$265,000",
    images: ["/images/units/201-a.png", "/images/units/201-b.png", "/images/units/201-c.png", "/images/units/201-d.png", "/images/units/201-Kitchen.jpeg"]
  },
  {
    unitName: "Unit 202",
    beds: 3,
    baths: 2,
    sqft: 1050,
    price: "$370,000",
    images: ["/images/units/202-a.png", "/images/units/202-b.png", "/images/units/202-c.png", "/images/units/202-d.png"]
  },
  {
    unitName: "Unit 301",
    beds: 2,
    baths: 1,
    sqft: 800,
    price: "$280,000",
    images: ["/images/units/301-a.png", "/images/units/301-b.png", "/images/units/301-c.png", "/images/units/301-d.png", "/images/units/301-e.png"]
  },
  {
    unitName: "Unit 302",
    beds: 3,
    baths: 2.5,
    sqft: 1100,
    price: "$395,000",
    images: ["/images/units/302-a.png", "/images/units/302-b.png", "/images/units/302-c.png", "/images/units/302-d.png", "/images/units/302-e.png"]
  }
];

export default function UnitCardCarousel() {
  const [currentUnitIndex, setCurrentUnitIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousUnit = () => {
    const isFirstUnit = currentUnitIndex === 0;
    const newIndex = isFirstUnit ? unitsData.length - 1 : currentUnitIndex - 1;
    setCurrentUnitIndex(newIndex);
    setCurrentImageIndex(0);
  };

  const goToNextUnit = () => {
    const isLastUnit = currentUnitIndex === unitsData.length - 1;
    const newIndex = isLastUnit ? 0 : currentUnitIndex + 1;
    setCurrentUnitIndex(newIndex);
    setCurrentImageIndex(0);
  };

  const currentUnit = unitsData[currentUnitIndex];
  const currentImage = currentUnit.images[currentImageIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-80 w-full">
          <Image
            src={currentImage}
            alt={`${currentUnit.unitName} image ${currentImageIndex + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900">{currentUnit.unitName}</h3>
          <div className="flex items-center text-gray-600 mt-2">
            <div className="flex items-center mr-4">
              <BedDouble className="mr-2" />
              <span>{currentUnit.beds} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="mr-2" />
              <span>{currentUnit.baths} Baths</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg text-gray-800">{currentUnit.sqft} sqft</p>
            <p className="text-xl font-semibold text-primary-600">{currentUnit.price}</p>
          </div>
        </div>
      </div>

      {/* Unit Navigation */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
        <button onClick={goToPreviousUnit} className="bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg">
          <ChevronLeft size={32} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <button onClick={goToNextUnit} className="bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
