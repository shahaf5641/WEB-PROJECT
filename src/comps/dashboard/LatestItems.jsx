import React, { useEffect, useState } from 'react';
import LoadingAnimation from '../animations/LoadingAnimation';
import { useDarkMode } from '../contexts/DarkModeContext';
import PaginatedButton from './PaginatedButton';

const LatestItems = ({ fetchUrl, TableComponent, title, link, buttonText }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { darkMode } = useDarkMode();

  const fetchItems = async (page) => {
    try {
      const response = await fetch(`${fetchUrl}?page=${page}&limit=5`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-2 rounded-xl backdrop-blur-md">
      <h2 className={`text-2xl font-semibold mb-4 text-left underline px-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{title}</h2>
      <TableComponent items={items} />
      <PaginatedButton
        link={link}
        buttonText={buttonText}
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
      />
    </div>
  );
};

export default LatestItems;
