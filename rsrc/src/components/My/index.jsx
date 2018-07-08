import React, { Component } from 'react';
import SideBar from '../common/SideBar';
import './style.scss';

export default class My extends Component {
  render() {
    return (
      <div className="my-container">
        <SideBar style={{ height: '100%' }}/>
      </div>
    );
  }
}
