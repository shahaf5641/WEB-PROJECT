import React from 'react';
import TransactionTable from '../transactions/transactionTable';
import { tokenAddressToName } from '../contexts/tokenContext';
import LatestItems from './LatestItems';

const LatestTransactions = () => {
  return (
    <LatestItems
      fetchUrl="https://explorer.mtw-testnet.com/transactions"
      TableComponent={(props) => <TransactionTable transactions={props.items} tokenAddressToName={tokenAddressToName} />}
      title="Latest Transactions"
      link="/transactions"
      buttonText="View all transactions"
    />
  );
};

export default LatestTransactions;
