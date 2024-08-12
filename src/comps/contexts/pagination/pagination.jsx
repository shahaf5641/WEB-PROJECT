// src/components/Pagination.jsx

import React from 'react';
import { paginationButtonStyle, paginationContainerStyle } from '../style'; // Import the style

/**
 * Pagination Component
 * 
 * This component renders pagination controls that allow the user to navigate between pages.
 * It includes "Previous" and "Next" buttons, as well as a display of the current page and total pages.
 * 
 * @param {number} currentPage - The current page number being viewed.
 * @param {number} totalPages - The total number of pages available.
 * @param {function} handlePreviousPage - Function to handle the action of going to the previous page.
 * @param {function} handleNextPage - Function to handle the action of going to the next page.
 * 
 * @returns {JSX.Element} A styled div containing the pagination controls.
 */
const Pagination = ({ currentPage, totalPages, handlePreviousPage, handleNextPage }) => {
  return (
    <div className={paginationContainerStyle}>
      {/* Button to navigate to the previous page */}
      <button 
        onClick={handlePreviousPage} 
        className={`${paginationButtonStyle} mr-4`} // Apply the imported style
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Display the current page number and total pages */}
      <span>Page {currentPage} / {totalPages}</span>

      {/* Button to navigate to the next page */}
      <button 
        onClick={handleNextPage} 
        className={`${paginationButtonStyle} ml-4`} // Apply the imported style
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
