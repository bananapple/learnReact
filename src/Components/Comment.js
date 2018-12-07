import React, { Component } from 'react';
import axios from 'axios';

export class Comment extends Component {
  state = {
    commentList: [],
  };

  componentDidMount(){
    const { match } = this.props
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=` + match.params.postId).then( res => {
      this.setState({commentList: res.data});
    });
  }

  render() {
    const {commentList} = this.state
    return (
      <div className="padding-x-m">
        {commentList.map(comment =>
          <div className="comment">
            <h6># {comment.id}</h6>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <div>email: {comment.email}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Comment;
