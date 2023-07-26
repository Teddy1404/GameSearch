import axios from "axios";
const key = "9f2d779824ea4babaf793e824bbe9912";
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})
const getGenrelist = axiosCreate.get('/genres?key=' +key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)

export default{
    getGenrelist,
    getAllGames,
    getGameListByGenreId
}