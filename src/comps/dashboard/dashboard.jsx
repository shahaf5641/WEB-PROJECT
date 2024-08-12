import React from 'react';
import LatestBlocks from './latestBlocks';
import LatestTransactions from './latestTransactions';
import { dashboardContainerStyle, dashboardTitleStyle, dashboardContentStyle } from '../contexts/style';

/**
 * The Dashboard component shows the latest transactions and blocks.
 * 
 * Structure:
 * - Container with a header.
 * - LatestTransactions and LatestBlocks components displayed in a column.
 */
 
const Dashboard = () => {
  return (
    <div className={dashboardContainerStyle}>
      <h1 className={dashboardTitleStyle}>Dashboard</h1>
      <div className={dashboardContentStyle}>
        <LatestTransactions />
        <LatestBlocks />
      </div>
    </div>
  );
};
 
export default Dashboard;
