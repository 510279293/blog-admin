import * as React from 'react'
import * as styles from './index.scss'
import {Input, Icon} from 'antd'
class Self extends React.Component{
  render(){
    const userInfo = {
      job_desc: '2334',
      hobby: 'dsfsfer',
      quotes: '34sdfsf',
      location: 'hz',
      sss: 'shenghuo',
    }
    return(<div className={styles.myinfo}>
      <dl>
        <dt><img src="src/assets/imgs/head.jpg" /></dt>
      </dl>
      <div className={styles.item}><i className="iconfont iconzhiye"></i>
      <span>{userInfo.job_desc}</span>
      <Icon className={styles.editIcon} type="edit" theme="filled" />
      <Input className={styles.w240} placeholder="请输入..." />
      </div>
      <div className={styles.item}><i className="iconfont iconlike-1"></i>
      <span>{userInfo.hobby}</span>
      <Icon className={styles.editIcon} type="edit" theme="filled" />
      <Input className={styles.w240} placeholder="请输入..." />
      </div>
      <div className={styles.item}><i className="iconfont iconfenxiang"></i>
      <span>{userInfo.sss}</span>
      <Icon className={styles.editIcon} type="edit" theme="filled" />
      <Input className={styles.w240} placeholder="请输入..." />
      </div>
      <div className={styles.item}><i className="iconfont iconqianming"></i>
      <span>{userInfo.quotes}</span>
      <Icon className={styles.editIcon} type="edit" theme="filled" />
      <Input className={styles.w240} placeholder="请输入..." />
      </div>
      <div className={styles.item}><i className="iconfont iconiconfront-"></i>
      <span>{userInfo.location}</span>
      <Icon className={styles.editIcon} type="edit" theme="filled" />
      <Input className={styles.w240} placeholder="请输入..." />
      </div>
    </div>)
  }
}

export default Self