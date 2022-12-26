import React, { useMemo } from "react";
import PropTypes from 'prop-types';
const LanguageNav = ({ handleLanguage, active }) => {
    const languages = useMemo(() => ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python', "Vue", "Rust", "Node", "Sql", "Go", "Haskell", "PHP","Swift"], []);
    return (
        <ul className="flex justify-center gap-8 text-l font-mono font-bold border-2 border-red-700 animate__animated animate__bounceInRight">
            {
                languages.map((language) => (<li key={language}>
                    <button className={`${active === language ? "text-red-600 hover:text-amber-500" : "hover:text-purple-500"}`}
                        onClick={(e) => handleLanguage(e.target.innerText)}
                    >
                        {language}
                    </button>
                </li>))
            }
        </ul>
    )
}

LanguageNav.propTypes = {
    active: PropTypes.string.isRequired,
    handleLanguage: PropTypes.func.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string)
};

export default LanguageNav;