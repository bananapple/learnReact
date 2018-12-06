import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import People from './Components/People';
import About from './Components/About';

export class Url extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={People} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Url;