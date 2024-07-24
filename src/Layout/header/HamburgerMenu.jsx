import React, { useState } from 'react';
import NavLink from './navlink';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden flex items-center">
      <button onClick={toggleMenu} className="focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-8 w-[140px] bg-gray-400 rounded-xl shadow-lg z-10 text-xl p-2">
          <div className="flex flex-col">
            <NavLink to="/dashboard" className='p-4' onClick={toggleMenu}>Dashboard</NavLink>
            <NavLink to="/transactions" className='p-4' onClick={toggleMenu}>Transactions</NavLink>
            <NavLink to="/blocks" className='p-4' onClick={toggleMenu}>Blocks</NavLink>
            <NavLink to="/explore" className='p-4' onClick={toggleMenu}>Explore</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
