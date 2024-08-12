import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';
import { styledTableLinkStyle } from './style';

const StyledTableLink = ({ to, children }) => {
  // Get dark mode status from context
  const { darkMode } = useDarkMode();

  return (
    <Link
      to={to}
      // Apply styles conditionally based on dark mode
      className={styledTableLinkStyle(darkMode)}
    >
      {children}
    </Link>
  );
};

export default StyledTableLink;
