// src/comps/accountDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from './pagination';
import TransactionTable from './transactions/transactionTable';
import { tokenAddressToName } from './contexts/tokenContext';
import LoadingAnimation from './animations/LoadingAnimation';
import { useDarkMode } from '../comps/contexts/DarkModeContext';

const AccountDetails = () => {
  const { address } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchTransactions = async (page) => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/transactions?address=${address}&page=${page}&limit=5`);
        const data = await response.json();
        setTransactions(data.data);
        setTotalPages(Math.ceil(data.amount / 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions(currentPage);
  }, [address, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [address]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`container mx-auto backdrop-blur-md p-4 ${darkMode ? 'text-gray-100' : 'text-gray-950'}`}>
      <h1 className="text-4xl font-bold mb-4 underline">Account Details</h1>
      <div className="shadow-xl rounded-2xl p-6 mb-4 border-2 backdrop-blur-md text-2xl font-base text-left">
        <p className="mb-4 sm:text-wrap break-words"><strong>Account Address:</strong> {address}</p>
        <h2 className="text-3xl font-semibold mb-4">Balances</h2>
        <table className="min-w-full border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Symbol</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Token Address</th>
            </tr>
          </thead>
          {/* Add table body here */}
        </table>
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
