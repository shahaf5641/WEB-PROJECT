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
      <div className="relative xs:w-80 xs:h-80 w-60 h-60 duration-700 transform-style preserve-3d group-hover:rotate-y-180">
        <div className={`absolute inset-0 w-full h-full ${darkMode ? 'bg-slate-800' : 'bg-white'} border-2 border-coral rounded-xl shadow-xl backface-hidden`}>
          <div className="flex flex-col items-center justify-center h-full p-4">
            <img src={imgSrc} alt={`${title} Logo`} className="xs:w-20 xs:h-20 w-14 h-14 mb-4" />
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-indigo-600' : 'text-blue-800'}`}>{title}</h3>
          </div>
        </div>
        
        {/* Back of the card */}
        <div className="absolute inset-0 w-full h-full bg-coral border-2 border-coral rounded-xl shadow-xl transform rotate-y-180 backface-hidden backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full p-4 text-white">
            <h3 className="xs:text-3xl text-2xl font-bold py-3 text-indigo-600">{title}</h3>
            <p className="xs:text-xl text-md font-semibold">{description}</p>
            <button 
              onClick={handleMoreDetails}
              className={`mt-4 group/button relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 py-2 text-base xs:text-lg font-semibold tracking-wider transition-all duration-300 ease-in-out hover:gap-2 hover:translate-x-3 ${darkMode ? 'text-gray-200 bg-indigo-600' : ' text-gray-900 bg-blue-500'}`}
            >
              More Details
              <svg
                className="w-5 h-5 ml-2"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
