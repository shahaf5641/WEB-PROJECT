// src/comps/transactionDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAmount } from './transcationrow';
import { useToken } from './contexts/tokenContext';

const TransactionDetails = () => {
  const { hash } = useParams();
  const tokenAddressToName = useToken();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/tx/${hash}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTransaction(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactionDetails();
  }, [hash]);

  const convertTimestamp = (timestamp) => {
    if (!timestamp) return 'Invalid Date';
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Transaction Details</h1>
      <div className="bg-white shadow-md rounded p-4">
        {transaction && (
          <>
            <p><strong>Hash:</strong> {transaction.hash}</p>
            <p><strong>Time:</strong> {convertTimestamp(transaction.time)}</p>
            <p><strong>From:</strong> {transaction.from}</p>
            <p><strong>To:</strong> {transaction.to}</p>
            <p><strong>Type:</strong> {transaction.type}</p>
            <p><strong>Amount:</strong> {getAmount(transaction, tokenAddressToName, true)}</p> {/* onlyValue is true */}
            <p><strong>Symbol:</strong> {tokenAddressToName[transaction.tokenAddress] || 'ETH'}</p>
            <p><strong>Gas Limit:</strong> {transaction.gasLimit}</p>
            <p><strong>Gas Price:</strong> {transaction.gasPrice}</p>
            <p><strong>Nonce:</strong> {transaction.nonce}</p>
            <p><strong>Block Number:</strong> {transaction.blockNumber}</p>
            <p><strong>Block Hash:</strong> {transaction.blockHash}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionDetails;
