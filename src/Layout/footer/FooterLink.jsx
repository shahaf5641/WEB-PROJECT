import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
 
// The FooterLink component is a customizable link used within the footer of the website.
// It leverages React Router's Link component to handle navigation and applies styling
// that adapts based on the current dark mode setting.
// The link text is styled with a bold font and a hover effect that slightly scales the text.
const FooterLink = ({ to, children }) => {
  const { darkMode } = useDarkMode();
 
  return (
    <Link
      to={to}
      // The link is styled with a bold font, a larger text size, and a smooth scaling effect on hover.
      // The text color changes based on dark mode: indigo for dark mode and blue for light mode.
      className={`font-semibold text-2xl transform transition-transform duration-300 hover:scale-110 ${darkMode ? 'text-indigo-500' : 'text-blue-600'}`}
    >
      {children}
    </Link>
  );
};
 
export default FooterLink;