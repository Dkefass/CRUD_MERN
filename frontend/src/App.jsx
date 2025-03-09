import HomePage from "./pages/HomePage";
import CreatePage from "./pages/createPage"
import { Routes,Route } from "react-router-dom"
import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import {Link} from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Modal from "./components/Modal/Modal";
import { ModalProvider } from "./components/Modal/ModalContext";



function App() {
  
  const [darkMode,setDarkMode]=useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <>
      <ModalProvider>
     
      <div className={`${darkMode && "dark transition-all duration-300"}`}>
      
        <main className="bg-slate-100 dark:bg-black transition-all duration-300 dark:text-slate-100 h-[100%] min-h-[100vh]">
        <Modal/>
        <Toaster position="bottom-center"/>
        <div className='flex backdrop-blur-sm px-8 py-4 justify-between items-center w-full bg-white dark:bg-slate-900 sticky top-0 z-20'>
               <div className='text-2xl  md:text-3xl font-bold text-blue-500'> <Link to="/">MERN-CRUD</Link></div>
               <div className='flex justify-center items-center gap-4'>
                <Link to="/create"><button  className='hover:blue-400 px-2 py-2 bg-blue-500 hover:bg-blue-400 text-white text-md font-semibold rounded-md border-[2px] border-blue-300' > Create</button ></Link>
                <button className="hover:opacity-90" onClick={toggleDarkMode}>{ darkMode ?<FaMoon size={25} />:<MdSunny size={25} />}</button>
               </div>
        </div>

       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
       </Routes>
        </main>
     
      </div>
      </ModalProvider>
      
      
    </>
  )
}

export default App
