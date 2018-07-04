import React, { Component } from 'react';
import Navbar from '../common/Navbar'

export default class Company extends Component {
  render() {
    return (
      <div className="Company-container">
        <Navbar activeMenu="公司"/>
      </div>
    );
  }
}
