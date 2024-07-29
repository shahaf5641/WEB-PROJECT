import React from 'react';
import CryptoCard from './CryptoCard';

const cryptoData = [
  {
    imgSrc: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    title: 'Bitcoin',
    description: 'Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network.'
  },
  {
    imgSrc: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    title: 'Ethereum',
    description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is its native cryptocurrency.'
  },
  {
    imgSrc: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
    title: 'BNB',
    description: 'BNB is the cryptocurrency coin that powers the Binance ecosystem.'
  },
  {
    imgSrc: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
    title: 'Dogecoin',
    description: 'Dogecoin is a cryptocurrency featuring a likeness of the Shiba Inu dog from the "Doge" meme as its logo.'
  },
  {
    imgSrc: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    title: 'Cardano',
    description: 'Cardano is a proof-of-stake blockchain platform that aims to enable changemakers, innovators, and visionaries.'
  },
  {
    imgSrc: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
    title: 'Chainlink',
    description: 'Chainlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data.'
  },
  {
    imgSrc: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png',
    title: 'Shiba Inu',
    description: 'Shiba Inu is a decentralized meme token that grew into a vibrant ecosystem.'
  }
];

export default function CryptoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {cryptoData.map((crypto, index) => (
        <div
          key={index}
          className={`col-span-1 ${index === cryptoData.length - 1 ? 'md:col-start-2' : ''}`}
        >
          <div className="flex justify-center">
            <CryptoCard
              imgSrc={crypto.imgSrc}
              title={crypto.title}
              description={crypto.description}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
