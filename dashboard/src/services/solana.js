import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
// I was getting an error when page loads as Wallet Address did not contain a bs58 address
import bs58 from 'bs58';

const connection = new Connection(clusterApiUrl('mainnet-beta'));

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





