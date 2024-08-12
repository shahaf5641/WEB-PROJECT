import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLink from './navlink';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import {
  headerStyle,
  headerContainerStyle,
  homeIconStyle,
  searchFormStyle,
  searchInputStyle,
  searchButtonStyle,
  searchIconSVG
} from '../../comps/contexts/style';

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
    <header className={headerStyle}>
      <div className={headerContainerStyle}>
        <div className="flex items-center space-x-4">
          <Link to="/" onClick={closeMenu}>
            <FontAwesomeIcon icon={faHome} className={homeIconStyle} />
          </Link>
          <div className="hamburger-menu-button">
            <HamburgerMenu />
          </div>
        </div>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/blocks">Blocks</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <form onSubmit={handleSearch} className={searchFormStyle}>
          <div className="relative w-full">
            <input
              required
              placeholder="Account/Transaction/Block Hash"
              className={searchInputStyle(darkMode)}
              id="default-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
            <button
              type="submit"
              className={searchButtonStyle(darkMode)}
            >
              <svg {...searchIconSVG}>
                <path d={searchIconSVG.pathData} style={searchIconSVG.pathStyle}></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
