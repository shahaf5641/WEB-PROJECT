import React from 'react';
import CryptoCard from './CryptoCard';

const cryptoData = [
  {
    imgSrc: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    title: 'Bitcoin',
    description: 'Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network.',
    address: '0xA014A5E978B9A542b2065Ba4a29D68De9b3431D1'
  },
  {
    imgSrc: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    title: 'Ethereum',
    description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is its native cryptocurrency.',
    address: '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85'
  },
  {
    imgSrc: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
    title: 'BNB',
    description: 'BNB is the cryptocurrency coin that powers the Binance ecosystem.',
    address: '0x0cc5bb418771573C04187828C2ef491A6f51b909'
  },
  {
    imgSrc: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
    title: 'Dogecoin',
    description: 'Dogecoin is a cryptocurrency featuring a likeness of the Shiba Inu dog from the "Doge" meme as its logo.',
    address: '0xBB69C32dc4827ec722f46891fA1F661400143DAe'
  },
  {
    imgSrc: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    title: 'Cardano',
    description: 'Cardano is a proof-of-stake blockchain platform that aims to enable changemakers, innovators, and visionaries.',
    address: '0x6F7389872A6C15C4B7234Fa23C4D6df8fA378587'
  }
];

export default function CryptoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
      {cryptoData.map((crypto, index) => (
        <div
          key={index}
          className="col-span-1"
        >
          <div className="flex justify-center">
            <CryptoCard
              imgSrc={crypto.imgSrc}
              title={crypto.title}
              description={crypto.description}
              address={crypto.address}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
