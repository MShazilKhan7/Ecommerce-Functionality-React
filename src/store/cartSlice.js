//HOW TO CREATE A SLICE

import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // what things you want to do is defined inside reducers.
    // all the actions are present here!!!
    reducers: {
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
            return state.filter((product)=>product.id!=action.payload)
        }
    }
})

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;