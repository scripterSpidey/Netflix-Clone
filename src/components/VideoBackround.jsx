import React from 'react'
import { useMovieTeaser } from '../hooks/useMovieTeaser';
const VideoBackround = () => {
  const teaserKey = useMovieTeaser();
  return (
    <div  >
      <iframe
        className='w-screen aspect-video' 
        src={`https://www.youtube.com/embed/${teaserKey}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&rel=0`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackround
