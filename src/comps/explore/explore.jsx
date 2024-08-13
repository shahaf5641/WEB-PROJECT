import React, { useEffect, useState } from 'react';
import TickerWidget from './TickerWidget';
import ChartWidget from './ChartWidget';
import { useDarkMode } from '../contexts/DarkModeContext';
import {
  exploreContainerStyle,
  exploreTitleStyle,
  coinSelectionContainerStyle,
  coinSelectStyle,
  widgetContainerStyle,
  tickerWidgetContainerStyle,
  chartWidgetContainerStyle,
  labelStyleExplore
} from '../contexts/style';

/**
 * Explore Component
 * 
 * Provides an interface for users to explore real-time cryptocurrency data.
 * Users can select a cryptocurrency and view both a ticker and a chart that update in real-time.
 */
export default function Explore() {
  const [data, setData] = useState({ price: 0, change: 0 });  // Holds the current price and change data
  const [symbol, setSymbol] = useState('BTC');                // Holds the selected cryptocurrency symbol
  const { darkMode } = useDarkMode();                         // Access the dark mode state

  /**
   * WebSocket connection effect.
   * 
   * Establishes a WebSocket connection to receive real-time cryptocurrency data.
   * Automatically cleans up the connection when the component unmounts or the symbol changes.
   */
  useEffect(() => {
    const socket = new WebSocket('wss://mtickers.mtw-testnet.com/');

    socket.onopen = () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('WebSocket connection established');
      }
    };

    socket.onmessage = (e) => {
      try {
        const receivedData = JSON.parse(e.data);
        const symbolData = receivedData[symbol];
        if (symbolData) {
          setData({
            price: parseFloat(symbolData.p),
            change: parseFloat(symbolData.c),
          });
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    socket.onerror = (error) => console.error('WebSocket error:', error);
    socket.onclose = () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('WebSocket connection closed');
      }
    };

    return () => socket.close();
  }, [symbol]);

  return (
    <div className={exploreContainerStyle}>
      <h1 className={exploreTitleStyle}>Explore</h1>

      <div className={coinSelectionContainerStyle}>
        <label htmlFor="coin" className={labelStyleExplore}>
          Select Coin:
        </label>
        <select
          id="coin"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className={coinSelectStyle(darkMode)}
        >
          <option value="ETH">ETH</option>
          <option value="BTC">BTC</option>
          <option value="BNB">BNB</option>
          <option value="DOGE">DOGE</option>
          <option value="ADA">ADA</option>
        </select>
      </div>

      <div className={widgetContainerStyle}>
        <div className={tickerWidgetContainerStyle(darkMode)}>
          <TickerWidget data={data} symbol={symbol} />
        </div>

        <div className={chartWidgetContainerStyle(darkMode)}>
          <ChartWidget data={data} symbol={symbol} />
        </div>
      </div>
    </div>
  );
}
