/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

function Genrelist({genreid,selectedgenrename}) {
    const [genreList,setGenreList] = useState([])
    const [activeindex,setActiveindex] = useState(0)
    useEffect(()=>{
        getGenreList();
    },[])
const getGenreList=()=>{
    GlobalAPI.getGenrelist.then((res)=>{
        setGenreList(res.data.results);
    })
}
  return (
    <div>
        <>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
            {genreList.map((item,index) => (
                <div
                onClick={()=>{setActiveindex(index);genreid(item.id);{selectedgenrename(item.name)}}}
                 key={item.id} className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group ${activeindex==index?"bg-gray-300 dark:bg-gray-600": null}`}> {/* Make sure to add a unique key to each element */}
                    <img src={item.image_background} className={`h-[40px] w-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeindex==index?"scale-105":null}`} alt={`Genre ${item.name}`} />
                    <h3 className={`dark:text-white text-[18px] hover:font-bold group-hover:scale-105 transition-all ease-out duration-300 ${activeindex==index?"font-bold":null}`}>{item.name}</h3>
                </div>
            ))}
        </>
    </div>
  )
}

export default Genrelist