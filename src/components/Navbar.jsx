import React, { useState } from 'react'
import icBar from '../assets/icons/ic_bar.svg'
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeBar, setActiveBar] = useState(0)

  return (
    <>
      <nav className={`${activeBar == 0 && 'hidden'} w-full fixed top-10 lg:top-0 lg:left-0 lg:text-lg font-semibold lg:flex justify-center items-center h-20 border-b-2 border-b-slate-100 lg:bg-white z-10`}>
        <div className={` w-[90%] lg:w-[900px] xl:w-[1100px] mx-auto p-4 lg:p-0 flex flex-col lg:flex-row lg:gap-12 justify-center bg-white shadow rounded-lg lg:bg-none lg:shadow-none `}>
          <Link to='home' smooth={true} duration={500} offset={-200} spy={true}  activeClass="bg-purple-600 text-white lg:border-b-2 lg:bg-white lg:text-purple-600" className='cursor-pointer 
            text-purple-400 hover:bg-purple-600 p-4 rounded-lg hover:text-white
            lg:hover:bg-white lg:p-0 lg:rounded-none lg:hover:text-purple-600 lg:hover:border-b-2 transition ease-in-out duration-300'>Home</Link>
          <Link to="about" smooth={true} duration={500} offset={-200} spy={true}  activeClass="bg-purple-600 text-white lg:border-b-2 lg:bg-white lg:text-purple-600" className='cursor-pointer 
            text-purple-400 hover:bg-purple-600 p-4 rounded-lg hover:text-white
            lg:hover:bg-white lg:p-0 lg:rounded-none lg:hover:text-purple-600 lg:hover:border-b-2 transition ease-in-out duration-300'>About</Link>
          <Link to="services" smooth={true} duration={500} offset={-250} spy={true}  activeClass="bg-purple-600 text-white lg:border-b-2 lg:bg-white lg:text-purple-600" className='cursor-pointer 
            text-purple-400 hover:bg-purple-600 p-4 rounded-lg hover:text-white
            lg:hover:bg-white lg:p-0 lg:rounded-none lg:hover:text-purple-600 lg:hover:border-b-2 transition ease-in-out duration-300'>Services</Link>
          <Link to="skills" smooth={true} duration={500} offset={-230} spy={true}  activeClass="bg-purple-600 text-white lg:border-b-2 lg:bg-white lg:text-purple-600" className='cursor-pointer 
            text-purple-400 hover:bg-purple-600 p-4 rounded-lg hover:text-white
            lg:hover:bg-white lg:p-0 lg:rounded-none lg:hover:text-purple-600 lg:hover:border-b-2 transition ease-in-out duration-300'>My Skills</Link>
          <Link to="portfolio" smooth={true} duration={500} offset={-200} spy={true}  activeClass="bg-purple-600 text-white lg:border-b-2 lg:bg-white lg:text-purple-600" className='cursor-pointer 
            text-purple-400 hover:bg-purple-600 p-4 rounded-lg hover:text-white
            lg:hover:bg-white lg:p-0 lg:rounded-none lg:hover:text-purple-600 lg:hover:border-b-2 transition ease-in-out duration-300'>Portfolio</Link>
          <Link to="contact" smooth={true} duration={500} offset={-250} spy={true}  activeClass="bg-purple-600 text-white lg:border-b-2 lg:bg-white lg:text-purple-600" className='cursor-pointer 
            text-purple-400 hover:bg-purple-600 p-4 rounded-lg hover:text-white
            lg:hover:bg-white lg:p-0 lg:rounded-none lg:hover:text-purple-600 lg:hover:border-b-2 transition ease-in-out duration-300'>Contact</Link>
        </div>
      </nav>
      <button onClick={()=>setActiveBar(!activeBar)} className='lg:hidden fixed top-10 right-6 md:right-10 z-20 shadow cursor-pointer w-10 h-10 flex justify-center items-center rounded-lg bg-slate-100'><img src={icBar} alt="" /></button>
    </>
  )
}

export default Navbar