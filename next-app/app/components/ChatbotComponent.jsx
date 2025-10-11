
// next-app/app/components/ChatbotComponent.jsx

import React, { useState } from 'react';

export default function ChatbotComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-primary-500 text-white rounded-full p-4 shadow-lg hover:bg-primary-600 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">Cornerstone Assistant</h3>
            <button onClick={toggleChat} className="text-white">&times;</button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Dummy messages */}
            <div className="mb-4">
              <p className="bg-gray-200 p-2 rounded-lg">Welcome! How can I help you today?</p>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <input type="text" placeholder="Type your message..." className="w-full p-2 border rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
