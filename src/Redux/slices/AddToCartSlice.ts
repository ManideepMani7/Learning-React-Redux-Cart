import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./productSlice";


const cart = localStorage.getItem("cart");
export const initialState: Product[] = cart ? JSON.parse(cart) : [];

const addToCartSlice = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
        addItem: (state: Product[], action: PayloadAction<Product>) => {
            const newItem: Product = { ...action.payload, quantity: action.payload.quantity ?? 1 };
            state.push(newItem);
            // localStorage.setItem("cart",JSON.stringify(state)) // instead of this use subscribe 
        },
        removeItem: (state: Product[], action: PayloadAction<number>) => {
            const items = state.filter((item: Product) => item.id !== action.payload);
            // localStorage.setItem("cart",JSON.stringify(items));
            return items;
        },
        updateItem: (state: Product[], action: PayloadAction<Product>) => {
            const item = state.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        }
    }
})

export const { addItem, removeItem, updateItem } = addToCartSlice.actions;

export default addToCartSlice.reducer;