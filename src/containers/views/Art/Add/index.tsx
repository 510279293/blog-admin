import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd'
import Editor from '@components/markdown'

const { Option } = Select
const children = []

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

let eTimer = null
class ArtAdd extends ComponentExt{
  constructor(props: any){
    super(props)
    this.state={
      content: '',
      title: '',
      descript: '',
      editContent: '',
      keyword: ''
    }
  }
  _editorChange(content, outcontent) {
    clearInterval(eTimer)
    eTimer = setTimeout(()=> {
      this.setState({
        content: content,
        editContent: outcontent
      })
    }, 60)
  }
  componentDidMount(){}
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form
    return(<div className={styles.artAdd}>
        <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <Form.Item>
          {getFieldDecorator('artTitle', {
            rules: [{ required: true, message: '请输入标题!' }],
          })(
            <Input
              placeholder="请输入一个响亮的标题吧"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('artDesc', {
            rules: [{ required: true, message: '请输入描述!' }],
          })(
            <Input
              placeholder="给你的文章做个描述吧"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('keywords', {
            rules: [{ required: true, message: '请输入关键字!' }],
          })(
            <Input
              placeholder="请输入关键字用逗号隔开(,)"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Select
            mode="multiple"
            placeholder="选择一个标签吧"
            defaultValue={['a10', 'c12']}
            style={{ width: '100%' }}
          >
            {children}
          </Select>
        </Form.Item>
        <Editor content={this.state.content} editorChange={this._editorChange} />
        <Form.Item className={styles.mar_center}>
          <Button type="primary" htmlType="submit" className={styles.login_form_button}> 保存草稿</Button>
          <Button type="primary" htmlType="submit" className={styles.login_form_button}> 发布文章</Button>
        </Form.Item>
      </Form>
    </div>)
  }
}
const ArtAddForm = Form.create({ name: 'artAdd_form' })(ArtAdd)
export default ArtAddForm
