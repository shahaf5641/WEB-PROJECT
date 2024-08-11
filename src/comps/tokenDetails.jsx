import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import PaginationHandler from './contexts/pagination/PaginationHandler';
import TransactionTable from './transactions/transactionTable';
import { useToken, tokenAddressToName } from './contexts/tokenContext';
import { useDarkMode } from '../comps/contexts/DarkModeContext';
import { fetchTransactions } from './contexts/Fetches'; // Import the fetch function

const TokenDetails = () => {
  const { address } = useParams();
  const tokenSymbol = useToken();
  const { darkMode } = useDarkMode();
  const [tokenDetails, setTokenDetails] = useState({});

  useEffect(() => {
    const fetchTokenDetails = () => {
      const tokenDetail = tokenSymbol[address] || { symbol: tokenAddressToName[address] };
      setTokenDetails(tokenDetail);
    };

    fetchTokenDetails();
  }, [address, tokenSymbol]);

  const fetchFunction = useMemo(
    () => async (page) => {
      return await fetchTransactions(address, tokenDetails, page);
    },
    [address, tokenDetails]
  );

  const removeLeadingW = (symbol) => {
    return symbol.startsWith('w') ? symbol.substring(1) : symbol;
  };

  const tokenSymbolString = tokenDetails.symbol ? removeLeadingW(tokenDetails.symbol) : '';
  const tokenInfo = tokenSymbol[tokenSymbolString] || {};

  return (
    <>
      <div className="container mx-auto shadow-xl rounded-2xl p-6 mb-4 border-2 backdrop-blur-md text-2xl font-base text-left">
        <p className="mb-4 sm:text-wrap break-words"><strong>Address:</strong> {address}</p>
        <p className='mb-4'><strong>Symbol:</strong> {tokenDetails.symbol || 'N/A'}</p>
        <p className='mb-4'><strong>Name:</strong> {tokenInfo.name || 'N/A'}</p>
        {tokenInfo.image && <img src={tokenInfo.image} alt={`${tokenInfo.name} logo`} className="top-32 w-20 h-20 sm:top-24 sm:w-22 sm:h-22 md:top-16 absolute left-3/4 " />}

        {tokenInfo.summary && <p className='mb-6'><strong>Description:</strong> {tokenInfo.summary}</p>}
        <div className='mb-6 flex space-x-4'>
          {tokenInfo.website && (
            <Link to={tokenInfo.website} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
              <div className={`w-auto items-center justify-center flex rounded-full border-2  duration-500 cursor-pointer active:scale-95 ${darkMode ? 'border-indigo-600 shadow-lg hover:bg-indigo-600 text-gray-100 hover:text-black' : 'border-blue-900 shadow-lg hover:bg-blue-900 text-gray-900 hover:text-gray-100'}`}>
                <button className="px-4 py-2">
                  <span>Visit {tokenInfo.name} Website</span>
                </button>
              </div>
            </Link>
          )}
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
      <PaginationHandler
        fetchFunction={fetchFunction}
        title="Token Details"
        TableComponent={(props) => (
          <>
            <h1 className="text-2xl text-left font-semibold mb-3 mt-10">Transactions</h1>
            <TransactionTable transactions={props.items} tokenAddressToName={tokenAddressToName} />
          </>
        )}
        showSmallLoading={false}
      />
    </>
  );
};

export default TokenDetails;
