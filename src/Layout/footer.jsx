import React from 'react';
import { Link } from 'react-router-dom';
 
export default function Footer() {
  return (
    <footer className="w-full py-4 border-t border-gray-300 bg-gray-200">
      <div className="container mx-auto text-center">
        <nav className="mt-2">
          <Link to="/about" className="mx-2 text-blue-600 hover:underline">About</Link>
          <Link to="/contact" className="mx-2 text-blue-600 hover:underline">Contact us</Link>
        </nav>
        <p className="text-gray-700 mt-2">All rights reserved to BLABLABLA © 2024</p>
      </div>
    </footer>
  );
}