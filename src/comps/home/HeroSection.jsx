import React from 'react';
import { Link } from 'react-router-dom';
import logodark from '../../assets/logodark.png';

export default function HeroSection() {
  return (
    <div className="text-center mb-12">
      <div className="relative mx-auto w-52 h-52 mb-6 rounded-full overflow-hidden shadow-yellow-100 shadow-md transition-transform transform hover:scale-105 flex flex-col items-center text-center">
        <img 
          src={logodark} 
          alt="Site Logo" 
          className="w-full h-full object-cover transform scale-125" 
        />
      </div>
      <h1 className="text-6xl font-bold text-white">Welcome to Better Wallet</h1>
      <p className="text-2xl mt-4 text-gray-200">Your gateway to cryptocurrency insights and the latest trends</p>
      <Link to="/dashboard">
        <button className="mt-8 px-8 py-3 bg-blue-600 text-white text-xl font-semibold rounded-full relative overflow-hidden transition-transform duration-500 ease-in-out active:scale-95 hover:bg-indigo-600 hover:scale-110">
          <span className="relative z-10">Get Started</span>
        </button>
      </Link>
    </div>
  );
}
