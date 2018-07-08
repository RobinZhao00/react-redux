import createHistory from 'history/createHashHistory'
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Company from './Company';
import MainPage from './MainPage';
// import ChanceDetails from './ChanceDetails';

export const history = createHistory()

export default class ReactRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/company" component={Company} exact />
        </Switch>
      </Router>
    );
  }
}

