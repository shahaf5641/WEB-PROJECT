import React from 'react';
import { Link } from 'react-router-dom';

const BlockRow = ({ block }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border-b rounded-xl">
      <div className="truncate">{formatTimestamp(block.timestamp)}</div>
      <div className="hidden md:block truncate">{block.transactions}</div>
      <div className="hidden lg:block truncate">{block.number}</div>
      <div className="truncate">
        <Link
          to={`/block/${block.hash}`}
          className="text-blue-500 hover:underline"
        >
          {block.hash}
        </Link>
      </div>
    </div>
  );
};

export default BlockRow;
