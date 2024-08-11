import React from 'react';

// Section component that acts as a wrapper to center its children and apply consistent styling
const Section = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto mb-6">
      {children}
    </div>
  );
};

export default Section;
