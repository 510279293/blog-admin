import * as React from 'react'
import * as styles from './index.scss'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {ComponentExt} from '@utils/reactExt';
import Top from './cpnts/Top';
import HomeNav from './cpnts/Nav';
import { Layout } from 'antd';
import {logout, getUserInfo } from '@api/index';
import {setUserInfo} from '@store/actions/userInfo';
const { Header, Footer, Sider, Content } = Layout
@withRouter
class Home extends ComponentExt{
  constructor(props: any){
    super(props);
    this.logout = this.logout.bind(this)
  }
  async componentDidMount() {
    const {data} = await getUserInfo();
    this.props.dispatchUserInfo(data);
    console.log(this.props)
  }
  logout(){
    this.props.history.push('/login')
    logout();
  }
  render() {
    const {userName} = this.props.userInfo;
    return (
      <Layout className={styles.home}>
        <Header style={{ height: '50px', padding: '0 20px', lineHeight: '50px'}}>
          <Top userName={userName} onMenuClick={this.logout} />
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

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchUserInfo: (user) => {
      dispatch(setUserInfo(user))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);