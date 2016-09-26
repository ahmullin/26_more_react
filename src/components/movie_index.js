import React from 'react';

import SearchBar from './search_bar';
import MovieList from './movie_list';
import MovieDetail from './movie_detail';


export default class MovieIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [{title: 'A River Runs Through It'}, {title: 'Star Wars'}],
      selectedMovie: {title: 'A River Runs Through It'}
      }
      this.updateSelectedMovie = this.updateSelectedMovie.bind(this)
      this.updateMovies = this.updateMovies.bind(this)
    }

    updateSelectedMovie(movie){
      this.setState({
        selectedMovie: movie
      })
    }

    updateMovies(term){
      const URL = `https://api.themoviedb.org/3/search/movie?query=${term}&api_key=b62569151166ce983701b29c9e6cfd4a`
      // make web reqest to api, using fetch, will return promise
      // grab response and get the json
      // set newMovies to be the movies in the response
      // update state
      fetch(URL).then(response => response.json())
      .then((json) => {
        const newMovies = json.results;
        this.setState({
          movies: newMovies,
          selectedMovie: newMovies[0]
        });
      })
    }

render() {
  return (
    <div>
      <div className='row'>
        < SearchBar updateMovies = {this.updateMovies}/>
      </div>

      <div className='row'>

        <div className='col-md-4'>
          < MovieList updateSelectedMovie = {this.updateSelectedMovie} movies={this.state.movies} />
        </div>

        <div className= 'col-md-8'>
          < MovieDetail movie={this.state.selectedMovie} />
        </div>

      </div>
    </div>);
    }
}
