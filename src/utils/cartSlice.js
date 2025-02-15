import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state, action)=>{
            state.items.push(action.payload);
        },
        clearItems:(state,action)=>{
            //Redux toolkit says that either you mutate(change) the state or return a new State
            state.items.length=0;
//            return {items:[]};
        }
    }
})

export const {addItems, clearItems}=cartSlice.actions;
export default cartSlice.reducer;