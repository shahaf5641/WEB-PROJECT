import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '../contexts/pagination/pagination';
import TransactionTable from '../transactions/transactionTable';
import { tokenAddressToName } from '../contexts/tokenContext';
import { fetchAccountTransactions } from '../contexts/Fetches';
import { accountDetailsSectionStyle } from '../contexts/style';

/**
 * AccountDetails is a component that displays detailed information about a specific account, including
 * its transactions. It supports pagination to navigate through the transaction history.
 * 
 * The component fetches transactions data from an API, handles loading and error states, and provides
 * pagination controls to navigate through the data.
 */
const AccountDetails = () => {
  const { address } = useParams();  // Get the account address from URL parameters.
  const [transactions, setTransactions] = useState([]);  // State to hold the fetched transactions.
  const [error, setError] = useState(null);  // State to handle any errors.
  const [currentPage, setCurrentPage] = useState(1);  // State to track the current page for pagination.
  const [totalPages, setTotalPages] = useState(1);  // State to hold the total number of pages.

  useEffect(() => {
    /**
     * loadTransactions is an async function that fetches transactions data from the API based on the
     * current page and updates the state with the fetched data.
     * 
     * @param {number} page - The page number to fetch transactions for.
     */
    const loadTransactions = async (page) => {
      try {
        const { transactions, amount } = await fetchAccountTransactions(address, page);
        setTransactions(transactions);  // Set the fetched transactions.
        setTotalPages(Math.ceil(amount / 5));  // Calculate total pages based on the amount of transactions.
      } catch (err) {
        setError(err.message);  // Set the error message if an error occurs.
      }
    };

    loadTransactions(currentPage);  // Fetch transactions for the current page.
  }, [address, currentPage]);  // Dependency array ensures the effect runs when address or currentPage changes.

  useEffect(() => {
    setCurrentPage(1);  // Reset to the first page when the address changes.
  }, [address]);

  /**
   * handlePreviousPage updates the current page to the previous page, ensuring it does not go below 1.
   */
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  /**
   * handleNextPage updates the current page to the next page, ensuring it does not exceed totalPages.
   */
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (error) return <p>Error: {error}</p>;  // Display an error message if fetching fails.

  return (
    <div className="container mx-auto backdrop-blur-md p-4">
      <h1 className="text-4xl font-bold mb-4 underline">Account Details</h1>
      <div className={accountDetailsSectionStyle}>
        <p className="mb-4 sm:text-wrap break-words"><strong>Account Address:</strong> {address}</p>
        <h2 className="text-2xl text-left font-semibold mb-3 mt-10">Transactions</h2>
        <TransactionTable transactions={transactions} tokenAddressToName={tokenAddressToName} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </div>
    </div>
  );
};

export default AccountDetails;
