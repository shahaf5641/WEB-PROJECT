import React, { useEffect, useState } from 'react';
import TransactionTable from './transactionTable';
import Pagination from './pagination';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [tokenDetails, setTokenDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const tokenAddressToName = {
    '0x6319276ac7962A04696064261e082f8c48dF9376': 'wUSD',
    '0xA014A5E978B9A542b2065Ba4a29D68De9b3431D1': 'wBTC'
  };

  useEffect(() => {
    const fetchTransactions = async (page) => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/transactions/?page=${page}&limit=10`);
        const data = await response.json();
        setTransactions(data.data);
        setTotalPages(Math.ceil(data.amount / 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchTokenDetails = async () => {
      try {
        const response = await fetch('https://api.mtw-testnet.com/assets/all');
        const data = await response.json();
        const tokenMap = {};
        for (const symbol in data) {
          const token = data[symbol];
          tokenMap[token.id] = symbol;
        }
        setTokenDetails(tokenMap);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTransactions(currentPage);
    fetchTokenDetails();
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Transactions</h1>
      <TransactionTable transactions={transactions} tokenAddressToName={tokenAddressToName} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}
