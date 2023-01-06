import { useReward } from "react-rewards";

const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti');
const { reward: balloonsReward, isAnimating: isBalloonsAnimating } = useReward('balloonsReward', 'balloons');

<button
    disabled={isConfettiAnimating || isBalloonsAnimating}
    onClick={() => {
        confettiReward();

        balloonsReward();
    }}
>
    <span id="confettiReward" />
    <span id="balloonsReward" />
    🎉
</button>