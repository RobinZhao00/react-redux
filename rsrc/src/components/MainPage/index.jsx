import React, { Component } from 'react';
import { Button } from 'antd'
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import './style.scss';

export default class MainPage extends Component {
  render() {
    return (
      <div className="main-page-container">
        <Navbar activeMenu="首页"/>
        <div className="main-page-body">
          <div className="body-container">
            <div className="carousel-container">
              <div className="carousel-inner-container"></div>
              <div className="btn-container">
                <Button className="release-reward">发布悬赏</Button>
                <Button className="release-project" style={{ marginLeft: '80px' }}>发布项目</Button>
              </div>
            </div>
            <section className="section hot">
              <div className="hot-item">
                <span>12，300</span>
                <span>可约谈业主</span>
              </div>
              <div className="hot-item">
                <span>50万+</span>
                <span>项目/商机</span>
              </div>
              <div className="hot-item">
                <span>12万+</span>
                <span>公司人脉</span>
              </div>
            </section>
            <section className="section advantage">
              <div className="title title-advantage">我们的优势</div>
              <div className="content">
                <div className="content-item">
                  <div className="icon icon-rate"></div>
                  <div className="subtitle">商机转化率高</div>
                  <div className="description">对于每个商机，用户不仅可以浏览联系人，还可以利用发布人同业主的信任关系直接约见到业主。降低交易环节的信任成本，从而提高商机的转化率</div>
                </div>
                <div className="content-item">
                  <div className="icon icon-threshold"></div>
                  <div className="subtitle">门槛低</div>
                  <div className="description">同行业内其他平台针对企业用户不同，平台面向个人用户开放。用户根据需求酌情购买商机信息</div>
                </div>
                <div className="content-item">
                  <div className="icon icon-amount"></div>
                  <div className="subtitle">海量商机 覆盖广</div>
                  <div className="description">商机发布主体为个人而非机构，从而比政府、设计院、工程公司等机构具有更多的覆盖面</div>
                </div>
                <div className="content-item">
                  <div className="icon icon-authentication"></div>
                  <div className="subtitle">认证项目信息</div>
                  <div className="subtitle">真实可靠</div>
                  <div className="description">通过佣金托管、发布人认证、评价排名等手段确保商机的真实性</div>
                </div>
              </div>
            </section>
            <section className="section function">
              <div className="title title-function">四个功能</div>
              <div className="content content-function"></div>
            </section>
            <section className="section function">
              <div className="title title-process">使用流程</div>
              <div className="content content-process"></div>
            </section>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
