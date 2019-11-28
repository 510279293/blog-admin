import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import { Table, Button, Input } from 'antd'
import {tagList,delTag,updateTag} from '@api/index'

class History extends ComponentExt{
  constructor(props: any){
    super(props)
    this.columns = [
      {
        title: '标签名',
        dataIndex: 'name',
        render: (text, record) => (<span>{text}</span>)
      },
      {
        title: '描述',
        dataIndex: 'tag_desc',
      render: (text, record) => (<span>{text}</span>)
      },
      {
        title: '功能',
        dataIndex: 'tagOpera',
        render: (text, record:object) => {
          const {editable} = record
          return(<div>
              <span>
                 <a onClick={() => this.edit(record.id)}>编辑</a>
                 <a onClick={() => this.del(record.id)}>删除</a>
              </span>
          </div>)
        }
      },
    ]
    this.state = {
      tableData: []
    }
  }
  componentDidMount(){
  }
  render(){
    const tableData = this.state.tableData
    return(<div>
      <Table columns={this.columns} dataSource={tableData} />
    </div>)
  }
}
export default History
