import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../comps/navlink';
import HamburgerMenu from './HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="bg-slate-600 text-black p-4 text-lg nav">
      <div className="mx-auto flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="h-8 w-8 text-white" />
          </Link>
          <HamburgerMenu />
        </div>
        <div className="hidden md:flex justify-between space-x-10">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/transactions">Transactions</NavLink>
          <NavLink to="/blocks">Blocks</NavLink>
          <NavLink to="/explore">Explore</NavLink>
        </div>
      </div>
    </header>
  );
}
