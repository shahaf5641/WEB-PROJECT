import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useDarkMode } from '../contexts/DarkModeContext';

/**
 * The PaginatedButton component creates a button that navigates to a specified link and displays an arrow icon.
 * 
 * Props:
 * - `link`: The URL to navigate to when the button is clicked.
 * - `buttonText`: The text displayed on the button.
 * - `onClick`: Function triggered when the button is clicked.
 */
const PaginatedButton = ({ link, buttonText, onClick }) => {
  const { darkMode } = useDarkMode();  // Access the current dark mode state.

  return (
    <div className="flex justify-end py-4">
      <Link to={link} className="relative group p-2">
        <button
          type="button"
          className={`pl-6 text-center w-72 rounded-full h-12 relative text-lg font-semibold ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}  // Style the button, adjusting the background color based on dark mode.
          onClick={onClick} 
        >
          <div
            className={`rounded-full h-10 w-1/6 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[280px] z-10 duration-700 ${darkMode ? 'bg-indigo-600' : 'bg-gray-400'}`}  // Style the inner div, which expands on hover and changes color based on dark mode.
          >
            <FaArrowRight className="text-black" size={24} />
          </div>
          <span className="translate-x-2">{buttonText}</span>
        </button>
      </Link>
    </div>
  );
};

export default PaginatedButton;
