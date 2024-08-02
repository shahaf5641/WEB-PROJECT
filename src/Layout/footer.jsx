import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../comps/contexts/DarkModeContext';

export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer className={`py-2 border-t border-white ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
      <div className="flex justify-center gap-8">
        <Link
          to="/about"
          className={`font-semibold text-2xl transform transition-transform duration-300 hover:scale-110 ${darkMode ? 'text-violet-600' : 'text-blue-600'}`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`font-semibold text-2xl transform transition-transform duration-300 hover:scale-110 ${darkMode ? 'text-violet-600' : 'text-blue-600'}`}
        >
          Contact us
        </Link>
      </div>
      <p className={`text-center mt-2 text-xl ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
        All rights reserved to Better Wallet © 2024
      </p>
    </footer>
  );
}
