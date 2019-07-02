import * as React from 'react'
import {Button} from 'antd'

import * as styles from './index.scss'
import {ComponentExt} from '@utils/reactExt'

class Test extends ComponentExt{
  showMsg = () => {
    this.$message.success('这是一个通知')
  }
  render(){
    return(<div className="test">
      <Button onClick={this.showMsg} type="primary">test</Button>
      </div>)
  }
}

export default Test