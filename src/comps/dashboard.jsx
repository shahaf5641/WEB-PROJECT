import React from 'react';
import LatestBlocks from '../comps/blocks/latestBlocks';
import LatestTransactions from '../comps/transactions/latestTransactions';

const Dashboard = () => {
  return (
    <div className="container mx-auto rounded-xl">
      <h1 className="text-2xl font-bold m-2">Dashboard</h1>
      <div className="flex flex-col">
        <LatestTransactions />
        <LatestBlocks />
      </div>
    </div>
  );
};

export default Dashboard;
