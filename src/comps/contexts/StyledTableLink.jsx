import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';

const StyledTableLink = ({ to, children }) => {
  // Get dark mode status from context
  const { darkMode } = useDarkMode();

  return (
    <Link
      to={to}
      // Apply styles conditionally based on dark mode and include hover effects
      className={`hover:underline transform transition-transform duration-300 ${
        darkMode ? 'text-indigo-500' : 'text-blue-700'
      }`}
    >
      {children}
    </Link>
  );
};

export default StyledTableLink;
