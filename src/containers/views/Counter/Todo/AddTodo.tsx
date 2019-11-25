import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '@store/actions';

let AddTodo = ({dispatch}) => {
  let input
  
  return (<div>
    <form
      onSubmit={e => {
        e.preventDefault()
        if(!input.value.trim()){
          return
        }
        console.log(dispatch(addTodo(input.value)))
        input.value = ''
      }}
    >
      <input
        ref={node => {
          input = node
        }} 
      />
      <button type="submit">
          add Todo
      </button>
    </form>
  </div>)
}

AddTodo = connect()(AddTodo);
export default AddTodo;