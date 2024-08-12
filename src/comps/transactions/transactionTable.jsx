import React from 'react';
import TransactionRow from './transactionrow';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import {
  transactionTableContainerStyle,
  transactionTableHeaderStyle,
  hiddenOnSmallVisibleOnMedium,
  hiddenOnSmallAndMediumVisibleOnLarge,
} from '../../comps/contexts/style';

/**
 * TransactionTable Component
 * 
 * This component renders a table displaying a list of transactions.
 * Each transaction is represented as a row, using the `TransactionRow` component.
 * The table's appearance adapts to dark mode using the `useDarkMode` context.
 * 
 * Props:
 * - `transactions`: An array of transaction objects to be displayed in the table.
 * - `tokenAddressToName`: An object mapping token addresses to their respective names.
 */
const TransactionTable = ({ transactions, tokenAddressToName }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className={transactionTableContainerStyle}>
      <div className={transactionTableHeaderStyle(darkMode)}>
        <div>Time</div>
        <div className={hiddenOnSmallVisibleOnMedium}>Amount</div>
        <div className={hiddenOnSmallAndMediumVisibleOnLarge}>Sender Profile</div>
        <div className={hiddenOnSmallAndMediumVisibleOnLarge}>Recipient Profile</div>
        <div>Transaction Details</div>
      </div>
      <div>
        {transactions.map((tx, index) => (
          <TransactionRow key={index} tx={tx} tokenAddressToName={tokenAddressToName} />
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;
