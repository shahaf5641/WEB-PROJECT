import React, { useEffect, useState } from 'react';
import TransactionTable from './transactionTable';
import Pagination from '../pagination';
import { tokenAddressToName } from '../contexts/tokenContext';
import LoadingAnimation from '../LoadingAnimation';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    const fetchTransactions = async (page) => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/transactions/?page=${page}&limit=10`);
        const data = await response.json();
        setTransactions(data.data);
        setTotalPages(Math.ceil(data.amount / 10));
        setTotalTransactions(data.amount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions(currentPage);
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
        <h1 className="text-2xl font-semibold">Transactions</h1>
        <h1 className="text-2xl font-semibold">Amount: {totalTransactions.toLocaleString()}</h1>
      </div>
      <TransactionTable transactions={transactions} tokenAddressToName={tokenAddressToName} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default Transactions;
