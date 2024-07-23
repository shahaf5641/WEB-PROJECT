import React from 'react';
import InputField from './inputField';
import TextArea from './textArea';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({ handleSubmit, firstName, setFirstName, lastName, setLastName, email, setEmail, message, setMessage }) => {
  const navigate = useNavigate();

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
        <InputField id="firstName" label="First name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <InputField id="lastName" label="Last name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div className="mb-6 w-full">
        <InputField id="email" label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <TextArea id="message" label="What can we help with" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button
        type="submit"
        className="w-full py-3 px-4 bg-slate-600 text-white font-semibold rounded-md shadow hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-lg"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
