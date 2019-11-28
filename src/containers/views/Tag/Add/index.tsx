import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import * as styles from './index.scss'
import {addTag} from '@api/index'
class TagAddForm extends ComponentExt{
  constructor(props: any){
    super(props)
    this.state = {
      btnLoading: false,
    }
  }
  async toAddTag(params: any){
    this.setState({btnLoading: true})
    const res = await addTag(params)
    res.success ? this.$message.success(res.message) : this.$message.error(res.message)
    this.setState({btnLoading: false})
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.toAddTag(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入标签名!' }],
          })(
            <Input
              placeholder="标签名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('tag_desc', {
            rules: [{ required: true, message: '请输入标签描述!' }],
          })(
            <Input
              placeholder="请输入标签描述"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" loading={this.state.btnLoading} htmlType="submit" className={styles.login_form_button}> 提交</Button>
        </Form.Item>
      </Form>
    )
  }
}
const TagAdd = Form.create({ name: 'normal_tagAdd' })(TagAddForm)
export default TagAdd