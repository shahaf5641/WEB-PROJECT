import React from 'react';
import ContactForm from './contactForm';
import { useDarkMode } from '../contexts/DarkModeContext';
import { contactContainerStyle, contactWrapperStyle, contactHeaderStyle } from '../contexts/style'; // Import styles

/**
 * Contact component that displays a form for users to get in touch.
 * The form submission will navigate to the ThankYouMessage component.
 */
export default function Contact() {
  const { darkMode } = useDarkMode();

  return (
    <div className={contactContainerStyle}>
      <div className={contactWrapperStyle(darkMode)}>
        <h1 className={contactHeaderStyle}>Get in Touch</h1>
        <ContactForm darkMode={darkMode} />
      </div>
    </div>
  );
}
