// src/components/home/LatestItems.jsx
import React, { useEffect, useState } from 'react';
import LoadingAnimation from '../animations/LoadingAnimation';
import PaginatedButton from './PaginatedButton';
import { fetchItems } from '../contexts/Fetches'; // Import the function

const LatestItems = ({ fetchUrl, TableComponent, title, link, buttonText }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems(fetchUrl, currentPage);
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, [fetchUrl, currentPage]);

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-2 rounded-xl backdrop-blur-md">
      <h2 className="text-2xl font-semibold mb-4 text-left underline px-4">{title}</h2>
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
