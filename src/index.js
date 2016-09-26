import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav_bar';
import MovieIndex from './components/movie_index'

class App extends React.Component {
  render(){
    return (
      <div>
        < NavBar title='Movies!' url="/"/>
        < MovieIndex />
      </div>
    )
  }
}



ReactDOM.render(<App/>, document.getElementById('container'));
