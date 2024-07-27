import React from 'react';
import HeroSection from './HeroSection';
import CryptoGrid from './CryptoGrid';
import JoinSection from './JoinSection';

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
