// src/comps/transactionRow.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { tokenAddressToName } from '../contexts/tokenContext';

const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

export const getAmount = (tx) => {
  if (tx.type === 'eth') {
    return `${tx.value} wETH`;
  } else if (tx.type === 'token') {
    const symbol = tokenAddressToName[tx.tokenAddress] || 'Token';
    return `${tx.tokenAmount} ${symbol}`;
  } else {
    return 'contract';
  }
};

const TransactionRow = ({ tx }) => {
  return (
    <tr className="even:bg-gray-50 hover:bg-gray-100">
      <td className="py-2 px-4 border-b">{convertTimestamp(tx.timestamp)}</td>
      <td className="py-2 px-4 border-b">
        {tx.type === 'token' ? (
          <Link
            to={`/token/${tx.tokenAddress}`}
            className="text-blue-500 hover:underline"
          >
            {getAmount(tx)}
          </Link>
        ) : (
          getAmount(tx)
        )}
      </td>
      <td className="py-2 px-4 border-b">
        <Link
          to={`/account/${tx.from}`}
          className="text-blue-500 hover:underline"
        >
          {tx.from}
        </Link>
      </td>
      <td className="py-2 px-4 border-b">
        <Link
          to={`/account/${tx.to}`}
          className="text-blue-500 hover:underline"
        >
          {tx.to}
        </Link>
      </td>
      <td className="py-2 px-4 border-b">
        <Link
          to={`/transaction/${tx.hash}`}
          className="text-blue-500 hover:underline"
        >
          {tx.hash}
        </Link>
      </td>
    </tr>
  );
};

export default TransactionRow;
