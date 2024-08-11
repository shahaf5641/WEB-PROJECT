// src/components/blocks/Blocks.jsx
import React from 'react';
import BlocksTable from './blocksTable';
import { fetchBlocks } from '../contexts/Fetches';
import PaginationHandler from '../contexts/pagination/PaginationHandler';

/**
 * Blocks component is responsible for fetching and displaying a paginated list of blockchain blocks.
 * It utilizes the PaginationHandler component to manage pagination and data fetching.
 */
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
