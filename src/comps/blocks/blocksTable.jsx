import React from 'react';
import BlockRow from './blockRow';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import {
  blocksTableContainerStyle,
  blocksTableHeaderStyle,
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
    <div className={blocksTableContainerStyle}>
      <div className={blocksTableHeaderStyle(darkMode)}>
        <div >Time</div>
        <div className={hiddenOnSmallVisibleOnMedium}>Transcations</div>
        <div className={hiddenOnSmallAndMediumVisibleOnLarge}>Block Number</div>
        <div>Hash</div>
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
