
// next-app/app/components/CallToAction.jsx

import React from 'react';

export default function CallToAction() {
  return (
    <div className="bg-primary-500 text-white text-center p-12 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
      <p className="mb-8">
        Units are selling fast. Contact us today to schedule a viewing and secure your spot at Cornerstone on Arum.
      </p>
      <button className="bg-white text-primary-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
        Contact Us Now
      </button>
    </div>
  );
}
