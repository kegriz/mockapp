import React, { Component } from 'react';
import { string } from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import User from '../User'; // localhost:3000/users/1
import NoMatch from '../NoMatch';

import logo from '../../images/logo.svg';

export default class App extends Component {
  state = {}

  static propTypes = {
    test: string,
  };

  static defaultProps = {
    test: 'test text from defaultProps',
  };

  render() {
    const { test } = this.props;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />

            <h1 className="App-title">Welcome to React</h1>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </header>

          <p className="App-intro">
            { test }
          </p>

          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route path="/users/:id" component={ User } />
            <Route component={ NoMatch } />
          </Switch>

        </div>
      </Router>
    );
  }
}
