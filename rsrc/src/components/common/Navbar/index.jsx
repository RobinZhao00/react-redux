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
        <div className="content">
          <div className="logo">logo</div>
          <div className="menu">
            <ul className="menu-parent">
              <li className="parent-itm">首页</li>
              <li className="parent-itm">商机
                <ul className="menu-children">
                  <li className="children-itm">全部商机</li>
                  <li className="children-itm">我解锁的商机</li>
                  <li className="children-itm">我发布的商机</li>
                  <li className="children-itm">我关注的商机</li>
                </ul>
              </li>
              <li className="parent-itm">公司
                <ul className="menu-children">
                  <li className="children-itm">全部公司</li>
                  <li className="children-itm">我发布的公司</li>
                  <li className="children-itm">我关注的公司</li>
                </ul>
              </li>
              <li className="parent-itm">悬赏
                <ul className="menu-children">
                  <li className="children-itm">悬赏大厅</li>
                  <li className="children-itm">我的悬赏</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="btn-area">
            <Button>发布项目</Button>
            <Button>发布悬赏</Button>
          </div>
          <div className="icon-area">
            <div className="search-icon"></div>
            <div className="notification-icon"></div>
          </div>
          <div className="login-area">
            <button>登录</button>
            <button className="active">注册</button>
          </div>
        </div>
      </div>
    )
  }
}
