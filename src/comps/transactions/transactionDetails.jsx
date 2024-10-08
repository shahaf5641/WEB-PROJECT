import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { tokenAddressToName, getAmount, convertTimestamp } from '../contexts/tokenContext';
import LoadingAnimation from '../animations/LoadingAnimation';
import { fetchTransactionDetails } from '../contexts/Fetches'; // Import the function
import {
  detailsPageContainerStyle,
  detailsHeaderStyle,
  detailsContentContainerStyle,
  detailsParagraphStyle,
} from '../contexts/style';

/**
 * TransactionDetails component
 * 
 * Displays detailed information about a specific transaction.
 * Fetches transaction details based on the transaction hash from the URL parameters.
 */
const TransactionDetails = () => {
  const { hash } = useParams(); // Get the transaction hash from the URL parameters
  const [transaction, setTransaction] = useState(null); // State to store transaction details
  const [loading, setLoading] = useState(true); // State to manage loading animation
  const [error, setError] = useState(null); // State to handle potential errors

  // Fetch transaction details when the component is mounted or when the hash changes
  useEffect(() => {
    const getTransactionDetails = async () => {
      try {
        const data = await fetchTransactionDetails(hash); // Fetch the transaction details
        setTransaction(data); // Store the transaction details in state
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // End the loading state
      }
    };

    getTransactionDetails();
  }, [hash]);

  // Display a loading animation while data is being fetched
  if (loading) return <LoadingAnimation />;

  // Display an error message if there was an issue fetching the data
  if (error) return <p>Error: {error}</p>;

  // Render the transaction details if data is available
  return (
    <div className={detailsPageContainerStyle}>
      <h1 className={detailsHeaderStyle}>Transaction Details</h1>
      <div className={detailsContentContainerStyle}>
        {transaction && (
          <>
            <p className={detailsParagraphStyle}><strong>Hash:</strong> {transaction.hash}</p>
            <p className={detailsParagraphStyle}><strong>Time:</strong> {convertTimestamp(transaction.timestamp)}</p>
            <p className={detailsParagraphStyle}><strong>From:</strong> {transaction.from}</p>
            <p className={detailsParagraphStyle}><strong>To:</strong> {transaction.to}</p>
            <p className={detailsParagraphStyle}><strong>Type:</strong> {transaction.type}</p>
            <p className={detailsParagraphStyle}><strong>Amount:</strong> {getAmount(transaction)}</p>
            <p className={detailsParagraphStyle}><strong>Symbol:</strong> {tokenAddressToName[transaction.tokenAddress] || 'ETH'}</p>
            <p className={detailsParagraphStyle}><strong>Gas Limit:</strong> {transaction.gasLimit}</p>
            <p className={detailsParagraphStyle}><strong>Gas Price:</strong> {transaction.gasPrice}</p>
            <p className={detailsParagraphStyle}><strong>Nonce:</strong> {transaction.nonce}</p>
            <p className={detailsParagraphStyle}><strong>Block Number:</strong> {transaction.blockNumber}</p>
            <p className={detailsParagraphStyle}><strong>Block Hash:</strong> {transaction.blockHash}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionDetails;
