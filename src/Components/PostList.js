import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
    const { value } = event.target
    this.setState({clickValue: event.target.value})
    this.props.history.push(`/post/${value}`)
  }

  render() {
    const {personList} = this.state
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
export default withRouter(PostList);
