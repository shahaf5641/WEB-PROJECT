// src/comps/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePreviousPage, handleNextPage }) => {
  return (
    <div className="mt-4 flex justify-center items-center">
      <button 
        onClick={handlePreviousPage} 
        className="px-4 py-2 border rounded-md mr-2"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button 
        onClick={handleNextPage} 
        className="px-4 py-2 border rounded-md ml-2"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
