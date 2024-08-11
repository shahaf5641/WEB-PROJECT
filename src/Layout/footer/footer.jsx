 
import React from 'react';
import FooterLink from './FooterLink';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
 
// The Footer component is responsible for displaying the footer section of the website.
// It includes navigation links to the "About" and "Contact us" pages, and a copyright notice.
// The appearance of the footer, including its background color and text color, adapts based on the current dark mode setting.
export default function Footer() {
  const { darkMode } = useDarkMode();
 
  return (
    <footer className={`py-2 border-t border-white ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
      {/* A flex container that centers the footer links horizontally with a gap between them */}
      <div className="flex justify-center gap-8">
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/contact">Contact us</FooterLink>
      </div>
      {/* A paragraph element that displays the copyright text.
          The text is centered, with the color changing based on dark mode. */}
      <p className={`text-center mt-2 text-xl ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
        All rights reserved to Better Wallet © 2024
      </p>
    </footer>
  );
}