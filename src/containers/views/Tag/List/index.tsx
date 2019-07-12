import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import { Table, Button, Input } from 'antd'
import {tagList,delTag,updateTag} from '@api/index'

const EditableCell = ({editable, value, onChange}) => (<div>
  {
    editable ? 
    <Input value={value} onChange={e => onChange(e.target.value)} />
    : value
  }
</div>)

class TagList extends ComponentExt{
  constructor(props: any){
    super(props)
    this.columns = [
      {
        title: '标签名',
        dataIndex: 'name',
        render: (text, record) => this.renderColumns(text,record, 'name')
      },
      {
        title: '描述',
        dataIndex: 'tag_desc',
        render: (text, record) => this.renderColumns(text,record, 'tag_desc')
      },
      {
        title: '功能',
        dataIndex: 'tagOpera',
        render: (text, record:object) => {
          const {editable} = record
          return(<div>
            {
              editable ? 
              <span>
                 <a onClick={() => this.save(record)}>保存</a>
                 <a onClick={() => this.cancel(record.id)}>取消</a>
              </span>
              :
              <span>
                 <a onClick={() => this.edit(record.id)}>编辑</a>
                 <a onClick={() => this.del(record.id)}>删除</a>
              </span>
            }
          </div>)
        }
      },
    ]
    this.state = {
      tableData: []
    }
    this.backupTableData = []
  }
  componentDidMount(){
    this.getTagList({})
  }
  async getTagList(params){ // 获取标签列表
    const {res} = await tagList(params)
    this.setState({tableData: res.data})
    this.backupTableData = res.data
  }
  delTheTag(id){ // 删除标签
    this.$confirm({
      title: '友情提示:',
      content: '确定要删除该标签吗?',
      async onOk() {
        const {res} = await delTag({id})
      },
      onCancel() {},
    })
  }
  async updateTheTag(params:object){ // 修改标签
    const {res} = await updateTag(params)
    console.log(res)
  }
  save(record:object){
    console.log(record)
    let params = {id:record.id, name: record.name, tag_desc: record.tag_desc}
    console.log(params)
    this.updateTheTag(params)
  }
  cancel(id){
    const newData = [...this.state.tableData]
    const target = newData.filter(item => id === item.id)[0]
    if(target){
      Object.assign(target, this.backupTableData.filter(item => id === item.id)[0])
      delete target.editable
      this.setState({tableData: newData})
    }
  }
  edit(id){
    const newData = [...this.state.tableData]
    const target = newData.filter(item => id === item.id)[0]
    if(target){
      target.editable = true
      this.setState({tableData: newData})
    }
  }
  del(id){
    this.delTheTag(id)
  }
  handleChange(value, id, column){
   const newData = [...this.state.tableData]
   const target = newData.filter(item => id === item.id)[0]
   if(target){
     target[column] = value
     this.setState({tableData: newData})
   }
  }
  renderColumns(text,record,column){
    return(
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record.id, column)}
      />
    )
  }
  render(){
    const tableData = this.state.tableData
    return(<div>
      <Table columns={this.columns} dataSource={tableData} />
    </div>)
  }
}
export default TagList
