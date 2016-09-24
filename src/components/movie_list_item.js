import React from 'react';

export default (props) => {
  return(
    <div className="col-sm-3">
      <div className='card'>
        <div className='card-header'>
          <h4>{props.movie.title}</h4>
        </div>

        <div className='card-image'>
          <img className='img-rounded' src={`http://image.tmdb.org/t/p/w500${props.movie.poster_path}`}/>
        </div>

      </div>
    </div>
  )
}
