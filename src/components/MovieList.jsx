import React,{useContext,useEffect,useState} from 'react'
import MovieCard from './MovieCard';
import { movieContext } from './Browse';
import { MOVIE_API,API_OPTIONS } from '../utils/API_requests';

const MovieList = ({title,movies}) => {
    // console.log(movies)
    return (
        <div className='ml-16 mt-9 text-white'>
            <h1 className='font-bold text-2xl py-2 '>{title}</h1>
            <div className=' flex overflow-x-scroll no-scrollbar'>
                <div className='flex space-x-1 '>
                    {movies.map(movie=><MovieCard key={movie.id} backgroundPath={movie.backdrop_path}/>)}
                </div>
            </div>
        </div>
       
    )
}

export default MovieList
