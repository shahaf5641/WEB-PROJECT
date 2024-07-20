// src/comps/accountDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from './pagination';
import TransactionTable from './transactions/transactionTable';
import { useToken } from './contexts/tokenContext';

const AccountDetails = () => {
    const { address } = useParams();
    const tokenDetailsMap = useToken();
    const [accountDetails, setAccountDetails] = useState({});
    const [balances, setBalances] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
  
    useEffect(() => {
      const fetchTransactions = async (page) => {
        try {
          const response = await fetch(`https://explorer.mtw-testnet.com/transactions?address=${address}&page=${page}&limit=10`);
          const data = await response.json();
          setTransactions(data.data);
          setTotalPages(Math.ceil(data.amount / 10));
          
          // Assuming balances and account details are part of the transactions response
          if (data.balances) {
            setBalances(data.balances);
          }
          if (data.accountDetails) {
            setAccountDetails(data.accountDetails);
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTransactions(currentPage);
    }, [address, currentPage]);
  
    const handlePreviousPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Account Details</h1>
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <p><strong>Address:</strong> {address}</p>
          <h2 className="text-xl font-semibold mb-4">Balances</h2>
          <table className="min-w-full bg-white border border-gray-200 mb-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Symbol</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Token address</th>
              </tr>
            </thead>
            <tbody>
              {balances.map((balance, index) => (
                <tr key={index} className="even:bg-gray-50 hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{balance.symbol}</td>
                  <td className="py-2 px-4 border-b">{balance.amount}</td>
                  <td className="py-2 px-4 border-b">{balance.tokenAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="text-xl font-semibold mb-4">Transactions</h2>
          <TransactionTable transactions={transactions} tokenAddressToName={tokenDetailsMap} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </div>
      </div>
    );
  };
  
  export default AccountDetails;