// src/comps/TransactionTable.jsx
import React from 'react';
import TransactionRow from './transactionrow';

const TransactionTable = ({ transactions, tokenAddressToName }) => {
  return (
    <div className="flex justify-center">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100">
            <th className="py-2 px-12 border-b">Time</th>
            <th className="py-2 px-12 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Sender</th>
            <th className="py-2 px-4 border-b">Recipient</th>
            <th className="py-2 px-4 border-b">Hash</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <TransactionRow key={index} tx={tx} tokenAddressToName={tokenAddressToName} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
