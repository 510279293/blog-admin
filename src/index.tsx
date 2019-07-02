import * as React from 'react'
import * as ReactDOm from 'react-dom'
import {configure} from 'mobx'
import {Provider} from 'mobx-react'
import 'normalize.css' // normalize.css 样式格式化
import 'antd/dist/antd.less' // antd 样式库
import * as store from './store'
import App from '@shared/App'

configure({enforceActions: 'observed'})

const render = () => {
  ReactDOm.render(
    <Provider {...store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  )
}
render()
