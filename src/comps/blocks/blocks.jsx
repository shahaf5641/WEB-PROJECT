import React, { useEffect, useState } from 'react';
import BlocksTable from './blocksTable';
import Pagination from '../pagination';
import LoadingAnimation from '../LoadingAnimation';

const Blocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBlocks, setTotalBlocks] = useState(0);

  useEffect(() => {
    const fetchBlocks = async (page) => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/blocks?page=${page}&limit=10`);
        const data = await response.json();
        setBlocks(data.data);
        setTotalPages(Math.ceil(data.amount / 10));
        setTotalBlocks(data.amount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlocks(currentPage);
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
    <div className="container mx-auto p-4 rounded-xl">
      <div className='flex flex-wrap justify-between items-center mb-4'>
        <h1 className="text-2xl font-semibold mb-4">Blocks</h1>
        <h1 className="text-2xl font-semibold mb-4">Total Blocks: {totalBlocks.toLocaleString()}</h1>
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
