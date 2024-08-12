import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { convertTimestamp } from '../contexts/tokenContext';
import LoadingAnimation from '../animations/LoadingAnimation';
import { fetchBlockDetails } from '../contexts/Fetches';
import {
  detailsPageContainerStyle,
  detailsHeaderStyle,
  detailsContentContainerStyle,
  detailsParagraphStyle,
} from '../contexts/style'; // Import the styles

/**
 * BlockDetails component fetches and displays details of a specific blockchain block.
 * It handles loading and error states and adjusts styling based on dark mode.
 */
const BlockDetails = () => {
  const { blockNumber } = useParams();
  const [blockDetails, setBlockDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className={detailsPageContainerStyle}>
      <h1 className={detailsHeaderStyle}>Block Details</h1>
      <div className={detailsContentContainerStyle}>
        <p className={detailsParagraphStyle}><strong>Number:</strong> {blockDetails.number}</p>
        <p className={detailsParagraphStyle}><strong>Hash:</strong> {blockDetails.hash}</p>
        <p className={detailsParagraphStyle}><strong>Parent Hash:</strong> {blockDetails.parentHash}</p>
        <p className={detailsParagraphStyle}><strong>Time:</strong> {convertTimestamp(blockDetails.timestamp)}</p>
        <p className={detailsParagraphStyle}><strong>Gas Limit:</strong> {blockDetails.gasLimit}</p>
        <p className={detailsParagraphStyle}><strong>Gas Used:</strong> {blockDetails.gasUsed}</p>
        <p className={detailsParagraphStyle}><strong>Transactions:</strong> {blockDetails.transactions}</p>
      </div>
    </div>
  );
};

export default BlockDetails;
