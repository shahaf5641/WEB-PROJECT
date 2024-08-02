import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

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
