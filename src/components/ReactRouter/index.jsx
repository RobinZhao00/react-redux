import createHistory from 'history/createHashHistory'
import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import About from './components/About';

export const history = createHistory()

export default class ReactRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={About} />
      </Router>
    );
  }
}

