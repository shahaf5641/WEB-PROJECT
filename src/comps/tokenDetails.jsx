import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import TransactionTable from './transactions/transactionTable';
import Pagination from './pagination';
import { useToken, tokenAddressToName } from './contexts/tokenContext';
import LoadingAnimation from './animations/LoadingAnimation';
import { useDarkMode } from '../comps/contexts/DarkModeContext';

const TokenDetails = () => {
  const { address } = useParams();
  const tokenSymbol = useToken();
  const [transactionDetails, setTransactionDetails] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchTransactions = async (page) => {
      try {
        const tokenDetail = tokenSymbol[address] || { symbol: tokenAddressToName[address] };
        if (tokenDetail) {
          setTransactionDetails(tokenDetail);
        }

        if (tokenDetail.symbol === 'wETH') {
          const ethResponse = await fetch(`https://explorer.mtw-testnet.com/transactions/?page=${page}&limit=10`);
          const ethData = await ethResponse.json();
          setTransactions(ethData.data);
          setTotalPages(Math.ceil(ethData.amount / 10));
        } else {
          const response = await fetch(`https://explorer.mtw-testnet.com/transactions?token=${address}&page=${page}&limit=10`);
          const data = await response.json();
          setTransactions(data.data);
          setTotalPages(Math.ceil(data.amount / 10));
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
    <div className="container mx-auto backdrop-blur-md p-4">
      <h1 className="text-4xl font-bold mb-4 underline">Token Details</h1>
      <div className="shadow-xl rounded-2xl p-6 mb-4 border-2 backdrop-blur-md text-2xl font-base text-left">
        <p className="mb-4 sm:text-wrap break-words"><strong>Address:</strong> {address}</p>
        <p className='mb-4'><strong>Symbol:</strong> {transactionDetails.symbol || 'N/A'}</p>
        <p className='mb-4'><strong>Name:</strong> {tokenInfo.name || 'N/A'}</p>
        {tokenInfo.image && <img src={tokenInfo.image} alt={`${tokenInfo.name} logo`} className="top-32 w-20 h-20 sm:top-24 sm:w-22 sm:h-22 md:top-16 absolute left-3/4 " />}

        {tokenInfo.summary && <p className='mb-6'><strong>Description:</strong> {tokenInfo.summary}</p>}
        <div className='mb-6 flex space-x-4'>
          {/* Website */}
          {tokenInfo.website && (
            <Link to={tokenInfo.website} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
              <div className={`w-auto items-center justify-center flex rounded-full border-2  duration-500 cursor-pointer active:scale-95 ${darkMode ? 'border-indigo-600 shadow-lg hover:bg-indigo-600 text-gray-100 hover:text-black' : 'border-blue-900 shadow-lg hover:bg-blue-900 text-gray-900 hover:text-gray-100'}`}>
                <button className="px-4 py-2">
                  <span>Visit {tokenInfo.name} Website</span>
                </button>
              </div>
            </Link>
          )}
          {/* Coingecko */}
          {tokenInfo.coingecko && (
            <Link to={tokenInfo.coingecko} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
              <div className={`w-auto items-center justify-center flex rounded-full border-2  duration-500 cursor-pointer active:scale-95 ${darkMode ? 'border-indigo-600 shadow-lg hover:bg-indigo-600 text-gray-100 hover:text-black' : 'border-blue-900 shadow-lg hover:bg-blue-900 text-gray-900 hover:text-gray-100'}`}>
              <button className="px-5 py-2">
                  <span>Visit {tokenInfo.name} on Coingecko</span>
                </button>
              </div>
            </Link>
          )}
        </div>

      </div>
      <h1 className="text-2xl text-left font-semibold mb-3 mt-10">Transactions</h1>
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
