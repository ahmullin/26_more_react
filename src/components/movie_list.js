import React from 'react';
import MovieListItem from './movie_list_item';

export default (props) => {

  if (!props.movies.length) {
    return (<div>Loading</div>)
  }

  return (
    <div>
      <div className='row'>
      { props.movies.map( (movie, i) => < MovieListItem  key={i} movie={movie} /> )}
      </div>
    </div>
  );
}
