import PropTypes from 'prop-types';
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'
import { GoRepo } from 'react-icons/go'
import { ListItem } from './IconList';
import React, { useState } from 'react'
import SkeletonCard from '../../skeletons/SkeletonCard';

const Card = ({ repos, loading }) => {
    const _ = [...Array(10).keys()]

    return (
        <div className="mx-0 flex flex-wrap justify-center gap-4"
            style={{ width: "100%" }}>
            {
                (repos !== null && !loading) ? repos.map((repo, i) => (
                    <div
                        key={repo.id} className="animate__animated animate__bounce bg-[#ebebeb] mx-0 my-2 p-5 w-80"
                        style={{ flex: " flex: 0 1 30%" }}
                    >
                        <div className="text-center">
                            <span className="text-2xl text-black">{`#${i + 1}`} </span>
                        </div>
                        <div className="">
                            <img
                                style={{ width: "100%" }}
                                className="align-middle w-10"
                                src={`${repo.owner.avatar_url}`}
                                alt={`${repo.id}`}
                            />
                        </div>
                        <h3 className="font-extrabold text-lg my-4 text-center text-red-700">{repo.name}</h3>
                        <ul className="flex flex-col gap-2">
                            <ListItem color={"#FFBF74"} Icon={FaUser} count={repo.owner.login} />
                            <ListItem color={"red"} Icon={GoRepo} count={repo.name} />
                            <ListItem color={"#FFD700"} text={"stars"} Icon={FaStar} count={repo.stargazers_count} />
                            <ListItem color={"#81C3F5"} text={"forks"} Icon={FaCodeBranch} count={repo.forks_count} />
                            <ListItem color={"red"} text={"open"} Icon={FaExclamationTriangle} count={repo.open_issues_count} />
                        </ul>
                        <a href={repo.html_url}>OPEN</a>
                    </div>))
                    : loading === true ? _.map((v) => <SkeletonCard />) : <h1>Something went Wrong</h1>

            }

        </div>)
}


Card.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        owner: PropTypes.shape({
            avatar_url: PropTypes.string.isRequired,
            login: PropTypes.string.isRequired,
        }),
        html_url: PropTypes.string.isRequired,
        stargazers_count: PropTypes.number.isRequired,
        forks_count: PropTypes.number.isRequired,
        open_issues_count: PropTypes.number.isRequired,
    }))
};

Card.defaultProps = {
    repos: [],
};
export default Card;