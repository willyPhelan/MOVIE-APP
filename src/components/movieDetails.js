import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./movieDetail.css";
import Spinner from "./Spinner";
import get from "./Utils/get";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setisLoading] = useState(true)
  const [movie, setMovie] = useState(null);
  

  useEffect(() => {
    setisLoading  (true) ;
    get("/movie/" + movieId).then((data) => {
      setisLoading(false) ;
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) { 
     return <Spinner/>
  }

 


  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path; 

    return (
        <div className="detail"> 
        <img className='img' src={imageUrl} alt={movie.title}/>
        <div className="desc">
            <p> <strong> Title: </strong> {movie.title}  </p>
            <p> <strong className="st"> Genres: </strong> {movie.genres.map(genre => genre.name).join('')} </p>
            <p> <strong> Descripcion: </strong>{movie.overview}  </p>
        </div>
        </div>

    )
}
