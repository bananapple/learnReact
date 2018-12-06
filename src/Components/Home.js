import React, { Component } from 'react';
import Navigation from './Navigation';

export class Home extends Component {
  render() {
    const {history} = this.props
		return (
			<div>
        <Navigation history = {history} />
        <span role="img" aria-label="hmm">😚</span>
      </div>
		);
	}
}

export default Home;
