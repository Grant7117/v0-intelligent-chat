// This file serves as the main landing page structure and content container for Cornerstone on Arum.
// It includes imports for necessary components and defines the main page layout.
'use client'; 

import React from 'react';
// ASSUMED IMPORTS: These must exist in your 'components' directory for the page to render.
import Hero from '../components/Hero'; 
import LifestyleCarousel from '../components/LifestyleCarousel'; 
import UnitCardCarousel from '../components/UnitCardCarousel'; 
import CallToAction from '../components/CallToAction'; 
// TASK 2: CRITICAL CHATBOT INTEGRATION IMPORT
import ChatbotComponent from '../components/ChatbotComponent'; 

// --- FINAL VERIFIED MOCK DATA ---
// NOTE: backgroundImage path is fixed to match the verified file location in /public.
const heroData = {
  title: "Cornerstone on Arum: Your New Beginning",
  subtitle: "Affordable luxury in the heart of the community.",
  ctaText: "Secure Your Unit Today",
  // FIX: Path is set correctly for the image located at /public/hero-image.png
  backgroundImage: "/hero-image.png", 
};

const lifestyleSlides = [
  { id: 1, image: "/public/images/lifestyle-1.jpg", caption: "Vibrant Community Parks" },
  { id: 2, image: "/public/images/lifestyle-2.jpg", caption: "Modern Facilities" },
  { id: 3, image: "/public/images/lifestyle-3.jpg", caption: "Secure & Family-Friendly" },
];

const unitCards = [
  { id: 1, title: "The Studio", price: "From R799,000", layoutImage: "/public/images/floorplan-studio.png" },
  { id: 2, title: "Two Bedroom", price: "From R950,000", layoutImage: "/public/images/floorplan-two-bed.png" },
  { id: 3, title: "Three Bedroom", price: "From R1,200,000", layoutImage: "/public/images/floorplan-three-bed.png" },
];
// --- End Mock Data ---

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 🟢 TASK 1 FIX: Hero Section with Correct Image Path */}
      <section id="hero" className="w-full">
        <Hero data={heroData} />
      </section>

      {/* 🟢 TASK 1 FIX: Lifestyle Carousel Section (Layout Structure Fixed) */}
      <section id="lifestyle" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Experience Life at Cornerstone</h2>
          <LifestyleCarousel slides={lifestyleSlides} /> 
        </div>
      </section>
      
      {/* 🟢 TASK 1 FIX: Unit Cards Carousel Section (Layout Structure Fixed) */}
      <section id="floor-plans" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Find Your Perfect Home</h2>
          <UnitCardCarousel units={unitCards} /> 
        </div>
      </section>

      {/* 🟢 TASK 1 FIX: Missing Content Blocks - Restored Structural Integrity */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* First Descriptive Block */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">Unmatched Security and Amenities</h3>
            <p className="text-gray-600">
              Cornerstone on Arum is built with your peace of mind as the top priority. Enjoy 24/7 guarded access,
              perimeter electric fencing, and secure parking. Amenities include a kids' play area, an outdoor gym, and
              community braai facilities, fostering a safe and engaging environment for all residents.
            </p>
          </div>

          {/* Second Descriptive Block (BetterBond Details/Financing) */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">Financing Made Easy with BetterBond</h3>
            <p className="text-gray-600">
              We've partnered with BetterBond to streamline your home financing process. Benefit from competitive interest
              rates and expert advice tailored to your financial situation. Get pre-approved quickly and easily to
              secure your dream home at Cornerstone. All details and application links are ready and available.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action/Contact Section */}
      <section id="contact" className="py-16">
        <CallToAction />
      </section>

      {/* 🚀 TASK 2: COMPLETE CHATBOT INTEGRATION - Final Rendering Line */}
      <div className="fixed bottom-4 right-4 z-50">
        <ChatbotComponent />
      </div>
      
    </main>
  );
}