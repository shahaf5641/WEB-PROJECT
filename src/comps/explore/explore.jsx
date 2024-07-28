import React, { useEffect, useState } from 'react';
import TickerWidget from './TickerWidget';
import ChartWidget from './ChartWidget';
 
export default function Explore() {
  const [data, setData] = useState({ price: 0, change: 0 });
  const [symbol, setSymbol] = useState('BTC');
 
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
    <div className="flex flex-col items-center gap-5 p-5">
      <h1 className="text-5xl font-bold text-white">Explore Page</h1>
      <div className="mb-5 flex items-center space-x-3">
        <label htmlFor="symbol" className="text-xl text-gray-700 font-medium">Select Symbol:</label>
        <select
          id="symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="border-2 border-gray-300 rounded-lg p-2 text-lg bg-white shadow-md focus:outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
        >
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="BNB">BNB</option>
          <option value="DOGE">DOGE</option>
          <option value="ADA">ADA</option>
          <option value="LINK">LINK</option>
          <option value="SHIB">SHIB</option>
        </select>
      </div>
      <div className="container flex flex-col md:flex-row items-start gap-5 w-full">
        <div className="flex-1 md:w-1/2 bg-white rounded-lg shadow-lg p-5 h-full">
          <TickerWidget data={data} symbol={symbol} />
        </div>
        <div className="flex-1 md:w-1/2 bg-white rounded-lg shadow-lg p-5 h-full">
          <ChartWidget data={data} symbol={symbol} />
        </div>
      </div>
    </div>
  );
}