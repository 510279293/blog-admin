import * as React from 'react'
import * as styles from './index.scss'
import MyItem from './cpnts/myItem';
import MyUpload from '@components/Upload';
import {connect} from 'react-redux';
import {setUserInfo} from '@store/actions/userInfo';
import {updateUserInfo} from '@api/index';
class Self extends React.Component{
  constructor(props){
    super(props);
    this.inputBlur = this.inputBlur.bind(this);
  }
  componentDidMount(){
  }
 inputChange(type,e){
    const { value } = e.target;
    this.props.setUserInfo({
      [type]: value
    })
  }
  async inputBlur(){
    // console.log(this.props)
    const res = updateUserInfo(this.props.userInfo)
  }
  render(){
    const {job_desc,hobby,quotes,location,share} = this.props.userInfo;
    return(<div className={styles.myinfo}>
      <dl>
        <dt><MyUpload /></dt>
      </dl>
      <MyItem iconfont="iconzhiye" value={job_desc} inputChange={this.inputChange.bind(this,'job_desc')} inputBlur={this.inputBlur} />
      <MyItem iconfont="iconlike-1" value={hobby} inputChange={this.inputChange.bind(this,'hobby')} inputBlur={this.inputBlur} />
      <MyItem iconfont="iconfenxiang" value={share} inputChange={this.inputChange.bind(this,'share')} inputBlur={this.inputBlur} />
      <MyItem iconfont="iconqianming" value={quotes} inputChange={this.inputChange.bind(this,'quotes')} inputBlur={this.inputBlur} />
      <MyItem iconfont="iconiconfront-" value={location} inputChange={this.inputChange.bind(this,'location')} inputBlur={this.inputBlur} />
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
