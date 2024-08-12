import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationDataBlack from '../../../assets/hamburgerAnimationBlack';
import animationDataWhite from '../../../assets/hamburgerAnimationWhite';
import { useDarkMode } from '../../../comps/contexts/DarkModeContext'; // Adjusted import for DarkModeContext
import HamburgerMenuLink from './HamburgerMenuLink';  // Correct relative path for HamburgerMenuLink
import { hamburgerIconStyle, hamburgerMenuContainerStyle, hamburgerMenuLinksContainerStyle } from '../../../comps/contexts/style';

/**
 * HamburgerMenu Component
 * 
 * This component renders a hamburger menu icon that toggles a dropdown menu with navigation links.
 * The animation and appearance of the menu adapt based on the dark mode state.
 * 
 * The component utilizes:
 * - A Lottie animation for the hamburger menu icon, which toggles between an open and close state.
 * - Dynamic styles and link components that adapt based on the dark mode setting.
 */
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track the menu open/close status
  const animationRef = useRef(); // Reference to control the Lottie animation
  const { darkMode } = useDarkMode(); // Access the current dark mode state

  /**
   * Toggles the menu open/close state.
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Closes the menu.
   */
  const closeMenu = () => {
    setIsOpen(false);
  };

  /**
   * useEffect hook to control the animation playback when the menu's open/close state changes.
   */
  useEffect(() => {
    if (isOpen) {
      animationRef.current.setSpeed(1); // Set the speed of the animation
      animationRef.current.playSegments([0, 60], true); // Play the opening animation
    } else {
      animationRef.current.setSpeed(1); // Set the speed of the animation
      animationRef.current.playSegments([60, 0], true); // Play the closing animation
    }
  }, [isOpen]); // Effect runs when the isOpen state changes

  return (
    <div className="relative md:hidden flex items-center z-50">
      <div onClick={toggleMenu} className={hamburgerIconStyle}>
        <Lottie
          lottieRef={animationRef}
          animationData={darkMode ? animationDataWhite : animationDataBlack} // Switch animation based on dark mode
          loop={false}
          autoplay={false}
          initialSegment={[0, 60]}
        />
      </div>
      {isOpen && (
        <div className={hamburgerMenuContainerStyle}>
          <div className={hamburgerMenuLinksContainerStyle}>
            <HamburgerMenuLink to="/dashboard" onClick={closeMenu}>Dashboard</HamburgerMenuLink>
            <HamburgerMenuLink to="/transactions" onClick={closeMenu}>Transactions</HamburgerMenuLink>
            <HamburgerMenuLink to="/blocks" onClick={closeMenu}>Blocks</HamburgerMenuLink>
            <HamburgerMenuLink to="/explore" onClick={closeMenu}>Explore</HamburgerMenuLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
