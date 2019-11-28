import * as React from 'react'
import * as styles from './myitem.scss'
import {Input, Icon} from 'antd'

class MyItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showInput: false,
    }
  }
  setStateShowInput = () => {
    let showInput = !this.state.showInput;
    this.setState({
      showInput,
    })
  }
  iconClick = () => {
    this.setStateShowInput()
  }
  inputBlur = () => {
    this.setStateShowInput();
    this.props.inputBlur();
  }
  render() {
    const {value = '暂无', iconfont = '', inputChange} = this.props;
    return (
      <div className={styles.item}><i className={`iconfont ${iconfont}`}></i>
        {!this.state.showInput ? 
          <>
          <span>{value}</span>
          <Icon className={styles.editIcon} type="edit" theme="filled" onClick={this.iconClick} />
          </>: null 
        }
        {
          this.state.showInput ? 
          <Input className={styles.w240} placeholder="请输入..." value={value} onChange={inputChange} onBlur={this.inputBlur} /> : null
        }        
      </div>
    )
  }
}

export default MyItem;