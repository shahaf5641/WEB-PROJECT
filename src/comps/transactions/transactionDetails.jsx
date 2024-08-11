// src/components/transactions/TransactionDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { tokenAddressToName } from '../contexts/tokenContext';
import { getAmount, convertTimestamp } from '../contexts/tokenContext';
import LoadingAnimation from '../animations/LoadingAnimation';
import { fetchTransactionDetails } from '../contexts/Fetches'; // Import the function

const TransactionDetails = () => {
  const { hash } = useParams();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTransactionDetails = async () => {
      try {
        const data = await fetchTransactionDetails(hash);
        setTransaction(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTransactionDetails();
  }, [hash]);

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto backdrop-blur-md p-4">
      <h1 className="text-4xl font-bold mb-4 underline">Transaction Details</h1>
      <div className="shadow-xl rounded-2xl p-6 mb-4 border-2 backdrop-blur-md text-2xl font-base text-left">
        {transaction && (
          <>
            <p className="mb-4 sm:text-wrap break-words"><strong>Hash:</strong> {transaction.hash}</p>
            <p className="mb-4"><strong>Time:</strong> {convertTimestamp(transaction.timestamp)}</p>
            <p className="mb-4"><strong>From:</strong> {transaction.from}</p>
            <p className="mb-4"><strong>To:</strong> {transaction.to}</p>
            <p className="mb-4"><strong>Type:</strong> {transaction.type}</p>
            <p className="mb-4"><strong>Amount:</strong> {getAmount(transaction)}</p>
            <p className="mb-4"><strong>Symbol:</strong> {tokenAddressToName[transaction.tokenAddress] || 'ETH'}</p>
            <p className="mb-4"><strong>Gas Limit:</strong> {transaction.gasLimit}</p>
            <p className="mb-4"><strong>Gas Price:</strong> {transaction.gasPrice}</p>
            <p className="mb-4"><strong>Nonce:</strong> {transaction.nonce}</p>
            <p className="mb-4"><strong>Block Number:</strong> {transaction.blockNumber}</p>
            <p className="mb-4"><strong>Block Hash:</strong> {transaction.blockHash}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionDetails;
