import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TransactionTable from './transactions/transactionTable';
import Pagination from './pagination';
import { useToken, tokenAddressToName } from './contexts/tokenContext';
import LoadingAnimation from './LoadingAnimation';

const TokenDetails = () => {
  const { address } = useParams();
  const tokenSymbol = useToken();
  const [transactionDetails, setTransactionDetails] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTransactions = async (page) => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/transactions?token=${address}&page=${page}&limit=5`);
        const data = await response.json();
        setTransactions(data.data);
        setTotalPages(Math.ceil(data.amount / 10));

        const tokenDetail = tokenSymbol[address] || { symbol: tokenAddressToName[address] };
        if (tokenDetail) {
          setTransactionDetails(tokenDetail);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions(currentPage);
  }, [address, currentPage, tokenSymbol]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const removeLeadingW = (symbol) => {
    return symbol.startsWith('w') ? symbol.substring(1) : symbol;
  };

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  const tokenSymbolString = transactionDetails.symbol ? removeLeadingW(transactionDetails.symbol) : '';
  const tokenInfo = tokenSymbol[tokenSymbolString] || {};

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Token Details</h1>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Symbol:</strong> {transactionDetails.symbol || 'N/A'}</p>
        <p><strong>Name:</strong> {tokenInfo.name || 'US Dollar'}</p>
        {tokenInfo.image && <img src={tokenInfo.image} alt={`${tokenInfo.name} logo`} className="w-20 h-20" />}
        {tokenInfo.website && (
          <p><strong>Website:</strong> <a href={tokenInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{tokenInfo.website}</a></p>
        )}
        {tokenInfo.summary && <p><strong>Summary:</strong> {tokenInfo.summary}</p>}
        {tokenInfo.coingecko && (
          <p><strong>Coingecko:</strong> <a href={tokenInfo.coingecko} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{tokenInfo.coingecko}</a></p>
        )}
      </div>
      <h1 className="text-xl font-semibold mb-4">Transactions</h1>
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