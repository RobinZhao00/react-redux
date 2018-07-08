/* eslint-disable */
import PropTypes from 'prop-types'
import React from 'react'
import { Modal, Button, Form, Checkbox, Input } from 'antd'

const FormItem = Form.Item;
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;


class RewardForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    closeModal: PropTypes.func,
    visible: PropTypes.bool,
  }

  handleSubmit = () => {
    console.log('tijaio');
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const command = {
          type: values.type,
          title: values.title,
          detail: values.detail,
          method: values.method,
          money: values.money,
          phone: values.phone,
          weixin: values.weixin,
          email: values.email
        };
        this.props.onSubmit(command);
      }
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const { closeModal, visible } = this.props;
    const plainOptions = ['探币', '现金'];

    return (
      <Modal title="发布悬赏" visible={visible} footer={null} width="660px" onCancel={closeModal}>
        <Form>
          <FormItem label="悬赏类型">
              {getFieldDecorator('type', {
                rules: [{
                  required: true, message: 'Please input your E-mail!',
                }],
              })(<Input />)}
          </FormItem>
          <FormItem label="悬赏标题">
            {getFieldDecorator('title', {
              rules: [{
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input placeholder="准确描述您的悬赏内容联系人、公司及约见" />
            )}
          </FormItem>
          <FormItem label="悬赏详情">
            {getFieldDecorator('detail', {
              rules: [{
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <TextArea rows={4} placeholder="详细描述您的悬赏详情" />
            )}
          </FormItem>
          <FormItem label="悬赏方式">
            {getFieldDecorator('method', {
              rules: [{
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <CheckboxGroup options={plainOptions} />

            )}
          </FormItem>
          <FormItem label="悬赏金额">
            {getFieldDecorator('money', {
              rules: [{
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input placeholder="准确描述您的悬赏内容联系人、公司及约见" />
            )}
          </FormItem>
          <FormItem label="电话">
            {getFieldDecorator('phone', {
              rules: [{
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="微信">
            {getFieldDecorator('weixin', {
              rules: [{
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="邮箱">
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>提交</Button>
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

const WrappedRewardForm = Form.create()(RewardForm);

export default WrappedRewardForm
