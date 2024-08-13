import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

/**
 * useChart Hook
 * 
 * This custom hook handles the creation and management of a Chart.js line chart for displaying real-time cryptocurrency prices.
 * It initializes the chart, updates it with new data, and cleans up the chart instance when the component using the hook unmounts.
 * 
 * @param {string} symbol - The symbol of the cryptocurrency being displayed (e.g., BTC, ETH).
 * @returns {object} - An object containing a ref for the chart's canvas element and a function to update the chart with new data.
 */
export default function useChart(symbol) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the Chart.js instance on the referenced canvas
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: `Price (${symbol})`,
            data: [],
            borderColor: 'rgba(0, 0, 0, 0.8)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(0, 0, 0, 0.8)',
            fill: false,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Time',
              color: '#666',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            ticks: { color: '#666' },
            grid: { display: false },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Price',
              color: '#666',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            ticks: { color: '#666' },
            grid: { color: 'rgba(200, 200, 200, 0.3)' },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: { size: 14, weight: 'bold' },
            bodyFont: { size: 12 },
            footerFont: { size: 10 },
          },
        },
      },
    });

    return () => chart.destroy(); // Cleanup chart instance on unmount
  }, [symbol]);

  /**
   * Updates the chart with new data.
   * 
   * @param {number} newData - The latest price data to be added to the chart.
   */
  const updateChart = (newData) => {
    const chart = Chart.getChart(chartRef.current);
    if (chart) {
      chart.data.labels.push(new Date().toLocaleTimeString());
      chart.data.datasets[0].data.push(newData);
      chart.update();
    }
  };

  return { chartRef, updateChart };
}
