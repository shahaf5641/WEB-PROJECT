import React from 'react';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import { sectionHeaderStyle } from '../contexts/style'; // Import the style

// The SectionHeader component displays a header with styling that changes depending on whether dark mode is enabled or not.
const SectionHeader = ({ children }) => {
  const { darkMode } = useDarkMode();

  return (
    <h2 className={sectionHeaderStyle(darkMode)}>
      {children}
    </h2>
  );
};

export default SectionHeader;
