import { useContext } from "react";
import "./todos.css";
import { TaskContext } from "../../context/TaskContext";

const Todos = () => {
  const { todos, toggleTodo, editTodo, deleteTodo, saveTodo, editTaskName, setEditTaskName, editingId, filteredTodos } = useContext(TaskContext);

  return (
    <>
      <div className="todosContainer">
        {
          filteredTodos.map((todo) =>
            <div className="task" key={todo.taskId}>
              <div className="taskContent">
                <div className="taskStatus">
                  <input type="checkbox" value={todo.taskStatus} checked={todo.taskStatus ? true : false} onChange={() => { toggleTodo(todo.taskId) }} />
                </div>
                {
                  editingId === todo.taskId ?
                    <input className="editTaskIp" type="text" value={editTaskName} onChange={(e) => setEditTaskName(e.target.value)} />
                    :
                    <div className="taskName">{todo.taskName}</div>
                }
                {
                  editingId === todo.taskId ?
                    <button className="taskSave btn" onClick={() => { saveTodo(todo.taskId) }}>Save</button> :
                    <button className="taskEdit btn" disabled={todo.taskStatus} onClick={() => { editTodo(todo.taskId) }}>Edit</button>
                }
                <button className="taskDelete btn" onClick={() => { deleteTodo(todo.taskId) }}>Delete</button>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Todos
