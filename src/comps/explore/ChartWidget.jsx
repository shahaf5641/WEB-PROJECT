import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
 
export default function ChartWidget({ data, symbol }) {
  const chartRef = useRef(null);
 
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [], // Placeholder for labels
        datasets: [
          {
            label: `Price (${symbol})`,
            data: [], // Placeholder for data points
            borderColor: 'rgba(0, 0, 0, 0.8)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(0, 0, 0, 0.8)',
            fill: false,
            tension: 0.1, // Smoother lines
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
            ticks: {
              color: '#666',
            },
            grid: {
              display: false,
            },
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
            ticks: {
              color: '#666',
            },
            grid: {
              color: 'rgba(200, 200, 200, 0.3)',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: {
              size: 14,
              weight: 'bold',
            },
            bodyFont: {
              size: 12,
            },
            footerFont: {
              size: 10,
            },
          },
        },
      },
    });
 
    return () => {
      chart.destroy();
    };
  }, [symbol]);
 
  useEffect(() => {
    const chart = Chart.getChart(chartRef.current);
    if (chart) {
      const time = new Date().toLocaleTimeString();
      chart.data.labels.push(time);
      chart.data.datasets[0].data.push(data.price);
      chart.update();
    }
  }, [data]);
 
  return (
    <div className="p-6 rounded-lg" style={{ height: '400px' }}>
      <h2 className="text-2xl font-semibold mb-4">Real Time Chart ({symbol})</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}