import React from 'react';

interface Iprops {
  onClick: any;
  completed: Boolean;
  text: String;
}

const Todo = (prop: Iprops) => (
  <li 
    onClick={prop.onClick}
    style={{
      textDecoration: prop.completed ? 'line-through' : 'none'
    }}
  >
    {prop.text}
  </li>
)

export default Todo;