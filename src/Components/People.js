import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PersonDetail from './PersonDetail';
import PersonList from './PersonList'

export class People extends Component {
  render() {
  	const { match } = this.props
  	return (
  	  <div className="padding-x-m">
    		<Route exact path={`${match.url}`} component={PersonList} />
    		<Route path={`${match.url}/:userId`} component={PersonDetail} />
  	  </div>
  	);
  }
}

export default People;
