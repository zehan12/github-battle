import { Fragment, useState, useCallback, useEffect } from "react"
import LanguageNav from "../components/home/LanguageNav";
import { fetchRepos } from "../services/repos";
import "../animation.css"
import Card from "../components/home/Card";

const Home = () => {
    const [language, setLanguage] = useState("All");
    const [repos, setRepos] = useState(null)

    const handleLanguage = useCallback((tag) => {
        setLanguage(tag)
        console.log(language, tag)
    }, [])

    const showRepos = async (language) => {
        const { data: { items } } = await fetchRepos(language);
        console.log(items)
        setRepos(items)

    }

    useEffect(() => { showRepos(language) }, [language])

    return (
        <Fragment>
            <LanguageNav handleLanguage={handleLanguage} />
            <Card repos={repos} />
        </Fragment>
    )
}

export default Home;