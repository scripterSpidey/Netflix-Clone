import React from 'react'
import { movieContext } from './Browse'
import { useContext } from 'react'

const VideoTitle = () => {

  const {title,overview} = useContext(movieContext)
  return (
    <div className='pt-36 px-16 w-2/5 absolute text-white'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className=' p-2 text-lg mt-3'>{overview}</p>
      <div className='p-2 flex w-1/2 space-x-3'>
        <button className='bg-white py-2 rounded text-black font-bold w-40 hover:bg-opacity-75'>Play</button>
        <button className='bg-gray-100 py-2 bg-opacity-50 rounded w-40'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
