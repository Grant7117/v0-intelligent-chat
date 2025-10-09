'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image'; 
// --- CRITICAL PATH FIX APPLIED HERE ---
// Paths are CORRECTED to './components/'
import Hero from './components/Hero'; 
import LifestyleCarousel from './components/LifestyleCarousel'; 
import UnitCardCarousel from './components/UnitCardCarousel'; 

// TASK 2: Performance optimization (Dynamic Imports)
// Paths are also CORRECTED here
const CallToAction = dynamic(() => import('./components/CallToAction'), { ssr: false });
const ChatbotComponent = dynamic(() => import('./components/ChatbotComponent'), { ssr: false });

// --- FINAL VERIFIED MOCK DATA ---
const heroData = {
  title: "Cornerstone on Arum: Your New Beginning",
  subtitle: "Affordable luxury in the heart of the community.",
  ctaText: "Secure Your Unit Today.",
  // Assuming this path is correct relative to the /public folder
  backgroundImage: "/hero-image.png", 
};


export default function Home() {

  // Mock data for carousels
  const lifestyleSlides = [
    { title: "Pool", description: "Relax by the beautiful pool." },
    { title: "Gym", description: "State-of-the-art fitness center." },
  ];

  const unitCards = [
    { unitName: "Type A", beds: 2, baths: 1, sqft: 750, price: "$250,000" },
    { unitName: "Type B", beds: 3, baths: 2, sqft: 1000, price: "$350,000" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section id="hero" className="w-full">
            <Hero data={heroData} />
        </section>

        {/* Unit Cards Carousel Section */}
        <section id="floor-plans" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Find Your Perfect Home</h2>
                <UnitCardCarousel units={unitCards} />
            </div>
        </section>

        {/* Lifestyle Carousel Section */}
        <section id="lifestyle" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Experience Life at Cornerstone</h2>
                <LifestyleCarousel slides={lifestyleSlides} />
            </div>
        </section>

        {/* Descriptive Content Blocks (Restored Missing Content) */}
        <section id="features" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-primary-600">Unmatched Security and Amenities</h3>
                    <p className="text-gray-600">
                        Cornerstone on Arum is built with your peace of mind as the top priority. Enjoy 24/7 guarded access,
                        perimeter electric fencing, and secure parking. Amenities include a kids' play area, an outdoor gym, and
                        community braai facilities, fostering a safe and engaging environment for all residents.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-primary-600">Financing Made Easy with BetterBond</h3>
                    <p className="text-gray-600">
                        We've partnered with BetterBond to streamline your home financing process. Benefit from competitive interest
                        rates and expert advice tailored to your financial situation. Get pre-approved quickly and easily to
                        secure your dream home at Cornerstone.
                    </p>
                </div>
            </div>
        </section>

        {/* Call To Action - Dynamically Imported */}
        <section id="contact" className="py-16">
            <CallToAction />
        </section>
        
      </main>

      {/* Chatbot - Dynamically Imported and Fixed to Screen */}
      <div className="fixed bottom-4 right-4 z-50">
          <ChatbotComponent />
      </div>

      {/* Footer - Assuming it's part of a Layout component or hardcoded */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} V0 Intelligent Chat. All rights reserved.
      </footer>
    </div>
  );
}