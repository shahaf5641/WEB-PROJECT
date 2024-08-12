import React, { useEffect, useState } from 'react';
import TickerWidget from './TickerWidget';
import ChartWidget from './ChartWidget';
import { useDarkMode } from '../contexts/DarkModeContext';

/**
 * Explore Component
 * 
 * This component provides an interface to explore real-time cryptocurrency data.
 * It allows users to select a cryptocurrency (coin) and displays both a ticker and a chart
 * that are dynamically updated through a WebSocket connection.
 * 
 * @returns {JSX.Element} The rendered Explore page with cryptocurrency selection, ticker, and chart.
 */
export default function Explore() {
  // State to manage the current data (price and change) received from the WebSocket
  const [data, setData] = useState({ price: 0, change: 0 });

  // State to manage the selected cryptocurrency symbol (e.g., BTC, ETH)
  const [symbol, setSymbol] = useState('BTC');

  // Access the dark mode state from the DarkModeContext
  const { darkMode } = useDarkMode();

  /**
   * useEffect Hook - WebSocket Connection
   * 
   * This effect establishes a WebSocket connection to receive real-time data for the selected cryptocurrency.
   * It listens for incoming messages, parses the data, and updates the state with the latest price and change.
   * 
   * The WebSocket connection is closed when the component unmounts or when the symbol changes.
   * 
   * Dependencies: [symbol]
   */
  useEffect(() => {
    // Establish a WebSocket connection to the specified URL
    const socket = new WebSocket('wss://mtickers.mtw-testnet.com/');

    // Event handler for when the WebSocket connection is opened
    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    // Event handler for when a message is received from the WebSocket
    socket.onmessage = (e) => {
      try {
        // Parse the incoming data as JSON
        const receivedData = JSON.parse(e.data);
        // Extract the data for the selected symbol
        const symbolData = receivedData[symbol];
        if (symbolData) {
          // Update the state with the latest price and change
          setData({
            price: parseFloat(symbolData.p), // Convert price to a float
            change: parseFloat(symbolData.c), // Convert change to a float
          });
        }
      } catch (error) {
        // Log any errors that occur during parsing
        console.error('Error parsing WebSocket message:', error);
      }
    };

    // Event handler for any WebSocket errors
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Event handler for when the WebSocket connection is closed
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup function to close the WebSocket connection when the component unmounts or the symbol changes
    return () => socket.close();
  }, [symbol]); // Effect dependency on `symbol` ensures the WebSocket reconnects when the symbol changes

  return (
    <div className="flex flex-col items-center gap-3 backdrop-blur-md py-4">
      {/* Page title */}
      <h1 className="text-5xl font-bold mb-2 underline">Explore</h1>
  
      {/* Cryptocurrency selection dropdown */}
      <div className="mb-5 flex items-center space-x-3">
        <label htmlFor="coin" className="text-2xl font-semibold">
          Select Coin:
        </label>
        <select
          id="coin"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)} // Update the selected symbol based on user input
          className={`border-2 rounded-lg p-2 text-lg shadow-md focus:outline-none transition-colors duration-300 ease-in-out ${
            darkMode
              ? 'bg-gray-700 border-indigo-500 focus:border-indigo-500'
              : 'bg-white border-gray-300 focus:border-blue-500'
          }`}
        >
          {/* Options for selecting different cryptocurrencies */}
          <option value="ETH">ETH</option>
          <option value="BTC">BTC</option>
          <option value="BNB">BNB</option>
          <option value="DOGE">DOGE</option>
          <option value="ADA">ADA</option>
        </select>
      </div>
  
      {/* Container for the Ticker and Chart widgets */}
      <div className="container flex flex-col md:flex-row items-start gap-12">
        {/* Ticker Widget */}
        <div
          className={`flex-1 md:w-1/2 rounded-2xl shadow-lg p-5 h-full border-2 ${
            darkMode ? 'bg-gray-800 border-white' : 'bg-gray-200 border-black'
          }`}
        >
          <TickerWidget data={data} symbol={symbol} />
        </div>
  
        {/* Chart Widget */}
        <div
          className={`flex-1 md:w-1/2 rounded-2xl shadow-lg p-5 h-full border-2 ${
            darkMode ? 'bg-gray-800 border-white' : 'bg-gray-200 border-black'
          }`}
        >
          <ChartWidget data={data} symbol={symbol} />
        </div>
      </div>
    </div>
  );
  
}
