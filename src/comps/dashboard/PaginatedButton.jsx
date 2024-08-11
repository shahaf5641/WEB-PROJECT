import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useDarkMode } from '../contexts/DarkModeContext';

const PaginatedButton = ({ link, buttonText, onClick }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className="flex justify-end py-4">
      <Link to={link} className="relative group p-2">
        <button
          type="button"
          className={`pl-6 text-center w-72 rounded-full h-12 relative text-lg font-semibold ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
          onClick={onClick}
        >
          <div
            className={`rounded-full h-10 w-1/6 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[280px] z-10 duration-700 ${darkMode ? 'bg-indigo-600' : 'bg-gray-400'}`}
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
