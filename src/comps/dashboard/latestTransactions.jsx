import React from 'react';
import TransactionTable from '../transactions/transactionTable';
import { tokenAddressToName } from '../contexts/tokenContext';
import LatestItems from './LatestItems';

/**
 * The LatestTransactions component displays the latest transactions using the LatestItems component.
 */
const LatestTransactions = () => {
  return (
    // Rendering the LatestItems component with specific props to display the latest transactions.
    <LatestItems
      // The URL used to fetch the latest transactions data.
      fetchUrl="https://explorer.mtw-testnet.com/transactions"
      
      // Passing the TransactionTable component to render the transactions data in a table.
      TableComponent={(props) => (
        <TransactionTable
          transactions={props.items}
          tokenAddressToName={tokenAddressToName}
        />
      )}
      
      // Setting the title for this section as "Latest Transactions".
      title="Latest Transactions"
      
      // The URL for the "View all transactions" button.
      link="/transactions"
      
      // The text for the "View all transactions" button.
      buttonText="View all transactions"
    />
  );
};

// Exporting the LatestTransactions component.
export default LatestTransactions;
