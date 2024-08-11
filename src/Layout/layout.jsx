// src/comps/Layout.jsx
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { DarkModeProvider, useDarkMode } from '../comps/contexts/DarkModeContext';
import DarkLightToggle from '../comps/contexts/DarkLightToggle' 
/**
 * LayoutContent component manages the overall layout of the page, applying
 * dark mode or light mode styles based on the user's preference.
 * 
 * @param {object} children - The content to be displayed within the layout.
 */
function LayoutContent({ children }) {
  const { darkMode } = useDarkMode();
 
  return (
    <div
      className={`flex flex-col min-h-screen font-serif ${
        darkMode ? 'text-gray-100' : 'text-gray-800'
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
 
/**
 * Layout component wraps the LayoutContent with the DarkModeProvider to manage
 * dark mode state globally.
 * 
 * @param {object} children - The content to be displayed within the layout.
 */
export default function Layout({ children }) {
  return (
    <DarkModeProvider>
      <LayoutContent>{children}</LayoutContent>
    </DarkModeProvider>
  );
}