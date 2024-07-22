import React, { useEffect, useState } from 'react'; 
import { getBalance } from '../services/solana';

const StakingOverview = ({ walletAddress }) => {
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {

            // user a try | catch to catch error if wallet address is invalid
            try {
                const balance = await getBalance(walletAddress);
                setBalance(balance);
                setError(null);
            } catch (error) {
                setError(err.message);
            }
            
        };

        // if no error and IF we have a wallet, then...
        if (walletAddress) {
            fetchBalance();
        }

    }, [walletAddress]);

    return (
        <div>
            <h2>Staking Overview</h2>
            <p>Wallet Address: {walletAddress}</p>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <p>Balance: {balance} SOL</p>
            )}
            
            {/* Staking Data goes here COME BACK TO THIS */}
        </div>
    );
};

export default StakingOverview;


