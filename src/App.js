import React, { Component } from 'react';
import './App.scss';
import Route from './Route';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel)

class App extends Component {

  render() {
    return (
      <Route />
    );
  }
}

export default App;
