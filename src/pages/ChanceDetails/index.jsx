import React, { Component } from 'react';
import { Card } from 'antd';
import './style.scss';

const customerProfile = [
  {
    title: '建设单位',
    content: [
      '企业名称：江苏宸星新材料有限公司',
      '注册地址：泰州市医药高新区港城西路10号泰州天河家具有限公司内二楼办公室',
      '注册资金：30000（万元）',
      '企业负责人：赵庆丰（法定代表人）',
      '公司主营业务：新材料研发，锂电池正极材料的生产，锂电池、锂电池正极材料的研究开发，锂电池正极材料及其相关配件的销售。（依法须经批准的项目，经相关部门批准后方可开展经营活动）',
      '企业网址：该公司企业网址正在建设中',
      '公司背景：江苏宸星新材料有限公司于2017年3月13日在泰州医药高新技术产业开发区市场监督管理局注册登记，赵庆丰是法定代表人',
    ]
  }, {
    title: '详细介绍',
    content: [
      '1.项目建设背景：该项目是公司为扩大生产规模，提高市场占有率而规划建设；',
      '2.项目建设内容： ',
      'a.建设规模：年产1万吨镍钴铝三元锂电池正极材料； ',
      'b.生产车间及装置介绍：项目新建厂房，新建生产线； ',
      '3.生产工艺路线：原材料搅拌--混锂烧结-鄂破-筛分-包装成品； ',
      '4.项目建设地点：江苏省泰州市医药高新区； ',
      '5.项目社会效益：项目建成后满足市场需求，促进经济发展，增加公司利润，增加就业机会。',
    ],
  }
];

export default class ChanceDetails extends Component { // 商机详情页面
  state = {
    ChanceDetails: 'ChanceDetails',
  };

  render() {
    return (
      <div className="chance-details-container">
        {
          customerProfile.map(item => (
            <Card title={item.title} style={{ width: '1184px' }} key={item.title}>
              {
                item.content.map((itm, idx) => <p key={item + idx}>{itm}</p>)
              }
            </Card>))
        }
        {this.state.ChanceDetails}
      </div>
    );
  }
}
