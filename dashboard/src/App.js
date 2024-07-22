import React, { useState } from "react";
import StakingOverview from "./components/StakingOverview";
import StakeUnstake from "./components/StakeUnstake";
import RewardsTracker from "./components/RewardsTracker";

function App() {

  const [walletAddres, setWalletAddress] = useState('');

  return (
    <div className="App">
      <h1>Solana Staking Dashboard</h1>
      <input
        type="text"
        value={walletAddres}
        onChange={(e) => setWalletAddress(e.target.value.trim())}
        placeholder="Enter Wallet Address"
      />
      <StakingOverview walletAddress={walletAddres} />
      <StakeUnstake />
      <RewardsTracker walletAddress={walletAddres} />
    </div>
  );

}

export default App;






