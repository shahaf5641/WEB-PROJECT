import React from 'react';
import { Link } from 'react-router-dom';
import { tokenAddressToName } from '../contexts/tokenContext';

export const convertTimestamp = (timestamp) => {
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 border-b rounded-xl">
      <div className="truncate">{convertTimestamp(tx.timestamp)}</div>
      <div className="hidden md:block truncate">
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
      </div>
      <div className="hidden lg:block truncate">
        <Link
          to={`/address/${tx.from}`}
          className="text-blue-500 hover:underline"
        >
          {tx.from}
        </Link>
      </div>
      <div className="hidden lg:block truncate">
        <Link
          to={`/address/${tx.to}`}
          className="text-blue-500 hover:underline"
        >
          {tx.to}
        </Link>
      </div>
      <div className="truncate">
        <Link
          to={`/transaction/${tx.hash}`}
          className="text-blue-500 hover:underline"
        >
          {tx.hash}
        </Link>
      </div>
    </div>
  );
};

export default TransactionRow;
