import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  todos: [],
  isCompleted: false,
  editId: null,
  editInput: "",
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },

    setTodo: (state, action) => {
      state.todos = [...state.todos, {
        id: Date.now(),
        isCompleted: false,
        task: state.input,
      }]
    },

    setDeleteAll: (state, action) => {
      state.todos = [];
    },

    setEditTodoId: (state, action) => {
      state.editId = action.payload;
    },

    setEditedTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === state.editId ? { ...todo, task: action.payload } : todo);
      state.editId = null;
      state.editInput = "";
    },

    setToggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    },

    setEditInput: (state, action) => {
      state.editInput = action.payload;
    }
  }
})

export const { setInput, setTodo, setDeleteAll, setEditTodoId, setEditedTodo, setToggleTodo, setEditInput } = todoSlice.actions;

export const selectInput = (state) => { return state.todos.input };
export const selectTodos = (state) => { return state.todos.todos };
export const selectEditId = (state) => { return state.todos.editId };
export const selectEditInput = (state) => { return state.todos.editInput };

export default todoSlice.reducer;
