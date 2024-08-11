import React from 'react';
import StyledTableLink from '../contexts/StyledTableLink';
import { convertTimestamp } from '../contexts/tokenContext';

const BlockRow = ({ block }) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border-2 rounded-xl text-lg font-semibold transform transition-transform duration-300 hover:scale-105">
      <div className="truncate">{convertTimestamp(block.timestamp)}</div>
      <div className="hidden md:block truncate">{block.transactions}</div>
      <div className="hidden lg:block truncate">{block.number}</div>
      <div className="truncate">
        <StyledTableLink
          to={`/block/${block.hash}`}
          className="text-blue-700 hover:underline"
        >
          {block.hash}
        </StyledTableLink>
      </div>
    </div>
  );
};

export default BlockRow;
