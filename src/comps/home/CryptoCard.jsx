import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

export default function CryptoCard({ imgSrc, title, description, address }) {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    navigate(`/token/${address}`);
  };

  return (
    <div className="group perspective">
      <div className="relative w-80 h-80 duration-700 transform-style preserve-3d group-hover:rotate-y-180">
        <div className={`absolute inset-0 w-full h-full ${darkMode ? 'bg-gray-500' : 'bg-white'} border-2 border-coral rounded-xl shadow-xl backface-hidden`}>
          <div className="flex flex-col items-center justify-center h-full p-4">
            <img src={imgSrc} alt={`${title} Logo`} className="w-20 h-20 mb-4" />
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-indigo-700' : 'text-blue-800'}`}>{title}</h3>
          </div>
        </div>
        
        {/* Back of the card */}
        <div className="absolute inset-0 w-full h-full bg-coral border-2 border-coral rounded-xl shadow-xl transform rotate-y-180 backface-hidden backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full p-4 text-white">
            <h3 className="text-3xl font-bold py-3 text-indigo-600">{title}</h3>
            <p className="text-xl font-semibold">{description}</p>
            <button 
              onClick={handleMoreDetails}
              className="mt-4 px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-full transition-transform duration-500 ease-in-out active:scale-95 hover:bg-indigo-600"
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
