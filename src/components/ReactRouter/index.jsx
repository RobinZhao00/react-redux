import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import About from './components/About';


export default class ReactRouter extends Component {
  render() {
    return (
      <Router>
        <button><Link to={'/'}/></button>
        <Route path="/" component={About}/> {/*eslint-disable-line*/}
      </Router>
    );
  }
}

