import { useContext } from "react";
import "./header.css";
import { TaskContext } from "../../context/TaskContext";

const Header = () => {
  const { filterTodos } = useContext(TaskContext);
  return (
    <>
      <div className="headerContainer">
        <h1 className="heading">To-Do List</h1>
        <div className="todoPages">
          <div className="todoPage" onClick={() => filterTodos("all")}>All Todos</div>
          <div className="todoPage" onClick={() => filterTodos("pending")}>Pending Todos</div>
          <div className="todoPage" onClick={() => filterTodos("completed")}>Completed Todos</div>
        </div>
      </div>
    </>
  )
}

export default Header
