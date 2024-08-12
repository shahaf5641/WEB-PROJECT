// src/components/blocks/BlocksTable.jsx

import React from 'react';
import BlockRow from './blockRow';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import { blocksTableHeaderStyle } from '../../comps/contexts/style';

/**
 * BlocksTable component renders a table of blockchain blocks.
 * The table adapts its layout based on the screen size and applies dark mode styling if enabled.
 * 
 * @param {Array} blocks - An array of block data to be displayed in the table.
 */
const BlocksTable = ({ blocks }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className="w-full rounded-xl shadow-lg border-4 p-2">
      <div className={blocksTableHeaderStyle(darkMode)}>
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
