import React from 'react';
import HeroSection from './HeroSection';
import CryptoGrid from './CryptoGrid';
import JoinSection from './JoinSection';
 
/**
 * Home component
 * 
 * Represents the main page layout for the application.
 * It includes three sections: HeroSection, CryptoGrid, and JoinSection.
 * The container is set to flex and column layout, ensuring it takes up the full height of the screen.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <HeroSection />
        <CryptoGrid />
        <JoinSection />
      </div>
    </div>
  );
}