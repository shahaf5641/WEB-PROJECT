import React from 'react';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import logodark from '../../assets/logodark.png';
import logolight from '../../assets/logolight.png';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const { darkMode } = useDarkMode();

  return (
    <div className="text-center mb-12">
      <div 
        className={`relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-6 rounded-full overflow-hidden ${darkMode ? 'shadow-gray-400' : 'shadow-yellow-100'} shadow-md transition-transform transform hover:scale-105 flex flex-col items-center text-center`}
      >
        <img 
          src={darkMode ? logolight : logodark} 
          alt="Site Logo" 
          className="w-full h-full object-cover transform scale-125" 
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Welcome to Better Wallet</h1>
      <p className="text-xl sm:text-2xl mt-4 text-gray-200">Your gateway to cryptocurrency insights and the latest trends</p>
      <Link to="/dashboard">
        <button className="mt-8 px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 text-white text-lg sm:text-xl font-semibold rounded-full relative overflow-hidden transition-transform duration-500 ease-in-out active:scale-95 hover:bg-indigo-600 hover:scale-110">
          <span className="relative z-10">Get Started</span>
        </button>
      </Link>
    </div>
  );
}
