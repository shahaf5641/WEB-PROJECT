import React from 'react';
import { convertTimestamp, getAmount } from '../contexts/tokenContext';
import StyledTableLink from '../contexts/StyledTableLink';

const TransactionRow = ({ tx }) => {
  const amount = getAmount(tx);
  const isWETH = amount.includes('wETH');

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 border-2 rounded-xl text-lg font-semibold transform transition-transform duration-300 hover:scale-105">
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
