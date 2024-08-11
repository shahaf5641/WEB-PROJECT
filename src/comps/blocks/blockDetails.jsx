// src/components/blocks/BlockDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { convertTimestamp } from '../contexts/tokenContext';
import LoadingAnimation from '../animations/LoadingAnimation';
import { useDarkMode } from '../contexts/DarkModeContext';
import { fetchBlockDetails } from '../contexts/Fetches';

const BlockDetails = () => {
  const { blockNumber } = useParams();
  const [blockDetails, setBlockDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const getBlockDetails = async () => {
      try {
        const data = await fetchBlockDetails(blockNumber);
        setBlockDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBlockDetails();
  }, [blockNumber]);

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`container mx-auto backdrop-blur-md p-4 ${darkMode ? 'text-gray-100' : 'text-gray-950'}`}>
      <h1 className="text-4xl font-bold mb-4 underline">Block Details</h1>
      <div className="shadow-xl rounded-2xl p-6 mb-4 border-2 backdrop-blur-md text-2xl font-base text-left">
        <p className="mb-4 sm:text-wrap break-words"><strong>Number:</strong> {blockDetails.number}</p>
        <p className="mb-4"><strong>Hash:</strong> {blockDetails.hash}</p>
        <p className="mb-4"><strong>Parent Hash:</strong> {blockDetails.parentHash}</p>
        <p className="mb-4"><strong>Time:</strong> {convertTimestamp(blockDetails.timestamp)}</p>
        <p className="mb-4"><strong>Gas Limit:</strong> {blockDetails.gasLimit}</p>
        <p className="mb-4"><strong>Gas Used:</strong> {blockDetails.gasUsed}</p>
        <p className="mb-4"><strong>Transactions:</strong> {blockDetails.transactions}</p>
      </div>
    </div>
  );
};

export default BlockDetails;
