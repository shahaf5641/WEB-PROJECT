import React from 'react';
import { convertTimestamp, getAmount } from '../contexts/tokenContext';
import StyledTableLink from '../contexts/StyledTableLink';
import { transactionRowContainer } from '../contexts/style';
 
/**
 * TransactionRow Component
 * 
 * This component displays a single row of transaction details within a grid layout.
 * It includes the transaction timestamp, amount, sender, recipient, and transaction hash.
 */
const TransactionRow = ({ tx }) => {
  const amount = getAmount(tx); // Calculate the transaction amount
  const isWETH = amount.includes('wETH'); // Check if the amount is in wETH
 
  
  return (
    <div className={transactionRowContainer}>
      <div className="truncate">{convertTimestamp(tx.timestamp)}</div>
      <div className="hidden md:block truncate">
        {isWETH ? (
          <StyledTableLink to={`/token/0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85`}>
            {amount}
          </StyledTableLink>
        ) : tx.type === 'token' ? (
          <StyledTableLink to={`/token/${tx.tokenAddress}`}>
            {amount}
          </StyledTableLink>
        ) : (
          amount
        )}
      </div>
      <div className="hidden lg:block truncate">
        <StyledTableLink to={`/address/${tx.from}`}>
          {tx.from}
        </StyledTableLink>
      </div>
      <div className="hidden lg:block truncate">
        <StyledTableLink to={`/address/${tx.to}`}>
          {tx.to}
        </StyledTableLink>
      </div>
      <div className="truncate">
        <StyledTableLink to={`/transaction/${tx.hash}`}>
          {tx.hash}
        </StyledTableLink>
      </div>
    </div>
  );
};
 
export default TransactionRow;