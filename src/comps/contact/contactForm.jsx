import React, { useState } from 'react';
import InputField from './inputField';
import TextArea from './textArea';
import { useNavigate } from 'react-router-dom';
import { contactButtonStyle, formGroupStyle } from '../contexts/style'; // Import the styles

/**
 * ContactForm component handles user input and form submission for the contact page.
 * 
 * @param {boolean} darkMode - Boolean indicating if dark mode is enabled.
 */
const ContactForm = ({ darkMode }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  /**
   * Handles the form submission event.
   * Prevents default form submission behavior, checks if all fields are filled,
   * and navigates to the thank you message page.
   * 
   * @param {object} e - Event object.
   */
  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && message) {
      navigate('/message');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={formGroupStyle}>
        <InputField 
          id="firstName" 
          label="First name" 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required 
          darkMode={darkMode} 
        />
        <InputField 
          id="lastName" 
          label="Last name" 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          required 
          darkMode={darkMode} 
        />
      </div>
      <div className="mb-6 w-full">
        <InputField 
          id="email" 
          label="Email address" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          darkMode={darkMode} 
        />
      </div>
      <TextArea 
        id="message" 
        label="What can we help with" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        required 
        darkMode={darkMode} 
      />
      <button
        type="submit"
        className={contactButtonStyle(darkMode)}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
