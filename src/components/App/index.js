import React, { Component } from 'react';
import { string } from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    {/* <Link to="/">Home</Link> */ }
  </div>
);

const User = ({ match }) => ( // eslint-disable-line
  <div>
    <h2>User</h2>
    <p>id: { match.params.id }</p>
  </div>
);

const NoMatch = ({ location }) => ( // eslint-disable-line
  <div>
    <h2>404</h2>
    <p>No match for <code>{location.pathname}</code></p>
  </div>
);

export default class App extends Component {
  state = {}

  static propTypes = {
    test: string,
  };

  static defaultProps = {
    test: 'test text',
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
            tekst
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
