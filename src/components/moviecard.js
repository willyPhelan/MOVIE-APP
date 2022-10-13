import './moviecard.css'
import {Link} from 'react-router-dom' ; 

import getMovieImg from './Utils/getMovieimg';

export default function MovieCard ({movies}){ 
   
    const imgurl = getMovieImg(movies.poster_path, 300)
    
    return (
    <li className='movie'> 
    <Link to={'/movie/' + movies.id}>
        <img className='img'  src={imgurl} alt='noimg'/>
        <div className="movietitle"> {movies.title} </div>
       </Link>
        </li>
        
)
}