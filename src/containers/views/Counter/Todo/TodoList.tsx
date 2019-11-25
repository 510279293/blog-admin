import React from 'react';
import Todo from './Todo';

interface Iprop {
  todos: any;
  onTodoClick: any;
}

const TodoList  = (prop: Iprop) => (
  <ul>
    {
      prop.todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => prop.onTodoClick(todo.id)} />
      ))
    }
  </ul>
)
export default TodoList;
