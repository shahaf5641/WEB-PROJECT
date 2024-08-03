import React from 'react';
import LatestBlocks from '../comps/blocks/latestBlocks';
import LatestTransactions from '../comps/transactions/latestTransactions';
import { useDarkMode } from '../comps/contexts/DarkModeContext';


const Dashboard = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className="container mx-auto rounded-xl">
      <h1 className={`text-4xl font-bold mb-4 underline ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Dashboard</h1>
      <div className="flex flex-col">
        <LatestTransactions />
        <LatestBlocks />
      </div>
    </div>
  );
};

export default Dashboard;
