import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('mainnet-beta'));

export const getBalance = async (walletAddress) => {
    const publicKey = new PublicKey(walletAddress);
    const balance = await connection.getBalance(publicKey);
    return balance / 1e9; // Solana atomic unit, I think like a wei or so? 
};

export const getStakeAccounts = async (walletAddress) => {
    // fetch stake here? 
    // need to check stake, check wallet I guess? 
};





