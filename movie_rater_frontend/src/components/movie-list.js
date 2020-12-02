import React from 'react';

function MovieList(props){

    const onMovieClick = movie => evt => {
        props.movieClicked(movie)
    }

    return (
        <div>
            Movie List
            {props.movies && props.movies.map(movie => {
              return (
                  <div key={movie.id}>
                      <h2 onClick={onMovieClick(movie)}>{movie.title}</h2>
                  </div>
              )
            })}
          </div>
    )    
}

export { MovieList };   