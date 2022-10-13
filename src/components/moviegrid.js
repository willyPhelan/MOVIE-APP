import './moviegrid.css'
import MovieCard from './moviecard'
import { useEffect, useState } from 'react'
import get from './Utils/get'
import Spinner from './Spinner'

import InfiniteScroll from 'react-infinite-scroll-component' ;
import Empty from './Empty'



export default function Moviegrid ({search}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true) ;
    const [page, setPage] = useState(1) ;
    const [hasMore, setHasMore] = useState(true) ;


   
     useEffect(() => {
        setLoading(true) ; 
        const searchURL = search ? '/search/movie?query=' + search + '&page=' + page
        : '/discover/movie?page=' + page ; 
        get(searchURL).then((data) => {
            setHasMore(data.page < data.total_pages) ;
            setMovies(prevMovies => prevMovies.concat(data.results))
            setLoading(false)
        })
    }, [search, page])

    if(!loading && movies.length === 0) { 
        return <Empty/>
    }

    return (
        <InfiniteScroll dataLength={movies.length} hasMore={hasMore} next={() => setPage((prevpage) => prevpage +1 )} loader={<Spinner/>}>
        <ul className='list'>
          { movies.map((movie) => // por cada obj en el arreglo, creame un li con el la prop titulo
            { return <MovieCard key={movie.id} className='li' movies={movie}/> }
        )}
        </ul>
        </InfiniteScroll>
    )

}