import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../../assets/hamburgerAnimationBlack';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const animationRef = useRef();

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
    <div className="relative md:hidden flex items-center">
      <div onClick={toggleMenu} className="cursor-pointer w-9 h-9 transform transition-transform duration-200 hover:scale-105">
        <Lottie
          lottieRef={animationRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          initialSegment={[0, 60]}
        />
      </div>
      {isOpen && (
        <div className="absolute top-10 w-36 bg-gray-400 rounded-xl shadow-lg z-10 text-lg p-1 left-1">
          <div className="flex flex-col">
            <Link to="/dashboard" onClick={closeMenu} className="font-semibold text-xl text-black transform transition-transform duration-300 hover:scale-110 p-2">Dashboard</Link>
            <Link to="/transactions" onClick={closeMenu} className="font-semibold text-xl text-black transform transition-transform duration-300 hover:scale-110 p-2">Transactions</Link>
            <Link to="/blocks" onClick={closeMenu} className="font-semibold text-xl text-black transform transition-transform duration-300 hover:scale-110 p-2">Blocks</Link>
            <Link to="/explore" onClick={closeMenu} className="font-semibold text-xl text-black transform transition-transform duration-300 hover:scale-110 p-2">Explore</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
