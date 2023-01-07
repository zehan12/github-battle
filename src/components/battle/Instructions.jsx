import React from "react";
import {
    FaUserFriends,
    FaFighterJet,
    FaTrophy,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const steps = [
    {
        step: 1,
        text: "enter two github users",
        icon: FaUserFriends,
        color: "rgb(255, 191, 116)"
    },
    {
        step: 2,
        text: "battle",
        icon: FaFighterJet,
        color: "#727272"
    },
    {
        step: 3,
        text: "see the winner",
        icon: FaTrophy,
        color: "rgb(255, 215, 0)"
    }
]

const Instructions = () => {
    const { t } = useTranslation()
    return (
        <div className="mt-10">
            <h1 className="text-6xl font-extralight text-center">{t("instructions")}</h1>

            <div className="flex justify-center gap-20 mt-10 text-center font-thin">
                {
                    steps.map((step,i) => (
                        <span className="flex flex-col justify-evenly gap-10" style={{width:"100%"}}>
                            <h3 className="text-3xl break-all flex justify-center items-center">{ t(step.text)}</h3>
                            <div className="bg-[#EBEBEB] w-60 h-60 flex justify-center text-center items-center ml-14  pt-10">
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