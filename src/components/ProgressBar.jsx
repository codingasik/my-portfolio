import React from 'react'

const ProgressBar = ({language,percent}) => {
  return (
    <div className='w-full lg:w-[46%] text-slate-600'>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-bold'>{language}</h3>
        <p className='bg-purple-600 text-white rounded-md text-xs p-1'>{percent}%</p>
      </div>
      <div className='w-full h-2.5 bg-slate-200 rounded-full mt-6'>
        <div className={`bg-purple-600 w-[${percent}%] h-2.5 rounded-full`}></div>
      </div>
    </div>
  )
}

export default ProgressBar