import React, { useState } from 'react';
import ContactForm from './contactForm';
import ThankYouMessage from './thankYouMessage';
import { useDarkMode } from '../contexts/DarkModeContext';
 
/**
 * Contact component that displays a form for users to get in touch.
 * It also shows a thank you message after the form is submitted.
 */
export default function Contact() {
  // Access dark mode state from context
  const { darkMode } = useDarkMode();
 
  // State variables for form fields and thank you message visibility
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
 
  /**
   * Handles form submission.
   * Logs the form data to the console and displays the thank you message.
   */
  const handleSubmit = () => {
    setShowThankYou(true);
  };
 
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-lg shadow-2xl w-1/2 border p-12 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-4 py-2">Get in Touch</h1>
        {!showThankYou && (
          <p className="mb-4 text-lg">
          </p>
        )}
        {showThankYou ? (
          <ThankYouMessage />
        ) : (
          <ContactForm
            handleSubmit={handleSubmit}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
            darkMode={darkMode} // Pass darkMode to ContactForm
          />
        )}
      </div>
    </div>
  );
}
 