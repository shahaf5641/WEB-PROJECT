import React from 'react';
import TransactionRow from './transactionrow';

const TransactionTable = ({ transactions, tokenAddressToName }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-gray-700 text-white p-4 rounded-md">
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
