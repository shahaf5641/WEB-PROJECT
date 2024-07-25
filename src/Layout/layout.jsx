import React from 'react';
import Header from './header/header';
import Footer from './footer';
import VantaBackground from '../comps/VantaBackground';

export default function Layout({ children }) {
  return (
    <div className=' flex flex-col min-h-screen'>
     <VantaBackground />
      <Header />
      <main className='flex-grow flex flex-col text-center'>
        {children}
      </main>
      <Footer className='relative'/>
    </div>
  );
}
