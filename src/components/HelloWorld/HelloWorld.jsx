import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class HelloWorld extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {};

  state = {
    HelloWorld: 'HelloWorld',
  };

  render() {
    return (
      <div className="hello-world-container animated infinite bounce">
        {this.props.text}
        {this.state.HelloWorld}
      </div>
    );
  }
}
