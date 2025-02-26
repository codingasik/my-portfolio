import React from 'react'
import ProgressBar from '../components/ProgressBar'
import FadeInSection from '../components/FadeInSection'

const Skill = () => {

  const dataProgress =[
    { id : 1, language : 'HTML', percent : 90},
    { id : 2, language : 'CSS', percent : 90},
    { id : 3, language : 'Javsacript', percent : 70},
    { id : 4, language : 'PHP', percent : 80},
    { id : 5, language : 'Phyton', percent : 70},
    { id : 6, language : 'Java', percent : 80}
  ]
  
  return (
    <FadeInSection delay={0.4}>
      <section id='skills' className='mt-32 lg:mt-48 w-full lg:w-[900px] xl:w-[1100px] mx-auto p-4 lg:p-0 text-center'>
        <h2 className='text-purple-600 text-3xl font-bold'>My Skills</h2>
        <div className='w-full flex flex-col lg:flex-row flex-wrap mt-16 gap-8 lg:gap-16 justify-center'>
          {
            dataProgress.map(data=>(
              <ProgressBar key={data.id} language={data.language} percent={data.percent} />
            ))
          }
        </div>
      </section>
    </FadeInSection>
  )
}

export default Skill