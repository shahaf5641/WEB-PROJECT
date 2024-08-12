import React from 'react';
import StyledTableLink from '../contexts/StyledTableLink';
import { convertTimestamp } from '../contexts/tokenContext';
import { blockRowStyle, hiddenMdBlock, hiddenLgBlock } from '../contexts/style'; // Import the styles

/**
 * BlockRow component displays a single row of block data in a grid format.
 * The row includes the block's timestamp, number of transactions, block number, and a link to the block's details.
 * The layout adapts based on screen size, and the row scales slightly on hover.
 * 
 * @param {object} block - The block data to be displayed in the row.
 */
const BlockRow = ({ block }) => {
  return (
    <div className={blockRowStyle}>
      <div className="truncate">{convertTimestamp(block.timestamp)}</div>
      <div className={hiddenMdBlock}>{block.transactions}</div>
      <div className={hiddenLgBlock}>{block.number}</div>
      <div className="truncate">
        <StyledTableLink
          to={`/block/${block.hash}`}
        >
          {block.hash}
        </StyledTableLink>
      </div>
    </div>
  );
};

export default BlockRow;
