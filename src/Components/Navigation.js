import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import PostList from './PostList';

export class Navigation extends Component {
	render() {
		return (
			<div className="nav">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/person">PersonList</NavLink>
        <div className="d-inline-block">
          <PostList />
        </div>
			</div>
		);
	}
}
export default Navigation;
