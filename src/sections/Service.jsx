import React from 'react'
import icUiUx from '../assets/icons/ic_uiux.svg'
import icFrontend from '../assets/icons/ic_frontend.svg'
import icBackend from '../assets/icons/ic_backend.svg'
import FadeInSection from '../components/FadeInSection';

const Service = () => {
  return (
    <FadeInSection delay={0.4}>
      <section id="services" className='mt-32 lg:mt-48 w-full lg:w-[900px] xl:w-[1100px] mx-auto p-4 lg:p-0 text-center'>
        <h2 className='text-purple-600 text-3xl font-bold'>What We Do</h2>
        <div className='w-full flex flex-col lg:flex-row mt-16 gap-8'>
          <div className='flex flex-col items-center gap-4 bg-slate-100 p-8 rounded-lg text-slate-600'>
            <img className='w-12 mb-4' src={icUiUx} alt="UI UX Designer" />
            <h3 className='text-lg font-bold'>UI UX Designer</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, molestiae?</p>
          </div>
          <div className='flex flex-col items-center gap-4 bg-slate-100 p-8 rounded-lg text-slate-600'>
            <img className='w-12 mb-4' src={icFrontend} alt="Frontend Developer" />
            <h3 className='text-lg font-bold'>Frontend Developer</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, molestiae?</p>
          </div>
          <div className='flex flex-col items-center gap-4 bg-slate-100 p-8 rounded-lg text-slate-600'>
            <img className='w-12 mb-4' src={icBackend} alt="Backend Developer" />
            <h3 className='text-lg font-bold'>Backend Developer</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, molestiae?</p>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

export default Service