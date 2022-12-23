import { useMemo } from "react";
const LanguageNav = ({ handleLanguage }) => {
    const languages = useMemo(() => ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python',"Vue","Rust","Node","Sql","Go",""], []);
    return (
        <ul className="flex justify-center gap-4 text-l font-mono font-bold border-2 border-red-700">
            {
                languages.map((language) => (<li key={language}>
                    <button className="bg-blue-600"
                        onClick={(e) => handleLanguage(e.target.innerText)}
                    >
                        {language}
                    </button>
                </li>))
            }
        </ul>
    )
}

export default LanguageNav;