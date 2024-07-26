import React from 'react';

export default function CryptoCard({ imgSrc, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center text-center w-full h-full">
      <img src={imgSrc} alt={`${title} Logo`} className="w-12 h-12 mb-4" />
      <div>
        <h3 className="text-3xl font-semibold mb-2 text-blue-800">{title}</h3>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
}
