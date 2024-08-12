import React, { useEffect, useState } from 'react';
import LoadingAnimation from '../animations/LoadingAnimation';
import PaginatedButton from './PaginatedButton';
import { fetchItems } from '../contexts/Fetches'; // Import the fetchItems function
import { latestItemsContainerStyle, latestItemsTitleStyle } from '../contexts/style'; // Import styles

/**
 * LatestItems is a reusable component that fetches and displays the latest items in a table format with pagination.
 */
const LatestItems = ({ fetchUrl, TableComponent, title, link, buttonText }) => {
  const [items, setItems] = useState([]);  // State to hold the fetched items.
  const [loading, setLoading] = useState(true);  // State to handle the loading state.
  const [error, setError] = useState(null);  // State to handle any errors.
  const [currentPage, setCurrentPage] = useState(1);  // State to track the current page for pagination.

  useEffect(() => {
    /**
     * getItems is an async function that fetches data from the given URL and updates the items state.
     */
    const getItems = async () => {
      try {
        const data = await fetchItems(fetchUrl, currentPage);  // Fetch items from the provided URL.
        setItems(data);  // Set the fetched data to the items state.
      } catch (err) {
        setError(err.message);  // If an error occurs, set the error message.
      } finally {
        setLoading(false);  // Stop loading once the data is fetched or an error occurs.
      }
    };

    getItems();  // Invoke the getItems function to fetch data.
  }, [fetchUrl, currentPage]);  // Effect runs when fetchUrl or currentPage changes.

  if (loading) return <LoadingAnimation />;  // Display a loading animation while data is being fetched.
  if (error) return <p>Error: {error}</p>;  // Display an error message if fetching fails.

  return (
    <div className={latestItemsContainerStyle}>
      <h2 className={latestItemsTitleStyle}>{title}</h2>  {/* Display the title. */}
      <TableComponent items={items} />  {/* Render the table with the fetched items. */}
      <PaginatedButton
        link={link}  // URL for the "View all" button.
        buttonText={buttonText}  // Text for the "View all" button.
      />
    </div>
  );
};

export default LatestItems;
