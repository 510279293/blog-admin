import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd'
import Editor from '@components/markdown'
import {addArt,tagList,artList} from '@api/index'
import {getUrlParams} from '@utils/util.js'
const { Option } = Select

let eTimer = null
class ArtAdd extends ComponentExt{
  constructor(props: any){
    super(props)
    this.state={
      content: '',
      editContent: '',
      tagsArr: [],
    }
    this._editorChange = this._editorChange.bind(this)
  }
  async componentDidMount(){
    let search = this.props.location.search
    let artId = getUrlParams(search, 'artId')
    if(artId){
      const {res} = await artList({id:artId})
    }
    this.getTagList({})
  }
  async getTagList(params?:object) {
    const {res} = await tagList(params)
    this.setState({tagsArr: res.data})
  }
  _editorChange(content:string, outcontent:string) {
    this.setState({
      content: content,
      editContent: outcontent
    })
  }
  async toAddArt(params:object){
    const {res} = await addArt(params)
    console.log(res)
    res.success ? this.$message.success('新增文章成功') : this.$message.error('新增文章失败')
  }
  submitForm(params:object){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        let newParams = Object.assign(params,values)
        newParams.tags = newParams.tags.join(',')
        this.toAddArt(newParams)
      }
    })
  }
  handleSubmit = (str:string) => {
    let params = {}
    if(str == 'draft'){
      params.isdraft = true
    }else{
      params.isdraft = false
    }
    Object.assign(params,this.state)
    this.submitForm(params)
  }
  render(){
    const { getFieldDecorator } = this.props.form
    const tagsArr = this.state.tagsArr
    const tagsOption = []
    tagsArr.map((v:object,i:number) => {
      tagsOption.push(<Option key={v.id}>{v.name}</Option>)
    })
    return(<div className={styles.artAdd}>
        <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入标题!' }],
          })(
            <Input
              placeholder="请输入一个响亮的标题吧"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('desc', {
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
          {
            getFieldDecorator('tags', {})(
            <Select
              mode="multiple"
              placeholder="选择一个标签吧"
              // defaultValue={['a10', 'c12']}
              style={{ width: '100%' }}
            >
              {tagsOption}
            </Select>
            )
          }
        </Form.Item>
        <Editor content={this.state.content} editorChange={this._editorChange} />
        <Form.Item className={styles.mar_center}>
          <Button type="primary" loading onClick={() => this.handleSubmit('draft')} className={styles.login_form_button}> 保存草稿</Button>
          <Button type="primary" onClick={() => this.handleSubmit('public')} className={styles.login_form_button}> 发布文章</Button>
        </Form.Item>
      </Form>
    </div>)
  }
}
const ArtAddForm = Form.create({ name: 'artAdd_form' })(ArtAdd)
export default ArtAddForm
