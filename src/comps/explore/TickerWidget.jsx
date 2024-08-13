import React from 'react';
import { 
  tickerContainerStyle, 
  tickerTitleStyle, 
  tickerPriceStyle, 
  tickerChangeStyle, 
  tickerTimestampStyle, 
  tickerLogoStyle, 
  tickerContentStyle 
} from '../contexts/style';

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
  const { price, change } = data;

  return (
    <div className={tickerContainerStyle}>
      <h2 className={tickerTitleStyle}>Real Time Ticker ({symbol})</h2>
      
      <div className={tickerContentStyle}>
        <span className={tickerPriceStyle}>{price.toFixed(2)}</span>
        
        <span className={tickerChangeStyle(change)}>
          {change >= 0 ? '▲' : '▼'} {change.toFixed(2)}%
        </span>
        
        <span className={tickerTimestampStyle}>{new Date().toLocaleString()}</span>
      </div>

      <img
        src={logoLinks[symbol]}
        alt={`${symbol} logo`}
        className={tickerLogoStyle}
      />
    </div>
  );
}
