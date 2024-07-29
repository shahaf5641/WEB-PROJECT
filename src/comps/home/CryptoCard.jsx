import React from 'react';

export default function CryptoCard({ imgSrc, title, description }) {
  return (
    <div className="group perspective">
      <div className="relative w-96 h-64 duration-700 transform-style preserve-3d group-hover:rotate-y-180">
        <div className="absolute inset-0 w-full h-full bg-white border-2 border-coral rounded-xl shadow-xl backface-hidden">
          <div className="flex flex-col items-center justify-center h-full p-4">
            <img src={imgSrc} alt={`${title} Logo`} className="w-20 h-20 mb-4" />
            <h3 className="text-3xl font-bold text-blue-800">{title}</h3>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-coral border-2 border-coral rounded-xl shadow-xl transform rotate-y-180 backface-hidden">
          <div className="flex flex-col items-center justify-center h-full p-4 text-white">
            <h3 className="text-2xl font-bold py-2">{title}</h3>
            <p className="text-xl font-semibold">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
