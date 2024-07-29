import React, { useEffect, useState } from 'react';
import TransactionTable from './transactionTable';
import { tokenAddressToName } from '../contexts/tokenContext';
import LoadingAnimation from '../LoadingAnimation';
import { Link } from 'react-router-dom';


const LatestTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/transactions/?limit=5`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTransactions(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-1 rounded-xl">
      <h2 className="text-xl font-semibold mb-1">Latest Transactions</h2>
      <TransactionTable transactions={transactions} tokenAddressToName={tokenAddressToName} />
      <p className="text-right"><p className="text-right">
        <Link to="/transactions" className="text-blue-500 hover:underline">
          View all transactions
        </Link>
      </p>
      </p>
    </div>
  );
};

export default LatestTransactions;
