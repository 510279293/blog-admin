import todos from './todos';
import visibilityFilter from './visibilityFilter';
import userInfo from './userInfo';
import myTodos from './text';
import {combineReducers } from 'redux'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  userInfo,
  myTodos
})

export default todoApp;