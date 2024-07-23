import React from 'react';
import { Link } from 'react-router-dom';
import { convertTimestamp } from '../transactions/transactionrow';

const BlockRow = ({ block }) => {
  return (
    <tr className="even:bg-gray-50 hover:bg-gray-100">
      <td className="py-2 border-b">{convertTimestamp(block.timestamp)}</td>
      <td className="py-2 px- border-b">{block.number}</td>
      <td className="py-2 px-4 border-b">{block.transactions}</td>
      <td className="py-2 px-4 border-b">
        <Link to={`/block/${block.hash}`} className="text-blue-500 hover:underline">
          {block.hash}
        </Link>
      </td>
    </tr>
  );
};

export default BlockRow;
