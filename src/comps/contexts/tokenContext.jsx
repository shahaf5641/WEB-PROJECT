// src/contexts/TokenContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

export const useToken = () => {
  return useContext(TokenContext);
};

export const TokenProvider = ({ children }) => {
  const [tokenDetails, setTokenDetails] = useState({});
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
            id: token.id,
            name: token.name,
            image: token.image,
            website: token.website,
            summary: token.summary,
            coingecko: token.coingecko
          };
        }
        setTokenDetails(tokenMap);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTokenDetails();
  }, []);

  return (
    <TokenContext.Provider value={tokenDetails}>
      {error && <div>Error: {error}</div>}
      {children}
    </TokenContext.Provider>
  );
};
