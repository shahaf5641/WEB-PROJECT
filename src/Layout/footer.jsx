import React from 'react';
import { Link } from 'react-router-dom';
import logodark from '../assets/logodark.png';

export default function Footer() {
  return (
    <footer className="bg-slate-400 p-3">
      <div className="flex justify-evenly items-center gap-6">
      <p className="font-semibold text-xl text-black">All rights reserved to BLABLABLA &copy; 2024</p>
        <Link to="/about" className="font-semibold text-xl text-black transform transition-transform duration-300 hover:scale-105">
          About
        </Link>
        <Link to="/contact" className="font-semibold text-xl text-black transform transition-transform duration-300 hover:scale-105">
          Contact us
        </Link>
        <Link to="/" className="transform transition-transform duration-300 hover:scale-105">
          <img src={logodark} alt="Logo" className="h-8 w-auto rounded-2xl" />
        </Link>
      </div>
    </footer>
  );
}
