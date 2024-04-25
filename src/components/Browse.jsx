import React, {createContext } from 'react'
import Header from './Header'
import {useNowPlayingMovies} from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Footer from './Footer';
export const movieContext = createContext();

const Browse = () => {
  let movies =  useNowPlayingMovies();
  if(!movies.length) return;
  const {title,overview,id} = movies[0];
  return (
    <div >
      <Header/>
      <movieContext.Provider value ={{title,overview,id,movies}} >
        <MainContainer></MainContainer>
        <SecondaryContainer/>
      </movieContext.Provider>
      <Footer/>
    </div>
  )
}

export default Browse
