import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectInput, setDeleteAll, setInput, setTodo } from '../slice/TodoSlice';

const TodoForm = () => {
  const input = useSelector(selectInput);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setTodo());
    dispatch(setInput(""));
  }

  return (
    <form onSubmit={handleFormSubmit} className='border-2 border-black p-4 m-4 flex flex-col items-center justify-center'>
      <div className="inputContainer font-bold flex items-start gap-3 flex-col justify-center border-2 border-black p-4">
        <label htmlFor="add-task" className='text-center mx-auto'>Add Task</label>
        <input
          className='p-4 text-center border-2 border-black'
          type="text"
          id="add-task"
          autoFocus
          required
          value={input}
          onChange={(e) => dispatch(setInput(e.target.value))}
        />
      </div>
      <div className="submitBtn m-4w-1/12 text-center font-bold flex w-full pt-4 justify-center gap-10">
        <button id="submit" type='submit' className='border-2 border-black p-2 w-full'>Add</button>
        <button id="button" type='submit' className='border-2 border-black p-2 w-full' onClick={() => dispatch(setDeleteAll())}>Delete All</button>
      </div>
    </form>
  )
}

export default TodoForm