import React, { Component } from 'react';
import Navigation from './Navigation';

export class Home extends Component {
  render() {
    const {history} = this.props
		return (
			<div>
        <span className="padding-x-m" role="img" aria-label="hmm">😚</span>
      </div>
		);
	}
}

export default Home;
