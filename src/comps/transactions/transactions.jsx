import React from 'react';
import TransactionTable from './transactionTable';
import { fetchTransactionsData } from '../contexts/Fetches';
import PaginationHandler from '../contexts/pagination/PaginationHandler';
import { tokenAddressToName } from '../contexts/tokenContext';
 
/**
 * Transactions Component
 * 
 * This component handles the display of a paginated list of transactions.
 * It utilizes the `PaginationHandler` component to manage the data fetching
 * and pagination logic. The transaction data is passed to the `TransactionTable` component
 * for rendering, along with the `tokenAddressToName` mapping for proper token name resolution.
 */
const Transactions = () => {
  return (
    <PaginationHandler 
      fetchFunction={fetchTransactionsData} 
      title="Transactions" 
      TableComponent={(props) => (
        <TransactionTable 
          transactions={props.items} 
          tokenAddressToName={tokenAddressToName} 
        />
      )} 
    />
  );
};
 
export default Transactions;
 