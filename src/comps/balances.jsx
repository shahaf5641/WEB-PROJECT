// src/comps/balances.jsx
import React from 'react';

const Balances = ({ balances }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Balances</h2>
      <table className="min-w-full bg-white border border-gray-200 mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Symbol</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Token address</th>
          </tr>
        </thead>
        <tbody>
          {balances.map((balance, index) => (
            <tr key={index} className="even:bg-gray-50 hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{balance.symbol}</td>
              <td className="py-2 px-4 border-b">{balance.amount}</td>
              <td className="py-2 px-4 border-b">{balance.tokenAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Balances;
