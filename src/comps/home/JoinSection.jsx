import React from 'react';
 
/**
 * JoinSection component
 * 
 * Displays a call-to-action section inviting users to join the cryptocurrency revolution.
 * It features a heading and a description, centered on the page.
 */
export default function JoinSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Join the Crypto Revolution</h2>
      <p className="text-xl text-gray-200 mb-8">Stay updated with the latest news and trends in the cryptocurrency world</p>
    </div>
  );
}