import React from 'react';
import NavLink from '../comps/navlink';

export default function Header() {
  return (
    <header className="bg-slate-600 text-black p-4 text-lg nav">
      <div className="mx-auto items-center">
        <nav className="flex justify-between">
          <NavLink to="/">MyLogo</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/blocks">Blocks</NavLink>
          <NavLink to="/transactions">Transactions</NavLink>
        </nav>
      </div>
    </header>
  );
}
