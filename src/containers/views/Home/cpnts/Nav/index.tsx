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
              txt: "添加文章"
            },
            {
              routeTo: '/art/draft',
              txt: "草稿箱"
            }
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
  render(){
    return(
      <div style={{ width: 180, height: "100%" }}>
        <Menu
          defaultSelectedKeys={['0']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {
            this.state.menus.map((item: any, index: any) => {
              return (
                <SubMenu
                  key={`sub${index+1}`}
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