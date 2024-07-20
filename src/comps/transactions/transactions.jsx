import React, { useEffect, useState } from 'react';
import TransactionTable from './transactionTable';
import Pagination from '../pagination';
import { useToken } from '../contexts/tokenContext';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const tokenDetails = useToken();


  //ETH address = 0x625828a26f5B362E5ff682252870659E53645B45
  const tokenAddressToName = {
    '0x6319276ac7962A04696064261e082f8c48dF9376': 'wUSD',
    '0xA014A5E978B9A542b2065Ba4a29D68De9b3431D1': 'wBTC',
    '0x6F7389872A6C15C4B7234Fa23C4D6df8fA378587': 'wADA',
    '0x0cc5bb418771573C04187828C2ef491A6f51b909': 'wBNB',
    
  };

  useEffect(() => {
    const fetchTransactions = async (page) => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/transactions/?page=${page}&limit=10`);
        const data = await response.json();
        setTransactions(data.data);
        setTotalPages(Math.ceil(data.amount / 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Transactions</h1>
      <TransactionTable transactions={transactions} tokenAddressToName={tokenAddressToName} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}