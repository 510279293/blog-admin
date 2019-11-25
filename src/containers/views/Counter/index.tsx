import React from 'react';
import AddTodo from './Todo/AddTodo';
import VisibleTodoList from './Todo/VisibleTodoList';
import {Provider} from 'react-redux';
import todoApp from '@store/reducers';
import {createStore} from 'redux';
let store = createStore(todoApp);

const Counter = () => (
  <Provider store={store}>
    <AddTodo />
    <VisibleTodoList />
  </Provider>
)

export default Counter;