import React,{useState,useEffect,useContext} from 'react'
import MovieList from './MovieList'
import { MOVIE_API,API_OPTIONS } from '../utils/API_requests';
import { movieContext } from './Browse';

const SecondaryContainer = () => {
    const {movies} = useContext(movieContext);
    
    const [ratedMovies,setRatedMovies] = useState([]);
    const [trendingMovies,setTrendingMovies] = useState([]);
    const [newReleaseMovies,setNewReleaseMovies] = useState([]);

    async function topRatedMovies(){
        const topRated = await fetch(MOVIE_API.top_rated,API_OPTIONS);
        const json = await topRated.json();
        setRatedMovies(json.results)
        // console.log(json.results)
    }

    async function getTrendingMovies(){
      const trending = await fetch(MOVIE_API.trending_now,API_OPTIONS);
      const json = await  trending.json();
      setTrendingMovies(json.results);
      // console.log(json.results)
    }

    async function getNewRelesedMovies(){
      const newRelease = await fetch(MOVIE_API.new_releases,API_OPTIONS);
      const json = await newRelease.json();
      setNewReleaseMovies(json.results);
      console.log(json.results)

    }
    useEffect(()=>{
        topRatedMovies();
        getTrendingMovies();
        getNewRelesedMovies();
    },[])
  return (
    <div className='bg-black  bg-gradient-to-t from-gray-900 to-black '>
      <div className='-mt-36'>
        <MovieList title={'Popular on Netflix'} movies={movies}/>
        <MovieList title={'US shows'} movies={ratedMovies}/>
        <MovieList title={'Trending now'} movies={trendingMovies}/>
        <MovieList title={'New releases'} movies={newReleaseMovies}/>
      </div>
      
    </div>
  )
}

export default SecondaryContainer
