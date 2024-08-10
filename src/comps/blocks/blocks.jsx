import React, { useEffect, useState } from 'react';
import BlocksTable from './blocksTable';
import Pagination from '../pagination';
import LoadingAnimation from '../animations/LoadingAnimation';
import SmallLoadingAnimation from '../animations/SmallLoadingAnimation';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

const Blocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBlocks, setTotalBlocks] = useState(0);
  const { darkMode } = useDarkMode();

  const fetchBlocks = async (page, isInitialLoad = false) => {
    if (isInitialLoad) {
      setLoading(true);
    } else {
      setPaginationLoading(true);
    }

    try {
      const response = await fetch(`https://explorer.mtw-testnet.com/blocks?page=${page}&limit=10`);
      const data = await response.json();
      setBlocks(data.data);
      setTotalPages(Math.ceil(data.amount / 10));
      setTotalBlocks(data.amount);
    } catch (err) {
      setError(err.message);
    } finally {
      if (isInitialLoad) {
        setLoading(false);
      } else {
        setPaginationLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchBlocks(currentPage, true);
  }, []);

  useEffect(() => {
    if (!loading) {
      fetchBlocks(currentPage);
    }
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto rounded-xl backdrop-blur-md mb-4 p-4">
      {paginationLoading && <SmallLoadingAnimation />}
      <div className="flex flex-wrap justify-between items-center mb-2">
        <h1 className="text-4xl font-semibold underline">Blocks</h1>
        <h1 className="text-3xl font-semibold">Total: {totalBlocks.toLocaleString()}</h1>
      </div>
      <BlocksTable blocks={blocks} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default Blocks;
