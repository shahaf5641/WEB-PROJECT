// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './comps/home';
import About from './comps/about';
import Contact from './comps/contact/contact';
import Dashboard from './comps/dashboard';
import Explore from './comps/explore';
import Blocks from './comps//blocks/blocks';
import Transactions from './comps/transactions/transactions';
import TransactionDetails from './comps/transactions/transactionDetails';
import Layout from './Layout/layout';
import { TokenProvider } from './comps/contexts/tokenContext';
import TokenDetails from './comps/tokenDetails';
import AccountDetails from './comps/accountDetails';
import BlockDetails from './comps/blocks/blockDetails';
import {tokenAddressToName} from './comps/contexts/tokenContext'
import ThankYouMessage from './comps/contact/thankYouMessage';


export default function AppRouter() {

  return (
    <Router>
      <TokenProvider value={tokenAddressToName}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/message" element={<ThankYouMessage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/block/:blockNumber" element={<BlockDetails />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transaction/:hash" element={<TransactionDetails />} />
            <Route path="/token/:address" element={<TokenDetails />} /> 
            <Route path="/account/:address" element={<AccountDetails />} />
          </Routes>
        </Layout>
      </TokenProvider>
    </Router>
  );
}
