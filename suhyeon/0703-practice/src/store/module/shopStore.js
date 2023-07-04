import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const shopSlice = createSlice({
    name : 'shop',
    initialState,
    reducers : {
        addToCart : (state,action) => {
            return (state = [...state,action.payload])
        },
        removeFromCart : (state,action) => {
            const {cartItem ,id} = action.payload;
            return (state = cartItem.filter((item,index) => index !== id))
        }
    }
})

export const { addToCart , removeFromCart} = shopSlice.actions;
export default shopSlice.reducer