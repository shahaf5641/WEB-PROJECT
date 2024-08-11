import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { DarkModeProvider, useDarkMode } from '../comps/contexts/DarkModeContext';
import DarkLightToggle from '../comps/contexts/DarkLightToggle';

function LayoutContent({ children }) {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col min-h-screen font-serif ${
        darkMode ? 'bg-dark-mode' : 'bg-light-mode'
      }`}
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
