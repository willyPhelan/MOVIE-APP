import React from 'react'
import './App.css'
import MovieDetails from './movieDetails.js';
import {Switch, Link, Route} from 'react-router-dom'
import LandingPage from './landingpage';



export default function App() {
  return (
   <div>
   
      <header className="App-header">
      <Link to='/'> <h1 className='title'> Movies </h1> </Link>
      
      </header>
          <main>
          
      <Switch>
      <Route exact path='/'> <LandingPage/> </Route>
      <Route path='/movie/:movieId'>  <MovieDetails/> </Route>
      </Switch>

          
        </main>
    
     </div>
  );
}


