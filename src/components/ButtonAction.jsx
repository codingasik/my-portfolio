import React from 'react'

const ButtonAction = ({url,caption}) => {
  return (
    <a href={url} className='inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-600 transition ease-in-out duration-500 text-white font-semibold'>{caption}</a>
  )
}

export default ButtonAction