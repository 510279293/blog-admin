import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import {Link} from 'react-router-dom'
import * as styles from './index.scss'
import { Table, Button } from 'antd'
import {artList, delArt} from '@api/index'

class ArtList extends ComponentExt{
  constructor(props: any) {
    super(props)
    this.columns = [
      {
        key: 1,
        title: '标题',
        dataIndex: 'title',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        key: 2,
        title: '描述',
        dataIndex: 'art_desc',
        render: text => <span>{text}</span>,
      },
      {
        key: 3,
        title: '关键字',
        dataIndex: 'keywords',
        render: text => <span>{text}</span>,
      },
      {
        key: 4,
        title: '标签',
        dataIndex: 'tags',
        render: text => <span>{text}</span>,
      },
      {
        key: 5,
        title: '是否草稿',
        dataIndex: 'isdraft',
        render: text => <span>{text}</span>,
      },
      {
        key: 6,
        title: '日期',
        dataIndex: 'create_time',
        render: text => <span>{text}</span>,
      },
      {
        key: 7,
        title: '编辑',
        dataIndex: 'edit',
        render: (text,record) => (<div>
          <Link to={`/art/pre?artId=${record.id}`}>查看</Link>
          <Link to={`/art/add?artId=${record.id}`}>修改</Link>
          <a href="javascript:;" onClick={() => this.del(record.id)}>删除</a>
        </div>)
      },
    ]
    this.state = {
      tableData: []
    }
  }
  async getArtList(params: any){
    const {res} = await artList(params)
    this.setState({tableData: res.data})
  }
  componentDidMount(){
    this.getArtList({})
  }
  del(id){
    const _this = this;
    this.$confirm({
      title: '友情提示:',
      content: '确定要删除该文章吗?',
      async onOk() {
        const {res} = await delArt({id});
        console.log(res);
        _this.getArtList({});
      },
      onCancel() {},
    })
  }
  render(){
    const tableData = this.state.tableData;
    return(<div>
      <Table columns={this.columns} dataSource={tableData} />
    </div>)
  }
}
export default ArtList
