import React, {useState, useEffect} from 'react'
import './App.css';
import { MovieList } from './components/movie-list'
import { MovieDetails } from './components/movie-details'
import {MovieForm} from './components/movie-form'

function App() {
  // creating a hook
  const [movies, setMovies] = useState([]);

  // this component will remember which movie was selected.
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [editedMovie, setEditedMovie] = useState(null);
  
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 6beff210708869168fe13df836f3974b9bd533a7'
      }
    }).then(resp => resp.json()).then(resp => setMovies(resp)).catch(error => console.log())    
  }, [])

  // arrow function that fetched the details of movie once the title of the movie have been clicked.
  const movieClickAction = movie => {
    setSelectedMovie(movie);
  }

  // arrow function that loads the updated movie details once the ratings have been updated.
  const loadMovie = movie => {
    setSelectedMovie(movie);
  }

  // arrow function to edit the selected movie
  const movieEdit = movie => {
    setEditedMovie(movie);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="Layout">
        {/* passing props */}
          <MovieList movies={movies} movieClicked={movieClickAction} editMovie={movieEdit}/>
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
          <MovieForm movie={editedMovie}/>
      </div>
    </div>
  );
}

export default App;
