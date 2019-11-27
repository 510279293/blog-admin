import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import { Avatar, Menu, Dropdown, Icon } from 'antd'
class Top extends ComponentExt{
  constructor(props){
    super(props);
  }
  render(){
    console.log('this.props',this.props);
    const {userName, onMenuClick} = this.props;
    const menu = (
      <Menu onClick={onMenuClick}>
        <Menu.Item key="1">退出登录</Menu.Item>
      </Menu>
    )
    return(
      <div className={styles.home_top}>
  <div className={styles.moveBox}><marquee direction="right" scrollamount="3">welcome, {userName}</marquee></div>
        <div className={styles.right}>
          <Avatar icon="user" style={{marginRight: '12px' }} />
          <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
            <a className="ant-dropdown-link" href="#/login">
              {userName} <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default Top