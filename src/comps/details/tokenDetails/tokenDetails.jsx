import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PaginationHandler from '../../contexts/pagination/PaginationHandler';
import TransactionTable from '../../transactions/transactionTable';
import { useToken, tokenAddressToName } from '../../contexts/tokenContext';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { fetchTransactions } from '../../contexts/Fetches'; // Import the fetch function
import TokenLink from './TokenLink'; // Import the TokenLink component
import { tokenContainerStyle, tokenImgStyle } from '../../contexts/style'; 

/**
 * Displays detailed information about a specific token and manages its transactions.
 */
const TokenDetails = () => {
  const { address } = useParams();  // Get token address from URL parameters.
  const tokenSymbol = useToken();  // Access token symbol data from context.
  const { darkMode } = useDarkMode();  // Get current dark mode state.
  const [tokenDetails, setTokenDetails] = useState({});  // State for token details.
  const [detailsLoaded, setDetailsLoaded] = useState(false);  // Track if details are loaded.

  useEffect(() => {
    const fetchTokenDetails = () => {
      const tokenDetail = tokenSymbol[address] || { symbol: tokenAddressToName[address] };
      setTokenDetails(tokenDetail);
      setDetailsLoaded(true);  // Mark details as loaded.
    };

    fetchTokenDetails();  // Fetch and set token details.
  }, [address, tokenSymbol]);

  const fetchFunction = async (page) => {
    if (!detailsLoaded) return { data: [], amount: 0 };  // Return empty if details not loaded.
    return await fetchTransactions(address, tokenDetails, page);  // Fetch transactions.
  };

  const removeLeadingW = (symbol) => {
    return symbol.startsWith('w') ? symbol.substring(1) : symbol;
  };

  const tokenSymbolString = tokenDetails.symbol ? removeLeadingW(tokenDetails.symbol) : '';
  const tokenInfo = tokenSymbol[tokenSymbolString] || {};  // Retrieve token information.

  return (
    <>
      <div className={tokenContainerStyle(darkMode)}>
        <p className="mb-4 sm:text-wrap break-words"><strong>Address:</strong> {address}</p>
        <p className='mb-4'><strong>Symbol:</strong> {tokenDetails.symbol || 'N/A'}</p>
        <p className='mb-4'><strong>Name:</strong> {tokenInfo.name || 'N/A'}</p>
        {tokenInfo.image && <img src={tokenInfo.image} alt={`${tokenInfo.name} logo`} className={tokenImgStyle} />}
        {tokenInfo.summary && <p className='mb-6'><strong>Description:</strong> {tokenInfo.summary}</p>}
        <div className='mb-6 flex space-x-4'>
          {tokenInfo.website && (
            <TokenLink
              url={tokenInfo.website}
              label={`Visit ${tokenInfo.name} Website`}
              darkMode={darkMode}
            />
          )}
          {tokenInfo.coingecko && (
            <TokenLink
              url={tokenInfo.coingecko}
              label={`Visit ${tokenInfo.name} on Coingecko`}
              darkMode={darkMode}
            />
          )}
        </div>
      </div>
      {detailsLoaded && (
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
      )}
    </>
  );
};

export default TokenDetails;
