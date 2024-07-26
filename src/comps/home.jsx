import React from 'react';
import { Link } from 'react-router-dom';
import logodark from '../assets/logodark.png';
 
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundImage: 'url(../assets/background.png)', backgroundSize: 'cover' }}>
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-12">
          <img src={logodark} alt="Site Logo" className="mx-auto w-48 h-48 mb-6" />
          <h1 className="text-6xl font-bold text-white">Welcome to Bettet Wallet</h1>
          <p className="text-2xl mt-4 text-gray-200">Your gateway to cryptocurrency insights and the latest trends</p>
          <Link to="/dashboard">
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center mx-auto">
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin Logo" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-blue-800">Bitcoin</h3>
              <p className="text-lg text-gray-700">Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center mx-auto">
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum Logo" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-blue-800">Ethereum</h3>
              <p className="text-lg text-gray-700">Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is its native cryptocurrency.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center mx-auto">
            <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="BNB Logo" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-blue-800">BNB</h3>
              <p className="text-lg text-gray-700">BNB is the cryptocurrency coin that powers the Binance ecosystem.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center mx-auto">
            <img src="https://cryptologos.cc/logos/dogecoin-doge-logo.png" alt="Dogecoin Logo" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-blue-800">Dogecoin</h3>
              <p className="text-lg text-gray-700">Dogecoin is a cryptocurrency featuring a likeness of the Shiba Inu dog from the "Doge" meme as its logo.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center mx-auto">
            <img src="https://cryptologos.cc/logos/cardano-ada-logo.png" alt="Cardano Logo" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-blue-800">Cardano</h3>
              <p className="text-lg text-gray-700">Cardano is a proof-of-stake blockchain platform that aims to enable changemakers, innovators, and visionaries.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center mx-auto">
            <img src="https://cryptologos.cc/logos/chainlink-link-logo.png" alt="Chainlink Logo" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-blue-800">Chainlink</h3>
              <p className="text-lg text-gray-700">Chainlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data.</p>
            </div>
          </div>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 justify-center">
          <div className="md:col-start-2 bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center mx-auto">
            <img src="https://cryptologos.cc/logos/shiba-inu-shib-logo.png" alt="Shiba Inu Logo" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-blue-800">Shiba Inu</h3>
              <p className="text-lg text-gray-700">Shiba Inu is a decentralized meme token that grew into a vibrant ecosystem.</p>
            </div>
          </div>
        </div>
 
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Join the Crypto Revolution</h2>
          <p className="text-xl text-gray-200 mb-8">Stay updated with the latest news and trends in the cryptocurrency world</p>
        </div>
      </div>
    </div>
  );
}