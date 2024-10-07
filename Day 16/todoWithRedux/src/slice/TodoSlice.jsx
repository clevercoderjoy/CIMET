import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  todo: [],
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
    setTodos: (state, action) => {
      state.todo = [...state.todo, {
        id: Date.now(),
        isCompleted: false,
        task: state.input,
      }]
    }
  }
})

export const { setInput, setTodos } = todoSlice.actions;
export const selectInput = (state) => { return state.todos.input };
export const selectTodos = (state) => { return state.todos.todo };
export default todoSlice.reducer;
