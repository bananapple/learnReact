import React, { Component } from 'react';

export class PostCreate extends Component {
constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('http://localhost:3000/post/', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="padding-x-m">
          <div>
            <label htmlFor="title">title</label>
          </div>
          <div>
            <input id="title" name="title" type="text" />
          </div>
          <div>
            <label htmlFor="body">say something</label>
          </div>
          <div>
            <textarea rows="4" id="body" name="body" type="text" />
          </div>
          <button>Send 🤚 Tree Pay</button>
        </div>
      </form>
    );
  }
}
export default PostCreate;
