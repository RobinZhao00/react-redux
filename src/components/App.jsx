import React, { Component } from 'react';
import HelloWorld from './HelloWorld/HelloWorld';
// import ReduxDemo from './ReduxDemo/components/index';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <HelloWorld/>
        {/*<ReduxDemo/>*/}
      </div>
    );
  }
}
