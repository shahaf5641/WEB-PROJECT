import React from 'react';

/**
 * logoLinks Object
 * 
 * A mapping between cryptocurrency symbols and their corresponding logo URLs.
 * This object is used to dynamically display the appropriate logo based on the selected cryptocurrency.
 */
const logoLinks = {
  BTC: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  ETH: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  BNB: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  DOGE: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
  ADA: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
  LINK: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
  SHIB: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png',
};

/**
 * TickerWidget Component
 * 
 * This component displays real-time ticker information for a selected cryptocurrency.
 * It shows the current price, price change percentage, timestamp, and the logo of the selected cryptocurrency.
 * 
 * @param {Object} data - The real-time data object containing the latest price and change information.
 * @param {string} symbol - The symbol of the cryptocurrency being displayed (e.g., BTC, ETH).
 * 
 * @returns {JSX.Element} A styled div containing the ticker information and cryptocurrency logo.
 */
export default function TickerWidget({ data, symbol }) {
  const { price, change } = data; // Destructure the price and change values from the data object

  return (
    <div className="p-6 rounded-lg text-center h-full flex flex-col justify-between" style={{ height: '400px' }}>
      {/* Main container div for the ticker widget */}
      {/* The container is styled with padding, rounded corners, and centered text */}
      {/* It uses flexbox to vertically align its contents, filling the full height of the parent */}
      <h2 className="text-2xl font-semibold mb-4">Real Time Ticker ({symbol})</h2>
      {/* Header displaying the title of the ticker widget, including the selected cryptocurrency symbol */}
      {/* The text is styled with a large font size and bold weight */}
      
      <div className="flex flex-col items-center">
        {/* Flex container for the price, change, and timestamp elements */}
        {/* Vertically aligns and centers these elements */}
        
        <span className="text-5xl font-bold">{price.toFixed(2)}</span>
        {/* Displays the current price of the cryptocurrency */}
        {/* The price is rounded to two decimal places and styled with a very large, bold font */}
        
        <span className={`text-2xl ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '▲' : '▼'} {change.toFixed(2)}%
        </span>
        {/* Displays the price change percentage */}
        {/* The text color is green for positive changes and red for negative changes */}
        {/* An arrow icon (▲ or ▼) is shown before the percentage, indicating the direction of the change */}
        {/* The percentage is rounded to two decimal places */}
        
        <span className="text-gray-500">{new Date().toLocaleString()}</span>
        {/* Displays the current timestamp in a human-readable format */}
        {/* The text is styled with a gray color to differentiate it from the price and change */}
      </div>

      <img
        src={logoLinks[symbol]}
        alt={`${symbol} logo`}
        className="w-16 h-16 mt-3 self-center"
      />
      {/* Displays the logo of the selected cryptocurrency */}
      {/* The src attribute dynamically sets the image URL based on the selected symbol */}
      {/* The alt text describes the image for accessibility purposes */}
      {/* The image is styled with a fixed width and height, and centered horizontally */}
    </div>
  );
}
