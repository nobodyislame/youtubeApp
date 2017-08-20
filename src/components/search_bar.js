import React, { Component } from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term : 'Initial value' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render(){
    return (
      <div>
        <input value={this.state.term} onChange={this.onInputChange} />
        The typed value is {this.state.term}
      </div>
    );
  }

  onInputChange(event){
    this.setState({ term :event.target.value });
  }
}

export default SearchBar;
