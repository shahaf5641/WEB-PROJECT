// src/comps/tokenDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TransactionTable from './transactions/transactionTable';
import Pagination from './pagination';
import { useToken } from './contexts/tokenContext';

const TokenDetails = () => {
  const { address } = useParams();
  const tokenAddressToName = useToken();
  const [tokenDetails, setTokenDetails] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTransactions = async (page) => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/transactions?token=${address}&page=${page}&limit=10`);
        const data = await response.json();
        setTransactions(data.data);
        setTotalPages(Math.ceil(data.amount / 10));

        if (data.data.length > 0) {
          const tokenDetail = {
            address: data.data[0].tokenAddress,
            symbol: tokenAddressToName[data.data[0].tokenAddress] || 'Token',
            name: 'Token Name',
          };
          setTokenDetails(tokenDetail);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions(currentPage);
  }, [address, currentPage, tokenAddressToName]);

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
      <h1 className="text-2xl font-semibold mb-4">Token Details</h1>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <p><strong>Address:</strong> {tokenDetails.address}</p>
        <p><strong>Symbol:</strong> {tokenDetails.symbol}</p>
        <p><strong>Name:</strong> {tokenDetails.name}</p>
      </div>
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
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

export default TokenDetails;
