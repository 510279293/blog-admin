import * as React from 'react'
import {Link} from 'react-router-dom'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import { Menu, Icon, Button } from 'antd'
const { SubMenu } = Menu

class HomeNav extends ComponentExt{
  constructor(props: any){
    super(props)
    this.state = {
      selectedKeys: '0',
      openKeys: 'sub0',
      menus: [
        {
          icon: "pie-chart",
          txt: "文章管理",
          sub: [
            {
              routeTo: '/art/list',
              txt: "文章列表"
            },
            {
              routeTo: '/art/add',
              txt: "添加/修改文章"
            },
            // {
            //   routeTo: '/art/draft',
            //   txt: "草稿箱"
            // }
          ]
        },
        {
          icon: "desktop",
          txt: "标签管理",
          sub: [
            {
              routeTo: '/tag/list',
              txt: "全部标签"
            },
            {
              routeTo: '/tag/add',
              txt: "添加标签"
            }
          ]
        },
        {
          icon: "inbox",
          txt: "留言管理",
          sub: [
            {
              routeTo: '/feedme',
              txt: "留言墙"
            }
          ]
        },
        {
          icon: "mail",
          txt: "生活管理",
          sub: [
            {
              routeTo: '/life',
              txt: "历史轨迹"
            }
          ]
        }
      ]
    }
  }
  componentWillMount(){
    let curRoute = this.props.location.pathname
    this.state.menus.map((item:object, idx:number) => {
      item.sub.map((sitem:object, i:number) => {
        curRoute.includes(sitem.routeTo) ? (
          this.setState({
            selectedKeys: `${(idx*10+i).toString()}`,
            openKeys: `sub${idx}`,
          })
          ) : null
      })
    })
  }
  render(){
    console.log(this.state)
    return(
      <div style={{ width: 180, height: "100%" }}>
        <Menu
          defaultSelectedKeys={[this.state.selectedKeys]}
          defaultOpenKeys={[this.state.openKeys]}
          mode="inline"
          theme="dark"
        >
          {
            this.state.menus.map((item: any, index: any) => {
              return (
                <SubMenu
                  key={`sub${index}`}
                  title={
                    <span>
                      <Icon type={item.icon} />
                      <span>{item.txt}</span>
                    </span>
                  }
                >
                  {
                    item.sub.map((sitem: any, idx: any) => {
                      return(
                        <Menu.Item key={index*10+idx}>
                          <Link to={sitem.routeTo}>{sitem.txt}</Link>
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            })
          }
        </Menu>
      </div>
    )
  }
}

export default HomeNav