import React, { createContext, useState, useContext } from 'react';

// Create a Context for dark mode
const DarkModeContext = createContext();

// Provider component for managing dark mode state
export const DarkModeProvider = ({ children }) => {
  // State to keep track of dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode on and off
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    // Provide the dark mode state and toggle function to the rest of the app
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {/* A wrapper div to potentially manage styles or layout, here only setting maxHeight */}
      <div style={{ maxHeight: '2000px'}}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

// Custom hook to use dark mode context values
export const useDarkMode = () => useContext(DarkModeContext);
