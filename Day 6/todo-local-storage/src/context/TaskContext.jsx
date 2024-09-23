import { createContext, useEffect, useState } from "react";
import { nanoid } from 'nanoid';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [editingId, setEditingId] = useState(null);
  const [editTaskName, setEditTaskName] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    filterTodos(filterStatus);
  }, [todos, filterStatus])

  const filterTodos = (status) => {
    setFilterStatus(status);
    let filteredItems;
    if (status === "pending") {
      filteredItems = todos.filter((todo) => !todo.taskStatus);
    }
    else if (status === "completed") {
      filteredItems = todos.filter((todo) => todo.taskStatus);
    }
    else {
      filteredItems = todos;
    }
    setFilteredTodos(filteredItems);
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const newTask = {
      taskId: nanoid(),
      taskName: e.target.children[0].value,
      taskStatus: false,
    }
    setTodos((todos) => [newTask, ...todos]);
    e.target.children[0].value = "";
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => todo.taskId === id ? { ...todo, taskStatus: !todo.taskStatus } : todo);
    setTodos(updatedTodos);
  }

  const editTodo = (id) => {
    const findTodo = todos.find((todo) => todo.taskId === id);
    setEditingId(findTodo.taskId);
    setEditTaskName(findTodo.taskName);
  }

  const saveTodo = (id) => {
    const updatedTodos = todos.map((todo) => todo.taskId === id ? { ...todo, taskName: editTaskName } : todo);
    setTodos(updatedTodos);
    setEditingId(null);
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.taskId !== id);
    setTodos(updatedTodos);
  }

  return (
    <TaskContext.Provider value={{ todos, setTodos, toggleTodo, editTodo, deleteTodo, saveTodo, editTaskName, editingId, setEditTaskName, handleFormSubmission, filteredTodos, filterTodos }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskProvider };