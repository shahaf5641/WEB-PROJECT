import React from 'react';
import TransactionRow from './transactionrow';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

const TransactionTable = ({ transactions, tokenAddressToName }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className="w-full rounded-xl shadow-lg border-4 p-2">
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ${darkMode ? 'bg-gray-600 text-gray-100' : 'bg-gray-200 text-black border '}  p-4 rounded-md text-xl font-semibold`}>
        <div>Time</div>
        <div className="hidden md:block">Amount</div>
        <div className="hidden lg:block">Sender Profile</div>
        <div className="hidden lg:block">Recipient Profile</div>
        <div>Transaction Details</div>
      </div>
      <div>
        {transactions.map((tx, index) => (
          <TransactionRow key={index} tx={tx} tokenAddressToName={tokenAddressToName} />
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;
