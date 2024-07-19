import React from 'react';
import { Link } from 'react-router-dom';

const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

export const getAmount = (tx, tokenAddressToName, onlyValue = false) => {
  if (tx.type === 'eth') {
    return onlyValue ? tx.value : `${tx.value} wETH`;
  } else if (tx.type === 'token') {
    const symbol = tokenAddressToName[tx.tokenAddress] || 'Token';
    return onlyValue ? tx.tokenAmount : `${tx.tokenAmount} ${symbol}`;
  } else {
    return 'Unknown';
  }
};

const TransactionRow = ({ tx, tokenAddressToName }) => {
  return (
    <tr className="even:bg-gray-50 hover:bg-gray-100">
      <td className="py-2 px-4 border-b">{convertTimestamp(tx.timestamp)}</td>
      <td className="py-2 px-4 border-b">
        {tx.type === 'token' ? (
          <a
            href={`https://blockexplorer.morethanwallet.com/token/${tx.tokenAddress}`}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getAmount(tx, tokenAddressToName)}
          </a>
        ) : (
          getAmount(tx, tokenAddressToName)
        )}
      </td>
      <td className="py-2 px-4 border-b">{tx.from}</td>
      <td className="py-2 px-4 border-b">{tx.to}</td>
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
