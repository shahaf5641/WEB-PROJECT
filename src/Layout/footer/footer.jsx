import React from 'react';
import FooterLink from './FooterLink';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer className={`py-2 border-t border-white ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
      <div className="flex justify-center gap-8">
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/contact">Contact us</FooterLink>
      </div>
      <p className={`text-center mt-2 text-xl ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
        All rights reserved to Better Wallet © 2024
      </p>
    </footer>
  );
}
