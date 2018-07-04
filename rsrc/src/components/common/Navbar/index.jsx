import PropTypes from 'prop-types'
import React from 'react'
import { Button } from 'antd'
import './style.scss';

export default class Navbar extends React.Component {
  static propTypes = {
    activeMenu: PropTypes.string,
  }

  render() {
    const { activeMenu } = this.props;
    console.log(activeMenu)

    return (
      <div className="Navbar-container">
        <div className="logo">logo</div>
        <div className="menu">
          <ul>
            <li>首页</li>
            <li>商机</li>
            <li>公司</li>
            <li>悬赏</li>
          </ul>
        </div>
        <div className="btn-area">
          <Button>发布项目</Button>
          <Button>发布悬赏</Button>
        </div>
        <div>icon</div>
        <div>登录</div>
      </div>
    )
  }
}
