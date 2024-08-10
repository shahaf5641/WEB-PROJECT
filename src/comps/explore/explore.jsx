import React, { useEffect, useState } from 'react';
import TickerWidget from './TickerWidget';
import ChartWidget from './ChartWidget';
import { useDarkMode } from '../contexts/DarkModeContext';


export default function Explore() {
  const [data, setData] = useState({ price: 0, change: 0 });
  const [symbol, setSymbol] = useState('BTC');
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const socket = new WebSocket('wss://mtickers.mtw-testnet.com/');

    socket.onopen = () => {
      console.log('WebSocket connection established');
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

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => socket.close();
  }, [symbol]);

  return (
    <div className="flex flex-col items-center gap-3 backdrop-blur-md py-4">
      <h1 className="text-5xl font-bold mb-2 underline">Explore</h1>
      <div className="mb-5 flex items-center space-x-3">
        <label htmlFor="coin" className={`text-2xl font-semibold`}>Select Coin:</label>
        <select
          id="coin"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className={`border-2 rounded-lg p-2 text-lg shadow-md focus:outline-none transition-colors duration-300 ease-in-out ${darkMode ? 'bg-gray-700 border-indigo-500 focus:border-indigo-500' : 'bg-white border-gray-300 focus:border-blue-500'}`}>
          <option value="ETH">ETH</option>
          <option value="BTC">BTC</option>
          <option value="BNB">BNB</option>
          <option value="DOGE">DOGE</option>
          <option value="ADA">ADA</option>
        </select>
      </div>
      <div className="container flex flex-col md:flex-row items-start gap-12">
      <div className={`flex-1 md:w-1/2 rounded-2xl shadow-lg p-5 h-full border-2 ${darkMode ? 'bg-gray-800 border-white' : 'bg-gray-200 border-black'}`}>
          <TickerWidget data={data} symbol={symbol} />
        </div>
        <div className={`flex-1 md:w-1/2 rounded-2xl shadow-lg p-5 h-full border-2 ${darkMode ? 'bg-gray-800 border-white' : 'bg-gray-200 border-black'}`}>
          <ChartWidget data={data} symbol={symbol} />
        </div>
      </div>
    </div>
  );
}