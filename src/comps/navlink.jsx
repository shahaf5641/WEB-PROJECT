import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`font-semibold relative group focus:outline-none py-1 hover:text-white transition-colors duration-300 ${isActive ? 'text-white' : ''}`}>
      <span className={`absolute bottom-0 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
      {children}
    </Link>
  );
}
