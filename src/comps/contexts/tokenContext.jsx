// src/contexts/TokenContext.jsx
import React, { createContext, useContext } from 'react';

const TokenContext = createContext();

export const useToken = () => {
  return useContext(TokenContext);
};

export const TokenProvider = ({ children, value }) => {
  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>;
};
