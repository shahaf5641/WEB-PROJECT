import React from 'react';
 
const logoLinks = {
  BTC: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  ETH: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  BNB: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  DOGE: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
  ADA: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
  LINK: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
  SHIB: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png',
};
 
export default function TickerWidget({ data, symbol }) {
  const { price, change } = data;
 
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full h-full flex flex-col justify-between">
      <h2 className="text-2xl font-semibold mb-4">Real Time Ticker ({symbol})</h2>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold">{price.toFixed(2)}</span>
        <span className={`text-2xl ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '▲' : '▼'} {change.toFixed(2)}%
        </span>
        <span className="text-gray-500">{new Date().toLocaleString()}</span>
      </div>
      <img
        src={logoLinks[symbol]}
        alt={`${symbol} logo`}
        className="w-16 h-16 mt-3 self-center"
      />
    </div>
  );
}
 