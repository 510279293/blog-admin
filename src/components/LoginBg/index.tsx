import * as React from 'react'
import Dotline from '@plugins/canvas-particle.js'
import * as styles from './index.scss'
class LoginBg extends React.Component{
  constructor(props: any){
    super(props)
  }
  componentDidMount(){
    let Win_W = window.innerWidth
    let Win_H = window.innerHeight
    new Dotline({
				dom:'mydiv',//画布id
				cw: Win_W,//画布宽
				ch: Win_H,//画布高
				ds: 200,//点的个数
				r: 0.5,//圆点半径
				cl:'#00C6D7',//粒子线颜色
				dis: 60 //触发连线的距离
			}).start()
  }
  render(){
    return(<div className={styles.long_bg}>
      <canvas id="mydiv"></canvas>
      <div className={styles.posi}>{this.props.children}</div>
    </div>)
  }
}

export default LoginBg