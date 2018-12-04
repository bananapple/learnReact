import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export class Navigation extends Component {
	render() {
		return (
			<div>
				Navigation right there
				<NavLink to="/">Home</NavLink>/
				<NavLink to="/about">About</NavLink>/
				<NavLink to="/users">PersonList</NavLink>
			</div>
		);
	}
}

export default Navigation;