import React from 'react';
import BlockRow from './blockRow';

const BlocksTable = ({ blocks }) => {
  return (
    <div className="flex justify-center overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100">
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Height</th>
            <th className="py-2 px-4 border-b">Transactions</th>
            <th className="py-2 px-4 border-b">Hash</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block, index) => (
            <BlockRow key={index} block={block} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlocksTable;