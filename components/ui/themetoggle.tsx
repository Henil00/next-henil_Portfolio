"use client";
import React from 'react';
import {useEffect,useState} from 'react';
import {FaMoon} from 'react-icons/fa'
import {BsSunFill} from 'react-icons/bs'

const Themetoggle = () => {
const [darkmode,setdarkmode] = useState(true)
useEffect(()=>{
    const theme = localStorage.getItem("theme")
    if( theme === "dark") setdarkmode(true)
},[])
useEffect(()=>{
    if(darkmode){
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme","dark")
    }else{
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light")
    }
}) 

  return (
   <div className="relative w-16 h-8 flex items-center dark:bg-purple-500 bg-purple-500 cursor-pointer rounded-full p-1" onClick={()=>setdarkmode(!darkmode)}>
    <FaMoon className='text-black size={18}' />
    <div className="absolute bg-black dark:bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
    style={darkmode ? {left:"4px"} : {right:"4px"}}></div>
    <BsSunFill className='ml-auto text-yellow-400' size={18} />
   </div> 
  )
}

export default Themetoggle