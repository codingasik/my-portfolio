import React, { useState } from 'react'
import userBanner from '../assets/user-banner.png'
import Navbar from '../components/Navbar'
import { ReactTyped } from 'react-typed'
import FadeInSection from '../components/FadeInSection'

const Header = () => {
  return (
    <header id="page-container">
      <Navbar/>
      <FadeInSection>
        <div id='home' className='w-full lg:w-[900px] xl:w-[1100px] mx-auto flex flex-col lg:flex-row p-4 lg:p-0 text-center lg:text-left items-center  gap-16 lg:gap-8 justify-between mt-24 lg:mt-32'>
          <div className='w-full lg:w-3/5'>
            <h1 className='text-5xl lg:text-6xl 2xl:text-7xl font-bold'>Hi, I'am John
              <ReactTyped
                className="block mt-4 text-purple-600"
                strings={["UI UX Developer", "Backend Developer", "Frontend Developer"]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h1>
            <p className='mt-8 text-lg text-slate-600 lg:w-4/5 px-4 lg:px-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolorum, quidem aspernatur quia nesciunt sunt.</p>
          </div>
          <div className='w-full lg:w-2/5 flex justify-center'>
            <img className='w-3/4 lg:w-full' src={userBanner} alt="Hero Image" />
          </div>
        </div>
      </FadeInSection>
      
    </header>
  )
}

export default Header