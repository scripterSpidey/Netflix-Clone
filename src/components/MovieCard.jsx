import React,{useContext} from 'react'
import { BACKGROUND_URL } from '../utils/API_requests';
const MovieCard = ({backgroundPath}) => {
    return (
        <div className='w-64 ' >
            <img className='rounded'  src={`${BACKGROUND_URL}${backgroundPath}`} alt="" />
        </div>
    )
}

export default MovieCard
