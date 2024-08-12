import React from 'react';
import { thankYouMessageContainerStyle, thankYouMessageWrapperStyle } from '../contexts/style'; // Import the styles

/**
 * ThankYouMessage component displays a message to the user after form submission.
 */
const ThankYouMessage = () => {
  return (
    <div className={thankYouMessageWrapperStyle}>
      <div className={thankYouMessageContainerStyle}>
        Thank you for writing to us, we will get back to you as soon as possible.
      </div>
    </div>
  );
};

export default ThankYouMessage;
