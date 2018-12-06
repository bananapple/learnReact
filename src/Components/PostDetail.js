import React, { Component } from 'react';
import axios from 'axios';

export class UserPost extends Component {
  state ={
    userPost: []
  }
  componentDidMount(){
    const { match } = this.props
    console.log(this.props)
    axios.get(`https://jsonplaceholder.typicode.com/posts/`+ match.params.userId).then( res => {
      this.setState({userPost: res.data});
    });
  }
  render() {
    const {userPost} = this.state
    return (
      <div className="padding-x-m">
        <h1>post...</h1>
        {userPost.title}
      </div>
    );
  }
}
export default UserPost;
