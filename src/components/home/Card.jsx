import PropTypes from 'prop-types';

const Card = ({ repos }) => {
    return (
        <div className="mx-0 flex flex-wrap justify-center gap-4">
            {
                repos && repos.map((a, i) => (
                    <div
                        key={a.id} className="animation bg-[#ebebeb] mx-0 my-2 p-5 w-64"
                        style={{ flex: " flex: 0 1 22%" }}
                    >
                        <div className="text-center">
                            <span className="text-2xl text-black">{`#${i + 1}`} </span>
                        </div>
                        <div className="">
                            <img
                                style={{ width: "100%" }}
                                className="align-middle w-10"
                                src={`${a.owner.avatar_url}`}
                                alt={`${a.id}`}
                            />
                        </div>
                        <h3 className="font-extrabold text-lg my-4 text-center">{a.name}</h3>
                        <ul>
                            <li>
                                <span className="bg-[#ffbf74]">
                                    <i class="fas fa-user"></i>
                                </span>
                                <span className="font-extrabold text-lg">{a.name}</span>
                            </li>
                            <li>
                                <span className="bg-[#ffbf74]">
                                    <i class="fas fa-star"></i>
                                </span>
                                <span className="text-lg ml-3 leading-3">{a.stargazers_count} stars</span>
                            </li>
                            <li>
                                <span className="share">
                                    <i class="fas fa-share-alt"></i>
                                </span>
                                <span className="text-lg ml-3 leading-3">{a.forks_count} forks</span>
                            </li>
                            <li>
                                <span className="triangle">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                <span className="text-lg ml-3 leading-3">
                                    {a.open_issues_count} open issues
                                </span>
                            </li>
                        </ul>
                    </div>)
                )
            }
        </div>)
}

Card.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        owner: PropTypes.shape({
            avatar_url: PropTypes.string.isRequired,
        }).isRequired,
        stargazers_count: PropTypes.number.isRequired,
        forks_count: PropTypes.number.isRequired,
        open_issues_count: PropTypes.number.isRequired,
    })).isRequired,
};

export default Card;