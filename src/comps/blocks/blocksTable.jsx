import React from 'react';
import BlockRow from './blockRow';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

const BlocksTable = ({ blocks }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className="w-full rounded-xl shadow-lg border-4 p-2">
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${darkMode ? 'bg-gray-600 text-gray-100' : 'bg-gray-200 text-black'} p-4 rounded-md text-xl font-semibold`}>
        <div>Time</div>
        <div className="hidden md:block">Transactions</div>
        <div className="hidden lg:block">Block Number</div>
        <div>Block Details</div>
      </div>
      <div>
        {blocks.map((block, index) => (
          <BlockRow key={index} block={block} />
        ))}
      </div>
    </div>
  );
};

export default BlocksTable;
