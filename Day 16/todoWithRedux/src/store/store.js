import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducer from "../slice/TodoSlice"

export const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
  },
})