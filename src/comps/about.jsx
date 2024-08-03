import React from 'react';
import teamImage from '../assets/team.png';
import { useDarkMode } from '../comps/contexts/DarkModeContext'; // Import the useDarkMode hook

export default function About() {
  const { darkMode } = useDarkMode(); // Get darkMode value from context

  return (
    <div className="container mx-auto py-6">
      <div className="border backdrop-blur-sm p-4 rounded-xl shadow-xl">
        <div className="mb-6 overflow-hidden">
          <img src={teamImage} alt="Team" className="w-full max-w-4xl mx-auto rounded-2xl" />
        </div>
        <div className="max-w-6xl mx-auto">
          <h1 className={`text-4xl font-bold mb-4 font-serif ${darkMode ? 'bg-slate-600 text-white' : 'bg-slate-200 text-slate-800'} p-4 rounded`}>Who We Are</h1>
          <p className={`mb-6 text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            We are a group of dedicated students from Ort Braude College, collaborating on an exciting project as part of our bachelor's degree course. Our team is passionate about harnessing the power of technology to make financial information more accessible and transparent.
          </p>

          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'bg-slate-600 text-white' : 'bg-slate-200 text-slate-800'} p-2 rounded`}>Our Mission</h2>
          <p className={`mb-6 text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Our mission is to provide a comprehensive and user-friendly platform for retrieving detailed information about money transfers, blockchain transactions, and other related financial data. We believe that transparency in financial transactions is crucial for fostering trust and innovation in the digital economy.
          </p>

          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'bg-slate-600 text-white' : 'bg-slate-200 text-slate-800'} p-2 rounded`}>Our Team</h2>
          <p className={`mb-6 text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            We are a diverse team of software engineering students. Our combined skills enable us to develop a robust and reliable platform that meets the needs of our users. Each member of our team brings a unique perspective and a shared commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
