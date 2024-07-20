// src/comps/tokenDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TransactionTable from './transactions/transactionTable';
import Pagination from './pagination';
import { useToken } from './contexts/tokenContext';



const TokenDetails = () => {
  const { address } = useParams();
  const tokenDetailsMap = useToken();
  const [tokenDetails, setTokenDetails] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const tokenAddressToName = {
    '0x6319276ac7962A04696064261e082f8c48dF9376': 'wUSD',
    '0xA014A5E978B9A542b2065Ba4a29D68De9b3431D1': 'wBTC',
  };

  useEffect(() => {
    const fetchTransactions = async (page) => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/transactions?token=${address}&page=${page}&limit=10`);
        const data = await response.json();
        setTransactions(data.data);
        setTotalPages(Math.ceil(data.amount / 10));

        const tokenSymbol = tokenAddressToName[address] || 'wETH';
        const tokenDetail = tokenDetailsMap[tokenSymbol] || { symbol: tokenSymbol };
        if (tokenDetail) {
          setTokenDetails(tokenDetail);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions(currentPage);
  }, [address, currentPage, tokenDetailsMap]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const removeLeadingW = (symbol) => {
    return symbol.startsWith('w') ? symbol.substring(1) : symbol;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  const tokenSymbol = tokenDetails.symbol ? removeLeadingW(tokenDetails.symbol) : '';
  const tokenInfo = tokenDetailsMap[tokenSymbol] || {};


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Token Details</h1>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Symbol:</strong> {tokenDetails.symbol || 'N/A'}</p>
        <p><strong>Name:</strong> {tokenInfo.name || 'USD'}</p>
        {tokenInfo.image && <img src={tokenInfo.image} alt={`${tokenInfo.name} logo`} className="w-20 h-20" />}
        {tokenInfo.website && (
          <p><strong>Website:</strong> <a href={tokenInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{tokenInfo.website}</a></p>
        )}
        {tokenInfo.summary && <p><strong>Summary:</strong> {tokenInfo.summary}</p>}
        {tokenInfo.coingecko && (
          <p><strong>Coingecko:</strong> <a href={tokenInfo.coingecko} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{tokenInfo.coingecko}</a></p>
        )}
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