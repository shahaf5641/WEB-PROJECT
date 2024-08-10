// src/comps/Layout.jsx
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { DarkModeProvider, useDarkMode } from '../comps/contexts/DarkModeContext';
import DarkLightToggle from './DarkLightToggle';

function LayoutContent({ children }) {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col min-h-screen font-serif ${
        darkMode
          ? 'text-gray-100'
          : 'text-gray-800'
      }`}
      style={{
        background: darkMode
          ? 'radial-gradient(circle, rgba(26,31,107,1) 0%, rgba(0,0,0,1) 100%)'
          : 'radial-gradient(circle, rgba(172,190,225,1) 0%, rgba(24,87,227,1) 100%)'
      }}
    >
      <Header />
      <DarkLightToggle />
      <main className='flex-grow flex flex-col text-center'>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <DarkModeProvider>
      <LayoutContent>{children}</LayoutContent>
    </DarkModeProvider>
  );
}
