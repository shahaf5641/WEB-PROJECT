import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-2 bg-gray-300">
      <div className="flex justify-center gap-4">
          <Link to="/about" className="font-semibold text-xl text-blue-600 transform transition-transform duration-300 hover:scale-110">About</Link>
          <Link to="/contact" className="font-semibold text-xl text-blue-600 transform transition-transform duration-300 hover:scale-110 ">Contact us</Link>
      </div>
      <p className="text-center text-gray-700 mt-2 text-xl">All rights reserved to BLABLABLA © 2024</p>
    </footer>
  );
}
