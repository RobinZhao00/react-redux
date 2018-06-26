import React, { Component } from 'react';

export default class About extends Component {
  state = {
    About: 'About',
  };

  render() {
    return (
      <div className="About-container">
        {this.state.About}
      </div>
    );
  }
}
