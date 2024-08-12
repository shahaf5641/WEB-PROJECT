// src/components/PaginationHandler.jsx

import React, { useEffect, useState } from 'react';
import LoadingAnimation from '../../animations/LoadingAnimation';
import SmallLoadingAnimation from '../../animations/SmallLoadingAnimation';
import Pagination from './pagination';
import { 
  paginationHandlerContainerStyle, 
  paginationHandlerHeaderStyle, 
  paginationHandlerTitleStyle, 
  paginationHandlerTotalStyle 
} from '../style';

/**
 * PaginationHandler Component
 * 
 * This component handles the pagination logic for displaying data in a paginated format.
 * It manages the current page, loading states, and errors, and fetches data accordingly.
 * 
 * @param {function} fetchFunction - Function to fetch data for the given page.
 * @param {string} title - The title to be displayed at the top of the table.
 * @param {JSX.Element} TableComponent - The component used to render the table of items.
 */
const PaginationHandler = ({ fetchFunction, title, TableComponent }) => {
  // State to manage the fetched items, loading states, error state, current page, and total pages
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        if (!paginationLoading) setLoading(true); // Only show main loading animation if not paginating
        const { data, amount } = await fetchFunction(currentPage); // Fetch data for the current page
        console.log('Fetched items:', data);
        setItems(data || []);
        setTotalPages(Math.ceil(amount / 10)); // Calculate total pages based on amount of items
        setTotalItems(amount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        setPaginationLoading(false);
      }
    };

    loadData();
  }, [currentPage, fetchFunction]);

  const handlePreviousPage = () => {
    setPaginationLoading(true);
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Decrease page number, but don't go below 1
  };

  const handleNextPage = () => {
    setPaginationLoading(true);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages)); // Increase page number, but don't exceed totalPages
  };

  // Display main loading animation if data is being fetched
  if (loading) return <LoadingAnimation />;

  // Display error message if an error occurred during data fetching
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={paginationHandlerContainerStyle}>
      {paginationLoading && <SmallLoadingAnimation />}
      <div className={paginationHandlerHeaderStyle}>
        <h1 className={paginationHandlerTitleStyle}>{title}</h1>
        <h1 className={paginationHandlerTotalStyle}>Total: {totalItems.toLocaleString()}</h1>
      </div>
      <TableComponent items={items} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default PaginationHandler;
