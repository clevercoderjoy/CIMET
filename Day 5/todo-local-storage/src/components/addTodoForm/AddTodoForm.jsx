import { useContext } from "react";
import "./addTodoForm.css";
import { TaskContext } from "../../context/TaskContext";

const AddTodoForm = () => {
  const { handleFormSubmission } = useContext(TaskContext);

  return (
    <>
      <div className="addTaskFormContainer">
        <form onSubmit={handleFormSubmission}>
          <input type="text" className="addTaskIp" placeholder="Add Task" autoFocus required />
          <button className="addTaskBtn btn">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddTodoForm;
