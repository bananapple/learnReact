import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class UserDetail extends Component {
  state ={
    userPostList: [],
  }


  componentDidMount(){
    const { match } = this.props
    this.fetchPostData(match.params.userId)
  }

  componentWillReceiveProps(nextProps){
    const { match: nextMatch } = nextProps
    const { match } = this.props
    if(match.params.userId !== nextMatch.params.userId){
      this.fetchPostData(nextMatch.params.userId)
    }
  }

  fetchPostData = (userId) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=`+ userId).then( res => {
      this.setState({userPostList: res.data});
    });
  }

  render() {
    const { userPostList, countComment } = this.state
    const { match } = this.props
    return (
      <div className="padding-x-m">
        <h1>post...</h1>
        {userPostList.map(post =>
          <div className="post">
            <h6>#{post.id}</h6>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
            <Link to={`/users/${match.params.userId}/posts/${post.id}/comments`}>Comments</Link>
          </div>
        )}
      </div>
    );
  }
}
export default UserDetail;
