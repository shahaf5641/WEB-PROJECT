import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationDataBlack from '../../assets/hamburgerAnimationBlack';
import animationDataWhite from '../../assets/hamburgerAnimationWhite';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const animationRef = useRef();
  const { darkMode } = useDarkMode();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      animationRef.current.setSpeed(1);
      animationRef.current.playSegments([0, 60], true);
    } else {
      animationRef.current.setSpeed(1);
      animationRef.current.playSegments([60, 0], true);
    }
  }, [isOpen]);

  return (
    <div className="relative md:hidden flex items-center z-50">
      <div onClick={toggleMenu} className="cursor-pointer w-9 h-9 transform transition-transform duration-200 hover:scale-105">
        <Lottie
          lottieRef={animationRef}
          animationData={animationDataWhite}
          loop={false}
          autoplay={false}
          initialSegment={[0, 60]}
        />
      </div>
      {isOpen && (
        <div className="absolute top-11 w-30 bg-gray-400 rounded-xl shadow-lg z-50 px-1 left-1">
          <div className="flex flex-col font-semibold text-md text-black p-1">
            <Link to="/dashboard" onClick={closeMenu} className="p-[2px] transform transition-transform duration-300 hover:scale-110">Dashboard</Link>
            <Link to="/transactions" onClick={closeMenu} className="p-[2px] transform transition-transform duration-300 hover:scale-110">Transactions</Link>
            <Link to="/blocks" onClick={closeMenu} className="p-[2px] transform transition-transform duration-300 hover:scale-110">Blocks</Link>
            <Link to="/explore" onClick={closeMenu} className="p-[2px] transform transition-transform duration-300 hover:scale-110">Explore</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
