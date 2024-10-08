import React from 'react';
import { sectionTextStyle } from '../contexts/style'; // Import the style

// The SectionText component is used to display paragraph text with consistent styling, including larger font size and bold text.
const SectionText = ({ children }) => {
  return (
    <p className={sectionTextStyle}>
      {children}
    </p>
  );
};

export default SectionText;
