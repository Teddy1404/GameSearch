/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { HiCheckBadge} from "react-icons/hi2";
function GamesbyGenreid({gamelist,selectedgenrename}) {
    useEffect(()=>{
        console.log("GameList", gamelist);
    },[gamelist])
  return (
    <div>
        <h2 className='font-bold text-[30px] dark:text-white mt-5'>{selectedgenrename}</h2>
    <div className='grid grid-cols-1 md:grid  md:grid-cols-2 lg:mid lg:grid-cols-3 gap-6  '>
        {gamelist.map((item)=>(
            <div key={item} className='p-3 rounded-xl bg-[#76a8f75e] h-full pb-14 hover:scale-110 transition-all ease-in-out cursor-pointer duration-300 ' >
            <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover mt-5' />
            <h2 className='text-[20px] dark:text-white font-bold '>{item.name}<span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font font-medium'>{item.metacritic}</span></h2>
            <h2 className='text-gray-500 dark:text-gray-300'> ⭐ {item.rating} 👌 {item.reviews_count} 🔥 {item.suggestions_count}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default GamesbyGenreid 