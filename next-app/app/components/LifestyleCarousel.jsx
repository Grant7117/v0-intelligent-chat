// next-app/app/components/LifestyleCarousel.jsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselData = [
  { src: "/images/lifestyle/image-bayside-mall-b.png", title: "Bayside Mall", description: "Shopping and entertainment." },
  { src: "/images/lifestyle/image-big-bay-beach.png", title: "Big Bay Beach", description: "Enjoy the sun and surf." },
  { src: "/images/lifestyle/image-big-bay-radiate.jpeg", title: "Radiate at Big Bay", description: "Vibrant local scene." },
  { src: "/images/lifestyle/image-bloubergstrand-beach.png", title: "Bloubergstrand Beach", description: "Iconic views of Table Mountain." },
  { src: "/images/lifestyle/image-blue-peter-hotel.png", title: "Blue Peter Hotel", description: "A local landmark." },
  { src: "/images/lifestyle/image-doodles.jpg", title: "Doodles Restaurant", description: "Beachfront dining." },
  { src: "/images/lifestyle/image-edenonthebay.jpeg", title: "Eden on the Bay", description: "Lifestyle and shopping." },
  { src: "/images/lifestyle/image-food.jpg", title: "Local Cuisine", description: "A taste of the local flavor." },
  { src: "/images/lifestyle/image-kite-beach.jpeg", title: "Kite Beach", description: "World-famous kitesurfing spot." },
  { src: "/images/lifestyle/image-myciti-bus.jpeg", title: "MyCiTi Bus", description: "Convenient public transport." },
  { src: "/images/lifestyle/image-netcare-blaauwberg.jpg", title: "Netcare Blaauwberg Hospital", description: "Quality healthcare nearby." },
  { src: "/images/lifestyle/image-table-bay-mall-a.jpeg", title: "Table Bay Mall", description: "A premier shopping destination." },
  { src: "/images/lifestyle/image-table-bay-mall.jpeg", title: "Table Bay Mall", description: "Endless shopping options." },
  { src: "/images/lifestyle/image-table-view-high-school.png", title: "Table View High School", description: "Education in the community." },
  { src: "/images/lifestyle/image-table-view-shopping-mall.png", title: "Table View Shopping Mall", description: "Your local convenience." },
  { src: "/images/lifestyle/image-virgin-active.png", title: "Virgin Active Gym", description: "Stay fit and active." },
  { src: "/images/lifestyle/images-balcony.png", title: "Apartment Balcony", description: "Private outdoor space." }
];

export default function LifestyleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === carouselData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentSlide = carouselData[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-2xl">
        <div className="relative h-96 w-full">
          <Image
            src={currentSlide.src}
            alt={currentSlide.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="transition-opacity duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
        <button onClick={goToPrevious} className="bg-white/50 hover:bg-white/80 text-gray-800 p-2 rounded-full shadow-md">
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <button onClick={goToNext} className="bg-white/50 hover:bg-white/80 text-gray-800 p-2 rounded-full shadow-md">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-2xl font-semibold text-gray-800">{currentSlide.title}</h3>
        <p className="text-gray-600">{currentSlide.description}</p>
      </div>
    </div>
  );
}
