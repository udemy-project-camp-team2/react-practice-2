import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todoSlice = createSlice({
    name : 'todoList',
    initialState,
    reducers : {
        todoAdd : (state,action) => {
            state.push(action.payload);
        },
        toggleTodo : (state,action) => {
            const todo = state.find((todo) => todo.id === action.payload)
            if(todo) {
                todo.completed = !todo.completed
            }
        },
    }
})

export const {todoAdd, toggleTodo} = todoSlice.actions
export default todoSlice.reducer