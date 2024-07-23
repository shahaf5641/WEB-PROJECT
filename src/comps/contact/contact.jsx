import React, { useState } from 'react';
import ContactForm from './contactForm';
import ThankYouMessage from './thankYouMessage';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Message:', message);
    setShowThankYou(true);
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="bg-white p-16 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        {!showThankYou && (
          <p className="mb-6 text-lg">
            Drop us a line through the form below and we'll get back to you.
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
          />
        )}
      </div>
    </div>
  );
}
