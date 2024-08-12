import React from 'react';
import BlockRow from './blockRow';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import {
  blockTableContainerStyle,
  blockTableHeaderStyle,
  hiddenOnSmallVisibleOnMedium,
  hiddenOnSmallAndMediumVisibleOnLarge,
} from '../../comps/contexts/style';

/**
 * BlockTable Component
 * 
 * This component renders a table displaying a list of blockchain blocks.
 * Each block is represented as a row, using the `BlockRow` component.
 * The table's appearance adapts to dark mode using the `useDarkMode` context.
 * 
 * Props:
 * - `blocks`: An array of block objects to be displayed in the table.
 */
const BlockTable = ({ blocks }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className={blockTableContainerStyle}>
      <div className={blockTableHeaderStyle(darkMode)}>
        <div>Number</div>
        <div className={hiddenOnSmallVisibleOnMedium}>Hash</div>
        <div className={hiddenOnSmallAndMediumVisibleOnLarge}>Parent Hash</div>
        <div className={hiddenOnSmallAndMediumVisibleOnLarge}>Time</div>
        <div>Transactions</div>
      </div>
      <div>
        {blocks.map((block, index) => (
          <BlockRow key={index} block={block} />
        ))}
      </div>
    </div>
  );
};

export default BlockTable;
