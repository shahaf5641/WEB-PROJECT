import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        <main className='flex-grow flex flex-col text-center items-center'>
          {children}
        </main>
        <Footer/>
    </div>
  )
}
