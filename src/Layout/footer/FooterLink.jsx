import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

const FooterLink = ({ to, children }) => {
  const { darkMode } = useDarkMode();

  return (
    <Link
      to={to}
      className={`font-semibold text-2xl transform transition-transform duration-300 hover:scale-110 ${darkMode ? 'text-indigo-500' : 'text-blue-600'}`}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
