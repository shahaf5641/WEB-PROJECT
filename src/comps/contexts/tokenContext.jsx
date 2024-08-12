import React, { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

// Mapping of token addresses to their names
export const tokenAddressToName = {
  '0x6319276ac7962A04696064261e082f8c48dF9376': 'wUSD',
  '0xA014A5E978B9A542b2065Ba4a29D68De9b3431D1': 'wBTC',
  '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85': 'wETH',
  '0x6F7389872A6C15C4B7234Fa23C4D6df8fA378587': 'wADA',
  '0x0cc5bb418771573C04187828C2ef491A6f51b909': 'wBNB',
  '0xBB69C32dc4827ec722f46891fA1F661400143DAe': 'wDOGE'
};

// Hook to use the TokenContext
export const useToken = () => {
  return useContext(TokenContext);
};

// Function to get the amount and token type
export const getAmount = (tx) => {
  if (tx.type === 'eth') {
    return `${tx.value} wETH`;
  } else if (tx.type === 'token') {
    const symbol = tokenAddressToName[tx.tokenAddress] || 'Unknown Token';
    return `${tx.tokenAmount} ${symbol}`;
  } else {
    return 'contract';
  }
};

// Function to convert a Unix timestamp to a human-readable date and time
export const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

// TokenProvider component to provide token information to the component tree
export const TokenProvider = ({ children }) => {
  const [tokenSymbol, setTokenSymbol] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTokenDetails = async () => {
      try {
        // Fetch token details from the API
        const response = await fetch('https://api.mtw-testnet.com/assets/all');
        const data = await response.json();
        const tokenMap = {};

        // Map the token data to the tokenSymbol state
        for (const symbol in data) {
          const token = data[symbol];
          tokenMap[symbol] = {
            symbol: symbol,
            name: token.name,
            image: token.image,
            website: token.website,
            summary: token.summary,
            coingecko: token.coingecko
          };
        }
        setTokenSymbol(tokenMap);
      } catch (err) {
        // Set error state if the fetch fails
        setError(err.message);
      }
    };

    fetchTokenDetails();
  }, []);

  return (
    <TokenContext.Provider value={tokenSymbol}>
      {error && <div>Error: {error}</div>}
      {children}
    </TokenContext.Provider>
  );
};
