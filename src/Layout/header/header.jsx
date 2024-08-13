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
  searchIconSVG,
  headerFlexContainerStyle,
  searchInputContainerStyle,
} from '../../comps/contexts/style';

/**
 * Header Component
 * 
 * This component renders the main header of the application, which includes navigation links,
 * a search bar, and a hamburger menu for mobile view. The header adjusts its styling based on 
 * the current dark mode state, which is managed through the DarkModeContext.
 * 
 * The search bar allows users to search for accounts, transactions, or block hashes, and the 
 * results are displayed on the corresponding page. The header also provides quick access to 
 * different sections of the site, such as Dashboard, Transactions, Blocks, and Explore.
 */
export default function Header() {
  // State to manage the current search query entered by the user
  const [searchQuery, setSearchQuery] = useState('');
  
  // Hook to navigate programmatically within the app
  const navigate = useNavigate();

  // Access the dark mode state from the DarkModeContext
  const { darkMode } = useDarkMode();

  /**
   * handleSearch Function
   * 
   * This function handles the search form submission. It sends the search query to the backend,
   * checks if a matching result is found, and navigates to the appropriate page. If no results
   * are found, the user is redirected to a "not found" page.
   * 
   * @param {object} e - The event object from the form submission.
   */
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
      setSearchQuery(''); // Clear the search input after submission
    }
  };

  /**
   * closeMenu Function
   * 
   * This function closes the hamburger menu if it is open. It is triggered when the home icon
   * is clicked, ensuring that the menu is closed before navigating to the home page.
   */
  const closeMenu = () => {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
    if (hamburgerMenuButton) {
      hamburgerMenuButton.click();
    }
  };

  return (
    <header className={headerStyle}>
      <div className={headerContainerStyle}>
        {/* Container for the home icon and hamburger menu */}
        <div className={headerFlexContainerStyle}>
          <Link to="/" onClick={closeMenu}>
            <FontAwesomeIcon icon={faHome} className={homeIconStyle} />
          </Link>
          <div className="hamburger-menu-button">
            <HamburgerMenu />
          </div>
        </div>

        {/* Navigation links to different sections of the app */}
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/blocks">Blocks</NavLink>
        <NavLink to="/explore">Explore</NavLink>

        {/* Search form for searching accounts, transactions, or block hashes */}
        <form onSubmit={handleSearch} className={searchFormStyle}>
          <div className={searchInputContainerStyle}>
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
