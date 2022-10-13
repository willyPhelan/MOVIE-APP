import React from 'react' ;
import './peliculas.css' ;

export default function Peliculas (props) { 
    return (
        <div>
        <div className='peli'> 
        <h2 className='pelicula1'> Pelicula 1 </h2>
        <p> {props.title}</p>
        <p> {props.contenido}</p>
         </div>
        
        <div className='pelic'> 
        <h2 className='pelicula2'> Pelicula 2 </h2></div>
        </div>
    )
}
