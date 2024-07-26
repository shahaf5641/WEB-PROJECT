import React from 'react';
import { Link } from 'react-router-dom';
import logodark from '../../assets/logodark.png';


export default function HeroSection() {
  return (
    <div className="text-center mb-12">
      <img src={logodark} alt="Site Logo" className="mx-auto w-60 h-60 mb-6 rounded-full" />
      <h1 className="text-6xl font-bold text-white">Welcome to Better Wallet</h1>
      <p className="text-2xl mt-4 text-gray-200">Your gateway to cryptocurrency insights and the latest trends</p>
      <Link to="/dashboard">
        <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </Link>
    </div>
  );
}
