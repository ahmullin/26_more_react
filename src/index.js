import React from 'react';
import ReactDOM from 'react-dom';

import MovieApp from './components/movie_app';
import NavBar from './components/nav_bar';

class App extends React.Component {
  render(){
    return (
      <div>
        < NavBar title='Movies!' url="/"/>
        <div className='container'>
          < MovieApp />
        </div>
      </div>
    )
  }
}



ReactDOM.render(<App/>, document.getElementById('container'));
