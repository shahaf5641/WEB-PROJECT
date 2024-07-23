import React from 'react';
import TransactionRow from './transactionrow';

const TransactionTable = ({ transactions, tokenAddressToName }) => {
  return (
    <div className="flex justify-center">
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-700">
            <th className="py-2 px-2 border-b">Time</th>
            <th className="py-2 px-10 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Sender Profile</th>
            <th className="py-2 px-4 border-b">Recipient Profile</th>
            <th className="py-2 px-4 border-b">Transaction Details</th>
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
