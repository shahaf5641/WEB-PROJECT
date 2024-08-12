import React from 'react';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import logodark from '../../assets/logodark.png';
import logolight from '../../assets/logolight.png';
import { Link } from 'react-router-dom';
import {
  heroLogoContainer,
  heroLogoImage,
  heroHeading,
  heroDescription,
  heroButton,
  heroButtonHoverEffect,
  heroButtonHoverEffectInner,
  heroSectionContainer,
  heroButtonTextStyle,
} from '../contexts/style';

/**
 * HeroSection component
 * 
 * Displays the main hero section of the website, including the logo, heading, description, and navigation button.
 * The appearance adapts based on the user's dark mode preference.
 */
export default function HeroSection() {
  const { darkMode } = useDarkMode();

  return (
    <div className={heroSectionContainer}>

      {/* Main site logo element */}
      <div className={heroLogoContainer(darkMode)}>
        <img 
          src={darkMode ? logodark : logolight} 
          alt="Site Logo" 
          className={heroLogoImage} 
        />
      </div>

      {/* Site heading */}
      <h1 className={heroHeading}>Welcome to Better Wallet</h1>

      {/* Short description of the site */}
      <p className={heroDescription}>Your gateway to cryptocurrency insights and the latest trends</p>

      {/* Navigation button to dashboard */}
      <Link to="/dashboard">
        <button className={heroButton(darkMode)}>
          <span className={heroButtonTextStyle}>Get Started</span>

          {/* Button hover effect */}
          <div className={heroButtonHoverEffect}>
            <div className={heroButtonHoverEffectInner}></div>
          </div>
        </button>
      </Link>
    </div>
  );
}
