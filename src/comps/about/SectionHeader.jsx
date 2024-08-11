import React from 'react';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

// The SectionHeader component displays a header with styling that changes depending on whether dark mode is enabled or not.
const SectionHeader = ({ children }) => {
  const { darkMode } = useDarkMode();

  return (
    <h2 
      className={`text-3xl font-bold mb-3 ${darkMode ? 'bg-slate-600' : 'bg-slate-200'} p-2 rounded`}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
