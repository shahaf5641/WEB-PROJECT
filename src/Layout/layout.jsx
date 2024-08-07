// src/comps/Layout.jsx
import React from 'react';
import Header from './header/header';
import Footer from './footer';
import VantaBackground from '../comps/contexts/VantaBackground';
import { DarkModeProvider } from '../comps/contexts/DarkModeContext';
import DarkLightToggle from './DarkLightToggle';

export default function Layout({ children }) {
  return (
    <DarkModeProvider>
      <div className='flex flex-col min-h-screen font-serif'>
        <VantaBackground />
        <Header />
        <DarkLightToggle />
        <main className='flex-grow flex flex-col text-center'>
          {children}
        </main>
        <Footer/>
      </div>
    </DarkModeProvider>
  );
}
