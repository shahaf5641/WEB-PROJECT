import React from 'react';
import { Link } from 'react-router-dom';
import logodark from '../assets/logodark.png';

export default function Footer() {
  return (
    <footer className="bg-slate-400 p-3">
      <div className="flex justify-evenly items-center gap-6">
        <Link to="/about" className="text-xl text-black">About</Link>
        <Link to="/contact" className="text-xl text-black">Contact us</Link>
        <Link to="/">
          <img src={logodark} alt="Logo" className="h-8 w-auto rounded-2xl" />
        </Link>
      </div>
    </footer>
  );
}
