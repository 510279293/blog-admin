import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import { Table, Button } from 'antd'

const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '日期',
    dataIndex: 'age',
  },
  {
    title: '标签',
    dataIndex: 'address',
  },
  {
    title: '编辑',
    dataIndex: 'edit',
    render: (text) => (<div>
      <a href="javascript:;">查看</a>
      <a href="javascript:;">修改</a>
      <a href="javascript:;">删除</a>
    </div>)
  },
]
const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class ArtList extends ComponentExt{
  render(){
    return(<div>
      <Table columns={columns} dataSource={data} />
    </div>)
  }
}
export default ArtList
