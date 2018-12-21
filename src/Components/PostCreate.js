import React, { Component } from 'react';
import axios from 'axios';

export class PostCreate extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state
    axios.post('http://localhost:3000/post/', {
      title,
      body,
      userId: 3
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="padding-x-m">
          <div>
            <label htmlFor="title">title</label>
          </div>
          <div>
            <input id="title" name="title" type="text" onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="body">say something</label>
          </div>
          <div>
            <textarea rows="4" id="body" name="body" type="text" onChange={this.handleChange} />
          </div>
          <button>Send 🤚 Tree Pay</button>
        </div>
      </form>
    );
  }
}
export default PostCreate;
