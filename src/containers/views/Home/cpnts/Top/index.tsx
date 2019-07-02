import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import { Avatar, Menu, Dropdown, Icon } from 'antd'

const menu = (
  <Menu>
    <Menu.Item key="1">退出登录</Menu.Item>
  </Menu>
)

class Top extends ComponentExt{
  render(){
    return(
      <div className={styles.home_top}>
        <div className={styles.moveBox}><marquee direction="right" scrollamount="3">topdshjkd</marquee></div>
        <div className={styles.right}>
          <Avatar icon="user" style={{marginRight: '12px' }} />
          <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
            <a className="ant-dropdown-link" href="#">
              Click me <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default Top