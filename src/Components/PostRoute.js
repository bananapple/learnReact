import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';

export class PostRoute extends Component {
  render() {
    const { match } = this.props
    console.log(this.props)
    return (
      <div className="padding-x-m">
        <Route exact path={`${match.url}`} component={PostList} />
        <Route path={`${match.url}/:userId`} component={PostDetail} />
      </div>
    );
  }
}
export default PostRoute;
