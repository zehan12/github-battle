import axios from "axios";

const fetchRepos =  async ( tag ) => {
    const res = await axios.get( `https://api.github.com/search/repositories?q=stars:%3E1+language:${tag}&sort=stars&order=desc&type=Repositories`);
    console.log(res,tag)
    return res
}

const getUserData =  async( username ) => {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    console.log(res,"userdata")
    return res;
}

export {
    fetchRepos,
    getUserData
};