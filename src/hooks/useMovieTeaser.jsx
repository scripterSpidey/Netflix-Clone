import {useState,useEffect,useContext} from "react"
import { API_OPTIONS } from "../utils/API_requests";
import { movieContext } from "../components/Browse";

export const useMovieTeaser = ()=>{
    const {id} = useContext(movieContext)
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    const [teaserKey,setTeaserKey] = useState('')
    async function  getTeaser(){
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        const videos = json.results.filter(video=>video.type =='Teaser');
        const teaser = videos.length ? videos[0] : json.results[0];
        setTeaserKey(teaser.key)
    }

    useEffect(()=>{
        getTeaser();
    },[])

    return teaserKey;
}