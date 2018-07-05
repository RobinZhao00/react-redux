import React, { Component } from 'react';
import Navbar from '../common/Navbar'
import './style.scss';

export default class Company extends Component {
  render() {
    return (
      <div className="Company-container">
        <Navbar activeMenu="公司"/>
      </div>
    );
  }
}
