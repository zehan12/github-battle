import React from "react";
import {
    FaUserFriends,
    FaFighterJet,
    FaTrophy,
} from "react-icons/fa";

const steps = [
    {
        step: 1,
        text: "Enter two Github users",
        icon: FaUserFriends,
        color: "rgb(255, 191, 116)"
    },
    {
        step: 2,
        text: "Battle",
        icon: FaFighterJet,
        color: "#727272"
    },
    {
        step: 3,
        text: "See the winner",
        icon: FaTrophy,
        color: "rgb(255, 215, 0)"
    }
]

const Instructions = () => {
    return (
        <div className="mt-10">
            <h1 className="text-6xl font-extralight text-center">Instructions</h1>

            <div className="flex justify-center gap-20 mt-10 text-center font-thin">
                {
                    steps.map((step) => (
                        <span className="flex flex-col justify-evenly gap-10">
                            <h3 className="text-3xl">{step.text}</h3>
                            <div className="bg-[#EBEBEB] w-60 h-60 flex justify-center pt-10">
                                {React.createElement(step.icon, { color: step.color, size: 150 })}
                            </div>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}
export default Instructions;