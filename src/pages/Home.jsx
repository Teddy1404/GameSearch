/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import GenreList from './../components/GenreList'
import GlobalAPI from '../Services/GlobalAPI'
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GamesbyGenreid from '../components/GamesbyGenreid';

function Home() {
const [allGameList,setAllGameList] = useState();
const[gameListByGenres,setGameListByGenres] = useState([]);
const [selectedgenrename,setSelectedgenrename]=useState('Action');
  useEffect(()=>{
    getAllGamesList();
    getGameListByGenreId(4);
  },[])

 const getAllGamesList=()=>{
  GlobalAPI.getAllGames.then((res)=>{
    console.log(res.data.results);
    setAllGameList(res.data.results)
   
  })

 }
 const getGameListByGenreId=(id)=>{
  console.log("genre id",id);
  GlobalAPI.getGameListByGenreId(id).then((res)=>{
    console.log('game list by gerne id',res.data.results)
    setGameListByGenres(res.data.results)
  })
 }
  return (
    <div className='grid grid-cols-4 px-5 '>
      <div className=' h-full  hidden md:block'>
        <GenreList genreid={(genreid)=>getGameListByGenreId(genreid)}
        selectedgenrename={(name)=>setSelectedgenrename(name)}/>
      </div>
      
      <div className='col-span-4 md:col-span-3 '>
        {allGameList?.length>0&&gameListByGenres.length>0?
        <div>
        <Banner gameBanner={allGameList[0]}/>
        <TrendingGames gameList={allGameList}/>
        <GamesbyGenreid gamelist={gameListByGenres}
        selectedgenrename={selectedgenrename}/>
        </div>
        :null}
      </div>
    </div>
  )
}

export default Home