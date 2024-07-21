 
import React from 'react';
 
export default function TickerWidget({ data, symbol }) {
  const { price, change } = data;
 
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full h-full">
      <h2 className="text-2xl font-semibold mb-4">Real Time Ticker ({symbol})</h2>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold">{price.toFixed(2)}</span>
        <span className={`text-2xl ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '▲' : '▼'} {change.toFixed(2)}%
        </span>
        <span className="text-gray-500">{new Date().toLocaleString()}</span>
      </div>
    </div>
  );
}
 