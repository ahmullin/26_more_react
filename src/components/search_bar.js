import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {query: ''}
  }

  onChange(e){
    this.setState({query: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onSearch(this.state.query);
    this.setState({query: ''});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input placeholder='Search For Movies' className='form-control' value={this.state.query} onChange={this.onChange.bind(this)} />
        </form>
      </div>)
  }
}
