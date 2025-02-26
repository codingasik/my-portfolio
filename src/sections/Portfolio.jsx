import React from 'react'
import portfolioImg1 from '../assets/portfolio1.png'
import portfolioImg2 from '../assets/portfolio2.png'
import portfolioImg3 from '../assets/portfolio3.png'
import portfolioImg4 from '../assets/portfolio4.png'
import portfolioImg5 from '../assets/portfolio5.png'
import portfolioImg6 from '../assets/portfolio6.png'
import ImageGallery from '../components/ImageGallery'
import FadeInSection from '../components/FadeInSection'

const Portfolio = () => {
  const dataGallery = [
    { id: 1, title : 'Company Profile', url: '#', image : portfolioImg1},
    { id: 2, title : 'Landing Page', url: '#', image : portfolioImg2},
    { id: 3, title : 'News Website', url: '#', image : portfolioImg3},
    { id: 4, title : 'Portfolio Website', url: '#', image : portfolioImg4},
    { id: 5, title : 'Membership Website', url: '#', image : portfolioImg5},
    { id: 6, title : 'Admin Dashboard', url: '#', image : portfolioImg6},
  ]
  return (
    <FadeInSection delay={0.4}>
      <section id="portfolio" className='mt-32 lg:mt-48 w-full lg:w-[900px] xl:w-[1100px] mx-auto p-4 lg:p-0 text-center'>
        <h2 className='text-purple-600 text-3xl font-bold'>Portfolio</h2>
        <div className='w-full flex flex-col lg:flex-row flex-wrap mt-16 gap-8'>
          {
            dataGallery.map(data=>(
              <ImageGallery key={data.id} image={data.image} title={data.title} url ={data.url} />
            ))
          }
        </div>
      </section>
    </FadeInSection>
  )
}

export default Portfolio