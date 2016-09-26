
import React from 'react';
import MovieIndex from './movie_index';

export default class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state = { term: ""}
        this.updateTerm = this.updateTerm.bind(this)
    }

    updateTerm(event){
       this.setState({ term: event.target.value })
    }

    onSubmit (event){
      event.preventDefault()
      this.props.updateMovies(this.state.term);
      this.setState({term: ""})
    }

    render(){
      return (
        <div>
          <h1> {this.state.term}</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input value = {this.state.term} onChange={this.updateTerm} />
            </form>
        </div>)
      }
}


// <h2>{this.state.searchTerm}</h2>
// <input value={this.state.searchTerm} onChange={(event) => {
//     this.setState({searchTerm: event.target.value});
//     this.props.onInputChange(event.target.value);
//      }
// }
//     />
