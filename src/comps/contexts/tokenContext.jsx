import React, { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

export const tokenAddressToName = {
  '0x6319276ac7962A04696064261e082f8c48dF9376': 'wUSD',
  '0xA014A5E978B9A542b2065Ba4a29D68De9b3431D1': 'wBTC',
  '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85': 'wETH',
  '0x5fBdb2315678afecb367f032d93F642f64180aa3': 'wADA',
  '0x742d35Cc6634C0532925a3b844Bc454e4438f44e': 'wBNB',
};

export const useToken = () => {
  return useContext(TokenContext);
};

export const TokenProvider = ({ children }) => {
  const [tokenSymbol, setTokenSymbol] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTokenDetails = async () => {
      try {
        const response = await fetch('https://api.mtw-testnet.com/assets/all');
        const data = await response.json();
        const tokenMap = {};
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
