import { ethers } from 'ethers';

// Use your Infura Project ID
const INFURA_PROJECT_ID = 'e27317617c88490493b11df1d24ef0a0';

// Connect to Goerli testnet
const provider = new ethers.providers.InfuraProvider('goerli', INFURA_PROJECT_ID);

// Define the ERC-20 ABI
const ERC20_ABI = [
    "event Transfer(address indexed from, address indexed to, uint amount)"
  ];
  
  // Token address
  const tokenAddress = '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85';
  
  // Create a contract instance
  const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
  
  async function fetchTokenTransfers() {
    try {
      // Fetch past Transfer events
      const transferEvents = await tokenContract.queryFilter("Transfer");
      transferEvents.forEach((event) => {
        console.log(`From: ${event.args.from}`);
        console.log(`To: ${event.args.to}`);
        console.log(`Amount: ${ethers.utils.formatUnits(event.args.amount, 18)}`);
        console.log(`Transaction Hash: ${event.transactionHash}`);
        console.log('---');
      });
    } catch (error) {
      console.error("Error fetching transfer events:", error);
    }
  }
  
  fetchTokenTransfers();