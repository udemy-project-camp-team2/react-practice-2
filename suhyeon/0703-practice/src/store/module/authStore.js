import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogined : false
}

const authSlice = createSlice({
    name : 'auth',
    initialState : initialState,
    reducers : {
        login : (state) => {
            state.isLogined = true
        },
        logout : (state) => {
            state.isLogined = false
        }
    }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer