import React from 'react';
import BlocksTable from '../blocks/blocksTable';
import LatestItems from './LatestItems';
 
/**
 * The LatestBlocks component displays the latest blocks using the LatestItems component.
 */
const LatestBlocks = () => {
  return (
    /**
     * Rendering the LatestItems component with specific props to display the latest blocks.
     */
    <LatestItems
      /**
       * The URL used to fetch the latest blocks data.
       */
      fetchUrl="https://explorer.mtw-testnet.com/blocks"  
 
      /**
       * Passing the BlocksTable component to render the blocks data in a table.
       */
      TableComponent={(props) => <BlocksTable blocks={props.items} />}  
 
      /**
       * Setting the title for this section as "Latest Blocks".
       */
      title="Latest Blocks"  
 
      /**
       * The URL for the "View all blocks" button.
       */
      link="/blocks"  
 
      /**
       * The text for the "View all blocks" button.
       */
      buttonText="View all blocks"  
    />
  );
};
 
/**
 * Exporting the LatestBlocks component.
 */
export default LatestBlocks;
 