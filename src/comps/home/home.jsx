import React from 'react';
import HeroSection from './HeroSection';
import CryptoGrid from './CryptoGrid';
import JoinSection from './JoinSection';
import { homeContainerStyle, homeInnerContainerStyle } from '../contexts/style';

/**
 * Home component
 * 
 * Represents the main page layout for the application.
 * It includes three sections: HeroSection, CryptoGrid, and JoinSection.
 * The container is set to flex and column layout, ensuring it takes up the full height of the screen.
 */
export default function Home() {
  return (
    <div className={homeContainerStyle}>
      <div className={homeInnerContainerStyle}>
        <HeroSection />
        <CryptoGrid />
        <JoinSection />
      </div>
    </div>
  );
}
