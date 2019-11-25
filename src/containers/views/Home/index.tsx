import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import Top from './cpnts/Top'
import HomeNav from './cpnts/Nav'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

class Home extends ComponentExt{
  constructor(props: any){
    super(props);
  }
  logout(){
    console.log(this,this.props)
  }
  render() {
    return (
      <Layout className={styles.home}>
        <Header style={{ height: '50px', padding: '0 20px', lineHeight: '50px'}}>
          <Top userName="zqs" onMenuClick={this.logout} />
        </Header>
        <Layout className={styles.warp}>
          <Sider width={180}><HomeNav {...this.props} /></Sider>
          <Content className={styles.container}>
            <div className={styles.back_f}>{this.props.children}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home