import React, { Fragment, useState } from "react"
import Instructions from "../components/battle/Instructions";
import { getUserData } from "../services/APIs";
import { Link } from "react-router-dom";
import { GiBattleAxe } from "react-icons/gi";
import { useTranslation } from "react-i18next";


const Battle = () => {

    const {t} = useTranslation()

    const [players, setPlayers] = useState({
        playerOne: null, playerTwo: null
    });

    const handleSubmit = async (event, username, player) => {
        event.preventDefault();
        try {
            const { data } = await getUserData(username);
            setPlayers({ ...players, [player]: data })
        } catch (error) {
            // Handle error if API call fails
            console.error(error);
        }
    }

    const handleRemovePlayer = (player) => {
        setPlayers({ ...players, [player]: null })
    }

    console.log(players, "every render")
    return (
        <Fragment>
            <Instructions />
            <div className="flex flex-col justify-center items-center">
                <div>
                    <h3 className="text-4xl font-thin text-center">{t("players")}</h3>
                </div>
                <div
                    className="grid grid-cols-2 gap-3 justify-items-center place-items-start"
                    style={{ width: "90%" }}
                    >
                    <div className="flex flex-col items-">
                        <h4 className="my-2 left-1">{t("player one")}</h4>
                        {
                            players.playerOne === null
                                ?
                                < PlayerInput
                                    handleSubmit={handleSubmit}
                                    player={"playerOne"}
                                /> :
                                <div className="bg-purple-300 h-24 w-[22rem] flex items-center justify-between" >
                                    <div className="flex items-center gap-5 p-2">
                                        <img className="w-20 h-20 rounded-full" src={players.playerOne.avatar_url} />
                                        <h5 className="text-blue-500">{players.playerOne.login}</h5>
                                    </div>
                                    <div className="mr-5">
                                        x
                                    </div>
                                </div>
                        }
                    </div>
                    <div>
                        <h4 className="my-2">{t("player two")}</h4>
                        {
                            players.playerTwo === null
                                ?
                                <PlayerInput
                                    handleSubmit={handleSubmit}
                                    player={"playerTwo"}
                                />
                                :
                                <ProfilePreview
                                    player={"playerTwo"}
                                    handleRemovePlayer={handleRemovePlayer}
                                    avatar={players.playerTwo.avatar_url}
                                    username={players.playerTwo.login}
                                />
                        }
                    </div>
                </div>
                {
                    (players.playerTwo !== null && players.playerOne !== null) &&
                    <div>
                        <Link to={`/battle/result?p1=${players.playerOne.login}&p2=${players.playerTwo.login}`}
                        >

                            <button
                                type="button" class="flex items-center gap-5 py-2 px-20  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase">
                                <GiBattleAxe />

                                {t("battle")}

                            </button>
                        </Link>
                    </div>
                }
            </div>
        </Fragment>
    )
}

const PlayerInput = ({
    player,
    handleSubmit
}) => {
    const [username, setUsername] = useState("");
    const {t} = useTranslation()

    return (
        <Fragment>
            <div>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    className="shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={t("github username")}
                />
                <button
                    onClick={(event) => handleSubmit(event, username, player)}
                    className="bg-gray-200 py-2 px-10 uppercase text-gray-500">
                    {t("submit")}
                </button>
            </div>
        </Fragment >
    )
}

const ProfilePreview = (
    { player, avatar, username, handleRemovePlayer }
) => {
    return (
        <Fragment>
            <div className="bg-purple-300 h-24 w-[22rem] flex items-center justify-between" >
                <div className="flex items-center gap-5 p-2">
                    <img className="w-20 h-20 rounded-full" src={avatar} />
                    <h5 className="text-blue-500">@{username}</h5>
                </div>
                <div onClick={() => handleRemovePlayer(player)} className="mr-5">
                    x
                </div>
            </div>
        </Fragment>
    )
}

export default Battle;