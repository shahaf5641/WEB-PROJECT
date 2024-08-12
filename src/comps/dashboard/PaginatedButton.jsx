import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useDarkMode } from '../contexts/DarkModeContext';
import { 
  paginatedButtonStyle, 
  paginatedDivStyle, 
  paginatedContainerStyle, 
  paginatedLinkStyle, 
  paginatedButtonTextStyle 
} from '../contexts/style';

/**
 * The PaginatedButton component creates a button that navigates to a specified link and displays an arrow icon.
 * 
 * Props:
 * - `link`: The URL to navigate to when the button is clicked.
 * - `buttonText`: The text displayed on the button.
 * - `onClick`: Function triggered when the button is clicked.
 */

const PaginatedButton = ({ link, buttonText }) => {
  const { darkMode } = useDarkMode();  // Access the current dark mode state.

  return (
    <div className={paginatedContainerStyle}>
      <Link to={link} className={paginatedLinkStyle}>
        <button
          type="button"
          className={paginatedButtonStyle(darkMode)}
        >
          <div
            className={paginatedDivStyle(darkMode)}
          >
            <FaArrowRight className="text-black" size={24} />
          </div>
          <span className={paginatedButtonTextStyle}>{buttonText}</span>
        </button>
      </Link>
    </div>
  );
};

export default PaginatedButton;
