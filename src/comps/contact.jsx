 
import React, { useState } from 'react';
 
export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Message:', message);
    setShowThankYou(true);
  };
 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-16 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        {!showThankYou && (
          <p className="mb-6 text-lg">
            Drop us a line through the form below and we'll get back to you.
          </p>
        )}
        {showThankYou ? (
          <div className="text-center text-blue-500 text-xl font-semibold">
            Thank you for writing to us, we will get back to you as soon as possible.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex space-x-8">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-gray-700 text-lg">
                  First name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-gray-700 text-lg">
                  Last name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-lg">
                Email address
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email here"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-700 text-lg">
                What can we help with
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Enter your message here..."
                className="mt-1 block w-full px-4 py-3 h-40 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-slate-600 text-white font-semibold rounded-md shadow hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-lg"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}