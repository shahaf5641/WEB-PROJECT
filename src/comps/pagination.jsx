import React from 'react';
const Pagination = ({ currentPage, totalPages, handlePreviousPage, handleNextPage }) => {

  return (
    <div className="m-4 p-4 flex justify-center items-center text-xl">
      <button 
        onClick={handlePreviousPage} 
        className="px-8 py-4 border-2 rounded-2xl mr-4 font-bold shadow-xl transform transition-transform duration-100 active:scale-95"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage} / {totalPages}</span>
      <button 
        onClick={handleNextPage} 
        className="px-8 py-4 border-2 rounded-2xl ml-4 font-bold shadow-xl transform transition-transform duration-75 active:scale-95"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
