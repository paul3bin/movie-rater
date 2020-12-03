import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function MovieList(props){

    const onMovieClick = movie => evt => {
        props.movieClicked(movie)
    }

    const editClicked = movie => {
        props.editMovie(movie);
    }

    return (
        <div>
            Movie List
            {props.movies && props.movies.map(movie => {
              return (
                  <div key={movie.id}>
                      <h2 onClick={onMovieClick(movie)}>{movie.title}</h2>
                      <FontAwesomeIcon icon={faEdit} onClick={()=>editClicked()} className = {"Icons"}/>
                      <FontAwesomeIcon icon={faTrash} className = {"Icons"}/>
                  </div>
              )
            })}
          </div>
    )    
}

export { MovieList };   