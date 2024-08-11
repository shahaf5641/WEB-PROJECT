import React, { useEffect, useState } from 'react';
import LoadingAnimation from '../animations/LoadingAnimation';
import PaginatedButton from './PaginatedButton';
import { fetchItems } from '../contexts/Fetches'; // Import the fetchItems function
 
/**
 * LatestItems is a reusable component that fetches and displays the latest items in a table format with pagination.
 * 
 * Props:
 * - `fetchUrl`: The URL to fetch items from.
 * - `TableComponent`: The component used to render the fetched items in a table format.
 * - `title`: The title displayed above the table.
 * - `link`: The URL for the button that links to the full list of items.
 * - `buttonText`: The text displayed on the pagination button.
 */
const LatestItems = ({ fetchUrl, TableComponent, title, link, buttonText }) => {
  const [items, setItems] = useState([]);  // State to hold the fetched items.
  const [loading, setLoading] = useState(true);  // State to handle the loading state.
  const [error, setError] = useState(null);  // State to handle any errors.
  const [currentPage, setCurrentPage] = useState(1);  // State to track the current page for pagination.
 
  useEffect(() => {
    /**
     * getItems is an async function that fetches data from the given URL and updates the items state.
     * It handles loading and error states as well.
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
    <div className="container mx-auto p-2 rounded-xl backdrop-blur-md">
      <h2 className="text-2xl font-semibold mb-4 text-left underline px-4">{title}</h2>  {/* Display the title. */}
      <TableComponent items={items} />  {/* Render the table with the fetched items. */}
      <PaginatedButton
        link={link}  //URL for the "View all" button.
        buttonText={buttonText}  //Text for the "View all" button.
      />
    </div>
  );
};
 
export default LatestItems;