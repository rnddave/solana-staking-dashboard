import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
// I was getting an error when page loads as Wallet Address did not contain a bs58 address
import bs58 from 'bs58';

// getting 403 access errors so I will need to change the RPC endpoint. 
const RPC_ENDPOINT = 'https://api.mainnet-beta.solana.com'

const connection = new Connection(RPC_ENDPOINT);

export const getBalance = async (walletAddress) => {

    // try|catch to prevent error on initial page load
    try {
        bs58.decode(walletAddress);
    
        const publicKey = new PublicKey(walletAddress);
        const balance = await connection.getBalance(publicKey);
        return balance / 1e9; // Solana atomic unit, I think like a wei or so? 
    
    } catch (error) {
        console.error('Address is incorrect', error);
        throw new Error('Wallet Address is Invalid');
    }    
};

export const getStakeAccounts = async (walletAddress) => {
    // fetch stake here? 
    // need to check stake, check wallet I guess? 
};





