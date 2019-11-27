let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const addList = item => {
  //  return (dispatch, state){
  //    return setTimeout(() => {
  //     dispatch({
  //       type: 'ADD_ITEM',
  //       item,
  //     })
  //    },1000)
  //  }
  return {
    type: 'ADD_ITEM',
    item,
  }
}