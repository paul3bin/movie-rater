import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props){
    const movie = props.movie;
    
    const [highlighted, setHighlighted] = useState(-1);

    const rateHighlighted = high => evnt =>{
        setHighlighted(high);
    }

    const rateClicked = rate => evnt =>{
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/rate_movie/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 6beff210708869168fe13df836f3974b9bd533a7'
      },
      body: JSON.stringify({stars: rate+1})
    }).then(resp => resp.json()).then(resp => console.log(resp)).catch(error => console.log())
    }
    
    return (
        <React.Fragment>
            {
                // using ternary operator for checking a condition   
                movie ? (
                    <div>
                        <h1>{movie.title}</h1>
                        <p>{movie.genre}</p>
                        <p>{movie.description}</p>
                        <FontAwesomeIcon icon={faStar} className={movie.average_rating > 0 ? 'Star-color' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.average_rating > 1 ? 'Star-color' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.average_rating > 2 ? 'Star-color' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.average_rating > 3 ? 'Star-color' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.average_rating > 4 ? 'Star-color' : ''} />
                        ({movie.number_of_ratings})
                        <div className={'Rate-container'}>
                            <h2>Rate It</h2>
                            {
                                [...Array(5)].map((element, index)=>{
                                    return <FontAwesomeIcon key={index} icon={faStar} className={highlighted > index-1 ? 'New-rating' : ''} 
                                            onMouseEnter={rateHighlighted(index)}
                                            onMouseLeave={rateHighlighted(-1)}
                                            onClick={rateClicked(index)}
                                    />
                                })
                            }
                        </div>
                    </div>
                ) : null}
        </React.Fragment>
    )    
}

export { MovieDetails };   