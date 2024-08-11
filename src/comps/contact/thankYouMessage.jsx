import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
 
/**
 * ThankYouMessage component displays a message to the user after form submission.
 * It adapts to dark mode settings.
 */
const ThankYouMessage = () => {
  const { darkMode } = useDarkMode();
 
  return (
    <div className="flex justify-center items-start h-screen">
      <div className={`backdrop-blur-md border text-center ${darkMode ? 'text-gray-200' : 'text-gray-700'} text-3xl font-semibold p-6 rounded-xl max-w-4xl`}>
        Thank you for writing to us, we will get back to you as soon as possible.
      </div>
    </div>
  );
};
 
export default ThankYouMessage;
 