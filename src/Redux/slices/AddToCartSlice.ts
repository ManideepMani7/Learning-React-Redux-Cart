import { createSlice } from "@reduxjs/toolkit";

export interface IAddToCartCount{
    value : number;
};

export const initialState:IAddToCartCount = {
    value:0
}

const addToCartSlice = createSlice({
    name:"addToCart",
    initialState,
    reducers:{
        addItem : (state:IAddToCartCount) => {
            state.value += 1;
        },
        removeItem :(state:IAddToCartCount) =>{
            if(state.value == 0){
                return;
            }
            state.value -= 1;
        }
    }
})

export const {addItem,removeItem} = addToCartSlice.actions;

export default addToCartSlice.reducer;