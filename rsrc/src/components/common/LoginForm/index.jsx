/* eslint-disable */
import PropTypes from 'prop-types'
import React from 'react'
import { Modal, Button, Form, Input } from 'antd'

const FormItem = Form.Item;

class LoginForm extends React.Component {
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

    return (
      <Modal title="登录" visible={visible} footer={null} width="440px" onCancel={closeModal}>
        <Form>
          <FormItem style={{ display: 'flex', justifyContent: 'center' }}>
              {getFieldDecorator('type', {
                rules: [{
                  required: true, message: 'Please input your E-mail!',
                }],
              })(<Input placeholder="手机号/邮箱" style={{ width: 300, height: 40 }}/>)}
          </FormItem>
          <FormItem style={{ display: 'flex', justifyContent: 'center' }}>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input type="password" placeholder="密码" style={{ width: 300, height: 40 }}/>
            )}
          </FormItem>
          <FormItem style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit} style={{ width: 300, height: 40 }}>登录</Button>
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm
