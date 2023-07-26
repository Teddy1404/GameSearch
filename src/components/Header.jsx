// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import controller from './../assets/images/controller.png'
import { HiMoon, HiOutlineBars3CenterLeft, HiOutlineMagnifyingGlass, HiOutlineXMark, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../context/ThemeContext';
function Header() {
  const [toggle,setToggle] = useState(true)
  const {theme,setTheme} = useContext(ThemeContext)

  useEffect(()=>{
    console.log(theme);
  })
  return (
    <div className='flex items-center p-3'>
        <img src={controller} width={60} height={60} alt="logo" />
        <div className="flex bg-slate-200 p-2 w-full items-center rounded-full m-2">
        <HiOutlineMagnifyingGlass/>
        <input type="text" placeholder='Search games'  className='bg-transparent outline-none px-2  '/>
        </div>
        <div>
            {theme=='light'?<HiMoon className='text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer' onClick={()=>setTheme('dark')}/>:<HiSun className='text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer' onClick={()=>setTheme('light')}/>}
            
        </div>
    </div>
  )
}

export default Header