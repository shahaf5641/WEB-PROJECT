import React from 'react';
import LatestBlocks from '../comps/blocks/latestBlocks';
import LatestTransactions from '../comps/transactions/latestTransactions';

const Dashboard = () => {
  return (
    <div className="mx-auto w-full px-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="flex flex-col gap-8">
        <LatestTransactions />
        <LatestBlocks />
      </div>
    </div>
  );
};

export default Dashboard;
