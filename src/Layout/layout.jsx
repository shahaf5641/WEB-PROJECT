// src/comps/Layout.jsx
import React from 'react';
import Header from './header/header';
import Footer from './footer';
import VantaBackground from '../comps/contexts/VantaBackground';
import { DarkModeProvider } from '../comps/contexts/DarkModeContext';
import Home from '../comps/home/home';
import DarkLightToggle from './DarkLightToggle';

export default function Layout({ children }) {
  return (
    <DarkModeProvider>
      <div className='flex flex-col min-h-screen'>
        <VantaBackground />
        <Header />
        <DarkLightToggle />
        <main className='flex-grow flex flex-col text-center'>
          {children}
        </main>
        <Footer className='relative' />
      </div>
    </DarkModeProvider>
  );
}
