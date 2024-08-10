import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { tokenAddressToName } from '../contexts/tokenContext';
import { getAmount, convertTimestamp } from '../contexts/tokenContext';
import LoadingAnimation from '../animations/LoadingAnimation';
import { useDarkMode } from '../contexts/DarkModeContext';

const TransactionDetails = () => {
  const { hash } = useParams();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useDarkMode();

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

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`container mx-auto backdrop-blur-md p-4 ${darkMode ? 'text-gray-100' : 'text-gray-950'}`}>
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
