import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative sm:hidden flex items-center">
      <button onClick={toggleMenu} className="focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-8 w-36 bg-gray-400 rounded-xl shadow-lg z-10 text-lg p-2">
          <div className="flex flex-col">
            <Link to="/dashboard" onClick={toggleMenu} className="font-semibold text-xl text-black transform transition-transform duration-300 hover:scale-110 p-2">Dashboard</Link>
            <Link to="/transactions" onClick={toggleMenu} className="font-semibold text-xl text-black transform transition-transform duration-300 hover:scale-110 p-2">Transactions</Link>
            <Link to="/blocks" onClick={toggleMenu} className="font-semibold text-xl text-black transform transition-transform duration-300 hover:scale-110 p-2">Blocks</Link>
            <Link to="/explore" onClick={toggleMenu} className="font-semibold text-xl text-black transform transition-transform duration-300 hover:scale-110 p-2">Explore</Link>
          </div>
        </div>
      )}
    </div>
  );
}
