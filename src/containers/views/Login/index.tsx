import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import LoginBg from '@components/LoginBg'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import * as styles from './index.scss'
import {login} from '@api/index'

class LoginForm extends ComponentExt{
  constructor(props: any){
    super(props)
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.toLogin(values);
      }
    })
  }

  async toLogin(params: object) {
    const res = await login({...params})
    if(res.success){
      this.props.history.push('/art/list')
    } else{
      this.$message.error(res.message)
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <LoginBg>
        <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox className={styles.color_blue}>记住密码</Checkbox>)}
          <a className={styles.login_form_forgot} href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className={styles.login_form_button}> 登录</Button>
        </Form.Item>
      </Form>
      </LoginBg>
    )
  }
}
const Login = Form.create({ name: 'normal_login' })(LoginForm)
export default Login;