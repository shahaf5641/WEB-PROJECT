// src/components/blocks/Blocks.jsx
import React from 'react';
import BlocksTable from './blocksTable';
import { fetchBlocks } from '../contexts/Fetches';
import PaginationHandler from '../contexts/pagination/PaginationHandler';

const Blocks = () => {
  return (
    <PaginationHandler 
      fetchFunction={fetchBlocks} 
      title="Blocks" 
      TableComponent={(props) => <BlocksTable blocks={props.items} />} 
    />
  );
};

export default Blocks;
