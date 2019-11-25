import todos from './todos';
import visibilityFilter from './visibilityFilter';
import userInfo from './userInfo';
import {combineReducers } from 'redux'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  userInfo
})

export default todoApp;