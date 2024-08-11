import React from 'react';
import LatestBlocks from './latestBlocks';
import LatestTransactions from './latestTransactions';
 
/**
 * The Dashboard component shows the latest transactions and blocks.
 * 
 * Structure:
 * - Container with a header.
 * - LatestTransactions and LatestBlocks components displayed in a column.
 */
 
const Dashboard = () => {
  return (
    <div className="container mx-auto rounded-xl">
      <h1 className="text-4xl font-bold mb-4 underline ">Dashboard</h1>
      <div className="flex flex-col">
        <LatestTransactions />
        <LatestBlocks />
      </div>
    </div>
  );
};
 
export default Dashboard;