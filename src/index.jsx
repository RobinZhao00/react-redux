import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.scss';

const root = document.createElement('div');
root.setAttribute('id', 'app');
document.body.appendChild(root);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
