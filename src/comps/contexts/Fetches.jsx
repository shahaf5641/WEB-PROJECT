
// Fetch block details by block number (hash)
export const fetchBlockDetails = async (blockNumber) => {
    try {
      const response = await fetch(`https://explorer.mtw-testnet.com/blockByHash/?hash=${blockNumber}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  
  // Fetch paginated items from a given URL
  export const fetchItems = async (fetchUrl, page) => {
    try {
      const response = await fetch(`${fetchUrl}?page=${page}&limit=5`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  
  // Fetch blocks with pagination handling
  export const fetchBlocks = async (page) => {
    try {
      const response = await fetch(`https://explorer.mtw-testnet.com/blocks?page=${page}&limit=10`);
      const data = await response.json();
      return { data: data.data, amount: data.amount };
    } catch (err) {
      throw new Error(err.message);
    }
  };


// Fetch transaction details by hash
export const fetchTransactionDetails = async (hash) => {
    try {
      const response = await fetch(`https://explorer.mtw-testnet.com/tx/${hash}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };


// Fetch transactions with pagination
export const fetchTransactionsData = async (page) => {
    try {
      const response = await fetch(`https://explorer.mtw-testnet.com/transactions/?page=${page}&limit=10`);
      const data = await response.json();
      return { data: data.data, amount: data.amount };
    } catch (err) {
      throw new Error(err.message);
    }
  };



export const fetchAccountTransactions = async (address, page, limit = 5) => {
    try {
      const response = await fetch(`https://explorer.mtw-testnet.com/transactions?address=${address}&page=${page}&limit=${limit}`);
      const data = await response.json();
      return { transactions: data.data, amount: data.amount };
    } catch (err) {
      throw new Error(err.message);
    }
  };


export const fetchTransactions = async (address, tokenDetails, page) => {
    try {
      const transactionsResponse = tokenDetails.symbol === 'wETH' 
        ? await fetch(`https://explorer.mtw-testnet.com/transactions/?page=${page}&limit=10`) 
        : await fetch(`https://explorer.mtw-testnet.com/transactions?token=${address}&page=${page}&limit=10`);
      
      const transactionsData = await transactionsResponse.json();
      return { data: transactionsData.data, amount: transactionsData.amount };
    } catch (err) {
      throw new Error(err.message);
    }
  };