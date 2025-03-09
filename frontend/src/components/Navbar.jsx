import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import {Link} from "react-router-dom"



function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className='flex py-4 justify-between items-center w-full'>
        <div className='text-4xl font-bold text-blue-500'> <Link to="/">MERN-CRUD</Link></div>
        <div className='flex justify-center items-center gap-4'>
         <Link to="/create"><button  className='hover:opacity-80'><CiCirclePlus size={36} /></button ></Link>
         <Link to="/"><button onClick={toggleDarkMode}>{ darkMode ?<FaMoon size={36} />:<MdSunny size={36} />}</button></Link> 
        </div>
    </div>
  )
}

export default Navbar;