import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './style.scss';


const { SubMenu } = Menu;

export default class SideBar extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['my-chance']}
        mode="inline"
      >
        <SubMenu key="my-chance" title={<span><Icon type="home" /><span>我的商机</span></span>}>
          <Menu.Item key="1">我解锁的联系人</Menu.Item>
          <Menu.Item key="2">我申请的约谈</Menu.Item>
        </SubMenu>
        <Menu.Item key="my-comment">
          <Icon type="mail" />
          <span>待评价</span>
        </Menu.Item>
        <Menu.Item key="my-wallet">
          <Icon type="wallet" />
          <span>我的钱包</span>
        </Menu.Item>
        <Menu.Item key="my-recall">
          <Icon type="pie-chart"/>
          <span>退款维权</span>
        </Menu.Item>
        <SubMenu key="my-account" title={<span><Icon type="setting"/><span>账号与管理</span></span>}>
          <Menu.Item key="11">账号资料</Menu.Item>
          <Menu.Item key="12">安全设置</Menu.Item>
        </SubMenu>
        <SubMenu key="my-message" title={<span><Icon type="contacts" /><span>消息通知</span></span>}>
          <Menu.Item key="11">站内信</Menu.Item>
          <Menu.Item key="12">系统</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
