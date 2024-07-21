import React, { useEffect, useState } from 'react'; 
import { getBalance } from '../services/solana';

const StakingOverview = ({ walletAddress }) => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            const balance = await getBalance(walletAddress);
            setBalance(balance);
        };
        fetchBalance();
    }, [walletAddress]);

    return (
        <div>
            <h2>Staking Overview</h2>
            <p>Wallet Address: {walletAddress}</p>
            <p>Balance: {balance} SOL</p>
            {/* Staking Data goes here COME BACK TO THIS */}
        </div>
    );
};

export default StakingOverview;


