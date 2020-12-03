import React from 'react';

function MovieForm(props){

    return (
        <h2>{props.movie && props.movie.title} edit</h2>
    )    
}

export {MovieForm};