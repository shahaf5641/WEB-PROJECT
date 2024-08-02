import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLink from './navlink';
import HamburgerMenu from './HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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
    <header className="text-black p-4 text-lg nav bg-opacity-90 border-b border-gray-100 shadow-2xl backdrop-blur-[2px] mb-32 sm:mb-0 xs:mb-12">
      <div className="mx-auto flex justify-between items-center w-full">
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
        <form onSubmit={handleSearch} className="relative flex items-center ml-4">
          <input
            type="text"
            placeholder="Account Address/Transaction/Block Hash"
            className="pl-4 pr-10 py-2 rounded-full w-96 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </header>
  );
}
