import React from 'react'

const SingleTodo = ({ task, id, isCompleted }) => {

  return (
    <>
      <li className={`list-none ${isCompleted ? "line-through" : ""} flex justify-between m-4 border-2 border-black p-4 font-bold text-xl w-1/2 mx-auto`}>
        <span className='text-left'>{task}</span>
        <div className="buttons flex gap-10">
          <button>Edit</button>
          <button>{isCompleted ? "!Done" : "Done"}</button>
        </div>
      </li>
    </>
  )
}

export default SingleTodo
