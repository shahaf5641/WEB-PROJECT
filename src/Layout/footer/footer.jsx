import React from 'react';
import FooterLink from './FooterLink';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import {
  footerContainer,
  footerText,
  footerLinksContainerStyle,
} from '../../comps/contexts/style';

/**
 * The Footer component is responsible for displaying the footer section of the website.
 * It includes navigation links to the "About" and "Contact us" pages, and a copyright notice.
 * The appearance of the footer, including its background color and text color, adapts based on the current dark mode setting.
 */
export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer className={footerContainer(darkMode)}>
      {/* A flex container that centers the footer links horizontally with a gap between them */}
      <div className={footerLinksContainerStyle}>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/contact">Contact us</FooterLink>
      </div>
      {/* A paragraph element that displays the copyright text.
          The text is centered, with the color changing based on dark mode. */}
      <p className={footerText(darkMode)}>
        All rights reserved to Better Wallet © 2024
      </p>
    </footer>
  );
}
