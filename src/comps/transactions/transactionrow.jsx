import React from 'react';
import { Link } from 'react-router-dom';
import { tokenAddressToName } from '../contexts/tokenContext';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';


export const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

export const getAmount = (tx) => {
  if (tx.type === 'eth') {
    return `${tx.value} wETH`;
  } else if (tx.type === 'token') {
    const symbol = tokenAddressToName[tx.tokenAddress] || 'Unknown Token';
    return `${tx.tokenAmount} ${symbol}`;
  } else {
    return 'contract';
  }
};

const TransactionRow = ({ tx }) => {
  const amount = getAmount(tx);
  const isWETH = amount.includes('wETH');
  const { darkMode } = useDarkMode();


  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 border-2 rounded-xl text-lg font-semibold transform transition-transform duration-300 hover:scale-105 ${darkMode ? 'text-gray-100' : 'text-black'}`}>
      <div className="truncate">{convertTimestamp(tx.timestamp)}</div>
      <div className="hidden md:block truncate">
        {isWETH ? (
          <Link
            to={`/token/0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85`}
            className="text-blue-700 hover:underline"
          >
            {amount}
          </Link>
        ) : tx.type === 'token' ? (
          <Link
            to={`/token/${tx.tokenAddress}`}
            className="text-blue-700 hover:underline"
          >
            {amount}
          </Link>
        ) : (
          amount
        )}
      </div>
      <div className="hidden lg:block truncate">
        <Link
          to={`/address/${tx.from}`}
          className="text-blue-700 hover:underline"
        >
          {tx.from}
        </Link>
      </div>
      <div className="hidden lg:block truncate">
        <Link
          to={`/address/${tx.to}`}
          className="text-blue-700 hover:underline"
        >
          {tx.to}
        </Link>
      </div>
      <div className="truncate">
        <Link
          to={`/transaction/${tx.hash}`}
          className="text-blue-700 hover:underline"
        >
          {tx.hash}
        </Link>
      </div>
    </div>
  );
};

export default TransactionRow;