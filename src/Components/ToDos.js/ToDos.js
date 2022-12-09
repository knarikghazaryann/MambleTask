import React from 'react'
import Todo from '../Todo/Todo';

const ToDos = ({todos, dispatch, hideCompleted}) => {
  return (
    <div>
        {todos.map((todo) => {
            return (
               <Todo key={todo.id} todo={todo} hideCompleted={hideCompleted} dispatch={dispatch} />
            )
        })}
    </div>
  )
}

export default ToDos;