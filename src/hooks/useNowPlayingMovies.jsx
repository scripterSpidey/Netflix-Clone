import { API_OPTIONS,MOVIE_API } from "../utils/API_requests";
import { useEffect,useState } from "react";

export const useNowPlayingMovies=()=>{
    const [movies,setMovies] = useState([])
    const getNowPlayingMovies =  async ()=>{
        const data =await  fetch(
          MOVIE_API.now_playing,
          API_OPTIONS
        );
        const json = await data.json();
        setMovies(json.results)
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[]);

    return movies;
}

