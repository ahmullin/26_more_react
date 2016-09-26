import React from 'react';

export default (props) => {
  const movies = props.movies

  const movieListItems = movies.map( (movie, i) => {
    return (
      <li key={i} onClick = { () => {props.updateSelectedMovie(movie)} }> {movie.title}
      </li>
    )
  })

  return (
    <div className= 'col-md-8'>
      <ul>
        {movieListItems}
      </ul>
    </div>
  )
}
