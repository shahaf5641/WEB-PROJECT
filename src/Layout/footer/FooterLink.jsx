import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import { footerLinkStyle } from '../../comps/contexts/style';

/**
 * The FooterLink component is a customizable link used within the footer of the website.
 * It leverages React Router's Link component to handle navigation and applies styling
 * that adapts based on the current dark mode setting.
 * The link text is styled with a bold font and a hover effect that slightly scales the text.
 */
const FooterLink = ({ to, children }) => {
  const { darkMode } = useDarkMode();

  return (
    <Link
      to={to}
      className={footerLinkStyle(darkMode)}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
