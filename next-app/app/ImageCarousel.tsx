
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface CarouselItem {
  id: number;
  src: string;
  alt: string;
  unitType?: string;
  downloadUrl?: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
  title: string;
}

export default function ImageCarousel({ items, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 flex flex-col items-center">
                  <img src={item.src} alt={item.alt} className="w-full md:w-4/5 lg:w-3/5 h-auto object-cover rounded-lg shadow-lg" />
                  {item.unitType && (
                    <div className="text-center mt-4">
                      <h3 className="text-2xl font-semibold">{item.unitType}</h3>
                      {item.downloadUrl && (
                        <a 
                          href={item.downloadUrl} 
                          download
                          className="mt-2 inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Download Floor Plan
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePrev} 
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={handleNext} 
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
