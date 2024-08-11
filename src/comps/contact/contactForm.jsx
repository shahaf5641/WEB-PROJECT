import React from 'react';
import InputField from './inputField';
import TextArea from './textArea';
import { useNavigate } from 'react-router-dom';
 
/**
 * ContactForm component handles user input and form submission for the contact page.
 * 
 * @param {function} handleSubmit - Function to handle the form submission.
 * @param {string} firstName - First name input value.
 * @param {function} setFirstName - Function to update the first name input value.
 * @param {string} lastName - Last name input value.
 * @param {function} setLastName - Function to update the last name input value.
 * @param {string} email - Email input value.
 * @param {function} setEmail - Function to update the email input value.
 * @param {string} message - Message input value.
 * @param {function} setMessage - Function to update the message input value.
 * @param {boolean} darkMode - Boolean indicating if dark mode is enabled.
 */
const ContactForm = ({ handleSubmit, firstName, setFirstName, lastName, setLastName, email, setEmail, message, setMessage, darkMode }) => {
  const navigate = useNavigate();
 
  /**
   * Handles the form submission event.
   * Prevents default form submission behavior, checks if all fields are filled,
   * triggers handleSubmit, and navigates to the thank you message page.
   * 
   * @param {object} e - Event object.
   */
  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && message) {
      handleSubmit();
      navigate('/message');
    }
  };
 
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6 flex space-x-8">
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
        className={`mt-4 cursor-pointer transition-all font-semibold px-14 text-lg py-4 rounded-full border-b-[4px] ${darkMode ? 'bg-gray-700 text-gray-200 border-indigo-600 hover:shadow-indigo-400 shadow-indigo-400' : 'bg-white text-gray-700 border-gray-600 hover:shadow-gray-300 shadow-gray-300'
          } hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl active:shadow-none`}
      >
        Submit
      </button>
    </form>
  );
};
 
export default ContactForm;