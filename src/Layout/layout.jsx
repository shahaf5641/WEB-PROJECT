import React from 'react';
import Header from './header/header';
import Footer from './footer';
import VantaBackground from '../comps/VantaBackground';
import DarkLightToggle from './DarkLightToggle'; // Adjust the import path as necessary

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <VantaBackground />
      <Header />
      <DarkLightToggle />  {/* Insert DarkLightToggle component here */}
      <main className='flex-grow flex flex-col text-center'>
        {children}
      </main>
      <Footer className='relative' />
    </div>
  );
}
