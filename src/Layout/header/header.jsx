import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLink from './navlink';
import HamburgerMenu from './HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const response = await fetch(`https://explorer.mtw-testnet.com/search/?key=${encodeURIComponent(searchQuery)}`);
      if (response.ok) {
        const data = await response.json();
        if (data[0] !== 'No matches found') {
          const itemType = data[0];
          navigate(`/${itemType}/${searchQuery}`);
        } else {
          navigate(`/notfound/${searchQuery}`);
        }
      } else {
        navigate(`/notfound/${searchQuery}`);
      }
      setSearchQuery('');
    }
  };

  const closeMenu = () => {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
    if (hamburgerMenuButton) {
      hamburgerMenuButton.click();
    }
  };

  return (
    <header className="p-4 text-lg nav bg-opacity-90 border-b border-gray-100 shadow-2xl backdrop-blur-[2px] mb-32 sm:mb-0 xs:mb-12">
      <div className="mx-auto sm:flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <Link to="/" onClick={closeMenu}>
            <FontAwesomeIcon icon={faHome} className="h-8 w-8 text-white transform transition-transform duration-200 hover:scale-110" />
          </Link>
          <div className="hamburger-menu-button">
            <HamburgerMenu />
          </div>
        </div>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/blocks">Blocks</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <form onSubmit={handleSearch} className="relative flex items-center sm:ml-4 sm:mt-0 mt-4 px-2 w-full sm:w-96">
          <div className="relative w-full">
            <input
              required
              placeholder="Account/Transaction/Block Hash"
              className={`block w-full p-3 text-lg border-2 rounded-full focus:outline-none transition ease-in-out duration-500 ${darkMode ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-indigo-500 focus:border-indigo-500' : 'border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500'}`}
              id="default-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className={`items-center justify-center flex border-2 shadow-lg ${darkMode ? 'border-indigo-500 hover:bg-indigo-500 hover:text-black text-white shadow-indigo-800' : 'border-blue-500 hover:bg-blue-500 hover:text-white shadow-blue-300'} duration-300 cursor-pointer active:scale-95 absolute end-2.5 bottom-1/2 translate-y-1/2 p-2 text-sm font-medium rounded-full focus:ring-4 focus:outline-none`}
              >
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-4">
                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor"></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
