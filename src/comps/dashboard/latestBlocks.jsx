import React from 'react';
import BlocksTable from '../blocks/blocksTable';
import LatestItems from './LatestItems';

/**
 * The LatestBlocks component displays the latest blocks using the LatestItems component.
 */
const LatestBlocks = () => {
  return (
    <LatestItems
      fetchUrl="https://explorer.mtw-testnet.com/blocks"  
      TableComponent={(props) => <BlocksTable blocks={props.items} />}  
      title="Latest Blocks"  
      link="/blocks"  
      buttonText="View all blocks"  
    />
  );
};

/**
 * Exporting the LatestBlocks component.
 */
export default LatestBlocks;
