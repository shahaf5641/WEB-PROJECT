import React, { useEffect, useState } from 'react';
import BlocksTable from './blocksTable';

const LatestBlocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const response = await fetch(`https://explorer.mtw-testnet.com/blocks/?limit=5`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlocks(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlocks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Latest Blocks</h2>
      <BlocksTable blocks={blocks} />
      <p className="text-right"><a href="/blocks" className="text-blue-500 hover:underline">View all blocks</a></p>
    </div>
  );
};

export default LatestBlocks;
