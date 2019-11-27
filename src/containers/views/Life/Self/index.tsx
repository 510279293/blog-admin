import * as React from 'react'
import * as styles from './index.scss'
import MyItem from './cpnts/myItem';
import MyUpload from '@components/Upload';
import {connect} from 'react-redux';
import {setUserInfo} from '@store/actions/userInfo';
class Self extends React.Component{
  componentDidMount(){
    this.props.setUserInfo({
      job_desc: '2334',
      hobby: 'dsfsfer',
      quotes: '34sdfsf',
      location: 'hz',
      share: 'shenghuo',
    })
  }
  inputChange(type,e){
    const { value } = e.target;
    this.props.setUserInfo({
      [type]: value
    })
  }
  render(){
    const {job_desc,hobby,quotes,location,share} = this.props.userInfo;
    return(<div className={styles.myinfo}>
      <dl>
        <dt><MyUpload /></dt>
      </dl>
      <MyItem iconfont="iconzhiye" value={job_desc} inputChange={this.inputChange.bind(this,'job_desc')} />
      <MyItem iconfont="iconlike-1" value={hobby} inputChange={this.inputChange.bind(this,'hobby')} />
      <MyItem iconfont="iconfenxiang" value={share} inputChange={this.inputChange.bind(this,'share')} />
      <MyItem iconfont="iconqianming" value={quotes} inputChange={this.inputChange.bind(this,'quotes')} />
      <MyItem iconfont="iconiconfront-" value={location} inputChange={this.inputChange.bind(this,'location')} />
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (users) => {
      dispatch(setUserInfo(users))
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Self)
