// src/components/transactions/Transactions.jsx
import React from 'react';
import TransactionTable from './transactionTable';
import { fetchTransactionsData } from '../contexts/Fetches';
import PaginationHandler from '../contexts/pagination/PaginationHandler';
import { tokenAddressToName } from '../contexts/tokenContext';

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
