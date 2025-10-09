// next-app/app/components/PlaceholderName.jsx
import React from 'react';

export default function PlaceholderComponent(props) { 
  // You must edit the text below to match the component name (e.g., 'Chatbot')
  return (
    <div className="p-4 border-2 border-dashed border-gray-400 bg-yellow-50 text-center">
      <h3 className="text-lg font-bold text-yellow-700">COMPONENT PLACEHOLDER: {props.name}</h3>
    </div>
  );
}