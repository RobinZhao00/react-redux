import createHistory from 'history/createHashHistory'
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Company from './Company';
import MainPage from './MainPage';
import My from './My';
import Navbar from './common/Navbar';
// import ChanceDetails from './ChanceDetails';

export const history = createHistory()

export default class ReactRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="main-container">
          <Navbar/>
          <div className="main-content">
            <Switch>
              <Route path="/" component={MainPage} exact/>
              <Route path="/company" component={Company} exact/>
              <Route path="/My" component={My} exact/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

