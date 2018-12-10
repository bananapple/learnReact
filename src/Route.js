import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import People from './Components/People';
import About from './Components/About';
import PostDetail from './Components/PostDetail';
import Comment from './Components/Comment';
import PostCreate from './Components/PostCreate';

export class Url extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/person" component={People} />
            <Route path='/post/:userId' component={PostDetail} />
            <Route path='/posts/:postId/comments' component={Comment}/>
            <Route path='/create_post' component={PostCreate}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Url;
