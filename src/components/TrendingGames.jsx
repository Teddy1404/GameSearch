/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

function TrendingGames({gameList}) {
    useEffect(()=>{
        console.log(gameList);
    })
  return (
    <>
    <div className='mt-5 hidden md:block'>
        <h2 className='font-bold text-[30px] dark:text-white '>Trending Games</h2>
    <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
       {gameList.map((item,index)=>index<4&&(
        <div key={index} className='bg-[#76a8f75e] rounded-lg p-2 group 
        hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer '>
            <img src={item.background_image} 
            className='h-[270px] object-cover rounded-xl  ' />
            <h2 className='dark:text-white text-[20px] font-bold p-2'>{item.name}</h2>
        </div>
       ))}
    </div>
    </div>
    </>
  )
}

export default TrendingGames