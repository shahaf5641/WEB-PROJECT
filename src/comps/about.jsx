 
import React from 'react';
import teamImage from '../assets/team.png';
 
export default function About() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6 w-full overflow-hidden">
          <img src={teamImage} alt="Team" className="w-screen" />
        </div>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 font-serif bg-slate-600 text-white">Welcome to our website!</h1>
          <p className="text-gray-700 mb-6">
            We are a group of dedicated students from Ort Braude College, collaborating on an exciting project as part of our bachelor's degree course. Our team is passionate about harnessing the power of technology to make financial information more accessible and transparent.
          </p>
 
          <h2 className="text-2xl font-bold mb-3  bg-slate-600 text-white">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to provide a comprehensive and user-friendly platform for retrieving detailed information about money transfers, blockchain transactions, and other related financial data. We believe that transparency in financial transactions is crucial for fostering trust and innovation in the digital economy.
          </p>
 
          <h2 className="text-2xl font-bold mb-3  bg-slate-600 text-white">Our Team</h2>
          <p className="text-gray-700">
            We are a diverse team of software engineering students. Our combined skills enable us to develop a robust and reliable platform that meets the needs of our users. Each member of our team brings a unique perspective and a shared commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
}