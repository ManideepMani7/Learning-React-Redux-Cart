import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from './slices/AddToCartSlice';
import productSliceReducer from './slices/productSlice';

export const store = configureStore({
    reducer: {
        cartItems: addToCartReducer,
        products: productSliceReducer
    },
})


//Sync cart to localStorage
store.subscribe(()=>{
    const {cartItems} = store.getState();
    localStorage.setItem("cart",JSON.stringify(cartItems));

})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch