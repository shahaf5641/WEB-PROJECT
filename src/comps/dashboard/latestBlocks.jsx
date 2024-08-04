import React from 'react';
import BlocksTable from '../blocks/blocksTable';
import LatestItems from './LatestItems';

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

export default LatestBlocks;
