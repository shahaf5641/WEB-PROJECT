import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '../contexts/pagination/pagination';
import TransactionTable from '../transactions/transactionTable';
import { tokenAddressToName } from '../contexts/tokenContext';
import { fetchAccountTransactions } from '../contexts/Fetches';

const AccountDetails = () => {
  const { address } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadTransactions = async (page) => {
      try {
        const { transactions, amount } = await fetchAccountTransactions(address, page);
        setTransactions(transactions);
        setTotalPages(Math.ceil(amount / 5));
      } catch (err) {
        setError(err.message);
      }
    };

    loadTransactions(currentPage);
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

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto backdrop-blur-md p-4">
      <h1 className="text-4xl font-bold mb-4 underline">Account Details</h1>
      <div className="shadow-xl rounded-2xl p-6 mb-4 border-2 backdrop-blur-md text-2xl font-base text-left">
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
