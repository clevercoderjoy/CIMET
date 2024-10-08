import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEditId, selectEditInput, setEditedTodo, setEditInput, setEditTodoId, setToggleTodo } from '../slice/TodoSlice';

const SingleTodo = ({ task, id, isCompleted }) => {
  const editId = useSelector(selectEditId);
  const dispatch = useDispatch();
  const editInput = useSelector(selectEditInput);

  return (
    <>
      <li className={`list-none ${isCompleted ? "line-through" : ""} flex justify-between m-4 border-2 border-black p-4 font-bold text-xl w-1/2 h-[5rem] mx-auto items-center`}>
        {
          id === editId ? (
            <input
              type="text"
              className='border-2 border-black p-2'
              autoFocus
              required
              value={editInput}
              onChange={(e) => dispatch(setEditInput(e.target.value))} />
          )
            : (
              <span className='text-left'>{task}</span>
            )
        }
        <div className="buttons flex gap-10">
          {
            editId === id ? (
              <button onClick={() => dispatch(setEditedTodo(editInput))} disabled={editInput.trim() !== "" ? false : true}>Save</button>
            )
              :
              (
                <button onClick={() => dispatch(setEditTodoId(id))} disabled={isCompleted ? true : false}>Edit</button>
              )
          }
          <button onClick={() => dispatch(setToggleTodo(id))} disabled={id === editId ? true : false}>{isCompleted ? "!Done" : "Done"}</button>
        </div>
      </li>
    </>
  )
}

export default SingleTodo
