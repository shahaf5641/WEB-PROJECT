// src/components/ThankYouMessage.jsx

import React from 'react';
import { thankYouMessageContainerStyle } from '../contexts/style'; // Import the style

/**
 * ThankYouMessage component displays a message to the user after form submission.
 */
const ThankYouMessage = () => {
  return (
    <div className="flex justify-center items-start h-screen">
      <div className={thankYouMessageContainerStyle}>
        Thank you for writing to us, we will get back to you as soon as possible.
      </div>
    </div>
  );
};

export default ThankYouMessage;
