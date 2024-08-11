import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './comps/home/home';
import About from './comps/about/about';
import Contact from './comps/contact/contact';
import Dashboard from './comps/dashboard/dashboard';
import Explore from './comps/explore/explore';
import Blocks from './comps/blocks/blocks';
import Transactions from './comps/transactions/transactions';
import TransactionDetails from './comps/transactions/transactionDetails';
import Layout from './Layout/layout';
import { TokenProvider } from './comps/contexts/tokenContext';
import TokenDetails from './comps/details/tokenDetails';
import AccountDetails from './comps/details/accountDetails';
import BlockDetails from './comps/blocks/blockDetails';
import { tokenAddressToName } from './comps/contexts/tokenContext';
import ThankYouMessage from './comps/contact/thankYouMessage';
import NotFound from './comps/contexts/NotFound';
import ScrollToTop from './comps/contexts/ScrollToTop';
 
// The AppRouter component is responsible for managing the routing of the application.
// It uses React Router to define various routes and their corresponding components.
// The component wraps the entire routing structure with the TokenProvider to ensure 
// that the token context is available throughout the application.
// The Layout component is used to provide a consistent layout across all pages,
// and ScrollToTop ensures that the page scrolls to the top when navigating to a new route.
export default function AppRouter() {
  return (
    <Router>
      {/* Providing the token context to all components within the application */}
      <TokenProvider value={tokenAddressToName}>
        {/* Layout component wrapping all routes for consistent layout */}
        <Layout>
          {/* Ensures that the page scrolls to the top when navigating to a new route */}
          <ScrollToTop />
          {/* Defining all application routes and their corresponding components */}
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
            <Route path="/address/:address" element={<AccountDetails />} />
            <Route path="/notfound/:searchQuery" element={<NotFound />} />
          </Routes>
        </Layout>
      </TokenProvider>
    </Router>
  );
}
 