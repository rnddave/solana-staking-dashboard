import React, { useEffect } from "react";

const RewardsTracker = ({ walletAddress }) => {
    const [rewards, setRewards] = useState(0);

    useEffect(() => {
        const fetchRewards = async () => {
            // need to fetch the rewards data
        };
        fetchRewards();

    }, [walletAddress]);

    return (
        <div>
            <h2>Rewards Tracker</h2>
            <p>Total Rewards: {rewards} SOL</p>
        </div>
    );
};

export default RewardsTracker;






