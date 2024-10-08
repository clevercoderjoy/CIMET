import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  todos: [],
  isCompleted: false,
  editId: null,
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
    setEditTodo: (state, action) => {
      // state.todos = state.todos.map((todo) => )
    }
  }
})

export const { setInput, setTodo, setDeleteAll } = todoSlice.actions;

export const selectInput = (state) => { return state.todos.input };
export const selectTodos = (state) => { return state.todos.todos };

export default todoSlice.reducer;
