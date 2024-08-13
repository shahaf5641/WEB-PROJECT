// src/comps/explore/ChartWidget.jsx
import React, { useEffect } from 'react';
import useChart from './useChart';
import {
  chartWidgetContainerStyle,
  chartWidgetTitleStyle,
} from '../contexts/style';

/**
 * ChartWidget Component
 * 
 * This component renders a real-time line chart using Chart.js to display the price of a given cryptocurrency symbol.
 * The chart is dynamically updated as new data is passed in via props.
 * 
 * @param {Object} data - The real-time data object containing the latest price information.
 * @param {string} symbol - The symbol of the cryptocurrency being displayed (e.g., BTC, ETH).
 * 
 * @returns {JSX.Element} A styled div containing a canvas element that displays the chart.
 */
export default function ChartWidget({ data, symbol }) {
  const { chartRef, updateChart } = useChart(symbol);

  useEffect(() => {
    if (data.price !== 0) {
      updateChart(data.price);
    }
  }, [data, updateChart]);

  return (
    <div className={chartWidgetContainerStyle} style={{ height: '400px' }}>
      <h2 className={chartWidgetTitleStyle}>Real Time Chart ({symbol})</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
