import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export class PostList extends Component {
  state = {
    personList: [],
    clickValue: ''
  };

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`).then( res => {
      this.setState({personList: res.data});
    })
  }
  handleChange = (event) => {
    this.setState({clickValue: event.target.value})
    console.log(this);
  }

  render() {
    const {personList} = this.state
    console.log(this.props)
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          {personList.map(person =>
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          )}
        </select>
      </div>
    );
  }
}
export default PostList;
