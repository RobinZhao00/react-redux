import createHistory from 'history/createHashHistory'
import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import About from './components/About';
import Test from './components/Test';

export const history = createHistory()

export default class ReactRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <switch>
          <Route path="/" component={About} exact />
          <Route path="/test" component={Test} exact />
        </switch>
      </Router>
    );
  }
}

