import React, { useEffect, useState } from 'react';
import LoadingAnimation from '../../animations/LoadingAnimation';
import SmallLoadingAnimation from '../../animations/SmallLoadingAnimation';
import Pagination from './pagination';

const PaginationHandler = ({ fetchFunction, title, TableComponent }) => {
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
        if (!paginationLoading) setLoading(true); // Only set the main loading if not paginating
        const { data, amount } = await fetchFunction(currentPage);
        console.log('Fetched items:', data);
        setItems(data || []);
        setTotalPages(Math.ceil(amount / 10));
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
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPaginationLoading(true);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto rounded-xl backdrop-blur-md mb-4 p-4">
      {paginationLoading && <SmallLoadingAnimation />}
      <div className="flex flex-wrap justify-between items-center mb-2">
        <h1 className="text-4xl font-semibold underline">{title}</h1>
        <h1 className="text-3xl font-semibold">Total: {totalItems.toLocaleString()}</h1>
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