import React from 'react';
import { sectionStyle } from '../contexts/style'; // Import the style

// Section component that acts as a wrapper to center its children and apply consistent styling
const Section = ({ children }) => {
  return (
    <div className={sectionStyle}>
      {children}
    </div>
  );
};

export default Section;
