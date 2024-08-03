import React, { useEffect, useState } from 'react';
import BlocksTable from './blocksTable';
import LoadingAnimation from '../LoadingAnimation';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

const LatestBlocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { darkMode } = useDarkMode();

  const fetchBlocks = async (page) => {
    try {
      const response = await fetch(`https://explorer.mtw-testnet.com/blocks/?page=${page}&limit=5`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBlocks(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlocks(currentPage);
  }, [currentPage]);

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-2 rounded-xl backdrop-blur-md">
      <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Latest Blocks</h2>
      <BlocksTable blocks={blocks} />
      <div className="flex justify-end py-4">
        <Link to="/blocks" className="relative group p-2">
          <button
            type="button"
            className="bg-white text-center w-80 rounded-full h-12 relative text-black text-lg font-semibold"
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          >
            <div
              className="bg-gray-600 rounded-full h-10 w-1/6 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[310px] z-10 duration-700"
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M800 480H160a32 32 0 0 1 0-64h640a32 32 0 1 1 0 64z"
                ></path>
                <path
                  fill="#000000"
                  d="M786.752 512L521.344 246.656a32 32 0 0 1 45.312-45.312l288 288a32 32 0 0 1 0 45.312l-288 288a32 32 0 0 1-45.312-45.312L786.752 512z"
                ></path>
              </svg>
            </div>
            <span className="translate-x-2">View all blocks</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestBlocks;
