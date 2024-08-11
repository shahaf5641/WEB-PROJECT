import React from 'react';

// The SectionText component is used to display paragraph text with consistent styling, including larger font size and bold text.
const SectionText = ({ children }) => {
  return (
    <p className="mb-6 text-xl font-semibold">
      {children}
    </p>
  );
};

export default SectionText;
