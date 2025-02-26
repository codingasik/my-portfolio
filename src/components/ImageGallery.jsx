import React from 'react'
import icLink from '../assets/icons/ic_link.svg'

const ImageGallery = ({image, title, url}) => {
  return (
    <div className='w-full lg:w-[31%] aspect-3/2 rounded-xl overflow-hidden relative group'>
      <img className='w-full h-full object-cover' src={image} alt={title} />
      <div className='absolute w-full top-0 left-0 h-full opacity-0 group-hover:opacity-100 group-hover:transition ease-in-out duration-500 bg-slate-900/70 flex justify-center items-center gap-4 flex-col'>
        <a href={url} title='Lihat detail portfolio' className='w-12 h-12 flex justify-center items-center bg-purple-600 rounded-lg'><img className='w-7' src={icLink} alt="Link" /></a>
        <h3 className='text-white text-lg font-bold'>{title}</h3>
      </div>
    </div>
  )
}

export default ImageGallery