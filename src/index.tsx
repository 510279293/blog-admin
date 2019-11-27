import * as React from 'react'
import * as ReactDOm from 'react-dom'
import 'normalize.css' // normalize.css 样式格式化
import 'antd/dist/antd.less' // antd 样式库
import App from '@shared/App'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'; // 异步中间件
import todoApp from '@store/reducers';
import {createStore, applyMiddleware} from 'redux';
let store = createStore(todoApp, applyMiddleware(thunk));

const render = () => {
  ReactDOm.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.querySelector('#app')
  )
}

render();
