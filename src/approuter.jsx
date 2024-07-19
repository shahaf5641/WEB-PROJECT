// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './comps/home';
import About from './comps/about';
import Contact from './comps/contact';
import Dashboard from './comps/dashboard';
import Explore from './comps/explore';
import Blocks from './comps/blocks';
import Transactions from './comps/transactions';
import TransactionDetails from './comps/transactionDetails';
import Layout from './Layout/layout';
import { TokenProvider } from './comps/contexts/tokenContext';

export default function AppRouter() {
  const tokenAddressToName = {
    '0x6319276ac7962A04696064261e082f8c48dF9376': 'USD',
    '0xA014A5E978B9A542b2065Ba4a29D68De9b3431D1': 'BTC'
  };

  return (
    <Router>
      <TokenProvider value={tokenAddressToName}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transaction/:hash" element={<TransactionDetails />} />
          </Routes>
        </Layout>
      </TokenProvider>
    </Router>
  );
}
