// src/components/blocks/BlockDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { convertTimestamp } from '../transactions/transactionrow';
import LoadingAnimation from '../animations/LoadingAnimation';

const BlockDetails = () => {
  const { blockNumber } = useParams();
  const [blockDetails, setBlockDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlockDetails = async () => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/blockByHash/?hash=${blockNumber}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlockDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlockDetails();
  }, [blockNumber]);

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Block Details</h1>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <p><strong>Number:</strong> {blockDetails.number}</p>
        <p><strong>Hash:</strong> {blockDetails.hash}</p>
        <p><strong>Parent Hash:</strong> {blockDetails.parentHash}</p>
        <p><strong>Time:</strong> {convertTimestamp(blockDetails.timestamp)}</p>
        <p><strong>Gas Limit:</strong> {blockDetails.gasLimit}</p>
        <p><strong>Gas Used:</strong> {blockDetails.gasUsed}</p>
        <p><strong>Transactions:</strong> {blockDetails.transactions}</p>
      </div>
    </div>
  );
};

export default BlockDetails;
