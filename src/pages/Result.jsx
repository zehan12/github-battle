import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserData } from "../services/APIs";
import { FaUser, FaCompass, FaBriefcase, FaUserFriends, FaUsers, FaLaptopCode } from 'react-icons/fa'
import { ListItem } from "../components/home/IconList";
import Confetti from "../confetti";
import { useReward } from "react-rewards";


const Result = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [playerOne, setPlayerOne] = useState({ info: null, score: 0 });
    const [playerTwo, setPlayerTwo] = useState({ info: null, score: 0 });
    const [loading, setLoading] = useState(false)

    const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti');
    const { reward: balloonsReward, isAnimating: isBalloonsAnimating } = useReward('balloonsReward', 'balloons');



    const getResult = async () => {
        setLoading(true)
        await getUserData(params.get('p1')).then(({ data }) => setPlayerOne({ info: data, score: data.followers * 20 + data.public_repos }));
        await getUserData(params.get('p2')).then(({ data }) => setPlayerTwo({ info: data, score: data.followers * 20 + data.public_repos }));
        setLoading(false)
        confettiReward();
        balloonsReward();
    }

    useEffect(() => {
        getResult()
    }, [])


    if ( loading ) {
        return(
            <h1>Page Loading</h1>
        )
    }

    console.log(playerOne, playerTwo, "eve")

    return (
        <Fragment>
            {
                !loading &&

                <Confetti />
            }
            <div className="mt-5">
                {
                    playerOne.info && playerTwo.info &&
                    <div className="flex">
                        <ResultCard
                            score1={playerOne.score}
                            score2={playerTwo.score}
                            name={playerOne.info.name}
                            login={playerOne.info.login}
                            avatar_url={playerOne.info.avatar_url}
                            followers={playerOne.info.followers}
                            following={playerOne.info.following}
                            public_repos={playerOne.info.public_repos}
                            location={playerOne.info.location}
                            company={playerOne.info.company}
                        />

                        <ResultCard
                            score1={playerTwo.score}
                            score2={playerOne.score}
                            name={playerTwo.info.name}
                            login={playerTwo.info.login}
                            avatar_url={playerTwo.info.avatar_url}
                            followers={playerTwo.info.followers}
                            following={playerTwo.info.following}
                            public_repos={playerTwo.info.public_repos}
                            location={playerTwo.info.location}
                            company={playerTwo.info.company}
                        />
                    </div>
                }

                <div className="flex justify-center">
                    <button
                    >
                        <span id="confettiReward" />
                        <span id="balloonsReward" />
                    </button>
                </div>
                <div className="flex justify-center">
                    <button type="button" class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">reset</button>

                </div>



            </div>
        </Fragment>
    )
}

const ResultCard = ({
    score1,
    score2,
    avatar_url,
    name,
    login,
    location,
    company,
    followers,
    following,
    public_repos
}) => {
    return (
        <div className={`flex mx-auto justify-between`}>
            <div className={`py-12 px-20 w-80 bg-gray-100`}>
                <h2 className="text-center text-3xl mb-4">{score1 > score2 ? 'Winner🥳' : (score1 == score2 ? 'Tie🙂' : 'Loser🙁')}</h2>
                <img className="w-40" src={avatar_url} alt="" />
                <h5 className="text-center font-bold mt-4">Score: {score1} </h5>
                <h3 className="font-bold text-red-700 text-center text-xl mt-4">
                    {name}
                </h3>
                <div className="flex flex-col gap-5 mt-4">
                    <ListItem color={"#FFBF74"} Icon={FaUser} count={login} />
                    <ListItem color={"#c674ef"} Icon={FaCompass} count={location === null ? "nil" : location} />
                    <ListItem color={"#865324"} Icon={FaBriefcase} count={company === null ? "nil" : company} />
                    <ListItem color={"#7abef2"} Icon={FaUsers} count={followers} text={"followers"} />
                    <ListItem color={"#4ef264"} Icon={FaUserFriends} count={following} text={"following"} />
                    <ListItem color={"#7446fe"} Icon={FaLaptopCode} count={public_repos} text={"repositories"} />
                </div>
            </div>
        </div>
    )
}

export default Result;

