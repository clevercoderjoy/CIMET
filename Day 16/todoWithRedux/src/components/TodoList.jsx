import React from 'react'
import { selectTodos } from '../slice/TodoSlice'
import { useSelector } from 'react-redux';
import SingleTodo from './SingleTodo';

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <>

      <div className="todosContainer">
        {
          todos.map((todo) => <SingleTodo key={todo.id} {...todo} />)
        }
      </div>
    </>
  )
}

export default TodoList
