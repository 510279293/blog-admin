import * as React from 'react'
import {observer,inject} from 'mobx-react'
import {hot} from 'react-hot-loader'
import {ComponentExt} from '@utils/reactExt'

interface IProps{
  globalStore?: IGlobalStore.GlobalStore
}

@hot(module)
@inject('globalStore')
@observer
class Counter extends ComponentExt<IProps>{
  increase = () => {
    this.props.globalStore.increase(1)
  }
  render(){
    const {num} = this.props.globalStore
    return(
      <div>
        <div>{num}</div>
        <button onClick={this.increase}>增加++</button>
        <button>减少</button>
      </div>
    )
  }
}

export default Counter