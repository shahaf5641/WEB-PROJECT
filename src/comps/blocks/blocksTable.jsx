import React from 'react';
import BlockRow from './blockRow';

const BlocksTable = ({ blocks }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-700 text-white p-4 rounded-md">
        <div>Time</div>
        <div className="hidden md:block">Transactions</div>
        <div className="hidden lg:block">Block Number</div>
        <div>Block Details</div>
      </div>
      <div>
        {blocks.map((block, index) => (
          <BlockRow key={index} block={block} />
        ))}
      </div>
    </div>
  );
};

export default BlocksTable;
