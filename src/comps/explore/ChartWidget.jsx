import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

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
  // useRef hook to create a reference for the canvas element in the DOM
  const chartRef = useRef(null);

  /**
   * useEffect Hook - Chart Initialization
   * 
   * This effect runs when the component mounts or when the `symbol` prop changes.
   * It initializes the Chart.js instance on the referenced canvas and configures it with the provided options.
   * 
   * Dependencies: [symbol]
   */
  useEffect(() => {
    // Get the 2D drawing context of the canvas element
    const ctx = chartRef.current.getContext('2d');

    // Create a new Chart.js instance with the provided configuration
    const chart = new Chart(ctx, {
      type: 'line', // Specify the type of chart as 'line'
      data: {
        labels: [], // Initialize an empty array for time labels
        datasets: [
          {
            label: `Price (${symbol})`, // Dynamic label using the provided symbol
            data: [], // Initialize an empty array for price data points
            borderColor: 'rgba(0, 0, 0, 0.8)', // Color of the line representing the price
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Background color under the line
            pointBackgroundColor: 'rgba(0, 0, 0, 0.8)', // Background color of the data points
            pointBorderColor: '#fff', // Border color of the data points
            pointHoverBackgroundColor: '#fff', // Background color of data points on hover
            pointHoverBorderColor: 'rgba(0, 0, 0, 0.8)', // Border color of data points on hover
            fill: false, // Disable filling the area under the line
            tension: 0.1, // Adds slight curvature to the line for a smoother appearance
          },
        ],
      },
      options: {
        responsive: true, // Ensures the chart scales with its container
        maintainAspectRatio: false, // Allows the chart to fill its container without keeping aspect ratio
        scales: {
          x: {
            display: true, // Displays the x-axis
            title: {
              display: true, // Displays the title for the x-axis
              text: 'Time', // Label for the x-axis
              color: '#666', // Color of the axis title
              font: {
                size: 14, // Font size of the axis title
                weight: 'bold', // Font weight of the axis title
              },
            },
            ticks: {
              color: '#666', // Color of the tick labels on the x-axis
            },
            grid: {
              display: false, // Hides the grid lines on the x-axis
            },
          },
          y: {
            display: true, // Displays the y-axis
            title: {
              display: true, // Displays the title for the y-axis
              text: 'Price', // Label for the y-axis
              color: '#666', // Color of the axis title
              font: {
                size: 14, // Font size of the axis title
                weight: 'bold', // Font weight of the axis title
              },
            },
            ticks: {
              color: '#666', // Color of the tick labels on the y-axis
            },
            grid: {
              color: 'rgba(200, 200, 200, 0.3)', // Color of the grid lines on the y-axis
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Hides the legend
          },
          tooltip: {
            enabled: true, // Enables tooltips on hover
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Background color of the tooltip
            titleFont: {
              size: 14, // Font size of the tooltip title
              weight: 'bold', // Font weight of the tooltip title
            },
            bodyFont: {
              size: 12, // Font size of the tooltip body
            },
            footerFont: {
              size: 10, // Font size of the tooltip footer
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy(); // Prevents memory leaks by destroying the chart instance
    };
  }, [symbol]); // Effect dependency on `symbol` ensures the chart is re-created if the symbol changes

  /**
   * useEffect Hook - Chart Data Update
   * 
   * This effect runs whenever the `data` prop changes. It updates the chart with the new data,
   * adding the current time to the labels array and the latest price to the data array.
   * 
   * Dependencies: [data]
   */
  useEffect(() => {
    // Retrieve the current chart instance associated with the canvas
    const chart = Chart.getChart(chartRef.current);
    if (chart) {
      const time = new Date().toLocaleTimeString(); // Get the current time as a string
      chart.data.labels.push(time); // Add the current time to the x-axis labels
      chart.data.datasets[0].data.push(data.price); // Add the latest price to the dataset
      chart.update(); // Update the chart to reflect the new data
    }
  }, [data]); // Effect dependency on `data` ensures the chart updates when new data is received

  return (
    <div className="p-6 rounded-lg" style={{ height: '400px' }}>
      {/* Title of the chart with the dynamic cryptocurrency symbol */}
      <h2 className="text-2xl font-semibold mb-4">Real Time Chart ({symbol})</h2>
      {/* Canvas element where the chart will be drawn */}
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
