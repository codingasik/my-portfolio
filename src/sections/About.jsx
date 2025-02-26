import React from 'react'
import imgAbout from '../assets/user-about.png'
import ButtonAction from '../components/ButtonAction'
import FadeInSection from '../components/FadeInSection'

const About = () => {
  return (
    <FadeInSection delay={0.2}>

      <section id='about' className='mt-32 w-full lg:w-[900px] xl:w-[1100px] mx-auto p-4 lg:p-0 flex flex-col lg:flex-row-reverse justify-center items-center gap-8'>
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h2 className='text-purple-600 text-3xl font-bold'>About</h2>
          <div className='text-slate-600 mt-8 flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus facere possimus, ea quae officiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus facere possimus, ea quae officiis!</p>
          </div>
          <ButtonAction url={"#"} caption={"Download CV"} />
        </div>
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img className='w-3/4' src={imgAbout} alt="About Image" />
        </div>
      </section>
    </FadeInSection>
  )
}

export default About