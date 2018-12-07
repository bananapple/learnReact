import React, { Component } from 'react';
import axios from 'axios';

export class UserDetail extends Component {
  state ={
    userPostList: []
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
    const { userPostList } = this.state
    return (
      <div className="padding-x-m">
        <h1>post...</h1>

        {userPostList.map(post =>
          <div>
            {post.id}
          </div>
        )}

      </div>
    );
  }
}
export default UserDetail;
