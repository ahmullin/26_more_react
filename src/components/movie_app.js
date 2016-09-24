import React from 'react';

import MovieList from './movie_list';
import SearchBar from './search_bar';

export default class MovieApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {movies: []};
    this.loadMovies = this.loadMovies.bind(this);
    this.loadMovies();
  }

  componentWillMount(){
    console.log('Will mount...')
  }

  loadMovies(term){
    let endpoint;

    console.log('loading movies...')
    const BASE_URL = 'https://api.themoviedb.org/3/';
    if (!term || !term.length) {
      endpoint = 'discover/movie?sort_by=popularity.desc'
    } else {
      endpoint = `search/movie?query=${term}`
    }

    const url = BASE_URL + endpoint + '&api_key=b62569151166ce983701b29c9e6cfd4a'
    fetch(url)
    .then(response => response.json())
    .then((json) => {
      this.setState({movies: json.results})
    })
  }

  render(){
    return (
    <div>
        <div className = 'row' >
          <SearchBar onSearch={ this.loadMovies }/>
        </div>
        <MovieList movies={this.state.movies}/>
    </div>);
  }
}
