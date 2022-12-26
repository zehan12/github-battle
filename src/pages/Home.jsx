import React, { Fragment, useState, useCallback, useEffect } from "react"
import LanguageNav from "../components/home/LanguageNav";
import { fetchRepos } from "../services/APIs";
import "../animation.css"
import Card from "../components/home/Card";
import SkeletonCard from "../skeletons/SkeletonCard";

const Home = () => {
    const [language, setLanguage] = useState("All");
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleLanguage = useCallback((tag) => {
        setLanguage(tag)
        console.log(language, tag)
    }, [])

    const showRepos = async (language) => {
        setRepos(null)
        setLoading(true)
        const { data: { items } } = await fetchRepos(language);
        setRepos(items)
        setLoading(false)

    }

    useEffect(() => { showRepos(language) }, [language])

    return (
        <Fragment>
            <LanguageNav active={language} handleLanguage={handleLanguage} />
            <Card repos={repos} loading={loading} />
        </Fragment>
    )
}

export default Home;